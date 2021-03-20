"use strict";

var express = require("express");

var router = express.Router();

var Room = require('../models/Room');

var _require = require("../utils/authentication"),
    ensureAuthenticated = _require.ensureAuthenticated;

require('dotenv/config'); //new room get or 


router.post("/room", ensureAuthenticated, function _callee2(req, res) {
  var id1, id2, pId, newRoom;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id1 = req.body.sender + req.body.receiver;
          id2 = req.body.receiver + req.body.sender;
          pId = process.env.PUBLIC_ROOM;

          if (req.body.receiver == pId) {
            id1 = pId;
            id2 = pId;
          }

          newRoom = new Room({
            roomId: id1
          });
          _context2.next = 7;
          return regeneratorRuntime.awrap(Room.findOne({
            $or: [{
              roomId: id1
            }, {
              roomId: id2
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

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
});
module.exports = router;