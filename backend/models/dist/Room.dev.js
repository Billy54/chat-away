"use strict";

var mongoose = require('mongoose');

var roomSchema = new mongoose.Schema({
  members: {
    type: Array,
    required: false,
    "default": []
  },
  name: {
    type: String,
    required: false
  },
  url: {
    type: String,
    required: false,
    "default": 'assets/public.jpg'
  },
  comments: {
    type: Array,
    required: false,
    "default": []
  },
  custom: {
    type: Boolean,
    "default": false
  }
});
module.exports = mongoose.model('Room', roomSchema);