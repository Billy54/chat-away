"use strict";

var express = require('express');

var passport = require('passport');

var app = express();

var http = require('http').Server(app);

var flash = require('express-flash');

var session = require('express-session');

var mongoose = require('mongoose');

var path = require('path');

var cors = require('cors');

var loginRoute = require("./routes/login");

var userRoute = require("./routes/users");

var roomRoote = require("./routes/rooms");

var avatarRoute = require("./routes/avatar");

var expressLayouts = require('express-ejs-layouts');

var initializePassport = require('./utils/passport-intialize');

var fileUpload = require('express-fileupload');

var router = require('./routes/index');

var _require = require('./utils/handleRooms'),
    addUser = _require.addUser,
    deleteUser = _require.deleteUser,
    getRooms = _require.getRooms;

var _require2 = require('./utils/helpers'),
    saveComment = _require2.saveComment,
    customRoom = _require2.customRoom;

var _require3 = require('passport'),
    authorize = _require3.authorize;

require('dotenv/config'); //make our public folder static


app.use(express["static"](path.join(__dirname, 'public'))); //////////////////initialize socket io//////////////////////

var io = require('socket.io')(http, {
  cors: {
    origins: ['http://localhost:4200', 'https://chat-app-ang.herokuapp.com']
  }
});

io.on('connection', function (socket) {
  console.log('a user connected'); //a room for each user

  socket.on('userJoin', function (id) {
    socket.username = id;
    socket.join(id);
    socket.join(process.env.PUBLIC_ROOM);
    console.log('joined');
    getRooms().forEach(function (i) {
      io.to(i).emit('joined', {
        id: id,
        alive: true
      });
    });
    addUser(id);
  }); //a message received save and emit to receiver(s) - emmiter

  socket.on('message', function (msg) {
    saveComment(msg).then(function () {
      socket.to(msg.receiver).emit('message', {
        message: msg
      });
    })["catch"](function (err) {
      console.log(err);
    });
  }); //join custom room 

  socket.on('accept', function (roomId) {
    socket.join(roomId);
  }); //custom room

  socket.on('newRoom', function (data) {
    customRoom(data.name, data.members).then(function (room) {
      var newRoom = {
        name: room.name,
        id: room.roomId,
        custom: room.custom,
        avatar: room.url
      };
      data.members.forEach(function (member) {
        io.to(member).emit('invite', newRoom);
      });
      console.log(room);
    })["catch"](function (err) {
      console.log(err);
    });
  }); //notify the rest

  socket.on('disconnect', function () {
    console.log('disconnected');
    deleteUser(socket.username);
    getRooms().forEach(function (i) {
      io.to(i).emit('left', {
        id: socket.username,
        alive: false
      });
    });
  });
}); /////////////////////////////////////////////////////////////////
//cors to allow request from the front end

app.use(cors({
  credentials: true,
  origin: ['http://localhost:4200', 'https://chat-app-ang.herokuapp.com']
}));
app.enable('trust proxy'); /// headers will only be of type app/json

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json()); // EJS , not needed for this project

app.use(expressLayouts);
app.set('view engine', 'ejs'); //enable flash

app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  httpOnly: false,
  cookie: {
    secure: false
  }
})); //file upload

app.use(fileUpload()); //initialize passport and middleware

initializePassport(passport);
app.use(passport.initialize());
app.use(passport.session()); //Defining the routes 

app.use("/", loginRoute);
app.use("/", userRoute);
app.use("/", roomRoote);
app.use("/", avatarRoute); //catch any undefined routes

app.use("/*", function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
}); //start the application

var PORT = process.env.PORT || 5000;
http.listen(PORT, function () {
  console.log("server started on port 5000"); //connect to db

  mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, function () {
    console.log("connected to db!");
  }, function (err) {
    console.log("could not connect");
  });
});
module.exports = router;