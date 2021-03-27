"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var email_validator_1 = require("./email.validator");
var password_validators_1 = require("./password.validators");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router, dataShare) {
        this.authService = authService;
        this.router = router;
        this.dataShare = dataShare;
        this.observers = [];
        this.password = '';
        this.isActive = false;
        this.registerForm = new forms_1.FormGroup({
            name: new forms_1.FormControl('', [forms_1.Validators.minLength(3), forms_1.Validators.required]),
            email: new forms_1.FormControl('', [forms_1.Validators.minLength(3), forms_1.Validators.required, forms_1.Validators.email], email_validator_1.EmailValidators.shouldBeUnique),
            password: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.minLength(3),
            ]),
            password2: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.minLength(3),
                password_validators_1.mustMatch(),
            ])
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.observers.push(this.dataShare.currentMessage.subscribe(function (message) {
            _this.toggleModal();
        }));
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        this.observers.forEach(function (observer) {
            observer.unsubscribe();
        });
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        //check if the form is valid
        if (this.registerForm.invalid) {
            return;
        }
        this.authService
            .register(this.registerForm.value.name, this.registerForm.value.email, this.registerForm.value.password, 'register')
            .subscribe(function (response) {
            if (response === void 0) { response = []; }
            _this.authService.setUserInfo(response.user);
            _this.router.navigate(['/']);
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "regName", {
        //register form
        get: function () {
            return this.registerForm.get('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "regEmail", {
        get: function () {
            return this.registerForm.get('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "regPassword", {
        get: function () {
            return this.registerForm.get('password');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "regConfirm", {
        get: function () {
            return this.registerForm.get('password2');
        },
        enumerable: false,
        configurable: true
    });
    RegisterComponent.prototype.onChange = function () {
        localStorage.setItem('pass', this.password);
    };
    RegisterComponent.prototype.toggleModal = function () {
        this.isActive = !this.isActive;
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
