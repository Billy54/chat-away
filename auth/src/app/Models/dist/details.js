"use strict";
exports.__esModule = true;
exports.Details = void 0;
var Details = /** @class */ (function () {
    function Details(url, names, id) {
        this.url = url;
        this.names = names;
        this.id = id;
    }
    Object.defineProperty(Details.prototype, "avatar", {
        get: function () {
            return this.url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Details.prototype, "rid", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Details.prototype, "unames", {
        get: function () {
            return this.names;
        },
        enumerable: false,
        configurable: true
    });
    return Details;
}());
exports.Details = Details;
