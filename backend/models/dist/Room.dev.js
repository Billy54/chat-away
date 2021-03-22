"use strict";

var mongoose = require('mongoose');

var roomSchema = new mongoose.Schema({
  roomId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false
  },
  url: {
    type: String,
    required: false,
    "default": 'assets/blank.png'
  },
  comments: {
    type: Array,
    required: false
  }
});
module.exports = mongoose.model('Room', roomSchema);