const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Room = require('../models/Room');
const {
    online,
} = require('../utils/handleRooms')
const {
    ensureAuthenticated
} = require("../utils/authentication");
require('dotenv/config');

//get all users
router.get("/users", ensureAuthenticated, async(req, res) => {
    await User.find({}).then(async(users) => {
        let userDto = [];
        let rooms = [];
        users.forEach((user) => {
            if (req.user.email != user.email) {
                userDto.push({
                    name: user.name,
                    email: user.email,
                    id: user._id,
                    alive: online(user._id),
                    avatar: user.avatar
                });
            } else {
                rooms = user.rooms;
            }
        });
        console.log(userDto);
        await Room.find({
            _id: {
                $in: rooms
            }
        }).then((rooms) => {
            rooms.forEach(room => {
                userDto.push({
                    name: room.name,
                    id: room._id,
                    custom: true,
                    avatar: room.url
                });
            });
            res.status(200).json({
                users: userDto
            });
        }).catch(err => {
            res.status(500).json({
                err: err
            });
        });
    }).catch((err) => {
        res.status(400).json({
            err: err
        });
    });
});

router.get("/users/:userId", ensureAuthenticated, async(req, res) => {

    await User.findOne({
        _id: req.params.userId
    }).then((user) => {
        let userDto = {
            name: user.name,
            email: user.email,
            id: user._id,
            alive: online(user._id),
            avatar: user.avatar
        };
        res.status(200).json({
            user: userDto
        });
    }).catch((err) => {
        res.status(400).json({
            err: err
        });
    });
});

module.exports = router;