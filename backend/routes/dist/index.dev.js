"use strict";

var express = require("express");

var router = express.Router();

var Post = require('../models/User');

var _require = require('../utils/authentication'),
    ensureAuthenticated = _require.ensureAuthenticated,
    forwardAuthenticated = _require.forwardAuthenticated; //index route home


router.get('/', ensureAuthenticated, function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  });
});
module.exports = router;