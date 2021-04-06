"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var AppComponent = /** @class */ (function () {
    function AppComponent(a, router) {
        this.router = router;
        this.title = 'Angular';
        this.authService = a;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authObserver = new rxjs_1.Observable(function (observer) {
            setInterval(function () {
                if (!_this.navBar) {
                    observer.next(true);
                }
            }, 300);
        });
        this.authObserver.subscribe(function (val) {
            _this.authService.logout('logout');
            _this.router.navigateByUrl('login');
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                _this.router.navigateByUrl(event.url);
            }
        });
    };
    Object.defineProperty(AppComponent.prototype, "navBar", {
        get: function () {
            return this.authService.isAuthenticated();
        },
        enumerable: false,
        configurable: true
    });
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
