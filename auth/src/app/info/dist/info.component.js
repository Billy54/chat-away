"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InfoComponent = void 0;
var core_1 = require("@angular/core");
var InfoComponent = /** @class */ (function () {
    function InfoComponent(dataShare) {
        this.dataShare = dataShare;
        this.publicId = '60539a6801ac562984ae4f93';
        this.infoName = '';
        this.info = '';
    }
    InfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataShare.status.subscribe(function (id) {
            if (id == '' || _this.cId == _this.publicId)
                return;
            if (_this.info == 'Active now.') {
                _this.info = 'Offline.';
            }
            else {
                _this.info = 'Active now.';
            }
        });
        this.dataShare.message.subscribe(function (message) {
            if (message === void 0) { message = []; }
            if (message.name != 'default') {
                _this.infoName = message.name;
                _this.url = message.avatar;
                _this.changeStatus(message.status);
            }
        });
    };
    InfoComponent.prototype.changeStatus = function (status) {
        if (status) {
            this.info = 'Active now.';
        }
        else {
            this.info = 'Offline.';
        }
    };
    InfoComponent = __decorate([
        core_1.Component({
            selector: 'active-info',
            templateUrl: './info.component.html',
            styleUrls: ['./info.component.css']
        })
    ], InfoComponent);
    return InfoComponent;
}());
exports.InfoComponent = InfoComponent;
