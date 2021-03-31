"use strict";
exports.__esModule = true;
exports.Notification = void 0;
var common_1 = require("@angular/common");
var Notification = /** @class */ (function () {
    function Notification(data) {
        this.name = '';
        this.custom = false;
        this.url = '';
        this.receiver = '';
        this.sender = '';
        this.text = '';
        this.date = common_1.formatDate(new Date(), 'dd/MM/yyyy hh:mm:ss a', 'en-US', '+0530');
        this.name = data.senderName;
        this.sender = data.sender;
        this.receiver = data.receiver;
        this.url = data.url;
        this.custom = data.custom;
        this.text = data.text;
    }
    Notification.prototype.getRoom = function () {
        if (this.custom) {
            return this.receiver;
        }
        else {
            return this.sender;
        }
    };
    return Notification;
}());
exports.Notification = Notification;
