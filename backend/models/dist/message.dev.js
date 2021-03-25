"use strict";

var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
  userId: {
    type: String,
    requird: true
  },
  text: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  roomId: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('Message', messageSchema);