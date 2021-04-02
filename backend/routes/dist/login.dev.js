"use strict";

var express = require("express");

var router = express.Router();

var User = require('../models/User');

var bcrypt = require('bcryptjs');

var passport = require('passport');

var path = require('path');

var _require = require("../utils/authentication"),
    forwardAuthenticated = _require.forwardAuthenticated,
    ensureAuthenticated = _require.ensureAuthenticated;

var _require2 = require('../utils/helpers'),
    encodeData = _require2.encodeData,
    deleteUser = _require2.deleteUser;

var _require3 = require('../utils/customRooms'),
    put = _require3.put;

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
  put(req.user.rooms);
  res.status(200).json({
    "statusCode": 200,
    "message": "Success",
    "user": encodeData(req.user)
  });
}); //logout

router.get('/logout', ensureAuthenticated, function (req, res) {
  var id = req.user._id;
  var demo = req.user.demo;
  req.logout();

  if (demo) {
    deleteUser(id).then(function () {
      res.status(200).json({
        msg: 'log out succesfull'
      });
    });
  } else {
    res.status(200).json({
      msg: 'log out succesfull'
    });
  }
}); //check if the user email is already registered

router.post('/validateEmail', forwardAuthenticated, function (req, res) {
  User.findOne({
    email: req.body.email
  }).then(function (user) {
    if (user) {
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
  })["catch"](function (er) {
    res.status(500).json({
      "statusCode": 400,
      "found": false,
      "message": "Something is broken :("
    });
  });
}); //register post request

router.post('/register', forwardAuthenticated, function (req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      email = _req$body.email,
      password = _req$body.password;
  var newUser = new User({
    name: name,
    email: email,
    password: password,
    avatar: 'assets/blank.png'
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
      })["catch"](function (er) {
        res.status(500).json({
          "message": er
        });
      });
    });
  });
});
module.exports = router;