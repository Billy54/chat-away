"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(userData) {
        this.status = true;
        this.isVisible = true;
        this.active = false;
        this.tik = false;
        this.details = userData;
        if (userData.alive == true || userData.alive == false) {
            this.status = userData.alive;
        }
    }
    return User;
}());
exports.User = User;
