"use strict";

var mongoose = require('mongoose');

var roomSchema = new mongoose.Schema({
  roomId: {
    type: String,
    required: true
  },
  comments: {
    type: Array,
    required: false
  }
});
module.exports = mongoose.model('Room', roomSchema);