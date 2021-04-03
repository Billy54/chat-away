const express = require("express");
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const path = require('path');
const {
    forwardAuthenticated,
    ensureAuthenticated
} = require("../utils/authentication");
const {
    encodeData,
    deleteUser,
    add
} = require('../utils/helpers');
require('dotenv/config');

const reqPath = path.join(__dirname, '../');

router.get('/login', forwardAuthenticated, (req, res) => {
    res.sendFile(reqPath + '/public/index.html');
});

//login post request
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {},
        (error, user, info) => {
            if (error) res.status(404).json({
                "message": req.flash('message'),
                "err": true
            });
            req.login(user, (error) => {
                if (error) {
                    res.status(400).json({
                        "message": req.flash('message'),
                        "err": true
                    });
                } else {
                    next();
                }
            })
        })(req, res, next)
}, (req, res) => {
    res.status(200).json({
        "message": "Success",
        "user": encodeData(req.user),
    });
});

//logout
router.get('/logout', ensureAuthenticated, (req, res) => {

    const id = req.user._id;
    const demo = req.user.demo;
    req.logout();
    if (demo) {
        deleteUser(id).then(() => {
            res.status(200).json({
                msg: 'log out succesfull'
            });
        })
    } else {
        res.status(200).json({
            msg: 'log out succesfull'
        });
    }
});

//check if the user email is already registered
router.post('/validateEmail', forwardAuthenticated, (req, res) => {
    User.findOne({
        email: req.body.email
    }).then((user) => {
        if (user) {
            res.status(200).json({
                "message": "Email exists",
                "found": true,
            });
        } else {
            res.status(200).json({
                "found": false,
                "message": "Email doesnt exist"
            });
        }
    }).catch((er) => {
        res.status(500).json({
            "found": false,
            "message": "Something is broken :("
        });
    });
});

//register post request
router.post('/register', forwardAuthenticated, (req, res) => {

    const {
        name,
        email,
        password
    } = req.body;

    const newUser = new User({
        name: name,
        email: email,
        password: password,
        avatar: 'assets/blank.png'
    });

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            newUser.password = hash;
            newUser
                .save()
                .then(async(user) => {
                    req.login(user, (err) => {
                        if (err) {
                            throw err;
                        }
                    });
                    await add(String(user._id), process.env.PUBLIC_ROOM).then(() => {
                        res.status(200).json({
                            "message": "You are registerd",
                            "user": encodeData(req.user)
                        });
                    }).catch(er => {
                        res.status(500).json({
                            "message": er,
                        });
                    });
                })
                .catch((er) => {
                    res.status(500).json({
                        "message": er,
                    });
                });
        });
    });
});


module.exports = router;