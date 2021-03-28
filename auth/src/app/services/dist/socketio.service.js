"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SocketioService = void 0;
var core_1 = require("@angular/core");
var socket_io_client_1 = require("socket.io-client");
var SocketioService = /** @class */ (function () {
    function SocketioService(auth, forwardMessage) {
        this.auth = auth;
        this.forwardMessage = forwardMessage;
    }
    SocketioService.prototype.setupSocketConnection = function () {
        var _this = this;
        //init , connect and create aprivate room for each user
        this.socket = socket_io_client_1.io('http://localhost:5000');
        this.socket.emit('userJoin', this.auth.getUserInfo().id);
        //some one joined , possibly a new account
        this.socket.on('joined', function (data) {
            _this.forwardMessage.refreshUsers(data.id);
            _this.forwardMessage.updateStatus(data);
        });
        //listen for messages
        this.socket.on('message', function (data) {
            _this.forwardMessage.sendRemote(data.message);
        });
        //keep an eye out for anyone who might disconnect
        this.socket.on('left', function (data) {
            _this.forwardMessage.updateStatus(data);
        });
        //some one added
        this.socket.on('invite', function (room) {
            _this.forwardMessage.sendRoom(room);
            _this.socket.emit('accept', room.id);
        });
    };
    //new custom room
    SocketioService.prototype.newRoom = function (members, name) {
        this.socket.emit('newRoom', { name: name, members: members });
    };
    //send messages
    SocketioService.prototype.messageSubmit = function (message) {
        this.socket.emit('message', message);
    };
    //disconnect on logout
    SocketioService.prototype.disconnectSocket = function () {
        if (this.socket) {
            this.socket.disconnect();
        }
    };
    SocketioService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SocketioService);
    return SocketioService;
}());
exports.SocketioService = SocketioService;
