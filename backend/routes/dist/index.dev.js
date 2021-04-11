"use strict";

var express = require("express");

var router = express.Router();

var Post = require('../models/User');

var path = require('path');

var _require = require('../utils/authentication'),
    ensureAuthenticated = _require.ensureAuthenticated;

var reqPath = path.join(__dirname, '../'); //index route home this is not activated actually 

router.get('/', ensureAuthenticated, function (req, res) {
  res.sendFile(reqPath + '/public/index.html');
});
module.exports = router;