"use strict";

var session = require('express-session');

var MongoStore = require('connect-mongo');

var express = require('express');

var passport = require('passport');

var app = express();

var http = require('http').Server(app);

var flash = require('express-flash');

var mongoose = require('mongoose');

var path = require('path');

var cors = require('cors');

var loginRoute = require("./routes/login");

var userRoute = require("./routes/users");

var roomRoote = require("./routes/rooms");

var avatarRoute = require("./routes/avatar");

var demoRoute = require("./routes/demo");

var expressLayouts = require('express-ejs-layouts');

var initializePassport = require('./utils/passport-intialize');

var fileUpload = require('express-fileupload');

var router = require('./routes/index');

var socketIO = require('./socketIO/socket');

require('dotenv/config'); //make our public folder static


app.use(express["static"](path.join(__dirname, 'public'))); //////////////////initialize socket io//////////////////////

var io = require('socket.io')(http, {
  cors: {
    origins: ['http://localhost:5000', 'https://chat-away-ang.herokuapp.com']
  }
});

socketIO(io); /////////////////////////////////////////////////////////////////
//cors to allow request from the front end

app.use(cors({
  credentials: true,
  origin: ['http://localhost:5000', 'https://chat-away-ang.herokuapp.com']
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
  store: MongoStore.create({
    mongoUrl: process.env.DB_CONNECTION
  }),
  cookie: {
    secure: false,
    //will change this when i will deploy
    maxAge: 24 * 60 * 60 * 1000
  }
})); //file upload

app.use(fileUpload()); //initialize passport and middleware

initializePassport(passport);
app.use(passport.initialize());
app.use(passport.session()); //Defining the routes 

app.use("/", loginRoute);
app.use("/", userRoute);
app.use("/", roomRoote);
app.use("/", avatarRoute);
app.use("/", demoRoute); //catch any undefined routes

app.use("/*", function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
}); //start the application

var PORT = process.env.PORT || 5000;
http.listen(PORT, function () {
  console.log("server started on port: " + PORT); //connect to db

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