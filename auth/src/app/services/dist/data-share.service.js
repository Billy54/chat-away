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
var DataShareService = /** @class */ (function () {
    //emit to the subscribers
    function DataShareService() {
        this.modalSwitch = new rxjs_1.BehaviorSubject('default');
        this.currentMessage = this.modalSwitch.asObservable();
        //change current user info header
        this.changeName = new rxjs_1.BehaviorSubject({
            name: 'default',
            room: 0
        });
        this.message = this.changeName.asObservable();
        //pass comment data to chatArea for new comments!!!
        this.commentData = new rxjs_1.BehaviorSubject({
            sender: 'default'
        });
        this.remote = this.commentData.asObservable();
        //pass comment data to chatArea for new comments!!!
        this.localData = new rxjs_1.BehaviorSubject({
            sender: 'default'
        });
        this.local = this.localData.asObservable();
        //potentially some one mede a new account so we need to render them on the list
        this.refreshRooms = new rxjs_1.BehaviorSubject('');
        this.refresh = this.refreshRooms.asObservable();
        //update status
        this.userStatus = new rxjs_1.BehaviorSubject('');
        this.status = this.userStatus.asObservable();
        //fetchRooms
        this.userIds = new rxjs_1.BehaviorSubject({});
        this.userIdsMessage = this.userStatus.asObservable();
        //send new url to chat room
        this.updateUrl = new rxjs_1.BehaviorSubject('');
        this.changeUrl = this.updateUrl.asObservable();
        //swap current room
        this.swap = new rxjs_1.BehaviorSubject('');
        this.swapRoom = this.swap.asObservable();
        //room loader
        this.load = new rxjs_1.BehaviorSubject(false);
        this.loader = this.load.asObservable();
        //room loader
        this.room = new rxjs_1.BehaviorSubject({});
        this.newRoom = this.room.asObservable();
    }
    DataShareService.prototype.registerModal = function (hidden) {
        this.modalSwitch.next(hidden);
    };
    DataShareService.prototype.notifyChange = function (data) {
        if (data.sender == 'default')
            return;
        this.changeName.next(data);
    };
    DataShareService.prototype.sendRemote = function (d) {
        this.commentData.next(d);
    };
    DataShareService.prototype.sendlocal = function (d) {
        this.localData.next(d);
    };
    DataShareService.prototype.refreshUsers = function (id) {
        if (id == '')
            return;
        this.refreshRooms.next(id);
    };
    DataShareService.prototype.updateStatus = function (id) {
        if (id == '')
            return;
        this.userStatus.next(id);
    };
    DataShareService.prototype.sendIds = function (ids) {
        if (ids == '')
            return;
        this.userIds.next(ids);
    };
    DataShareService.prototype.sendUrl = function (url) {
        if (!url)
            return;
        this.updateUrl.next(url);
    };
    DataShareService.prototype.swapCurrent = function (id) {
        if (!id)
            return;
        this.swap.next(id);
    };
    DataShareService.prototype.stopLoading = function () {
        this.load.next(true);
    };
    DataShareService.prototype.sendRoom = function (room) {
        this.room.next(room);
    };
    DataShareService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DataShareService);
    return DataShareService;
}());
exports.DataShareService = DataShareService;
