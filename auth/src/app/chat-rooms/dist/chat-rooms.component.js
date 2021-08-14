"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ChatRoomsComponent = void 0;
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var appState_1 = require("../appState");
var ChatRoomsComponent = /** @class */ (function () {
    function ChatRoomsComponent(r, userService, dataShare, authService) {
        this.r = r;
        this.userService = userService;
        this.dataShare = dataShare;
        this.authService = authService;
        this.userName = '';
        this.activeRoom = 0;
        this.observers = [];
        this.active = false;
        this.rooms = false;
    }
    ChatRoomsComponent.prototype.ngOnDestroy = function () {
        this.observers.forEach(function (observer) {
            observer.unsubscribe();
        });
        appState_1.appState.index = this.activeRoom;
    };
    ChatRoomsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (appState_1.appState.get().length > 0) {
            this.changeRoom(appState_1.appState.index);
        }
        else {
            this.observers.push(this.userService.getAll('usersAll').subscribe(function (response) {
                _this.initUsers(response.users);
            }));
        }
        //refresh users
        this.observers.push(this.dataShare.refresh.subscribe(function (id) {
            setTimeout(function () {
                _this.addUser(id);
            }, 2000);
        }));
        //update status
        this.observers.push(this.dataShare.status.subscribe(function (data) {
            _this.updateStatus(data);
        }));
        //swap current room from notifications
        this.observers.push(this.dataShare.swapRoom.subscribe(function (id) {
            var i = 0;
            appState_1.appState.get().forEach(function (user) {
                if (user.details.id == id) {
                    _this.changeRoom(i);
                }
                i++;
            });
        }));
        //invited to new room
        this.observers.push(this.dataShare.newRoom.subscribe(function (room) {
            appState_1.appState.addUser(room);
        }));
        this.observers.push(this.dataShare.roomList.subscribe(function () {
            _this.rooms = !_this.rooms;
            if (_this.rooms && _this.active) {
                _this.toggle();
            }
        }));
    };
    ChatRoomsComponent.prototype.addUser = function (id) {
        for (var _i = 0, _a = appState_1.appState.get(); _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.details.id == id)
                return;
        }
        this.observers.push(this.userService
            .getUser('usersAll/' + id)
            .subscribe(function (response) {
            if (response === void 0) { response = []; }
            appState_1.appState.addUser(response.user);
        }));
    };
    ChatRoomsComponent.prototype.changeRoom = function (index) {
        var users = appState_1.appState.get();
        if (index < users.length) {
            this.dataShare.notifyChange({
                index: index,
                name: users[index].details.name,
                id: users[index].details.id,
                status: users[index].status,
                avatar: users[index].details.avatar,
                custom: users[index].details.custom
            });
            this.r.navigate([
                { outlets: { chatArea: ['chat', users[index].details.id] } },
            ]);
            users[this.activeRoom].active = false;
            users[index].active = true;
            this.activeRoom = index;
            if (this.rooms) {
                this.rooms = false;
            }
        }
    };
    ChatRoomsComponent.prototype.updateStatus = function (data) {
        appState_1.appState.get().forEach(function (user) {
            if (user.details.id == data.id) {
                user.status = data.alive;
            }
        });
    };
    ChatRoomsComponent.prototype.initUsers = function (users) {
        if (!users) {
            return;
        }
        for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
            var user = users_1[_i];
            appState_1.appState.addUser(user);
        }
        this.changeRoom(appState_1.appState.index);
    };
    ChatRoomsComponent.prototype.searchUser = function () {
        for (var _i = 0, _a = appState_1.appState.get(); _i < _a.length; _i++) {
            var user = _a[_i];
            if (!user.details.name
                .trim()
                .toLowerCase()
                .startsWith(this.userName.trim().toLowerCase())) {
                user.isVisible = false;
            }
            else {
                user.isVisible = true;
            }
        }
    };
    ChatRoomsComponent.prototype.toggle = function () {
        this.active = !this.active;
        if (this.rooms) {
            this.rooms = false;
        }
        this.dataShare["switch"](this.active);
    };
    ChatRoomsComponent.prototype.onResize = function (event) {
        if (window.innerWidth > 500) {
            this.rooms = false;
        }
    };
    Object.defineProperty(ChatRoomsComponent.prototype, "getUsers", {
        get: function () {
            return appState_1.appState.get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChatRoomsComponent.prototype, "isDemo", {
        get: function () {
            return this.authService.isDemo();
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        core_2.HostListener('window:resize', ['$event'])
    ], ChatRoomsComponent.prototype, "onResize");
    ChatRoomsComponent = __decorate([
        core_1.Component({
            selector: 'chat-rooms',
            templateUrl: './chat-rooms.component.html',
            styleUrls: ['./chat-rooms.component.css']
        })
    ], ChatRoomsComponent);
    return ChatRoomsComponent;
}());
exports.ChatRoomsComponent = ChatRoomsComponent;
