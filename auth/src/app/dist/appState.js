"use strict";
exports.__esModule = true;
exports.appState = void 0;
var user_1 = require("./Models/user");
//static fields holding the most important data of the app
//so every component can use them independently
var appState = /** @class */ (function () {
    function appState() {
    }
    appState.get = function () {
        return this.users;
    };
    appState.addUser = function (user) {
        this.users.push(new user_1.User(user));
    };
    appState.addRoom = function (room) {
        this.rooms.push(room);
    };
    appState.getRooms = function () {
        return this.rooms;
    };
    appState.clear = function () {
        this.users = [];
        this.rooms = [];
        this.index = 0;
    };
    appState.users = [];
    appState.rooms = [];
    appState.index = 0;
    return appState;
}());
exports.appState = appState;
