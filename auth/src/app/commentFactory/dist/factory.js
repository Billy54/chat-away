"use strict";
exports.__esModule = true;
exports.CommentFactory = void 0;
var sentComment_1 = require("./sentComment");
var receivedComment_1 = require("./receivedComment");
var CommentFactory = /** @class */ (function () {
    function CommentFactory(uid) {
        this.userId = '';
        this.userId = uid;
    }
    CommentFactory.prototype.newComment = function (previous, data) {
        if (data.sender == this.userId) {
            return new sentComment_1.SentComment(data);
        }
        else {
            return new receivedComment_1.ReceivedComment(data, previous);
        }
    };
    return CommentFactory;
}());
exports.CommentFactory = CommentFactory;
