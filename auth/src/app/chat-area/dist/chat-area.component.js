"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ChatAreaComponent = void 0;
var core_1 = require("@angular/core");
var comment_component_1 = require("../comment/comment.component");
var room_1 = require("../Models/room");
var chat_directive_1 = require("./chat.directive");
var ChatAreaComponent = /** @class */ (function () {
    function ChatAreaComponent(componentFactoryResolver, fetchData, commentsService, auth) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.fetchData = fetchData;
        this.commentsService = commentsService;
        this.auth = auth;
        this.rooms = Array();
        this.previousId = '';
    }
    ChatAreaComponent.prototype.ngOnInit = function () {
        var _this = this;
        //on room change
        this.fetchData.message.subscribe(function (data) {
            if (data.name == 'default' || data.id == _this.activeRoom)
                return;
            _this.vc = _this.appChat.viewContainerRef;
            _this.activeRoom = data.id;
            _this.getRoom();
        });
        // local append
        this.fetchData.local.subscribe(function (data) {
            _this.commentSectionInit(data);
            _this.saveLocal(_this.activeRoom, data);
        });
        //remote append
        this.fetchData.remote.subscribe(function (data) {
            if (data.custom) {
                _this.saveLocal(data.receiver, data);
                if (data.receiver == _this.activeRoom) {
                    _this.commentSectionInit(data);
                }
            }
            else {
                _this.saveLocal(data.sender, data);
                if (_this.activeRoom == data.sender) {
                    _this.commentSectionInit(data);
                }
            }
        });
    };
    ChatAreaComponent.prototype.saveLocal = function (id, data) {
        this.rooms.forEach(function (room) {
            if (room.getSender() == id) {
                room.addComment(data);
            }
        });
    };
    ChatAreaComponent.prototype.renderer = function (comments) {
        var _this = this;
        this.vc.clear();
        this.previousId = '';
        comments.forEach(function (comment) {
            _this.commentSectionInit(comment);
        });
        this.fetchData.stopLoading();
    };
    //create a comment instance for each comment
    ChatAreaComponent.prototype.commentSectionInit = function (data) {
        if (!data)
            return;
        this.vc = this.appChat.viewContainerRef;
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(comment_component_1.CommentComponent);
        var componentRef = this.vc.createComponent(componentFactory);
        componentRef.instance.data = data;
        componentRef.instance.previousId = this.previousId;
        this.previousId = data.sender;
    };
    ChatAreaComponent.prototype.getRoom = function () {
        for (var _i = 0, _a = this.rooms; _i < _a.length; _i++) {
            var room = _a[_i];
            if (room.getSender() == this.activeRoom) {
                this.renderer(room.getComments());
                return;
            }
        }
        this.fetchFromServer();
    };
    ChatAreaComponent.prototype.fetchFromServer = function () {
        var _this = this;
        var sender = this.auth.getUserInfo().id;
        this.commentsService
            .getComments('room', {
            receiver: this.activeRoom,
            sender: sender
        })
            .subscribe(function (response) {
            if (response === void 0) { response = []; }
            var room = new room_1.Room(response.comments, _this.activeRoom);
            _this.rooms.push(room);
            _this.renderer(response.comments);
        });
    };
    __decorate([
        core_1.ViewChild(chat_directive_1.ChatDirective, { static: true })
    ], ChatAreaComponent.prototype, "appChat");
    ChatAreaComponent = __decorate([
        core_1.Component({
            selector: 'chat-area',
            templateUrl: './chat-area.component.html',
            styleUrls: ['./chat-area.component.css']
        })
    ], ChatAreaComponent);
    return ChatAreaComponent;
}());
exports.ChatAreaComponent = ChatAreaComponent;
