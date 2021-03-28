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
exports.SentComment = void 0;
var comment_1 = require("./comment");
var SentComment = /** @class */ (function (_super) {
    __extends(SentComment, _super);
    function SentComment(data) {
        return _super.call(this, data) || this;
    }
    return SentComment;
}(comment_1.Comment));
exports.SentComment = SentComment;
