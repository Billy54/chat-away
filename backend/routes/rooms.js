const express = require("express");
const router = express.Router();
const Room = require('../models/Room');
const Message = require('../models/Message');
const {
    newRoom
} = require('../utils/helpers');
const {
    ensureAuthenticated
} = require("../utils/authentication");
require('dotenv/config');


//new room get or  //fix here custom
router.post("/room", ensureAuthenticated, async(req, res) => {

    let ids = [req.body.sender, req.body.receiver];
    const newRoom = new Room({
        members: ids
    });

    await Room.findOne({
        $or: [{
            members: {
                $all: ids
            }
        }, {
            _id: ids[1]
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
                    comments: messages,
                    rid: room._id
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
                    rid: room._id
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