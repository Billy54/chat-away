"use strict";
const session = require('express-session');
const MongoStore = require('connect-mongo');
const express = require('express');
const passport = require('passport');
const app = express();
const http = require('http').Server(app);
const flash = require('express-flash');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const loginRoute = require("./routes/login");
const userRoute = require("./routes/users");
const roomRoote = require("./routes/rooms");
const avatarRoute = require("./routes/avatar");
const demoRoute = require("./routes/demo");
const expressLayouts = require('express-ejs-layouts');
const initializePassport = require('./utils/passport-intialize');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const socketIO = require('./socketIO/socket');


require('dotenv/config');
//make our public folder static
app.use(express.static(path.join(__dirname, 'public')));

//////////////////initialize socket io//////////////////////
const io = require('socket.io')(http, {
    cors: {
        origins: ['http://localhost:4200', 'https://chat-away-ang.herokuapp.com', 'http://localhost']
    }
});
socketIO(io);
/////////////////////////////////////////////////////////////////

//cors to allow request from the front end
app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200', 'https://chat-away-ang.herokuapp.com', 'http://localhost']
}));
app.enable('trust proxy');

/// headers will only be of type app/json
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// EJS , not needed for this project
app.use(expressLayouts);
app.set('view engine', 'ejs');

//enable flash
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
        secure: true, //will change this when i will deploy
        maxAge: 24 * 60 * 60 * 10000
    }
}));

//file upload
app.use(fileUpload());

//initialize passport and middleware
initializePassport(passport);
app.use(passport.initialize());
app.use(passport.session());

//Defining the routes 
app.use("/", loginRoute);
app.use("/", userRoute);
app.use("/", roomRoote);
app.use("/", avatarRoute);
app.use("/", demoRoute);
//catch any undefined routes
app.use("/*", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
//start the application
const PORT = process.env.PORT || 5000;
http.listen(PORT, () => {
    console.log("server started on port: " + PORT);
    //connect to db
    mongoose.connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log("connected to db!");
    }, (err) => {
        console.log("could not connect");
    });
});

module.exports = router;