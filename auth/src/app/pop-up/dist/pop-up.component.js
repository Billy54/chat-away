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
var appState_1 = require("../appState");
var PopUpComponent = /** @class */ (function () {
    //private usersPipe$!:Observable<any>;
    function PopUpComponent(dataShare, io) {
        this.dataShare = dataShare;
        this.io = io;
        this.selected = new core_1.EventEmitter();
    }
    PopUpComponent.prototype.ngAfterViewInit = function () {
        this.btn = this.button.nativeElement;
    };
    PopUpComponent.prototype.submit = function (index) {
        var _a;
        var user = appState_1.appState.get()[index];
        this.io.invite(user.details.id, (_a = this.details) === null || _a === void 0 ? void 0 : _a.rid);
        this.selected.emit(user);
        this.btn.click();
    };
    Object.defineProperty(PopUpComponent.prototype, "all", {
        get: function () {
            return appState_1.appState.get();
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
    __decorate([
        core_1.ViewChild('close')
    ], PopUpComponent.prototype, "button");
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
