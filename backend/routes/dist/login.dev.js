"use strict";

var express = require("express");

var router = express.Router();

var User = require('../models/User');

var bcrypt = require('bcryptjs');

var passport = require('passport');

var Room = require('../models/Room');

var path = require('path');

var _require = require("../utils/authentication"),
    forwardAuthenticated = _require.forwardAuthenticated,
    ensureAuthenticated = _require.ensureAuthenticated;

var _require2 = require('../utils/helpers'),
    encodeData = _require2.encodeData;

var _require3 = require("express-session"),
    Cookie = _require3.Cookie;

require('dotenv/config');

var reqPath = path.join(__dirname, '../');
router.get('/login', forwardAuthenticated, function (req, res) {
  res.sendFile(reqPath + '/public/index.html');
}); //login post request

router.post('/login', function (req, res, next) {
  passport.authenticate('local', {}, function (error, user, info) {
    if (error) res.status(400).json({
      "statusCode": 200,
      "message": req.flash('message')
    });
    req.login(user, function (error) {
      if (error) {
        res.status(404).json({
          "statusCode": 404,
          "message": req.flash('message')
        });
      } else {
        next();
      }
    });
  })(req, res, next);
}, function (req, res) {
  res.status(200).json({
    "statusCode": 200,
    "message": "Success",
    "user": encodeData(req.user)
  });
}); //logout

router.get('/logout', ensureAuthenticated, function (req, res) {
  req.logout();
  res.sendFile(reqPath + '/public/index.html');
}); //check if the user email is already registered

router.post('/validateEmail', forwardAuthenticated, function _callee(req, res) {
  var userInDb;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(User.findOne({
            email: req.body.email
          }));

        case 3:
          userInDb = _context.sent;

          if (userInDb) {
            res.status(200).json({
              "statusCode": 200,
              "message": "Email exists",
              "found": true
            });
          } else {
            res.status(200).json({
              "statusCode": 200,
              "found": false,
              "message": "Email doesnt exist"
            });
          }

          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(400).json({
            "statusCode": 400,
            "found": false,
            "message": "Something Is broken , most likely connection to the database could not be established"
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); //register post request

router.post('/register', forwardAuthenticated, function (req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      email = _req$body.email,
      password = _req$body.password;
  var newUser = new User({
    name: name,
    email: email,
    password: password
  });
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      newUser.password = hash;
      newUser.save().then(function (user) {
        req.login(user, function (err) {
          if (err) {
            throw err;
          }
        });
        res.status(200).json({
          "statusCode": 200,
          "message": "You are registerd",
          "user": encodeData(req.user)
        });
      })["catch"](function (err) {
        console.log(err);
      });
    });
  });
});
module.exports = router;