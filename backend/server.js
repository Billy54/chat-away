"use strict";

const express = require('express');
const passport = require('passport');
const app = express();
const http = require('http').Server(app);
const flash = require('express-flash');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const mainRoute = require("./routes/index");
const loginRoute = require("./routes/login");
const userRoute = require("./routes/users");
const roomRoote = require("./routes/rooms")
const expressLayouts = require('express-ejs-layouts');
const initializePassport = require('./utils/passport-intialize');
const router = require('./routes/index');
const {
    addUser,
    deleteUser,
    getRooms
} = require('./utils/handleRooms')
const {
    saveComment
} = require('./utils/helpers');
const {
    handleIO
} = require('./socketIO/socket');
const {
    authorize
} = require('passport');

require('dotenv/config');


//initialize socket io
const io = require('socket.io')(http, {
    cors: {
        origins: ['http://localhost:4200', 'https://chat-away-online.herokuapp.com']
    }
});
io.on('connection', (socket) => {
    console.log('a user connected');

    //a room for each user
    socket.on('joinRoom', (id) => {
        socket.username = id;
        addUser(id);
        socket.join(id);
        socket.join(process.env.PUBLIC_ROOM);
        getRooms().forEach(i => {
            io.to(i).emit('joined', {
                msg: 'some 1 joined',
                id: id
            });
        });
    });

    //a message received save and emit to receiver
    socket.on('message', (msg) => {
        saveComment(msg).then(() => {
            socket.to(msg.receiver).emit('message', {
                message: msg
            });
        }).catch(err => {
            console.log(err);
        });
    });

    //notify the rest
    socket.on('disconnect', () => {
        console.log('disconnected');
        deleteUser(socket.username);
        getRooms().forEach(i => {
            io.to(i).emit('left', {
                msg: 'some 1 left',
                id: socket.username
            });
        });
    });
});

//cors to allow request from the front end
app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200', 'https://chat-away-online.herokuapp.com']
}));
app.enable('trust proxy');

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

var options = {

    table: 'myapp-sessions',

    // Optional ProvisionedThroughput params, defaults to 5
    readCapacityUnits: 25,
    writeCapacityUnits: 25
};

//enable flash
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    httpOnly: false,
    cookie: {
        secure: false,
        domain: 'https://chat-away-online.herokuapp.com'
    }
}));


//make our public folder static
app.use(express.static(path.join(__dirname, 'public')));

//initialize passport and middleware
initializePassport(passport);
app.use(passport.initialize());
app.use(passport.session());

//Defining the routes 
app.use("/", mainRoute);
app.use("/", loginRoute);
app.use("/", userRoute);
app.use("/", roomRoote);

//start the application
const PORT = process.env.PORT || 5000;
http.listen(PORT, () => {
    console.log("server started on port 5000");
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