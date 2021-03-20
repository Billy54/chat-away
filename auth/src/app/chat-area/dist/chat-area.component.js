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
    function ChatAreaComponent(componentFactoryResolver, fetchData, commentsService, auth, fileService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.fetchData = fetchData;
        this.commentsService = commentsService;
        this.auth = auth;
        this.fileService = fileService;
        this.rooms = Array();
        this.track = 0;
        this.public = '60539a6801ac562984ae4f93';
        this.uid = this.auth.getUserInfo().id;
        this.avatar = '';
    }
    ChatAreaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchData.message.subscribe(function (data) {
            if (data.name == 'default')
                return;
            if (data.id == _this.activeRoom)
                return;
            _this.vc = _this.appChat.viewContainerRef;
            _this.vc.clear();
            _this.activeRoom = data.id;
            _this.fetchUrl();
        });
        // local append
        this.fetchData.local.subscribe(function (data) {
            _this.commentSectionInit(data);
            _this.rooms.forEach(function (room) {
                if (room.getSender() == _this.activeRoom)
                    room.addComment(data);
            });
        });
        //remote append
        this.fetchData.remote.subscribe(function (data) {
            if (_this.activeRoom == data.sender) {
                _this.commentSectionInit(data);
            }
            if (data.receiver == _this.public) {
                _this.commentSectionInit(data);
            }
            _this.rooms.forEach(function (room) {
                if (room.getSender() == data.sender)
                    room.addComment(data);
            });
        });
    };
    ChatAreaComponent.prototype.renderer = function (comments) {
        var _this = this;
        this.track = 0;
        comments.forEach(function (comment) {
            _this.commentSectionInit(comment);
        });
    };
    //create a comment instance for each comment
    ChatAreaComponent.prototype.commentSectionInit = function (data) {
        if (!data)
            return;
        this.vc = this.appChat.viewContainerRef;
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(comment_component_1.CommentComponent);
        var componentRef = this.vc.createComponent(componentFactory);
        //private room
        if (data.receiver == this.uid) {
            this.track++;
            if (this.track > 1) {
                componentRef.instance.isFirst = false;
            }
            componentRef.instance.foreign = true;
            //public room
        }
        else if (data.receiver == this.public && data.sender != this.uid) {
            componentRef.instance.foreign = true;
        }
        else {
            this.track = 0;
        }
        componentRef.instance.data = data;
        componentRef.instance.url = this.avatar;
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
        this.commentsService
            .getComments('room', {
            receiver: this.activeRoom,
            sender: this.auth.getUserInfo().id
        })
            .subscribe(function (response) {
            if (response === void 0) { response = []; }
            var room = new room_1.Room(response.comments, _this.activeRoom);
            _this.rooms.push(room);
            _this.renderer(response.comments);
        });
    };
    ChatAreaComponent.prototype.fetchUrl = function () {
        var _this = this;
        this.fileService
            .getAvatar('avatar/' + this.activeRoom)
            .subscribe(function (response) {
            if (response === void 0) { response = []; }
            _this.avatar = response.url;
            _this.getRoom();
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
