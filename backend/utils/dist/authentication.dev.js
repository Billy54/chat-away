"use strict";

var bcrypt = require('bcryptjs');

var User = require('../models/User');

var mongoose = require('mongoose');

var _require = require('./helpers'),
    encodeData = _require.encodeData;

module.exports = {
  //passport will authenticate the user using the following strategy 
  authenticateUser: function authenticateUser(req, email, password, done) {
    return regeneratorRuntime.async(function authenticateUser$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(User.findOne({
              email: email
            }).then(function _callee(user) {
              return regeneratorRuntime.async(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (user) {
                        _context.next = 2;
                        break;
                      }

                      return _context.abrupt("return", done(null, false, req.flash('message', 'Not Registered')));

                    case 2:
                      //Match password
                      bcrypt.compare(password, user.password, function (err, isMatch) {
                        if (isMatch) {
                          return done(null, user);
                        } else {
                          return done(null, false, req.flash('message', 'Incorrect password'));
                        }
                      });

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              });
            })["catch"](function (err) {
              console.log("db could not be reached");
              return done(null, false, req.flash('message', 'Db out of reach ok back end works'));
            }));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  //middleware to protect the routes from unathorized requests
  ensureAuthenticated: function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }

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