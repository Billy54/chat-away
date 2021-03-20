const mongoose = require('mongoose');
const User = require('../models/User');
require('dotenv/config');
const jwt = require("jsonwebtoken");
const Room = require('../models/Room');

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
    },
    updateAvatar: async function(url, email) {
        await User.updateOne({
            email: email
        }, {
            $set: {
                avatar: url
            }
        }).catch((err) => {
            console.log(err);
        });
    }
}