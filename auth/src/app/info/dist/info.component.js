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
var core_2 = require("@angular/core");
var appState_1 = require("../appState");
var InfoComponent = /** @class */ (function () {
    function InfoComponent(dataShare, io, auth) {
        this.dataShare = dataShare;
        this.io = io;
        this.auth = auth;
        this.slide = new core_2.EventEmitter();
        this.slideOpen = false;
        this.infoName = '';
        this.info = '';
        this.name = '';
        this.observers = [];
        this.cid = '';
        this.open = false;
    }
    InfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.observers.push(this.dataShare.openList.subscribe(function (v) {
            _this.openList(v);
        }));
        //status check
        this.observers.push(this.dataShare.status.subscribe(function (data) {
            if (_this.custom || _this.cid != data.id)
                return;
            if (_this.info == 'Active now.') {
                _this.info = 'Offline.';
            }
            else {
                _this.info = 'Active now.';
            }
        }));
        //get current
        this.observers.push(this.dataShare.message.subscribe(function (message) {
            if (message === void 0) { message = []; }
            _this.infoName = message.name;
            _this.url = message.avatar;
            _this.changeStatus(message.status);
            _this.custom = message.custom;
            _this.cid = message.id;
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
        appState_1.appState.get()[index].tik = !appState_1.appState.get()[index].tik;
    };
    InfoComponent.prototype.submit = function () {
        var members = [];
        appState_1.appState.get().forEach(function (user) {
            if (user.tik) {
                members.push(user.details.id);
                user.tik = false;
            }
        });
        members.push(this.auth.getUserInfo().id);
        if (members.length < 2 || this.name.length < 2) {
            return;
        }
        this.io.newRoom(members, this.name);
        this.openList(false);
    };
    InfoComponent.prototype.openList = function (v) {
        this.open = v;
        this.name = '';
        if (!this.open) {
            appState_1.appState.get().forEach(function (user) {
                user.tik = false;
            });
        }
    };
    InfoComponent.prototype.rooms = function () {
        this.dataShare.openRoomList();
    };
    Object.defineProperty(InfoComponent.prototype, "usersList", {
        get: function () {
            return appState_1.appState.get();
        },
        enumerable: false,
        configurable: true
    });
    InfoComponent.prototype.slider = function () {
        this.slide.emit(true);
    };
    __decorate([
        core_2.Output()
    ], InfoComponent.prototype, "slide");
    __decorate([
        core_1.Input()
    ], InfoComponent.prototype, "slideOpen");
    InfoComponent = __decorate([
        core_2.Component({
            selector: 'active-info',
            templateUrl: './info.component.html',
            styleUrls: ['./info.component.css']
        })
    ], InfoComponent);
    return InfoComponent;
}());
exports.InfoComponent = InfoComponent;
