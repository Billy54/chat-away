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
    function TopbarComponent(a, r, io, dataShare, fileService, userService) {
        this.fileService = fileService;
        this.userService = userService;
        this.notificationList = [];
        this.profile = true;
        this.notifications = true;
        this.overlay = true;
        this.exp = 'translateX(0px)';
        this.expHeight = '197px';
        this.url = '';
        this.name = '';
        this.authService = a;
        this.router = r;
        this.io = io;
        this.dataShareService = dataShare;
    }
    TopbarComponent.prototype.ngAfterViewInit = function () {
        this.el = this.preview.nativeElement;
        this.file = this.imgInput.nativeElement;
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
    TopbarComponent.prototype.changeAvatar = function () {
        this.exp = 'translateX(-297px)';
        this.expHeight = '400px';
    };
    TopbarComponent.prototype.slide = function () {
        var _this = this;
        this.exp = 'translateX(0px)';
        this.expHeight = '197px';
        setTimeout(function () {
            _this.el.style.backgroundImage = 'url(' + _this.url + ')';
        }, 200);
    };
    TopbarComponent.prototype.previewAvatar = function () {
        var reader = new FileReader();
        var element = this.el;
        reader.onload = function (e) {
            element.style.backgroundImage = 'url(' + e.target.result + ')';
        };
        reader.readAsDataURL(this.file.files[0]);
    };
    TopbarComponent.prototype.upload = function () {
        var _this = this;
        if (this.file && this.file.files[0]) {
            var fd = new FormData();
            fd.append('image', this.file.files[0]);
            this.fileService
                .postAvatar('avatar', fd)
                .subscribe(function (response) {
                if (response === void 0) { response = []; }
                _this.url = response.path;
                _this.slide();
            });
        }
    };
    TopbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataShareService.remote.subscribe(function (data) {
            if (data.sender == 'default')
                return;
            _this.appendNotification(data);
        });
        this.userService
            .getUser('users/' + this.authService.getUserInfo().id)
            .subscribe(function (response) {
            if (response === void 0) { response = []; }
            _this.name = response.user.name;
            _this.url = response.user.avatar;
        });
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
