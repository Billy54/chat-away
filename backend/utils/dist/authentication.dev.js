"use strict";

var bcrypt = require('bcryptjs');

var User = require('../models/User');

var mongoose = require('mongoose');

var _require = require('./helpers'),
    encodeData = _require.encodeData;

module.exports = {
  //passport will authenticate the user using the following strategy 
  authenticateUser: function authenticateUser(req, email, password, done) {
    return regeneratorRuntime.async(function authenticateUser$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(User.findOne({
              email: email
            }).then(function (user) {
              if (!user) {
                return done(null, false, req.flash('message', 'Not Registered'));
              } //Match password


              bcrypt.compare(password, user.password, function (err, isMatch) {
                if (isMatch) {
                  return done(null, user);
                } else {
                  return done(null, false, req.flash('message', 'Incorrect password'));
                }
              });
            })["catch"](function (err) {
              console.log("db could not be reached");
              return done(null, false, req.flash('message', 'Db out of reach ok back end works'));
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  //middleware to protect the routes from unathorized requests
  ensureAuthenticated: function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } //we could redirect here to a apropriate component


    res.status(200).json({
      "statusCode": 401,
      "message": "Please log in to view that resource."
    });
  },
  //on to the next middlewere if not authenticated
  forwardAuthenticated: function forwardAuthenticated(req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }

    res.redirect('/');
  }
};