"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TopbarComponent = void 0;
var core_1 = require("@angular/core");
var notification_1 = require("../Models/notification");
var TopbarComponent = /** @class */ (function () {
    function TopbarComponent(a, r, io, dataShare, ar) {
        this.notificationList = [];
        this.profile = true;
        this.notifications = true;
        this.overlay = true;
        this.authService = a;
        this.router = r;
        this.io = io;
        this.dataShareService = dataShare;
        this.activatedRoute = ar;
    }
    TopbarComponent.prototype.ngOnDestroy = function () {
        this.urlObserver.unsubscribe();
    };
    TopbarComponent.prototype.overlayCheck = function () {
        this.profile = true;
        this.notifications = true;
        this.overlay = true;
    };
    TopbarComponent.prototype.notificationsCheck = function () {
        this.notifications = !this.notifications;
        this.overlay = false;
        if (!this.profile) {
            this.profile = true;
        }
    };
    TopbarComponent.prototype.profileCheck = function () {
        this.profile = !this.profile;
        this.overlay = false;
        if (!this.notifications) {
            this.notifications = true;
        }
    };
    Object.defineProperty(TopbarComponent.prototype, "name", {
        get: function () {
            return this.authService.getUserInfo().name;
        },
        enumerable: false,
        configurable: true
    });
    TopbarComponent.prototype.logout = function () {
        this.io.disconnectSocket();
        this.authService.logout('logout').subscribe(function (response) {
            if (response === void 0) { response = []; }
            console.log(response);
        });
        this.router.navigateByUrl('/login');
    };
    TopbarComponent.prototype.appendNotification = function (data) {
        var notification = new notification_1.Notification();
        notification.date = Date.now().toString();
        notification.name = data.senderName;
        //notification.id = data.id;
        this.notificationList.push(notification);
    };
    TopbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataShareService.remote.subscribe(function (data) {
            if (data.sender == 'default')
                return;
            _this.appendNotification(data);
        });
        this.urlObserver = this.router.events.subscribe(function (event) {
            if (event.url == '/logout') {
                console.log(event);
                _this.logout();
            }
        });
    };
    TopbarComponent = __decorate([
        core_1.Component({
            selector: 'app-topbar',
            templateUrl: './topbar.component.html',
            styleUrls: ['./topbar.component.css']
        })
    ], TopbarComponent);
    return TopbarComponent;
}());
exports.TopbarComponent = TopbarComponent;
