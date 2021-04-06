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
var router_1 = require("@angular/router");
var notification_1 = require("../Models/notification");
var operators_1 = require("rxjs/operators");
var TopbarComponent = /** @class */ (function () {
    function TopbarComponent(router, dataShareService, io, authService) {
        this.router = router;
        this.dataShareService = dataShareService;
        this.io = io;
        this.authService = authService;
        this.notificationList = [];
        this.observers = [];
        this.notifications = true;
        this.profile = true;
        this.overlay = true;
        this.newmsg = false;
        this.active = true;
    }
    TopbarComponent.prototype.ngOnDestroy = function () {
        this.observers.forEach(function (observer) {
            observer.unsubscribe();
        });
    };
    TopbarComponent.prototype.ngAfterViewInit = function () {
        this.io.setupSocketConnection();
    };
    TopbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.observers.push(this.dataShareService.remote.subscribe(function (data) {
            _this.notificationList.unshift(new notification_1.Notification(data));
            if (!_this.notifications) {
                _this.newmsg = false;
            }
            else {
                _this.newmsg = true;
            }
        }));
        //keep track of our current url
        this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
            .subscribe(function (event) {
            if (event.url.startsWith('/users')) {
                _this.active = false;
            }
            else if (event.url.startsWith('/logout')) {
                localStorage.removeItem('token');
            }
            else {
                _this.active = true;
            }
        });
    };
    TopbarComponent.prototype.overlayCheck = function () {
        this.profile = true;
        this.notifications = true;
        this.overlay = true;
    };
    TopbarComponent.prototype.notificationsCheck = function () {
        this.notifications = !this.notifications;
        if (!this.notifications) {
            this.newmsg = false;
        }
        this.overlay = false;
        if (!this.profile) {
            this.profile = true;
        }
    };
    TopbarComponent.prototype.notSwap = function (v) {
        this.notifications = v;
    };
    TopbarComponent.prototype.ovSwap = function (v) {
        this.overlay = v;
        this.profile = v;
    };
    TopbarComponent.prototype.logout = function () {
        this.io.disconnectSocket();
        this.authService.logout('logout').subscribe(function (response) {
            console.log(response);
        });
        this.router.navigateByUrl('/login');
    };
    TopbarComponent.prototype.browse = function (index) {
        this.dataShareService.swapCurrent(this.notificationList[index].getRoom());
        this.notificationsCheck();
    };
    TopbarComponent.prototype.users = function () {
        this.active = false;
        this.router.navigateByUrl('users');
    };
    TopbarComponent.prototype.home = function () {
        this.active = true;
        this.router.navigateByUrl('');
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
