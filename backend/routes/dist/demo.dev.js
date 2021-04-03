"use strict";

var express = require("express");

var router = express.Router();

var User = require('../models/User');

var _require = require("../utils/authentication"),
    forwardAuthenticated = _require.forwardAuthenticated;

var _require2 = require('../utils/helpers'),
    encodeData = _require2.encodeData,
    add = _require2.add;

require('dotenv/config'); //register post request


router.post('/demo', forwardAuthenticated, function (req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      email = _req$body.email,
      password = _req$body.password;
  var newUser = new User({
    name: name,
    email: email,
    password: password,
    avatar: 'assets/blank.png',
    demo: true
  });
  newUser.save().then(function _callee(user) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req.login(user, function (err) {
              if (err) {
                throw err;
              }
            });
            _context.next = 3;
            return regeneratorRuntime.awrap(add(String(user._id), process.env.PUBLIC_ROOM).then(function () {
              res.status(200).json({
                "user": encodeData(req.user)
              });
            })["catch"](function (er) {
              res.status(500).json({
                "message": er
              });
            }));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  });
});
module.exports = router;