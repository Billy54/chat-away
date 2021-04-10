"use strict";

var express = require("express");

var router = express.Router();

var Post = require('../models/User');

var path = require('path');

var _require = require('../utils/authentication'),
    ensureAuthenticated = _require.ensureAuthenticated,
    forwardAuthenticated = _require.forwardAuthenticated;

var reqPath = path.join(__dirname, '../'); //index route home

router.get('/', ensureAuthenticated, function (req, res) {
  console.log('hello');
  res.sendFile(reqPath + '/public/index.html');
});
module.exports = router;