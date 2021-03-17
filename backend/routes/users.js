const express = require('express');
const router = express.Router();
const User = require('../models/User');
const {
    online,
    getRooms
} = require('../utils/handleRooms')
const {
    ensureAuthenticated
} = require("../utils/authentication");
require('dotenv/config');

//get all users
router.get("/users", ensureAuthenticated, async(req, res) => {

    console.log(req.isAuthenticated());
    await User.find({
        email: {
            $ne: req.user.email
        }
    }).then((users) => {
        let userDto = [];
        users.forEach((user) => {
            userDto.push({
                name: user.name,
                email: user.email,
                id: user._id,
                alive: online(user._id)
            });
        });
        res.status(200).json({
            users: userDto
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
            alive: online(user._id)
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