"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PopUpComponent = void 0;
var core_1 = require("@angular/core");
var user_1 = require("../Models/user");
var PopUpComponent = /** @class */ (function () {
    //private usersPipe$!:Observable<any>;
    function PopUpComponent(dataShare, io) {
        this.dataShare = dataShare;
        this.io = io;
        this.selected = new core_1.EventEmitter();
        this.users = [];
        this.observers = [];
    }
    PopUpComponent.prototype.ngOnChanges = function (changes) {
        //console.log(this.details);
    };
    PopUpComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get users
        //this.users$ = this.dataShare.passUsers
        this.observers.push(this.dataShare.passUsers.subscribe(function (users) {
            for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
                var user = users_1[_i];
                if (!user.custom) {
                    _this.users.push(new user_1.User(user));
                }
            }
        }));
    };
    PopUpComponent.prototype.ngOnDestroy = function () {
        this.observers.forEach(function (observer) {
            observer.unsubscribe();
        });
    };
    PopUpComponent.prototype.submit = function (index) {
        var _a;
        this.io.invite(this.users[index].details.id, (_a = this.details) === null || _a === void 0 ? void 0 : _a.rid);
        this.selected.emit(this.users[index]);
    };
    Object.defineProperty(PopUpComponent.prototype, "all", {
        get: function () {
            return this.users;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        core_1.Input()
    ], PopUpComponent.prototype, "details");
    __decorate([
        core_1.Output()
    ], PopUpComponent.prototype, "selected");
    PopUpComponent = __decorate([
        core_1.Component({
            selector: 'pop-up',
            templateUrl: './pop-up.component.html',
            styleUrls: ['./pop-up.component.css']
        })
    ], PopUpComponent);
    return PopUpComponent;
}());
exports.PopUpComponent = PopUpComponent;
