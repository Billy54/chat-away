"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.DataService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var DataService = /** @class */ (function () {
    function DataService(http, er, url) {
        this.http = http;
        this.errorHandler = er;
        this.url = url;
        var headers = new http_1.HttpHeaders();
        headers.append('Content-Type', 'application/json');
        this.options = { headers: headers, withCredentials: true };
    }
    //get all but one
    DataService.prototype.getAll = function (uri) {
        return this.http
            .get(this.url + uri, this.options)
            .pipe(operators_1.catchError(this.errorHandler.handleError));
    };
    DataService.prototype.getLastComment = function (uri) {
        return this.http
            .get(this.url + uri, this.options)
            .pipe(operators_1.catchError(this.errorHandler.handleError));
    };
    DataService.prototype.getComments = function (uri, roomData) {
        return this.http
            .post(this.url + uri, roomData, this.options)
            .pipe(operators_1.catchError(this.errorHandler.handleError));
    };
    //get spesific user
    DataService.prototype.getUser = function (uri) {
        return this.http
            .get(this.url + uri, this.options)
            .pipe(operators_1.catchError(this.errorHandler.handleError));
    };
    //post avatar
    DataService.prototype.postAvatar = function (uri, file) {
        return this.http
            .post(this.url + uri, file, this.options)
            .pipe(operators_1.catchError(this.errorHandler.handleError));
    };
    //get avatar
    DataService.prototype.getAvatar = function (uri) {
        return this.http
            .get(this.url + uri, this.options)
            .pipe(operators_1.catchError(this.errorHandler.handleError));
    };
    DataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __param(2, core_1.Inject(String))
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
