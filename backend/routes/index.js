const express = require("express");
const router = express.Router();
const Post = require('../models/User');
const path = require('path');
const {
    ensureAuthenticated,
    forwardAuthenticated
} = require('../utils/authentication');

const reqPath = path.join(__dirname, '../');

//index route home
router.get('/', ensureAuthenticated, (req, res) => {
    console.log('hello');
    res.sendFile(reqPath + '/public/index.html');
});
module.exports = router;