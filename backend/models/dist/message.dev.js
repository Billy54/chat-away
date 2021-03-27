"use strict";

var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
  sender: {
    type: String,
    requird: true
  },
  receiver: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  senderName: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    "default": Date.now()
  },
  roomId: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('Message', messageSchema);