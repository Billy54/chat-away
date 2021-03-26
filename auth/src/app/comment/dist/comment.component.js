"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CommentComponent = void 0;
var core_1 = require("@angular/core");
var CommentComponent = /** @class */ (function () {
    function CommentComponent(auth) {
        this.auth = auth;
        this.foreign = false;
        this.isFirst = true;
        this.shouldBeRendered = true;
        this.uid = this.auth.getUserInfo().id;
    }
    CommentComponent.prototype.ngOnInit = function () {
        if (this.data.sender == 'default') {
            this.shouldBeRendered = false;
        }
        else if (this.data.sender != this.uid) {
            this.foreign = true;
            this.isConsecutive();
        }
    };
    CommentComponent.prototype.isConsecutive = function () {
        if (this.data.sender == this.previousId) {
            this.isFirst = false;
        }
    };
    __decorate([
        core_1.Input()
    ], CommentComponent.prototype, "data");
    __decorate([
        core_1.Input()
    ], CommentComponent.prototype, "previousId");
    CommentComponent = __decorate([
        core_1.Component({
            selector: 'app-comment',
            templateUrl: './comment.component.html',
            styleUrls: ['./comment.component.css']
        })
    ], CommentComponent);
    return CommentComponent;
}());
exports.CommentComponent = CommentComponent;
