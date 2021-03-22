const mongoose = require('mongoose');
const User = require('../models/User');
require('dotenv/config');
const jwt = require("jsonwebtoken");
const Room = require('../models/Room');
const ObjectId = require('mongodb').ObjectID;
const {
    resolve
} = require('path');

module.exports = {
    //encode sensitive data before sending to the client for storage
    encodeData: function(data) {
        return jwt.sign({
            name: data.name,
            email: data.email,
            id: data._id,
            avatar: data.avatar

        }, process.env.SESSION_SECRET, {
            expiresIn: '3600s'
        });
    },
    saveComment: async function(comment) {
        let id1 = comment.sender + comment.receiver;
        let id2 = comment.receiver + comment.sender;

        if (comment.receiver == process.env.PUBLIC_ROOM) {
            id1 = process.env.PUBLIC_ROOM;
            id2 = process.env.PUBLIC_ROOM;
        }
        await Room.updateOne({
            $or: [{
                    roomId: id1
                },
                {
                    roomId: id2
                }
            ]
        }, {
            $push: {
                comments: comment
            }
        }).catch((err) => {
            console.log(err);
        });
    }, //update user avatar as well as all the comments in public room
    updateAvatar: async function(url, email) {
        await User.findOneAndUpdate({
            email: email
        }, {
            $set: {
                avatar: url
            }
        }).then(async(user) => {
            const query = {};
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
    },
    customRoom: async function(name, members) {
        const newRoom = new Room({
            name: name
        });
        newRoom.roomId = newRoom._id;
        return await newRoom.save().then(async(room) => {
            return await User.updateMany({
                email: {
                    $in: members
                },
                $push: {
                    rooms: room.roomId
                }
            }).then(() => {
                return newRoom;
            }).catch((er) => {
                console.log(er);
            });
        }).catch(er => {
            console.log(er);
        });
    }
}