const express = require("express");
const router = express.Router();
const Room = require('../models/Room');
const Message = require('../models/Message');
const {
    ensureAuthenticated
} = require("../utils/authentication");
require('dotenv/config');


//new room get or create
router.post("/room", ensureAuthenticated, async(req, res) => {

    let ids = [req.body.sender, req.body.receiver];
    const newRoom = new Room({
        members: ids
    });

    await Room.findOne({
        $or: [{
            members: {
                $all: ids //private
            },
            $and: [{
                custom: false
            }]
        }, {
            _id: ids[1] //custom room case
        }]
    }).then(async(room) => {
        //if exists return it
        if (room) {
            await Message.find({
                roomId: room._id
            }, {
                _id: 0,
                roomId: 0
            }).then((messages) => {
                res.status(200).json({
                    comments: messages, //send back the comments
                    rid: room._id,
                    room: req.body.receiver
                });
            }).catch(err => {
                res.status(500).json({
                    err: err
                });
            });
        } else {
            //if not create it first then return it
            await newRoom.save().then((room) => {
                res.status(200).json({
                    comments: [],
                    rid: room._id,
                    room: req.body.receiver
                });
            }).catch(err => {
                console.log(err);
            });
        }
    }).catch(err => {
        console.log(err);
    });
});
module.exports = router;