"use strict";
exports.__esModule = true;
exports.Notification = void 0;
var Notification = /** @class */ (function () {
    function Notification() {
        this.name = '';
        this.id = '';
        this.url = '';
        this.receiver = '';
        this.sender = '';
        this.publicId = '60539a6801ac562984ae4f93';
    }
    Notification.prototype.getRoom = function () {
        if (this.receiver == this.publicId) {
            return this.receiver;
        }
        else {
            return this.sender;
        }
    };
    return Notification;
}());
exports.Notification = Notification;
