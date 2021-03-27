"use strict";
exports.__esModule = true;
exports.Room = void 0;
var Room = /** @class */ (function () {
    function Room(list, id, rid) {
        this.commentsList = Array();
        this.senderId = '';
        this.roomId = '';
        this.commentsList = list;
        this.senderId = id;
        this.roomId = rid;
    }
    Object.defineProperty(Room.prototype, "id", {
        get: function () {
            return this.roomId;
        },
        enumerable: false,
        configurable: true
    });
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
