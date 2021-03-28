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
var user_1 = require("../Models/user");
var InfoComponent = /** @class */ (function () {
    function InfoComponent(dataShare, fetchUsers, io, auth) {
        this.dataShare = dataShare;
        this.fetchUsers = fetchUsers;
        this.io = io;
        this.auth = auth;
        this.slide = new core_1.EventEmitter();
        this.infoName = '';
        this.info = '';
        this.name = '';
        this.users = [];
        this.observers = [];
        this.open = false;
    }
    InfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.observers.push(this.dataShare.openList.subscribe(function (v) {
            _this.openList(v);
        }));
        //status check
        this.observers.push(this.dataShare.status.subscribe(function (data) {
            if (_this.custom)
                return;
            if (_this.info == 'Active now.') {
                _this.info = 'Offline.';
            }
            else {
                _this.info = 'Active now.';
            }
        }));
        //status check on swap
        this.observers.push(this.dataShare.message.subscribe(function (message) {
            if (message === void 0) { message = []; }
            _this.infoName = message.name;
            _this.url = message.avatar;
            _this.changeStatus(message.status);
            _this.custom = message.custom;
        }));
    };
    InfoComponent.prototype.ngOnDestroy = function () {
        this.observers.forEach(function (observer) {
            observer.unsubscribe();
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
        this.openList(true);
    };
    InfoComponent.prototype.openList = function (v) {
        this.open = v;
        this.name = '';
        if (this.users.length < 1) {
            this.getList();
        }
        if (!this.open) {
            this.users.forEach(function (user) {
                user.active = false;
            });
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
        //should change this
        if (this.users.length > 0) {
            return;
        }
        this.fetchUsers.getAll('users').subscribe(function (response) {
            if (response === void 0) { response = []; }
            response.users.forEach(function (user) {
                if (!user.custom)
                    _this.users.push(new user_1.User(user));
            });
        });
    };
    InfoComponent.prototype.slider = function () {
        this.slide.emit(true);
    };
    __decorate([
        core_1.Output()
    ], InfoComponent.prototype, "slide");
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
