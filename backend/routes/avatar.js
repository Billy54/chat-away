const express = require('express');
const router = express.Router();
const User = require('../models/User');
const path = require('path');
const {
    updateAvatar
} = require("../utils/helpers");
const {
    ensureAuthenticated
} = require("../utils/authentication");

//file api , will be storing the files on the server
router.post("/avatar", ensureAuthenticated, (req, res) => {

    let sampleFile = req.files.image;
    let uploadPath = path.join(__dirname, '../') + '/public/assets/' + sampleFile.name;
    sampleFile.mv(uploadPath, (err) => {
        if (err)
            return res.status(500).json({
                msg: 'could not be saved'
            });
        return updateAvatar('assets/' + sampleFile.name, req.user.email).then(() => {
            return res.status(200).json({
                path: 'assets/' + sampleFile.name
            });
        }).catch((err) => {
            return res.status(500).json({
                msg: 'could not be saved'
            });
        });
    });
});

//get the url
router.get("/avatar/:uid", ensureAuthenticated, (req, res) => {
    User.findOne({
        _id: req.params.uid
    }).then((user) => {
        res.status(200).json({
            url: user.avatar
        });
    }).catch((er) => {
        res.status(500).json({
            er: er
        });
    });
});

module.exports = router;