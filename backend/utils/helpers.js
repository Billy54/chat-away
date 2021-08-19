const mongoose = require('mongoose');
const User = require('../models/User');
require('dotenv/config');
const jwt = require("jsonwebtoken");
const Room = require('../models/Room');
const Message = require('../models/Message');

module.exports = {
    //encode sensitive data before sending to the client for storage
    encodeData: function(data) {
        return jwt.sign({
            name: data.name,
            email: data.email,
            id: data._id,
            avatar: data.avatar,
            demo: data.demo
        }, process.env.SESSION_SECRET, {
            expiresIn: '36000s' //log out the user after an hour
        });
    },
    saveComment: async function(msg) {
        let newMessage = new Message({
            sender: msg.sender,
            receiver: msg.receiver,
            text: msg.text,
            url: msg.url,
            roomId: msg.roomId,
            senderName: msg.senderName
        });
        await newMessage.save()
            .catch((err) => {
                return err;
            });

    }, //update user avatar as well as all the comments
    updateAvatar: async function(url, uid) {
        await User.findOneAndUpdate({
            _id: uid
        }, {
            $set: {
                avatar: url
            }
        }).then(async(user) => {
            await Message.updateMany({
                sender: uid
            }, {
                $set: {
                    url: url
                }
            }).catch(err => {
                console.log(err);
            });
        });
    },
    customRoom: async function(name, members) {
        const newRoom = new Room({
            name: name,
            custom: true,
            members: members
        });
        return await newRoom.save().then(async(room) => {
            return await User.updateMany({
                _id: {
                    $in: members
                },
            }, {
                $push: {
                    rooms: String(room._id)
                }
            }).then(() => {
                return newRoom;
            }).catch((er) => {
                console.log(er);
            });
        }).catch(er => {
            console.log(er);
        });
    },
    add: async function(uid, rid) {
        return await User.findOneAndUpdate({
            _id: uid
        }, {
            $push: {
                rooms: rid
            }
        }).then(async(user) => {
            return await Room.findOneAndUpdate({
                _id: rid
            }, {
                $push: {
                    members: uid
                }
            }).then((room) => {
                return {
                    name: room.name,
                    url: room.url
                };
            }).catch(err => {
                consloe.log(err);
            });
        }).catch(err => {
            console.log(err);
        });
    },
    deleteUser: async function(id) {
        await User.findOneAndDelete({
            _id: id
        }).then(async() => {
            await Room.deleteMany({ //delete all private rooms
                $and: [{
                    members: {
                        $all: [String(id)]
                    },
                }, {
                    custom: false
                }]
            }).then(async() => {
                await Message.deleteMany({
                    $or: [{
                        sender: id
                    }, {
                        receiver: id
                    }]
                }).catch(err => console.log(err))
            }).catch(err => console.log(err));
        }).catch(err => console.log(err));
    }
}

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