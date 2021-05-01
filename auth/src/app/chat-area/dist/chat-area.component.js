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
var factory_1 = require("../commentFactory/factory");
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
        this.observers = [];
        this.factory = new factory_1.CommentFactory(this.auth.getUserInfo().id);
    }
    ChatAreaComponent.prototype.ngOnDestroy = function () {
        this.observers.forEach(function (observer) {
            observer.unsubscribe();
        });
        this.rooms = [];
    };
    ChatAreaComponent.prototype.ngOnInit = function () {
        var _this = this;
        //on room change
        this.observers.push(this.fetchData.message.subscribe(function (data) {
            if (data.id == _this.activeRoom)
                return;
            _this.vc = _this.appChat.viewContainerRef;
            _this.vc.clear();
            _this.activeRoom = data.id;
            _this.getRoom();
        }));
        // local comment
        this.observers.push(this.fetchData.local.subscribe(function (data) {
            _this.commentSectionInit(data);
            _this.saveLocal(_this.activeRoom, data);
        }));
        //received comment
        this.observers.push(this.fetchData.remote.subscribe(function (data) {
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
        }));
    };
    ChatAreaComponent.prototype.saveLocal = function (id, data) {
        this.rooms.forEach(function (room) {
            if (room.getSender() == id) {
                room.addComment(data);
            }
        });
    };
    ChatAreaComponent.prototype.renderer = function (comments, rid) {
        var _this = this;
        this.previousId = '';
        this.vc.clear();
        comments.forEach(function (comment) {
            _this.commentSectionInit(comment);
        });
        this.fetchData.stopLoading();
        this.fetchData.sendroomId(rid);
    };
    ChatAreaComponent.prototype.getRoom = function () {
        for (var _i = 0, _a = this.rooms; _i < _a.length; _i++) {
            var room = _a[_i];
            if (room.getSender() == this.activeRoom) {
                this.renderer(room.getComments(), room.id);
                return;
            }
        }
        this.fetchFromServer();
    };
    ChatAreaComponent.prototype.fetchFromServer = function () {
        var _this = this;
        this.observers.push(this.commentsService
            .getComments('room', {
            receiver: this.activeRoom,
            sender: this.auth.getUserInfo().id
        })
            .subscribe(function (response) {
            var room = new room_1.Room(response.comments, response.room, response.rid);
            _this.rooms.push(room);
            _this.renderer(response.comments, room.id);
        }));
    };
    //create a comment instance for each comment
    ChatAreaComponent.prototype.commentSectionInit = function (data) {
        this.vc = this.appChat.viewContainerRef;
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(comment_component_1.CommentComponent);
        var componentRef = this.vc.createComponent(componentFactory);
        var newComment = this.factory.newComment(this.previousId, data);
        componentRef.instance.data = newComment;
        this.previousId = data.sender;
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
