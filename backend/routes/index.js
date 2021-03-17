const express = require("express");
const router = express.Router();
const Post = require('../models/User');
const {
    ensureAuthenticated,
    forwardAuthenticated
} = require('../utils/authentication');

//index route home
router.get('/', ensureAuthenticated, async(req, res) => {
    res.render('../views/index.ejs', {

    });
});
module.exports = router;