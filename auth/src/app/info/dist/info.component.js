"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InfoComponent = void 0;
var core_1 = require("@angular/core");
var user_1 = require("../chat-rooms/user");
var InfoComponent = /** @class */ (function () {
    function InfoComponent(dataShare, fetchUsers, io, auth) {
        this.dataShare = dataShare;
        this.fetchUsers = fetchUsers;
        this.io = io;
        this.auth = auth;
        this.publicId = '60539a6801ac562984ae4f93';
        this.infoName = '';
        this.info = '';
        this.name = '';
        this.users = [];
        this.open = false;
    }
    InfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataShare.status.subscribe(function (data) {
            if (data.id == '' || _this.cId == _this.publicId)
                return;
            if (_this.info == 'Active now.') {
                _this.info = 'Offline.';
            }
            else {
                _this.info = 'Active now.';
            }
        });
        this.dataShare.message.subscribe(function (message) {
            if (message === void 0) { message = []; }
            if (message.name != 'default') {
                _this.infoName = message.name;
                _this.url = message.avatar;
                _this.changeStatus(message.status);
                _this.cId = message.id;
            }
        });
    };
    InfoComponent.prototype.changeStatus = function (status) {
        if (status) {
            this.info = 'Active now.';
        }
        else {
            this.info = 'Offline.';
        }
    };
    InfoComponent.prototype.select = function (index) {
        this.users[index].active = !this.users[index].active;
    };
    InfoComponent.prototype.submit = function () {
        var members = [];
        this.users.forEach(function (user) {
            if (user.active) {
                members.push(user.details.id);
                user.active = false;
            }
        });
        members.push(this.auth.getUserInfo().id);
        if (members.length < 2 || this.name.length < 2) {
            return;
        }
        this.io.newRoom(members, this.name);
        this.openList();
    };
    InfoComponent.prototype.openList = function () {
        this.name = '';
        this.open = !this.open;
        if (this.users.length < 1) {
            this.getList();
        }
    };
    Object.defineProperty(InfoComponent.prototype, "usersList", {
        get: function () {
            return this.users;
        },
        enumerable: false,
        configurable: true
    });
    InfoComponent.prototype.getList = function () {
        var _this = this;
        if (this.users.length > 0) {
            return;
        }
        this.fetchUsers.getAll('users').subscribe(function (response) {
            if (response === void 0) { response = []; }
            response.users.forEach(function (user) {
                if (user.id != _this.publicId) {
                    _this.users.push(new user_1.User(user));
                }
            });
        });
    };
    InfoComponent = __decorate([
        core_1.Component({
            selector: 'active-info',
            templateUrl: './info.component.html',
            styleUrls: ['./info.component.css']
        })
    ], InfoComponent);
    return InfoComponent;
}());
exports.InfoComponent = InfoComponent;
