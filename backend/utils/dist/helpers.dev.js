"use strict";

var mongoose = require('mongoose');

var User = require('../models/User');

require('dotenv/config');

var jwt = require("jsonwebtoken");

var Room = require('../models/Room');

var ObjectId = require('mongodb').ObjectID;

var _require = require('path'),
    resolve = _require.resolve;

module.exports = {
  //encode sensitive data before sending to the client for storage
  encodeData: function encodeData(data) {
    return jwt.sign({
      name: data.name,
      email: data.email,
      id: data._id,
      avatar: data.avatar
    }, process.env.SESSION_SECRET, {
      expiresIn: '3600s'
    });
  },
  saveComment: function saveComment(comment) {
    var id1, id2;
    return regeneratorRuntime.async(function saveComment$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id1 = comment.sender + comment.receiver;
            id2 = comment.receiver + comment.sender;

            if (comment.receiver == process.env.PUBLIC_ROOM) {
              id1 = process.env.PUBLIC_ROOM;
              id2 = process.env.PUBLIC_ROOM;
            }

            _context.next = 5;
            return regeneratorRuntime.awrap(Room.updateOne({
              $or: [{
                roomId: id1
              }, {
                roomId: id2
              }]
            }, {
              $push: {
                comments: comment
              }
            })["catch"](function (err) {
              console.log(err);
            }));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  //update user avatar as well as all the comments in the rooms
  updateAvatar: function updateAvatar(url, email) {
    return regeneratorRuntime.async(function updateAvatar$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(User.findOneAndUpdate({
              email: email
            }, {
              $set: {
                avatar: url
              }
            }).then(function _callee(user) {
              var query, updateDocument, options;
              return regeneratorRuntime.async(function _callee$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      query = {};
                      updateDocument = {
                        $set: {
                          "comments.$[comment].url": url
                        }
                      };
                      options = {
                        arrayFilters: [{
                          "comment.sender": String(user._id)
                        }]
                      };
                      _context2.next = 5;
                      return regeneratorRuntime.awrap(Room.updateMany(query, updateDocument, options)["catch"](function (er) {
                        console.log(er);
                      }));

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              });
            }));

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    });
  },
  customRoom: function customRoom(name, members) {
    var newRoom;
    return regeneratorRuntime.async(function customRoom$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            newRoom = new Room({
              name: name,
              custom: true
            });
            newRoom.roomId = newRoom._id;
            _context5.next = 4;
            return regeneratorRuntime.awrap(newRoom.save().then(function _callee2(room) {
              return regeneratorRuntime.async(function _callee2$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return regeneratorRuntime.awrap(User.updateMany({
                        _id: {
                          $in: members
                        }
                      }, {
                        $push: {
                          rooms: room.roomId
                        }
                      }).then(function () {
                        return newRoom;
                      })["catch"](function (er) {
                        console.log(er);
                      }));

                    case 2:
                      return _context4.abrupt("return", _context4.sent);

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              });
            })["catch"](function (er) {
              console.log(er);
            }));

          case 4:
            return _context5.abrupt("return", _context5.sent);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    });
  }
};