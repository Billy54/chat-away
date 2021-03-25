const express = require("express");
const router = express.Router();
const User = require('../models/User');
const Room = require('../models/Room');
const {
    newRoom
} = require('../utils/helpers');
const {
    ensureAuthenticated
} = require("../utils/authentication");
require('dotenv/config');


//new room get or 
router.post("/room", ensureAuthenticated, async(req, res) => {

    let ids = [req.body.sender, req.body.receiver];

    /*let pId = process.env.PUBLIC_ROOM;
    if (req.body.receiver == pId) {
        id1 = pId;
        id2 = pId;
    }*/

    const newRoom = new Room({
        members: ids
    });

    await Room.findOne({
        members: {
            $all: ids
        }
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