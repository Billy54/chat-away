"use strict";

var express = require("express");

var router = express.Router();

var User = require('../models/User');

var Room = require('../models/Room');

var _require = require('../utils/helpers'),
    newRoom = _require.newRoom;

var _require2 = require("../utils/authentication"),
    ensureAuthenticated = _require2.ensureAuthenticated;

require('dotenv/config'); //new room get or 


router.post("/room", ensureAuthenticated, function _callee2(req, res) {
  var ids, newRoom;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          ids = [req.body.sender, req.body.receiver];
          newRoom = new Room({
            members: ids
          });
          _context2.next = 4;
          return regeneratorRuntime.awrap(Room.findOne({
            $or: [{
              members: {
                $all: ids
              }
            }, {
              _id: ids[1]
            }]
          }).then(function _callee(room) {
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!room) {
                      _context.next = 4;
                      break;
                    }

                    res.status(200).json({
                      comments: room.comments
                    });
                    _context.next = 6;
                    break;

                  case 4:
                    _context.next = 6;
                    return regeneratorRuntime.awrap(newRoom.save().then(function (room) {
                      res.status(200).json({
                        comments: room.comments
                      });
                    })["catch"](function (err) {
                      console.log(err);
                    }));

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            });
          })["catch"](function (err) {
            console.log(err);
          }));

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}); //fetch custom rooms

router.get('/custom', ensureAuthenticated, function _callee4(req, res) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(User.findOne({
            email: req.user.email
          }, {
            rooms: 1,
            _id: 0
          }).then(function _callee3(result) {
            return regeneratorRuntime.async(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return regeneratorRuntime.awrap(Room.find({
                      _id: {
                        $in: result.rooms
                      }
                    }).then(function (rooms) {
                      var roomDto = [];
                      rooms.forEach(function (room) {
                        roomDto.push({
                          name: room.name,
                          id: room._id,
                          custom: true,
                          avatar: room.url
                        });
                      });
                      res.status(200).json({
                        users: roomDto
                      });
                    })["catch"](function (err) {
                      res.status(500).json({
                        err: err
                      });
                    }));

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            });
          })["catch"](function (err) {
            res.status(500).json({
              err: err
            });
          }));

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  });
});
module.exports = router;