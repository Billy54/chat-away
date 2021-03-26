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
        }, process.env.SESSION_SECRET, {
            expiresIn: '3600s'
        });
    },
    saveComment: async function(comment) {

        let ids = [comment.sender, comment.receiver];
        await Room.updateOne({
            $or: [{
                members: {
                    $all: ids
                }
            }, {
                _id: ids[1]
            }]
        }, {
            $push: {
                comments: comment
            }
        }).catch((err) => {
            console.log(err);
        });
    }, //update user avatar as well as all the comments in the rooms
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
    }
}