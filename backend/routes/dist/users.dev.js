"use strict";

var express = require('express');

var router = express.Router();

var User = require('../models/User');

var _require = require('../utils/handleRooms'),
    online = _require.online,
    getRooms = _require.getRooms;

var _require2 = require("../utils/authentication"),
    ensureAuthenticated = _require2.ensureAuthenticated;

require('dotenv/config'); //get all users


router.get("/users", ensureAuthenticated, function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(req.isAuthenticated());
          _context.next = 3;
          return regeneratorRuntime.awrap(User.find({
            email: {
              $ne: req.user.email
            }
          }).then(function (users) {
            var userDto = [];
            users.forEach(function (user) {
              userDto.push({
                name: user.name,
                email: user.email,
                id: user._id,
                alive: online(user._id)
              });
            });
            res.status(200).json({
              users: userDto
            });
          })["catch"](function (err) {
            res.status(400).json({
              err: err
            });
          }));

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.get("/users/:userId", ensureAuthenticated, function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(User.findOne({
            _id: req.params.userId
          }).then(function (user) {
            var userDto = {
              name: user.name,
              email: user.email,
              id: user._id,
              alive: online(user._id)
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
          return _context2.stop();
      }
    }
  });
});
module.exports = router;