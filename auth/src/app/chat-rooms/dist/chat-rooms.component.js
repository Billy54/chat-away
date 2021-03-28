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
var user_1 = require("../Models/user");
var ChatRoomsComponent = /** @class */ (function () {
    function ChatRoomsComponent(r, userService, dataShare) {
        this.r = r;
        this.userService = userService;
        this.dataShare = dataShare;
        this.users = [];
        this.userName = '';
        this.activeRoom = 0;
        this.observers = [];
        this.active = false;
    }
    ChatRoomsComponent.prototype.ngOnDestroy = function () {
        this.observers.forEach(function (observer) {
            observer.unsubscribe();
        });
    };
    ChatRoomsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.observers.push(this.userService.getAll('users').subscribe(function (response) {
            if (response === void 0) { response = []; }
            _this.initUsers(response.users);
        }));
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
            _this.users.forEach(function (user) {
                if (user.details.id == id) {
                    _this.changeRoom(i);
                }
                i++;
            });
        }));
        //invited to new room
        this.observers.push(this.dataShare.newRoom.subscribe(function (room) {
            _this.users.push(new user_1.User(room));
        }));
    };
    ChatRoomsComponent.prototype.addUser = function (id) {
        var _this = this;
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.details.id == id)
                return;
        }
        this.observers.push(this.userService
            .getUser('users/' + id)
            .subscribe(function (response) {
            if (response === void 0) { response = []; }
            _this.users.push(new user_1.User(response.user));
        }));
    };
    ChatRoomsComponent.prototype.changeRoom = function (index) {
        if (index < this.users.length) {
            this.dataShare.notifyChange({
                name: this.users[index].details.name,
                id: this.users[index].details.id,
                status: this.users[index].status,
                avatar: this.users[index].details.avatar,
                custom: this.users[index].details.custom
            });
            this.r.navigate([
                { outlets: { chatArea: ['chat', this.users[index].details.id] } },
            ]);
            this.users[this.activeRoom].active = false;
            this.users[index].active = true;
            this.activeRoom = index;
        }
    };
    ChatRoomsComponent.prototype.updateStatus = function (data) {
        this.users.forEach(function (user) {
            if (user.details.id == data.id) {
                user.status = data.alive;
            }
        });
    };
    ChatRoomsComponent.prototype.initUsers = function (users) {
        for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
            var user = users_1[_i];
            this.users.push(new user_1.User(user));
        }
        this.dataShare.passToComponent(users);
        this.changeRoom(0);
    };
    ChatRoomsComponent.prototype.searchUser = function () {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
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
        this.dataShare["switch"](this.active);
    };
    Object.defineProperty(ChatRoomsComponent.prototype, "getUsers", {
        get: function () {
            return this.users;
        },
        enumerable: false,
        configurable: true
    });
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
