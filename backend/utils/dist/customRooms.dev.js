"use strict";

var User = require('../models/User');

var get = function get(id) {
  return regeneratorRuntime.async(function get$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(User.findOne({
            _id: id
          }, {
            _id: 0,
            name: 0,
            email: 0,
            password: 0,
            date: 0,
            avatar: 0,
            demo: 0
          }).then(function (user) {
            return user.rooms;
          })["catch"](function (err) {
            return err;
          }));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports = {
  get: get
};