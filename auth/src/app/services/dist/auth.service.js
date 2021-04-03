"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var jwt_decode_1 = require("jwt-decode");
var angular_jwt_1 = require("@auth0/angular-jwt");
var AuthService = /** @class */ (function () {
    function AuthService(http, er) {
        this.URL = 'https://chat-app-ang.herokuapp.com/';
        this.http = http;
        this.errorHandler = er;
        this.jwtHelper = new angular_jwt_1.JwtHelperService();
        var headers = new http_1.HttpHeaders();
        headers.append('Content-Type', 'application/json');
        this.options = { headers: headers, withCredentials: true };
    }
    //main authentication routine
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('token');
        if (!token) {
            return false;
        }
        if (this.jwtHelper.isTokenExpired(token)) {
            return false;
        }
        else {
            return true;
        }
    };
    //get info from token
    AuthService.prototype.getUserInfo = function () {
        var token = localStorage.getItem('token');
        var dec = jwt_decode_1["default"](token);
        return {
            name: dec.name,
            email: dec.email,
            id: dec.id,
            avatar: dec.avatar,
            demo: dec.demo
        };
    };
    //check demo
    AuthService.prototype.isDemo = function () {
        return this.getUserInfo().demo;
    };
    //store user info into the local storage
    AuthService.prototype.setUserInfo = function (token) {
        localStorage.setItem('token', JSON.stringify(token));
    };
    //remove user on logout
    AuthService.prototype.removeUserInfo = function () {
        localStorage.clear();
    };
    //call the server to validate
    AuthService.prototype.validate = function (email, password, uri) {
        var _this = this;
        return this.http
            .post(this.URL + uri, { email: email, password: password }, this.options)
            .pipe(operators_1.map(function (res) {
            if (res === void 0) { res = []; }
            //we wont be handling the error here
            _this.setUserInfo(res.user);
            return res;
        }));
    };
    //logout
    AuthService.prototype.logout = function (uri) {
        if (this.isAuthenticated()) {
            this.removeUserInfo();
            return this.http.get(this.URL + uri, this.options).pipe(operators_1.map(function (res) {
                if (res === void 0) { res = []; }
                return res;
            }), operators_1.catchError(this.errorHandler.handleError));
        }
        return rxjs_1.throwError('Something bad happened; please try again later.');
    };
    //register
    AuthService.prototype.register = function (name, email, password, uri) {
        var _this = this;
        return this.http
            .post(this.URL + uri, { name: name, email: email, password: password }, this.options)
            .pipe(operators_1.map(function (res) {
            if (res === void 0) { res = []; }
            _this.setUserInfo(res.user);
            return res;
        }), operators_1.catchError(this.errorHandler.handleError));
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
