"use strict";

var express = require("express");

var router = express.Router();

var User = require('../models/User');

var _require = require("../utils/authentication"),
    forwardAuthenticated = _require.forwardAuthenticated;

var _require2 = require('../utils/helpers'),
    encodeData = _require2.encodeData;

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
  newUser.save().then(function (user) {
    req.login(user, function (err) {
      if (err) {
        throw err;
      }
    });
    res.status(200).json({
      "user": encodeData(req.user)
    });
  })["catch"](function (er) {
    res.status(500).json({
      "message": er
    });
  });
});
module.exports = router;