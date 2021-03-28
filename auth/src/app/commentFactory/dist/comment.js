"use strict";
exports.__esModule = true;
exports.Comment = void 0;
var Comment = /** @class */ (function () {
    function Comment(data) {
        //declare as public for now
        this.text = '';
        this.url = '';
        this.name = '';
        this.isFirst = true;
        this.foreign = false;
        this.shouldBeRendered = true;
        this.text = data.text;
        this.url = data.url;
        this.name = data.senderName;
    }
    Comment.prototype.consecutive = function (previous, id) {
        if (previous == id) {
            this.isFirst = false;
        }
    };
    return Comment;
}());
exports.Comment = Comment;
