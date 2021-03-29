"use strict";

var _require = require('../utils/customRooms'),
    get = _require.get;

var _require2 = require('../utils/handleRooms'),
    addUser = _require2.addUser,
    deleteUser = _require2.deleteUser,
    getRooms = _require2.getRooms;

var _require3 = require('../utils/helpers'),
    saveComment = _require3.saveComment,
    customRoom = _require3.customRoom,
    add = _require3.add;

var socketIO = function socketIO(io) {
  io.on('connection', function (socket) {
    console.log('a user connected'); //a room for each user

    socket.on('userJoin', function (id) {
      socket.username = id;
      socket.join(id);
      get().forEach(function (rid) {
        socket.join(rid);
      });
      console.log('joined');
      getRooms().forEach(function (i) {
        socket.to(i).emit('joined', {
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
    }); //join custom room in real time

    socket.on('accept', function (roomId) {
      socket.join(roomId);
    }); //custom room

    socket.on('newRoom', function (data) {
      customRoom(data.name, data.members).then(function (room) {
        var newRoom = {
          name: room.name,
          id: room._id,
          custom: true,
          avatar: room.url
        }; //to all

        data.members.forEach(function (member) {
          io.to(member).emit('invite', newRoom);
        });
      })["catch"](function (err) {
        console.log(err);
      });
    }); //add user

    socket.on('add', function (data) {
      add(data.uid, data.rid).then(function (name) {
        console.log(name);
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
  });
};

module.exports = socketIO;