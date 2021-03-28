"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.RoomInfoComponent = void 0;
var core_1 = require("@angular/core");
var details_1 = require("../Models/details");
var user_1 = require("../Models/user");
var RoomInfoComponent = /** @class */ (function () {
    function RoomInfoComponent(dataShare, userService, auth) {
        this.dataShare = dataShare;
        this.userService = userService;
        this.auth = auth;
        this.info = [];
        this.users = [];
        this.observers = [];
    }
    RoomInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.observers.push(this.dataShare.message.subscribe(function (data) {
            _this.displayInfo(data);
        }));
        //get users
        this.observers.push(this.dataShare.passUsers.subscribe(function (users) {
            for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
                var user = users_1[_i];
                if (!user.custom) {
                    _this.users.push(new user_1.User(user));
                }
            }
        }));
    };
    RoomInfoComponent.prototype.ngOnDestroy = function () {
        this.observers.forEach(function (observer) {
            observer.unsubscribe();
        });
    };
    RoomInfoComponent.prototype.displayInfo = function (data) {
        for (var _i = 0, _a = this.info; _i < _a.length; _i++) {
            var details = _a[_i];
            if (details.rid == data.id) {
                this.current = details;
                this.current.custom = details.custom;
                return;
            }
        }
        this.newDetails(data);
    };
    RoomInfoComponent.prototype.newDetails = function (data) {
        var _this = this;
        if (!data.custom) {
            this.createDetails(data.avatar, [data.name, this.auth.getUserInfo().name], data.id, [], false);
        }
        else {
            this.fetchNames(data.id)
                .then(function (res) {
                _this.createDetails(data.avatar, res.names, data.id, res.ids, true);
            })["catch"](function (err) {
                console.log(err);
            });
        }
    };
    RoomInfoComponent.prototype.createDetails = function (url, names, id, uids, custom) {
        var details = new details_1.Details(url, names, id, uids);
        this.info.push(details);
        this.current = details;
        this.current.custom = custom;
    };
    RoomInfoComponent.prototype.fetchNames = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.getNames('names/' + id).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Object.defineProperty(RoomInfoComponent.prototype, "currentRoom", {
        get: function () {
            return this.current;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RoomInfoComponent.prototype, "all", {
        get: function () {
            return this.users;
        },
        enumerable: false,
        configurable: true
    });
    RoomInfoComponent = __decorate([
        core_1.Component({
            selector: 'room-info',
            templateUrl: './room-info.component.html',
            styleUrls: ['./room-info.component.css']
        })
    ], RoomInfoComponent);
    return RoomInfoComponent;
}());
exports.RoomInfoComponent = RoomInfoComponent;
