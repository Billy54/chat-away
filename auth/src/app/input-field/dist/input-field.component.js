"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InputFieldComponent = void 0;
var core_1 = require("@angular/core");
var InputFieldComponent = /** @class */ (function () {
    function InputFieldComponent(forwardMessage, auth, io) {
        this.forwardMessage = forwardMessage;
        this.auth = auth;
        this.io = io;
        this.receiver = '';
        this.comment = '';
    }
    InputFieldComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.forwardMessage.message.subscribe(function (message) {
            if (message === void 0) { message = []; }
            if (message.name != 'default') {
                _this.receiver = message.id;
            }
        });
    };
    InputFieldComponent.prototype.newComment = function () {
        if (this.comment.trim().length < 2) {
            return;
        }
        //send to chat area
        this.forwardMessage.sendlocal({
            sender: this.auth.getUserInfo().id,
            senderName: this.auth.getUserInfo().name,
            receiver: this.receiver,
            text: this.comment.trim()
        });
        //emit to server
        this.io.messageSubmit({
            sender: this.auth.getUserInfo().id,
            senderName: this.auth.getUserInfo().name,
            receiver: this.receiver,
            text: this.comment.trim()
        });
        this.comment = '';
    };
    InputFieldComponent = __decorate([
        core_1.Component({
            selector: 'input-field',
            templateUrl: './input-field.component.html',
            styleUrls: ['./input-field.component.css']
        })
    ], InputFieldComponent);
    return InputFieldComponent;
}());
exports.InputFieldComponent = InputFieldComponent;
