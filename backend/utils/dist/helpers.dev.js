"use strict";

var mongoose = require('mongoose');

var User = require('../models/User');

require('dotenv/config');

var jwt = require("jsonwebtoken");

var Room = require('../models/Room');

var Message = require('../models/Message');

module.exports = {
  //encode sensitive data before sending to the client for storage
  encodeData: function encodeData(data) {
    return jwt.sign({
      name: data.name,
      email: data.email,
      id: data._id,
      avatar: data.avatar,
      demo: data.demo
    }, process.env.SESSION_SECRET, {
      expiresIn: '3600s'
    });
  },
  saveComment: function saveComment(msg) {
    var newMessage;
    return regeneratorRuntime.async(function saveComment$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            newMessage = new Message({
              sender: msg.sender,
              receiver: msg.receiver,
              text: msg.text,
              url: msg.url,
              roomId: msg.roomId,
              senderName: msg.senderName
            });
            _context.next = 3;
            return regeneratorRuntime.awrap(newMessage.save()["catch"](function (err) {
              return err;
            }));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  //update user avatar as well as all the comments
  updateAvatar: function updateAvatar(url, uid) {
    return regeneratorRuntime.async(function updateAvatar$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(User.findOneAndUpdate({
              _id: uid
            }, {
              $set: {
                avatar: url
              }
            }).then(function _callee(user) {
              return regeneratorRuntime.async(function _callee$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return regeneratorRuntime.awrap(Message.updateMany({
                        sender: uid
                      }, {
                        $set: {
                          url: url
                        }
                      })["catch"](function (err) {
                        console.log(err);
                      }));

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              });
            }));

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    });
  },
  customRoom: function customRoom(name, members) {
    var newRoom;
    return regeneratorRuntime.async(function customRoom$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            newRoom = new Room({
              name: name,
              custom: true,
              members: members
            });
            _context5.next = 3;
            return regeneratorRuntime.awrap(newRoom.save().then(function _callee2(room) {
              return regeneratorRuntime.async(function _callee2$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return regeneratorRuntime.awrap(User.updateMany({
                        _id: {
                          $in: members
                        }
                      }, {
                        $push: {
                          rooms: String(room._id)
                        }
                      }).then(function () {
                        return newRoom;
                      })["catch"](function (er) {
                        console.log(er);
                      }));

                    case 2:
                      return _context4.abrupt("return", _context4.sent);

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              });
            })["catch"](function (er) {
              console.log(er);
            }));

          case 3:
            return _context5.abrupt("return", _context5.sent);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    });
  },
  add: function add(uid, rid) {
    return regeneratorRuntime.async(function add$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return regeneratorRuntime.awrap(User.findOneAndUpdate({
              _id: uid
            }, {
              $push: {
                rooms: rid
              }
            }).then(function _callee3(user) {
              return regeneratorRuntime.async(function _callee3$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return regeneratorRuntime.awrap(Room.findOneAndUpdate({
                        _id: rid
                      }, {
                        $push: {
                          members: uid
                        }
                      }).then(function (room) {
                        return {
                          name: room.name,
                          url: room.url
                        };
                      })["catch"](function (err) {
                        consloe.log(err);
                      }));

                    case 2:
                      return _context6.abrupt("return", _context6.sent);

                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }
              });
            })["catch"](function (err) {
              console.log(err);
            }));

          case 2:
            return _context7.abrupt("return", _context7.sent);

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    });
  },
  deleteUser: function deleteUser(id) {
    return regeneratorRuntime.async(function deleteUser$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return regeneratorRuntime.awrap(User.findOneAndDelete({
              _id: id
            }).then(function _callee5() {
              return regeneratorRuntime.async(function _callee5$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return regeneratorRuntime.awrap(Room.deleteMany({
                        $and: [{
                          members: {
                            $all: [String(id)]
                          }
                        }, {
                          custom: false
                        }]
                      }).then(function _callee4() {
                        return regeneratorRuntime.async(function _callee4$(_context8) {
                          while (1) {
                            switch (_context8.prev = _context8.next) {
                              case 0:
                                _context8.next = 2;
                                return regeneratorRuntime.awrap(Message.deleteMany({
                                  $or: [{
                                    sender: id
                                  }, {
                                    receiver: id
                                  }]
                                })["catch"](function (err) {
                                  return console.log(err);
                                }));

                              case 2:
                              case "end":
                                return _context8.stop();
                            }
                          }
                        });
                      })["catch"](function (err) {
                        return console.log(err);
                      }));

                    case 2:
                    case "end":
                      return _context9.stop();
                  }
                }
              });
            })["catch"](function (err) {
              return console.log(err);
            }));

          case 2:
          case "end":
            return _context10.stop();
        }
      }
    });
  }
};
/*much easier to update urls with a reference schema
updateAvatar: async function(url, email) {
        await User.findOneAndUpdate({
            email: email
        }, {
            $set: {
                avatar: url
            }
        }).then(async(user) => {
            const query = {
                members: {
                    $all: [user._id]
                }
            };
            const updateDocument = {
                $set: {
                    "comments.$[comment].url": url
                }
            };
            const options = {
                arrayFilters: [{
                    "comment.sender": String(user._id)
                }]
            };
            await Room.updateMany(query, updateDocument, options).catch((er) => {
                console.log(er);
            });
        });
    }

    .then(async() => {
                await Message.deleteMany({}).catch((err) => {
                    throw err;
                });
            })

*/