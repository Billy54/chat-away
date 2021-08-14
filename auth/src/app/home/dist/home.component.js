"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataShare, r) {
        this.dataShare = dataShare;
        this.r = r;
        this.slide = false;
        this.fade = false;
        this.loader = false;
        this.observers = [];
    }
    HomeComponent.prototype.ngOnDestroy = function () {
        this.observers.forEach(function (observer) {
            observer.unsubscribe();
        });
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.el = this.chatArea.nativeElement;
        this.observers.push(this.dataShare.local.subscribe(function (d) {
            _this.smoothScrolling();
        }));
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //room switched
        this.observers.push(this.dataShare.message.subscribe(function (message) {
            if (message === void 0) { message = []; }
            _this.loader = true;
            _this.smoothScrolling();
            _this.fadeOut();
        }));
        //stop the loader
        this.observers.push(this.dataShare.loader.subscribe(function () {
            _this.loader = false;
            _this.smoothScrolling();
        }));
    };
    //scroll to bottom
    HomeComponent.prototype.smoothScrolling = function () {
        var _this = this;
        setTimeout(function () {
            _this.el.scrollTop = _this.el.scrollHeight - _this.el.clientHeight;
        }, 200);
    };
    HomeComponent.prototype.slideRight = function () {
        this.slide = !this.slide;
    };
    HomeComponent.prototype.fadeOut = function () {
        var _this = this;
        this.fade = true;
        setTimeout(function () {
            _this.fade = false;
        }, 800);
    };
    __decorate([
        core_1.ViewChild('chat')
    ], HomeComponent.prototype, "chatArea");
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
