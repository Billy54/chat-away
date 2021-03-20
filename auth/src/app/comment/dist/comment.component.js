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
    function CommentComponent(comentFactory) {
        this.foreign = false;
        this.isFirst = true;
        this.url = '';
        this.shouldBeRendered = true;
    }
    CommentComponent.prototype.ngOnInit = function () {
        if (this.data.text == '' ||
            this.data.senderName == '' ||
            this.data.senderName == 'default' ||
            this.data.sender == 'default') {
            this.shouldBeRendered = false;
        }
    };
    __decorate([
        core_1.Input()
    ], CommentComponent.prototype, "data");
    __decorate([
        core_1.Input()
    ], CommentComponent.prototype, "foreign");
    __decorate([
        core_1.Input()
    ], CommentComponent.prototype, "isFirst");
    __decorate([
        core_1.Input()
    ], CommentComponent.prototype, "url");
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
