"use strict";
exports.__esModule = true;
exports.Room = void 0;
var Room = /** @class */ (function () {
    function Room(list, id) {
        this.commentsList = Array();
        this.senderId = '';
        this.lastComment = '';
        this.custom = false;
        this.commentsList = list;
        this.senderId = id;
    }
    Room.prototype.addComment = function (comment) {
        this.commentsList.push(comment);
    };
    Room.prototype.getSender = function () {
        return this.senderId;
    };
    Room.prototype.getComments = function () {
        return this.commentsList;
    };
    return Room;
}());
exports.Room = Room;
