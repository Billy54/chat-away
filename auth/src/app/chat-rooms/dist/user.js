"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(userData) {
        this.lastComment = 'Click to start chatting.';
        this.status = true;
        this.isVisible = true;
        this.active = false;
        this.details = userData;
        if (userData.id == '60539a6801ac562984ae4f93') {
            this.status == true;
        }
        else if (userData.alive == true || userData.alive == false) {
            this.status = userData.alive;
        }
    }
    return User;
}());
exports.User = User;
