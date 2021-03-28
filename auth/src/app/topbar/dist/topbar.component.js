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
    function TopbarComponent(authService, router, dataShareService, fileService, io) {
        this.authService = authService;
        this.router = router;
        this.dataShareService = dataShareService;
        this.fileService = fileService;
        this.io = io;
        this.notificationList = [];
        this.observers = [];
        this.profile = true;
        this.notifications = true;
        this.overlay = true;
        this.exp = 'translateX(0px)';
        this.expHeight = '197px';
        this.url = this.authService.getUserInfo().avatar;
        this.name = this.authService.getUserInfo().name;
        this.newmsg = false;
        this.fadeIn = false;
        this.active = true;
    }
    TopbarComponent.prototype.ngOnDestroy = function () {
        this.observers.forEach(function (observer) {
            observer.unsubscribe();
        });
    };
    TopbarComponent.prototype.ngAfterViewInit = function () {
        this.el = this.preview.nativeElement;
        this.file = this.imgInput.nativeElement;
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
        this.dataShareService.sendUrl(this.url);
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
    TopbarComponent.prototype.profileCheck = function () {
        this.profile = !this.profile;
        this.overlay = false;
        if (!this.notifications) {
            this.notifications = true;
        }
    };
    TopbarComponent.prototype.logout = function () {
        this.io.disconnectSocket();
        this.authService.logout('logout').subscribe(function (response) {
            if (response === void 0) { response = []; }
            console.log(response);
        });
        this.router.navigateByUrl('/login');
    };
    TopbarComponent.prototype.changeAvatar = function () {
        this.exp = 'translateX(-297px)';
        this.expHeight = '400px';
    };
    TopbarComponent.prototype.slide = function () {
        var _this = this;
        this.exp = 'translateX(0px)';
        this.expHeight = '197px';
        this.fadeIn = false;
        setTimeout(function () {
            _this.el.style.backgroundImage = 'url(' + _this.url + ')';
        }, 200);
    };
    TopbarComponent.prototype.previewAvatar = function () {
        var _this = this;
        var reader = new FileReader();
        var element = this.el;
        reader.onload = function (e) {
            element.style.backgroundImage = 'url(' + e.target.result + ')';
        };
        reader.readAsDataURL(this.file.files[0]);
        this.fadeIn = true;
        setTimeout(function () {
            _this.fadeIn = false;
        }, 500);
    };
    TopbarComponent.prototype.upload = function () {
        var _this = this;
        if (this.file && this.file.files[0]) {
            var fd = new FormData();
            fd.append('image', this.file.files[0]);
            fd.append('uid', this.authService.getUserInfo().id);
            this.observers.push(this.fileService
                .postAvatar('avatar', fd)
                .subscribe(function (response) {
                if (response === void 0) { response = []; }
                _this.url = response.path;
                _this.slide();
                _this.dataShareService.sendUrl(_this.url);
            }));
        }
    };
    TopbarComponent.prototype.browse = function (index) {
        this.dataShareService.swapCurrent(this.notificationList[index].getRoom());
        this.notificationsCheck();
    };
    TopbarComponent.prototype.navigate = function () {
        if (this.active) {
            this.router.navigateByUrl('/users');
        }
        else {
            this.router.navigateByUrl('/');
        }
        this.active = !this.active;
    };
    __decorate([
        core_1.ViewChild('imagePreview')
    ], TopbarComponent.prototype, "preview");
    __decorate([
        core_1.ViewChild('input')
    ], TopbarComponent.prototype, "imgInput");
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
