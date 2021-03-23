"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(a, r, d) {
        this.password1 = '';
        //login validators
        this.loginForm = new forms_1.FormGroup({
            email: new forms_1.FormControl('', [
                forms_1.Validators.email,
                forms_1.Validators.minLength(3),
                forms_1.Validators.required,
            ]),
            password: new forms_1.FormControl('', [
                forms_1.Validators.minLength(3),
                forms_1.Validators.required,
            ])
        });
        this.authService = a;
        this.router = r;
        this.dataShare = d;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        //check if the form is valid
        if (this.loginForm.invalid) {
            return;
        }
        this.authService
            .validate(this.loginForm.value.email, this.loginForm.value.password, 'login')
            .subscribe(function (response) {
            if (response === void 0) { response = []; }
            console.log(response);
            _this.authService.setUserInfo(response.user);
            localStorage.removeItem('pass');
            _this.router.navigate(['']);
        }, 
        //handle the error locally so we can display detailed messages to the user
        function (error) {
            if (error instanceof http_1.HttpErrorResponse && error && error.error) {
                if (error.error.message[0] == 'Incorrect password') {
                    console.log(error.error.message[0]);
                    _this.loginForm.controls['password'].setErrors({ invalid: true });
                }
                else if (error.error.message[0] == 'Not Registered') {
                    console.log(error.error.message[0]);
                }
                else {
                    console.log(error.error.message[0]);
                }
            }
            else {
                throw error;
            }
        });
    };
    Object.defineProperty(LoginComponent.prototype, "name", {
        //login form
        get: function () {
            return this.loginForm.get('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this.loginForm.get('password');
        },
        enumerable: false,
        configurable: true
    });
    LoginComponent.prototype.toggleModal = function () {
        this.dataShare.registerModal('changed');
    };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
