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

//fetch custom rooms
router.get('/custom', ensureAuthenticated, async(req, res) => {

    await User.findOne({
        email: req.user.email
    }, {
        rooms: 1,
        _id: 0
    }).then(async(result) => {
        await Room.find({
            _id: {
                $in: result.rooms
            }
        }).then(rooms => {
            let roomDto = [];
            rooms.forEach(room => {
                roomDto.push({
                    name: room.name,
                    id: room._id,
                    custom: true,
                    avatar: room.url
                });
            });
            res.status(200).json({
                users: roomDto
            })
        }).catch(err => {
            res.status(500).json({
                err: err
            });
        });
    }).catch(err => {
        res.status(500).json({
            err: err
        });
    });
});

module.exports = router;