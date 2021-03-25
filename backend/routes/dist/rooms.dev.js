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
          /*let pId = process.env.PUBLIC_ROOM;
          if (req.body.receiver == pId) {
              id1 = pId;
              id2 = pId;
          }*/

          newRoom = new Room({
            members: ids
          });
          _context2.next = 4;
          return regeneratorRuntime.awrap(Room.findOne({
            members: {
              $all: ids
            }
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
});
module.exports = router;