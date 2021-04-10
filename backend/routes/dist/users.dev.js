"use strict";

var express = require('express');

var router = express.Router();

var User = require('../models/User');

var path = require('path');

var Room = require('../models/Room');

var _require = require('../utils/handleRooms'),
    online = _require.online;

var _require2 = require("../utils/authentication"),
    ensureAuthenticated = _require2.ensureAuthenticated;

require('dotenv/config');

var reqPath = path.join(__dirname, '../');
router.get("/users", ensureAuthenticated, function (req, res) {
  res.sendFile(reqPath + '/public/index.html');
}); //get all users

router.get("/usersALL", ensureAuthenticated, function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(User.find({}).then(function _callee(users) {
            var userDto, rooms;
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    userDto = [];
                    rooms = [];
                    users.forEach(function (user) {
                      if (req.user.email != user.email) {
                        userDto.push({
                          name: user.name,
                          email: user.email,
                          id: user._id,
                          alive: online(String(user._id)),
                          avatar: user.avatar
                        });
                      } else {
                        rooms = user.rooms;
                      }
                    });
                    _context.next = 5;
                    return regeneratorRuntime.awrap(Room.find({
                      _id: {
                        $in: rooms
                      }
                    }).then(function (rooms) {
                      rooms.forEach(function (room) {
                        userDto.push({
                          name: room.name,
                          id: room._id,
                          custom: true,
                          avatar: room.url
                        });
                      });
                      res.status(200).json({
                        users: userDto
                      });
                    })["catch"](function (err) {
                      res.status(500).json({
                        err: err
                      });
                    }));

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            });
          })["catch"](function (err) {
            res.status(400).json({
              err: err
            });
          }));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
});
router.get("/usersAll/:userId", ensureAuthenticated, function _callee3(req, res) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(User.findOne({
            _id: req.params.userId
          }).then(function (user) {
            var userDto = {
              name: user.name,
              email: user.email,
              id: user._id,
              alive: online(String(user._id)),
              avatar: user.avatar
            };
            console.log(userDto);
            res.status(200).json({
              user: userDto
            });
          })["catch"](function (err) {
            res.status(400).json({
              err: err
            });
          }));

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  });
});
router.get('/names/:id', function _callee4(req, res) {
  var id;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.next = 3;
          return regeneratorRuntime.awrap(User.find({
            rooms: {
              $all: [id]
            }
          }).then(function (users) {
            var names = [];
            var ids = [];
            users.forEach(function (user) {
              names.push(user.name);
              ids.push(user._id);
            });
            res.status(200).json({
              names: names,
              ids: ids
            });
          })["catch"](function (err) {
            res.status(500).json({
              err: err
            });
          }));

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  });
});
module.exports = router;