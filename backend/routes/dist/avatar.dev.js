"use strict";

var express = require('express');

var router = express.Router();

var User = require('../models/User');

var path = require('path');

var _require = require("../utils/helpers"),
    updateAvatar = _require.updateAvatar;

var _require2 = require("../utils/authentication"),
    ensureAuthenticated = _require2.ensureAuthenticated; //file api , will be storing the files on the server


router.post("/avatar", ensureAuthenticated, function (req, res) {
  var id = req.body.uid;
  var sampleFile = req.files.image;
  var uploadPath = path.join(__dirname, '../') + '/public/assets/' + sampleFile.name;
  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).json({
      msg: 'could not be saved'
    });
    return updateAvatar('assets/' + sampleFile.name, id).then(function () {
      return res.status(200).json({
        path: 'assets/' + sampleFile.name
      });
    })["catch"](function (err) {
      return res.status(500).json({
        msg: 'could not be saved'
      });
    });
  });
}); //get the url

router.get("/avatar/:uid", ensureAuthenticated, function (req, res) {
  User.findOne({
    _id: req.params.uid
  }).then(function (user) {
    res.status(200).json({
      url: user.avatar
    });
  })["catch"](function (er) {
    res.status(500).json({
      er: er
    });
  });
});
module.exports = router;