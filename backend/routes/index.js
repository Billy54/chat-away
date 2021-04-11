const express = require("express");
const router = express.Router();
const Post = require('../models/User');
const path = require('path');
const {
    ensureAuthenticated,
} = require('../utils/authentication');

const reqPath = path.join(__dirname, '../');

//index route home this is not activated actually 
router.get('/', ensureAuthenticated, (req, res) => {
    res.sendFile(reqPath + '/public/index.html');
});
module.exports = router;