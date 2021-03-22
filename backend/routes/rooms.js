const express = require("express");
const router = express.Router();
const User = require('../models/User');
const Room = require('../models/Room');
const {
    ensureAuthenticated
} = require("../utils/authentication");
require('dotenv/config');


//new room get or 
router.post("/room", ensureAuthenticated, async(req, res) => {

    let id1 = req.body.sender + req.body.receiver;
    let id2 = req.body.receiver + req.body.sender;

    let pId = process.env.PUBLIC_ROOM;
    if (req.body.receiver == pId) {
        id1 = pId;
        id2 = pId;
    }

    const newRoom = new Room({
        roomId: id1
    });

    await Room.findOne({
        $or: [{
            roomId: String(id1)
        }, {
            roomId: String(id2)
        }]
    }).then(async(room) => {
        //if exists return it
        if (room) {
            res.status(200).json({
                comments: room.comments
            });
        } else {
            //if not create it first then return it
            await newRoom.save().then((room) => {
                res.status(200).json({
                    comments: room.comments
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