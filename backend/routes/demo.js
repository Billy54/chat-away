const express = require("express");
const router = express.Router();
const User = require('../models/User');
const {
    forwardAuthenticated,
} = require("../utils/authentication");
const {
    encodeData,
} = require('../utils/helpers');
require('dotenv/config');

//register post request
router.post('/demo', forwardAuthenticated, (req, res) => {

    const {
        name,
        email,
        password,
    } = req.body;

    const newUser = new User({
        name: name,
        email: email,
        password: password,
        avatar: 'assets/blank.png',
        demo: true
    });

    newUser.save().then((user) => {
            req.login(user, (err) => {
                if (err) {
                    throw err;
                }
            });
            res.status(200).json({
                "user": encodeData(req.user)
            });
        })
        .catch((er) => {
            res.status(500).json({
                "message": er,
            });
        });
});

module.exports = router;