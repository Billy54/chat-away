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
var user_1 = require("./user");
var ChatRoomsComponent = /** @class */ (function () {
    function ChatRoomsComponent(r, userService, dataShare) {
        this.r = r;
        this.userService = userService;
        this.dataShare = dataShare;
        this.users = [];
        this.userName = '';
        this.activeRoom = 0;
    }
    ChatRoomsComponent.prototype.ngAfterViewInit = function () { };
    ChatRoomsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAll('users').subscribe(function (response) {
            if (response === void 0) { response = []; }
            for (var _i = 0, _a = response.users; _i < _a.length; _i++) {
                var user = _a[_i];
                var newUser = new user_1.User();
                newUser.details = user;
                newUser.status = user.alive;
                _this.users.push(newUser);
            }
            _this.changeRoom(0);
        });
        this.dataShare.refresh.subscribe(function (id) {
            if (id == '')
                return;
            setTimeout(function () {
                _this.addUser(id);
            }, 2500);
        });
        this.dataShare.status.subscribe(function (id) {
            _this.updateStatus(id);
        });
    };
    Object.defineProperty(ChatRoomsComponent.prototype, "getUsers", {
        get: function () {
            return this.users;
        },
        enumerable: false,
        configurable: true
    });
    ChatRoomsComponent.prototype.addUser = function (id) {
        var _this = this;
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.details.id == id)
                return;
        }
        this.userService.getUser('users/' + id).subscribe(function (response) {
            if (response === void 0) { response = []; }
            var newUser = new user_1.User();
            newUser.details = response.user;
            newUser.status = response.user.alive;
            _this.users.push(newUser);
        });
    };
    ChatRoomsComponent.prototype.changeRoom = function (index) {
        if (index < this.users.length) {
            this.dataShare.notifyChange(this.users[index].details.name, this.users[index].details.id, this.users[index].status);
            this.r.navigate([
                { outlets: { chatArea: ['chat', this.users[index].details.id] } },
            ]);
            this.users[this.activeRoom].active = false;
            this.users[index].active = true;
            this.activeRoom = index;
        }
    };
    ChatRoomsComponent.prototype.updateStatus = function (id) {
        if (id == '')
            return;
        this.users.forEach(function (user) {
            if (user.details.id == id) {
                user.status = !user.status;
            }
        });
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
