"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DataShareService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var rxjs_2 = require("rxjs");
var DataShareService = /** @class */ (function () {
    //emit to the subscribers
    function DataShareService() {
        //change current user info header , buffer size = 1 cache always the last emmit
        this.changeName = new rxjs_2.ReplaySubject(1);
        this.message = this.changeName.asObservable();
        //pass comment data to chatArea for new comments!!!
        this.commentData = new rxjs_2.ReplaySubject(1);
        this.remote = this.commentData.asObservable();
        //pass comment data to chatArea for new comments!!!
        this.localData = new rxjs_2.ReplaySubject(1);
        this.local = this.localData.asObservable();
        //potentially some one made a new account so we need to render them on the list
        this.refreshRooms = new rxjs_1.Subject();
        this.refresh = this.refreshRooms.asObservable();
        //update status
        this.userStatus = new rxjs_2.ReplaySubject(1);
        this.status = this.userStatus.asObservable();
        //send new url to chat room
        this.updateUrl = new rxjs_2.ReplaySubject(1);
        this.changeUrl = this.updateUrl.asObservable();
        //swap current room
        this.swap = new rxjs_2.ReplaySubject(1);
        this.swapRoom = this.swap.asObservable();
        //room loader
        this.load = new rxjs_2.ReplaySubject(1);
        this.loader = this.load.asObservable();
        //invited to custom room
        this.room = new rxjs_2.ReplaySubject(1);
        this.newRoom = this.room.asObservable();
        //in which room we will be saving the comments
        this.roomId = new rxjs_1.Subject();
        this.writeToRoom = this.roomId.asObservable();
        //open new room list
        this.opener = new rxjs_1.Subject();
        this.openList = this.opener.asObservable();
        //in which room we will be saving the comments
        this.users = new rxjs_1.Subject();
        this.passUsers = this.users.asObservable();
    }
    DataShareService.prototype.notifyChange = function (data) {
        this.changeName.next(data);
    };
    DataShareService.prototype.sendRemote = function (d) {
        this.commentData.next(d);
    };
    DataShareService.prototype.sendlocal = function (d) {
        this.localData.next(d);
    };
    DataShareService.prototype.refreshUsers = function (id) {
        this.refreshRooms.next(id);
    };
    DataShareService.prototype.updateStatus = function (id) {
        this.userStatus.next(id);
    };
    DataShareService.prototype.sendUrl = function (url) {
        this.updateUrl.next(url);
    };
    DataShareService.prototype.swapCurrent = function (id) {
        this.swap.next(id);
    };
    DataShareService.prototype.stopLoading = function () {
        this.load.next(true);
    };
    DataShareService.prototype.sendRoom = function (room) {
        this.room.next(room);
    };
    DataShareService.prototype.sendroomId = function (id) {
        this.roomId.next(id);
    };
    DataShareService.prototype["switch"] = function (state) {
        this.opener.next(state);
    };
    DataShareService.prototype.passToComponent = function (users) {
        this.users.next(users);
    };
    DataShareService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DataShareService);
    return DataShareService;
}());
exports.DataShareService = DataShareService;
