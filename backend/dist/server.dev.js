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

var expressLayouts = require('express-ejs-layouts');

var initializePassport = require('./utils/passport-intialize');

var router = require('./routes/index');

var _require = require('./utils/handleRooms'),
    addUser = _require.addUser,
    deleteUser = _require.deleteUser,
    getRooms = _require.getRooms;

var _require2 = require('./utils/helpers'),
    saveComment = _require2.saveComment;

var _require3 = require('./socketIO/socket'),
    handleIO = _require3.handleIO;

var _require4 = require('passport'),
    authorize = _require4.authorize;

require('dotenv/config'); //make our public folder static


app.use(express["static"](path.join(__dirname, 'public'))); //initialize socket io

var io = require('socket.io')(http, {
  cors: {
    origins: ['https://chat-app-ang.herokuapp.com']
  }
});

io.on('connection', function (socket) {
  console.log('a user connected'); //a room for each user

  socket.on('joinRoom', function (id) {
    socket.username = id;
    socket.join(id);
    socket.join(process.env.PUBLIC_ROOM);
    getRooms().forEach(function (i) {
      io.to(i).emit('joined', {
        msg: 'some 1 joined',
        id: id
      });
    });
    addUser(id);
  }); //a message received save and emit to receiver

  socket.on('message', function (msg) {
    saveComment(msg).then(function () {
      socket.to(msg.receiver).emit('message', {
        message: msg
      });
    })["catch"](function (err) {
      console.log(err);
    });
  }); //notify the rest

  socket.on('disconnect', function () {
    console.log('disconnected');
    deleteUser(socket.username);
    getRooms().forEach(function (i) {
      io.to(i).emit('left', {
        msg: 'some 1 left',
        id: socket.username
      });
    });
  });
}); //cors to allow request from the front end

app.use(cors({
  credentials: true,
  origin: ['https://chat-app-ang.herokuapp.com']
}));
app.enable('trust proxy');
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json()); // EJS

app.use(expressLayouts);
app.set('view engine', 'ejs');
var options = {
  table: 'myapp-sessions',
  // Optional ProvisionedThroughput params, defaults to 5
  readCapacityUnits: 25,
  writeCapacityUnits: 25
}; //enable flash

app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  httpOnly: false,
  cookie: {
    secure: false
  }
})); //initialize passport and middleware

initializePassport(passport);
app.use(passport.initialize());
app.use(passport.session()); //Defining the routes 

app.use("/", loginRoute);
app.use("/", userRoute);
app.use("/", roomRoote); //catch any undefined routes

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