"use strict";

var demo = [];

var putDemo = function putDemo(id) {
  demo.push(String(id));
};

var deleteDemo = function deleteDemo(id) {
  for (var i = 0; i < demo.length; i++) {
    if (demo[i] === String(id)) {
      demo.splice(i, 1);
    }
  }
};

var check = function check(id1, id2) {
  if (demo.includes(String(id1))) {
    return true;
  } else if (demo.includes(String(id2))) {
    return true;
  }

  return false;
};

module.exports = {
  putDemo: putDemo,
  deleteDemo: deleteDemo,
  check: check
};