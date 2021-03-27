"use strict";

var express = require('express');

var router = express.Router();

var User = require('../models/User');

var Room = require('../models/Room');

var _require = require('../utils/handleRooms'),
    online = _require.online;

var _require2 = require("../utils/authentication"),
    ensureAuthenticated = _require2.ensureAuthenticated;

require('dotenv/config'); //get all users


router.get("/users", ensureAuthenticated, function _callee2(req, res) {
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
                          alive: online(user._id),
                          avatar: user.avatar
                        });
                      } else {
                        rooms = user.rooms;
                      }
                    });
                    console.log(userDto);
                    _context.next = 6;
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

                  case 6:
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
router.get("/users/:userId", ensureAuthenticated, function _callee3(req, res) {
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
              alive: online(user._id),
              avatar: user.avatar
            };
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
module.exports = router;