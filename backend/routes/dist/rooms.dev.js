"use strict";

var express = require("express");

var router = express.Router();

var Room = require('../models/Room');

var Message = require('../models/Message');

var _require = require("../utils/authentication"),
    ensureAuthenticated = _require.ensureAuthenticated;

require('dotenv/config'); //new room get or create


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
              },
              $and: [{
                custom: false
              }]
            }, {
              _id: ids[1] //custom room case

            }]
          }).then(function _callee(room) {
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!room) {
                      _context.next = 5;
                      break;
                    }

                    _context.next = 3;
                    return regeneratorRuntime.awrap(Message.find({
                      roomId: room._id
                    }, {
                      _id: 0,
                      roomId: 0
                    }).then(function (messages) {
                      res.status(200).json({
                        comments: messages,
                        //send back the comments
                        rid: room._id
                      });
                    })["catch"](function (err) {
                      res.status(500).json({
                        err: err
                      });
                    }));

                  case 3:
                    _context.next = 7;
                    break;

                  case 5:
                    _context.next = 7;
                    return regeneratorRuntime.awrap(newRoom.save().then(function (room) {
                      res.status(200).json({
                        comments: [],
                        rid: room._id
                      });
                    })["catch"](function (err) {
                      console.log(err);
                    }));

                  case 7:
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
});
module.exports = router;