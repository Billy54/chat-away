"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ReceivedComment = void 0;
var comment_1 = require("./comment");
var ReceivedComment = /** @class */ (function (_super) {
    __extends(ReceivedComment, _super);
    function ReceivedComment(data, previousId) {
        var _this = _super.call(this, data) || this;
        _this.foreign = true;
        _this.consecutive(previousId, data.sender);
        return _this;
    }
    return ReceivedComment;
}(comment_1.Comment));
exports.ReceivedComment = ReceivedComment;
