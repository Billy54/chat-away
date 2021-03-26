"use strict";

var roomIds = [];

var get = function get() {
  return roomIds;
};

var put = function put(ids) {
  roomIds = ids;
};

module.exports = {
  get: get,
  put: put
};