(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Elion\Desktop\chatApp\chat-away\auth\src\main.ts */"zUnb");


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _email_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email.validator */ "nODA");
/* harmony import */ var _password_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password.validators */ "evPK");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_data_share_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/data-share.service */ "JemR");









class RegisterComponent {
    constructor(a, r, dataShare) {
        this.dataShare = dataShare;
        this.password1 = '';
        this.isActive = false;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email], _email_validator__WEBPACK_IMPORTED_MODULE_2__["EmailValidators"].shouldBeUnique),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3),
            ]),
            password2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3),
                Object(_password_validators__WEBPACK_IMPORTED_MODULE_3__["mustMatch"])(),
            ]),
        });
        this.authService = a;
        this.router = r;
        this.dataShare.currentMessage.subscribe((message) => {
            this.toggleModal(); //will receive msg from login component
        });
    }
    register() {
        //check if the form is valid
        if (this.registerForm.invalid) {
            return;
        }
        this.authService
            .register(this.registerForm.value.name, this.registerForm.value.email, this.registerForm.value.password, 'register')
            .subscribe((response = []) => {
            this.authService.setUserInfo(response.user);
            this.router.navigate(['/']);
        });
    }
    //register form
    get regName() {
        return this.registerForm.get('name');
    }
    get regEmail() {
        return this.registerForm.get('email');
    }
    get regPassword() {
        return this.registerForm.get('password');
    }
    get regConfirm() {
        return this.registerForm.get('password2');
    }
    onChange(val) {
        this.password1 = val.target.value;
        localStorage.setItem('pass', this.password1);
    }
    toggleModal() {
        this.isActive = !this.isActive;
    }
    ngOnInit() { }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_share_service__WEBPACK_IMPORTED_MODULE_6__["DataShareService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 18, vars: 13, consts: [[1, "register-modal"], [1, "register-card"], [1, "sign-up"], [1, "fas", "fa-times", "close-modal", 3, "click"], [1, "divider", "register-divider"], [1, "my-form", 3, "formGroup", "ngSubmit"], [1, "register-field"], ["formControlName", "name", "name", "name ", "type", "text ", "placeholder", "Username ", 1, "custom-input"], ["formControlName", "email", "name", "email ", "type", "text ", "placeholder", "Email ", 1, "custom-input"], ["formControlName", "password", "name", "password ", "type", "text ", "placeholder", "Password ", 1, "custom-input", 3, "input"], ["formControlName", "password2", "name", "password2", "type", "text ", "placeholder", "Re enter your Password ", 1, "custom-input"], ["id", "js-register ", "type", "submit ", 1, "my-button", "sign-up-btn"], [1, "overlay"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_i_click_4_listener() { return ctx.toggleModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_6_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function RegisterComponent_Template_input_input_12_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", ctx.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error-outline", ctx.regName.invalid && ctx.regName.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error-outline", ctx.regEmail.invalid && ctx.regEmail.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error-outline", ctx.regPassword.invalid && ctx.regPassword.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error-outline", ctx.regConfirm.invalid && ctx.regConfirm.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", ctx.isActive);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".input-outline[_ngcontent-%COMP%] {\r\n    border-color: #1877f2;\r\n    box-shadow: 0 0 0 2px #e7f3ff;\r\n    caret-color: #1877f2;\r\n}\r\n\r\n.error-outline[_ngcontent-%COMP%] {\r\n    border-color: #fb0000 !important;\r\n    box-shadow: 0 0 0 2px #e7f3ff !important;\r\n}\r\n\r\n.sign-up-btn[_ngcontent-%COMP%] {\r\n    width: 15rem;\r\n    height: 3rem;\r\n    margin-left: 0;\r\n    margin-top: 1rem;\r\n    background-color: rgb(255, 94, 0);\r\n    cursor: pointer;\r\n}\r\n\r\n.sign-up-btn[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(255, 51, 0);\r\n}\r\n\r\n.sign-up-btn[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n}\r\n\r\n.my-button[_ngcontent-%COMP%] {\r\n    width: 22rem;\r\n    height: 3.3rem;\r\n    margin-left: 1.3rem;\r\n    border-radius: 6px;\r\n    border: none;\r\n    caret-color: #1877f2;\r\n    background-color: #1877f2;\r\n    color: white;\r\n    font-weight: 500;\r\n    font-size: 25px;\r\n    transition-property: background-color;\r\n    transition-duration: 300ms;\r\n}\r\n\r\n.custom-input[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 90%;\r\n    border: none;\r\n    font-size: 18px;\r\n}\r\n\r\n.custom-input[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n    background-color: rgb(231, 231, 231);\r\n}\r\n\r\n.my-register-button[_ngcontent-%COMP%] {\r\n    width: 14rem;\r\n    height: 3.6rem;\r\n    border-radius: 6px;\r\n    margin-top: 1.5rem;\r\n    border: none;\r\n    caret-color: #1877f2;\r\n    background-color: #149600;\r\n    color: white;\r\n    font-weight: 500;\r\n    font-size: 20px;\r\n    transition-property: background-color;\r\n    transition-duration: 300ms;\r\n}\r\n\r\n.my-register-button[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n}\r\n\r\n.my-register-button[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    background-color: #1c800f;\r\n}\r\n\r\n.divider[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #cbced1;\r\n    margin-top: 2rem;\r\n    width: 90%;\r\n    margin-left: 1.3rem;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n    display: none !important;\r\n}\r\n\r\n.register-card[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    align-content: center;\r\n    width: 27rem;\r\n    height: 29rem;\r\n    border-radius: 8px;\r\n    background-color: white;\r\n    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);\r\n    position: relative;\r\n}\r\n\r\n.close-modal[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 18px;\r\n    top: 15px;\r\n    font-size: 25px;\r\n    color: grey;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.register-modal[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index: 10;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.register-field[_ngcontent-%COMP%] {\r\n    width: 23rem;\r\n    height: 3rem;\r\n    border: 1px solid #dddfe2;\r\n    background: #f5f6f7;\r\n    border-radius: 6px;\r\n    margin: 10px;\r\n    display: flex;\r\n    position: relative;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.register-field[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] {\r\n    background: #f5f6f7 !important;\r\n}\r\n\r\n.sign-up[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 5px;\r\n}\r\n\r\n.register-divider[_ngcontent-%COMP%] {\r\n    margin-top: 19px;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.sign-up-btn[_ngcontent-%COMP%] {\r\n    width: 15rem;\r\n    height: 3rem;\r\n    margin-left: 0;\r\n    margin-top: 1rem;\r\n    background-color: rgb(255, 94, 0);\r\n}\r\n\r\n.sign-up-btn[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(255, 51, 0);\r\n}\r\n\r\n.my-form[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    justify-content: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.overlay[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    -webkit-backdrop-filter: blur(3px);\r\n            backdrop-filter: blur(3px);\r\n    z-index: 9;\r\n}\r\n\r\n.box[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    margin: 50px auto;\r\n    background: #00bfb6;\r\n    padding: 20px;\r\n    text-align: center;\r\n    font-weight: 900;\r\n    color: #fff;\r\n    font-family: arial;\r\n    position: relative;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHFDQUFxQztJQUNyQywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixxQ0FBcUM7SUFDckMsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtRUFBbUU7SUFDbkUsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZUFBZTtJQUNmLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUdBOzs7Ozs7O0VBT0U7O0FBRUY7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1vdXRsaW5lIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzE4NzdmMjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjZTdmM2ZmO1xyXG4gICAgY2FyZXQtY29sb3I6ICMxODc3ZjI7XHJcbn1cclxuXHJcbi5lcnJvci1vdXRsaW5lIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZiMDAwMCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICNlN2YzZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNpZ24tdXAtYnRuIHtcclxuICAgIHdpZHRoOiAxNXJlbTtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDk0LCAwKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNpZ24tdXAtYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDUxLCAwKTtcclxufVxyXG5cclxuLnNpZ24tdXAtYnRuOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5teS1idXR0b24ge1xyXG4gICAgd2lkdGg6IDIycmVtO1xyXG4gICAgaGVpZ2h0OiAzLjNyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMS4zcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY2FyZXQtY29sb3I6ICMxODc3ZjI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg3N2YyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3I7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcclxufVxyXG5cclxuLmN1c3RvbS1pbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uY3VzdG9tLWlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAyMzEsIDIzMSk7XHJcbn1cclxuXHJcbi5teS1yZWdpc3Rlci1idXR0b24ge1xyXG4gICAgd2lkdGg6IDE0cmVtO1xyXG4gICAgaGVpZ2h0OiAzLjZyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjYXJldC1jb2xvcjogIzE4NzdmMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDk2MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvcjtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xyXG59XHJcblxyXG4ubXktcmVnaXN0ZXItYnV0dG9uOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5teS1yZWdpc3Rlci1idXR0b246aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjODAwZjtcclxufVxyXG5cclxuLmRpdmlkZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjYmNlZDE7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxLjNyZW07XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVnaXN0ZXItY2FyZCB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDI3cmVtO1xyXG4gICAgaGVpZ2h0OiAyOXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYigwIDAgMCAvIDEwJSksIDAgOHB4IDE2cHggcmdiKDAgMCAwIC8gMTAlKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNsb3NlLW1vZGFsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxOHB4O1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4vKi5yZWdpc3Rlci1tb2RhbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTIuNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IC0xNC41cmVtO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbn0qL1xyXG5cclxuLnJlZ2lzdGVyLW1vZGFsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWZpZWxkIHtcclxuICAgIHdpZHRoOiAyM3JlbTtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRmZTI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNmY3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1maWVsZD5pbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNmY3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaWduLXVwIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWRpdmlkZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTlweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5zaWduLXVwLWJ0biB7XHJcbiAgICB3aWR0aDogMTVyZW07XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA5NCwgMCk7XHJcbn1cclxuXHJcbi5zaWduLXVwLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA1MSwgMCk7XHJcbn1cclxuXHJcbi5teS1mb3JtIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICAgIHotaW5kZXg6IDk7XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBiZmI2O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css'],
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _services_data_share_service__WEBPACK_IMPORTED_MODULE_6__["DataShareService"] }]; }, null); })();


/***/ }),

/***/ "5Lta":
/*!********************************************!*\
  !*** ./src/app/topbar/topbar.component.ts ***!
  \********************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Models_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Models/notification */ "7XSX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_socketio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/socketio.service */ "O0qW");
/* harmony import */ var _services_data_share_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/data-share.service */ "JemR");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/file.service */ "cpn4");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/users.service */ "6Qg2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");












const _c0 = ["imagePreview"];
const _c1 = ["input"];
function TopbarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.overlayCheck(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TopbarComponent_i_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 40);
} }
function TopbarComponent_div_15_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarComponent_div_15_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.browse(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", notification_r8.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", notification_r8.name, " send a message!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r8.date);
} }
function TopbarComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TopbarComponent_div_15_div_5_Template, 7, 3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.notificationList);
} }
class TopbarComponent {
    constructor(authService, router, io, dataShareService, fileService, userService) {
        this.authService = authService;
        this.router = router;
        this.io = io;
        this.dataShareService = dataShareService;
        this.fileService = fileService;
        this.userService = userService;
        this.notificationList = [];
        this.profile = true;
        this.notifications = true;
        this.overlay = true;
        this.exp = 'translateX(0px)';
        this.expHeight = '197px';
        this.url = '';
        this.name = '';
        this.newmsg = false;
        this.fadeIn = false;
    }
    ngAfterViewInit() {
        this.el = this.preview.nativeElement;
        this.file = this.imgInput.nativeElement;
    }
    overlayCheck() {
        this.profile = true;
        this.notifications = true;
        this.overlay = true;
    }
    notificationsCheck() {
        this.notifications = !this.notifications;
        if (!this.notifications) {
            this.newmsg = false;
        }
        this.overlay = false;
        if (!this.profile) {
            this.profile = true;
        }
    }
    profileCheck() {
        this.profile = !this.profile;
        this.overlay = false;
        if (!this.notifications) {
            this.notifications = true;
        }
    }
    logout() {
        this.io.disconnectSocket();
        this.authService.logout('logout').subscribe((response = []) => {
            console.log(response);
        });
        this.router.navigateByUrl('/login');
    }
    appendNotification(data) {
        let notification = new _Models_notification__WEBPACK_IMPORTED_MODULE_1__["Notification"]();
        let now = new Date();
        notification.date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(now, 'dd/MM/yyyy hh:mm:ss a', 'en-US', '+0530');
        notification.name = data.senderName;
        notification.sender = data.sender;
        notification.receiver = data.receiver;
        notification.url = data.url;
        this.notificationList.unshift(notification);
    }
    changeAvatar() {
        this.exp = 'translateX(-297px)';
        this.expHeight = '400px';
    }
    slide() {
        this.exp = 'translateX(0px)';
        this.expHeight = '197px';
        this.fadeIn = false;
        setTimeout(() => {
            this.el.style.backgroundImage = 'url(' + this.url + ')';
        }, 200);
    }
    previewAvatar() {
        let reader = new FileReader();
        let element = this.el;
        reader.onload = function (e) {
            element.style.backgroundImage = 'url(' + e.target.result + ')';
        };
        reader.readAsDataURL(this.file.files[0]);
        this.fadeIn = true;
        setTimeout(() => {
            this.fadeIn = false;
        }, 500);
    }
    upload() {
        if (this.file && this.file.files[0]) {
            const fd = new FormData();
            fd.append('image', this.file.files[0]);
            this.fileService
                .postAvatar('avatar', fd)
                .subscribe((response = []) => {
                this.url = response.path;
                this.slide();
            });
        }
    }
    browse(index) {
        this.dataShareService.swapCurrent(this.notificationList[index].getRoom());
        this.notificationsCheck();
    }
    ngOnInit() {
        this.dataShareService.remote.subscribe((data) => {
            if (data.sender == 'default')
                return;
            this.appendNotification(data);
            if (!this.notifications) {
                this.newmsg = false;
            }
            else {
                this.newmsg = true;
            }
        });
        this.userService
            .getUser('users/' + this.authService.getUserInfo().id)
            .subscribe((response = []) => {
            this.name = response.user.name;
            this.url = response.user.avatar;
        });
    }
}
TopbarComponent.ɵfac = function TopbarComponent_Factory(t) { return new (t || TopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_socketio_service__WEBPACK_IMPORTED_MODULE_5__["SocketioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_share_service__WEBPACK_IMPORTED_MODULE_6__["DataShareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_file_service__WEBPACK_IMPORTED_MODULE_7__["FileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"])); };
TopbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopbarComponent, selectors: [["app-topbar"]], viewQuery: function TopbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.preview = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imgInput = _t.first);
    } }, decls: 51, vars: 21, consts: [["class", "overlay", 3, "click", 4, "ngIf"], [1, "top-navbar"], [1, "options"], [1, "messenger-wrapper"], [1, "fab", "fa-facebook-messenger"], [1, "home-wrapper", "active"], [1, "fas", "fa-home", "active"], [1, "friends-wrapper"], [1, "fas", "fa-user-friends"], [1, "dropdown"], [1, "bell-wrapper", "ts-notifications", 3, "click"], [1, "fas", "fa-bell", "ts-profile"], ["class", "fas fa-circle notification", 4, "ngIf"], ["class", "notification-dropdown", 4, "ngIf"], [1, "profile-wrapper", "ts-profile", 3, "click"], [1, "fas", "fa-sort-down", "ts-profile"], [1, "profile-dropdown", "hidden", "js-drop"], [1, "slide2"], [1, "profile-item", "js-avatar", 3, "click"], [1, "user-avatar", 3, "src"], [1, "details"], [2, "font-size", "25px", "margin-bottom", "-8px"], [1, "divider"], [1, "log-out", 3, "click"], [1, "fas", "fa-sign-out-alt"], [2, "font-size", "25px"], [1, "slide1"], [1, "fas", "fa-times", "ts-close", 3, "click"], [2, "font-size", "20px", "margin-bottom", "2px", "margin-top", "8px"], [1, "container"], [1, "avatar-upload"], [1, "avatar-edit"], ["name", "file", "type", "file", "id", "imageUpload", "accept", ".png, .jpg, .jpeg", 3, "change"], ["input", ""], ["for", "imageUpload"], [1, "avatar-preview"], ["imagePreview", ""], [1, "log-out", "ts-up", 3, "click"], [1, "fas", "fa-upload"], [1, "overlay", 3, "click"], [1, "fas", "fa-circle", "notification"], [1, "notification-dropdown"], [2, "font-size", "25px", "margin-bottom", "10px", "margin-top", "5px"], [1, "divider", "div-profile"], [1, "inner-wrapper"], ["class", "profile-item item-margin", 3, "click", 4, "ngFor", "ngForOf"], [1, "profile-item", "item-margin", 3, "click"], [1, "avatar", 2, "margin-top", "0px", 3, "src"], [1, "message"], [1, "small-date"]], template: function TopbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TopbarComponent_div_0_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarComponent_Template_div_click_12_listener() { return ctx.notificationsCheck(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TopbarComponent_i_14_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TopbarComponent_div_15_Template, 6, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarComponent_Template_div_click_17_listener() { return ctx.profileCheck(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarComponent_Template_div_click_21_listener() { return ctx.changeAvatar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Change Avatar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarComponent_Template_div_click_29_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Log Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarComponent_Template_i_click_34_listener() { return ctx.slide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Choose a photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "form", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TopbarComponent_Template_input_change_40_listener() { return ctx.previewAvatar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", null, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarComponent_Template_div_click_47_listener() { return ctx.upload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h1", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.overlay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active-option", !ctx.notifications);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newmsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.notifications);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active-option", !ctx.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx.expHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", ctx.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx.exp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx.exp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx.url + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fadeout", ctx.fadeIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".top-navbar[_ngcontent-%COMP%] {\r\n    background-color: rgb(255, 255, 255);\r\n    position: fixed;\r\n    top: 0px;\r\n    z-index: 6;\r\n    height: 3.2rem;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    padding-left: 1.5rem;\r\n    padding-right: 1.5rem;\r\n    box-shadow: rgba(32, 33, 36, 0.28) 0px 1px 6px 0px;\r\n}\r\n\r\n.details[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n}\r\n\r\n.options[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.home-wrapper[_ngcontent-%COMP%], .friends-wrapper[_ngcontent-%COMP%] {\r\n    height: 45px;\r\n    width: 93px;\r\n    border-radius: 7px;\r\n    cursor: pointer;\r\n    display: flex;\r\n    margin-left: 8px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.fa-facebook-messenger[_ngcontent-%COMP%] {\r\n    font-size: 38px;\r\n    color: rgb(66, 66, 250);\r\n}\r\n\r\n.fa-home[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    color: grey;\r\n}\r\n\r\n.fa-user-friends[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    color: grey;\r\n}\r\n\r\n.home-wrapper[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(234, 233, 233);\r\n}\r\n\r\n.friends-wrapper[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(233, 231, 231);\r\n}\r\n\r\n.home-wrapper[_ngcontent-%COMP%]:active {\r\n    background-color: rgb(203, 203, 203) !important;\r\n}\r\n\r\n.friends-wrapper[_ngcontent-%COMP%]:active {\r\n    background-color: rgb(202, 202, 202) !important;\r\n}\r\n\r\n.active[_ngcontent-%COMP%] {\r\n    color: rgb(56, 56, 255) !important;\r\n    border-bottom: solid 5px rgb(56, 56, 255);\r\n}\r\n\r\n.active[_ngcontent-%COMP%] > i[_ngcontent-%COMP%] {\r\n    border: none;\r\n}\r\n\r\n.fa-bell[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\r\n\r\n.fa-sort-down[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    font-size: 30px;\r\n}\r\n\r\n.bell-wrapper[_ngcontent-%COMP%] {\r\n    height: 45px;\r\n    width: 45px;\r\n    border-radius: 100%;\r\n    cursor: pointer;\r\n    display: flex;\r\n    margin-left: 8px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgb(233, 231, 231);\r\n}\r\n\r\n.profile-wrapper[_ngcontent-%COMP%] {\r\n    background-color: rgb(233, 231, 231);\r\n    height: 45px;\r\n    width: 45px;\r\n    position: relative;\r\n    z-index: 1;\r\n    border-radius: 100%;\r\n    cursor: pointer;\r\n    display: flex;\r\n    margin-left: 8px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.profile-wrapper[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(198, 198, 198) !important;\r\n}\r\n\r\n.bell-wrapper[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(198, 198, 198) !important;\r\n}\r\n\r\n.profile-wrapper[_ngcontent-%COMP%]:active {\r\n    padding-top: 2px;\r\n    background-color: rgb(202, 202, 202) !important;\r\n}\r\n\r\n.bell-wrapper[_ngcontent-%COMP%]:active {\r\n    padding-top: 2px;\r\n    background-color: rgb(202, 202, 202) !important;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.item-margin[_ngcontent-%COMP%] {\r\n    margin: 3px !important;\r\n}\r\n\r\n.profile-dropdown[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    position: absolute;\r\n    overflow: hidden;\r\n    right: 10px;\r\n    width: 300px;\r\n    min-height: 150px;\r\n    padding-bottom: 9px;\r\n    border: 1px solid rgb(227, 227, 227);\r\n    max-height: 190px;\r\n    transition-property: height;\r\n    transition-duration: .3s;\r\n    border-radius: 9px;\r\n    background-color: rgb(255, 255, 255);\r\n    top: 3rem;\r\n}\r\n\r\n.notification-dropdown[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    position: absolute;\r\n    overflow: hidden;\r\n    right: 10px;\r\n    width: 300px;\r\n    min-height: 150px;\r\n    padding-bottom: 9px;\r\n    border: 1px solid rgb(227, 227, 227);\r\n    max-height: 230px;\r\n    transition-property: height;\r\n    transition-duration: .3s;\r\n    border-radius: 9px;\r\n    background-color: rgb(255, 255, 255);\r\n    top: 3rem;\r\n}\r\n\r\n.inner-wrapper[_ngcontent-%COMP%] {\r\n    overflow-y: scroll;\r\n}\r\n\r\n.div-profile[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n}\r\n\r\n.divider[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    margin-bottom: 5px;\r\n    margin-top: 2px;\r\n    border-bottom: 1px solid rgba(190, 190, 190, 0.89);\r\n}\r\n\r\n.lower[_ngcontent-%COMP%] {\r\n    margin-top: 30px !important;\r\n}\r\n\r\n.profile-item[_ngcontent-%COMP%] {\r\n    width: 270px;\r\n    margin: 15px;\r\n    min-height: 80px;\r\n    max-height: 120px;\r\n    padding: 7px;\r\n    font-size: 20px;\r\n    border-radius: 7px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.log-out[_ngcontent-%COMP%] {\r\n    width: 270px;\r\n    margin: 10px;\r\n    height: 50px;\r\n    padding: 7px;\r\n    border-radius: 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.log-out[_ngcontent-%COMP%] > i[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.log-out[_ngcontent-%COMP%]:hover {\r\n    background-color: rgba(210, 210, 210, 0.51);\r\n}\r\n\r\n.profile-item[_ngcontent-%COMP%]:hover {\r\n    background-color: rgba(212, 212, 212, 0.51);\r\n    cursor: pointer;\r\n}\r\n\r\n.user-avatar[_ngcontent-%COMP%] {\r\n    border-radius: 50%;\r\n    height: 60px;\r\n    width: 60px;\r\n}\r\n\r\n.avatar[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    vertical-align: middle;\r\n    margin-top: 8px;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n    display: none !important;\r\n}\r\n\r\n.overlay[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    height: 100%;\r\n    width: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 5 !important;\r\n}\r\n\r\n.active-option[_ngcontent-%COMP%] {\r\n    color: blue;\r\n    background-color: rgb(186, 186, 186);\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    background: whitesmoke;\r\n    font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    max-width: 960px;\r\n    margin: 10px auto;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 15px;\r\n    color: gray;\r\n}\r\n\r\n.avatar-upload[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    max-width: 205px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-left: 31px;\r\n}\r\n\r\n.avatar-upload[_ngcontent-%COMP%]   .avatar-edit[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 30px;\r\n    z-index: 1;\r\n    top: 10px;\r\n}\r\n\r\n.avatar-upload[_ngcontent-%COMP%]   .avatar-edit[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.avatar-upload[_ngcontent-%COMP%]   .avatar-edit[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 34px;\r\n    height: 34px;\r\n    margin-bottom: 0;\r\n    border-radius: 100%;\r\n    background: #ffffff;\r\n    border: 1px solid transparent;\r\n    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);\r\n    cursor: pointer;\r\n    font-weight: normal;\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.avatar-upload[_ngcontent-%COMP%]   .avatar-edit[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:hover {\r\n    background: #f1f1f1;\r\n    border-color: #d6d6d6;\r\n}\r\n\r\n.avatar-upload[_ngcontent-%COMP%]   .avatar-edit[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:after {\r\n    content: \"\\f304\";\r\n    font-family: 'Font Awesome\\ 5 Free';\r\n    font-weight: 900;\r\n    color: #757575;\r\n    position: absolute;\r\n    top: 7px;\r\n    left: 2px;\r\n    right: 0;\r\n    text-align: center;\r\n    margin: auto;\r\n}\r\n\r\n.avatar-upload[_ngcontent-%COMP%]   .avatar-preview[_ngcontent-%COMP%] {\r\n    width: 150px;\r\n    height: 150px;\r\n    position: relative;\r\n    border-radius: 100%;\r\n    border: 6px solid #f8f8f8;\r\n    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.avatar-upload[_ngcontent-%COMP%]   .avatar-preview[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 100%;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n}\r\n\r\n.ts-up[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.ts-close[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 10px;\r\n    font-size: 24px;\r\n    cursor: pointer;\r\n}\r\n\r\n.slide1[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    transition-property: transform;\r\n    transition-duration: .2s;\r\n}\r\n\r\n.slide2[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    transition-property: transform;\r\n    transition-duration: .2s;\r\n}\r\n\r\n.notification[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n    color: red;\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 11px;\r\n}\r\n\r\n.small-date[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    margin-top: -4px;\r\n}\r\n\r\n.fadeout[_ngcontent-%COMP%] {\r\n    animation: fadein .800s;\r\n}\r\n\r\n@keyframes fadein {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixRQUFRO0lBQ1IsVUFBVTtJQUNWLGNBQWM7SUFDZCxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksK0NBQStDO0FBQ25EOztBQUVBO0lBQ0ksK0NBQStDO0FBQ25EOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLDJDQUEyQztJQUMzQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLE1BQU07SUFDTixPQUFPO0lBQ1AscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLCtDQUErQztJQUMvQyxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qiw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoidG9wYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLW5hdmJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHotaW5kZXg6IDY7XHJcbiAgICBoZWlnaHQ6IDMuMnJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMzIsIDMzLCAzNiwgMC4yOCkgMHB4IDFweCA2cHggMHB4O1xyXG59XHJcblxyXG4uZGV0YWlscyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLm9wdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaG9tZS13cmFwcGVyLFxyXG4uZnJpZW5kcy13cmFwcGVyIHtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiA5M3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mYS1mYWNlYm9vay1tZXNzZW5nZXIge1xyXG4gICAgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgY29sb3I6IHJnYig2NiwgNjYsIDI1MCk7XHJcbn1cclxuXHJcbi5mYS1ob21lIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiBncmV5O1xyXG59XHJcblxyXG4uZmEtdXNlci1mcmllbmRzIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiBncmV5O1xyXG59XHJcblxyXG4uaG9tZS13cmFwcGVyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzQsIDIzMywgMjMzKTtcclxufVxyXG5cclxuLmZyaWVuZHMtd3JhcHBlcjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAyMzEsIDIzMSk7XHJcbn1cclxuXHJcbi5ob21lLXdyYXBwZXI6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDMsIDIwMywgMjAzKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZnJpZW5kcy13cmFwcGVyOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAyMDIsIDIwMikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogcmdiKDU2LCA1NiwgMjU1KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgNXB4IHJnYig1NiwgNTYsIDI1NSk7XHJcbn1cclxuXHJcbi5hY3RpdmU+aSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5mYS1iZWxsIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmZhLXNvcnQtZG93biB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uYmVsbC13cmFwcGVyIHtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjMxLCAyMzEpO1xyXG59XHJcblxyXG4ucHJvZmlsZS13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDIzMSwgMjMxKTtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2ZpbGUtd3JhcHBlcjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk4LCAxOTgsIDE5OCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJlbGwtd3JhcHBlcjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk4LCAxOTgsIDE5OCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnByb2ZpbGUtd3JhcHBlcjphY3RpdmUge1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDIwMiwgMjAyKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmVsbC13cmFwcGVyOmFjdGl2ZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwgMjAyLCAyMDIpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93biB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pdGVtLW1hcmdpbiB7XHJcbiAgICBtYXJnaW46IDNweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJvZmlsZS1kcm9wZG93biB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA5cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjI3LCAyMjcsIDIyNyk7XHJcbiAgICBtYXgtaGVpZ2h0OiAxOTBweDtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGhlaWdodDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHRvcDogM3JlbTtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbi1kcm9wZG93biB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA5cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjI3LCAyMjcsIDIyNyk7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMzBweDtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGhlaWdodDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHRvcDogM3JlbTtcclxufVxyXG5cclxuLmlubmVyLXdyYXBwZXIge1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4uZGl2LXByb2ZpbGUge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpdmlkZXIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE5MCwgMTkwLCAxOTAsIDAuODkpO1xyXG59XHJcblxyXG4ubG93ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJvZmlsZS1pdGVtIHtcclxuICAgIHdpZHRoOiAyNzBweDtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMjBweDtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubG9nLW91dCB7XHJcbiAgICB3aWR0aDogMjcwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sb2ctb3V0Pmkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ubG9nLW91dDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMCwgMjEwLCAyMTAsIDAuNTEpO1xyXG59XHJcblxyXG4ucHJvZmlsZS1pdGVtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEyLCAyMTIsIDIxMiwgMC41MSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi51c2VyLWF2YXRhciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiA1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hY3RpdmUtb3B0aW9uIHtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NiwgMTg2LCAxODYpO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbn1cclxuXHJcbmgxIHNtYWxsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5hdmF0YXItdXBsb2FkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC13aWR0aDogMjA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMXB4O1xyXG59XHJcblxyXG4uYXZhdGFyLXVwbG9hZCAuYXZhdGFyLWVkaXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDMwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uYXZhdGFyLXVwbG9hZCAuYXZhdGFyLWVkaXQgaW5wdXQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmF2YXRhci11cGxvYWQgLmF2YXRhci1lZGl0IGlucHV0K2xhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAzNHB4O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmF2YXRhci11cGxvYWQgLmF2YXRhci1lZGl0IGlucHV0K2xhYmVsOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICBib3JkZXItY29sb3I6ICNkNmQ2ZDY7XHJcbn1cclxuXHJcbi5hdmF0YXItdXBsb2FkIC5hdmF0YXItZWRpdCBpbnB1dCtsYWJlbDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlxcZjMwNFwiO1xyXG4gICAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWVcXCA1IEZyZWUnO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA3cHg7XHJcbiAgICBsZWZ0OiAycHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmF2YXRhci11cGxvYWQgLmF2YXRhci1wcmV2aWV3IHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYm9yZGVyOiA2cHggc29saWQgI2Y4ZjhmODtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5hdmF0YXItdXBsb2FkIC5hdmF0YXItcHJldmlldz5kaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50cy11cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50cy1jbG9zZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNsaWRlMSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XHJcbn1cclxuXHJcbi5zbGlkZTIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogMTFweDtcclxufVxyXG5cclxuLnNtYWxsLWRhdGUge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogLTRweDtcclxufVxyXG5cclxuLmZhZGVvdXQge1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlaW4gLjgwMHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZWluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-topbar',
                templateUrl: './topbar.component.html',
                styleUrls: ['./topbar.component.css'],
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_socketio_service__WEBPACK_IMPORTED_MODULE_5__["SocketioService"] }, { type: _services_data_share_service__WEBPACK_IMPORTED_MODULE_6__["DataShareService"] }, { type: _services_file_service__WEBPACK_IMPORTED_MODULE_7__["FileService"] }, { type: _services_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"] }]; }, { preview: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['imagePreview']
        }], imgInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['input']
        }] }); })();


/***/ }),

/***/ "6Qg2":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "EnSQ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-handler.service */ "zZuk");





class UsersService extends _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] {
    constructor(http, er) {
        super(http, er, 'https://chat-app-ang.herokuapp.com/');
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerService"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerService"] }]; }, null); })();


/***/ }),

/***/ "7XSX":
/*!****************************************!*\
  !*** ./src/app/Models/notification.ts ***!
  \****************************************/
/*! exports provided: Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
class Notification {
    constructor() {
        this.name = '';
        this.id = '';
        this.url = '';
        this.receiver = '';
        this.sender = '';
        this.publicId = '60539a6801ac562984ae4f93';
    }
    getRoom() {
        if (this.receiver == this.publicId) {
            return this.receiver;
        }
        else {
            return this.sender;
        }
    }
}


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_socketio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/socketio.service */ "O0qW");
/* harmony import */ var _services_data_share_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data-share.service */ "JemR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chat-rooms/chat-rooms.component */ "Zoh+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _input_field_input_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../input-field/input-field.component */ "sjE2");








const _c0 = ["chat"];
function HomeComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
} }
class HomeComponent {
    constructor(socketService, dataShare, r) {
        this.socketService = socketService;
        this.dataShare = dataShare;
        this.r = r;
        this.infoName = '';
        this.info = '';
        this.fade = false;
        this.loader = false;
        this.publicId = '60539a6801ac562984ae4f93';
    }
    ngAfterViewInit() {
        this.el = this.chatArea.nativeElement;
        this.dataShare.local.subscribe((d) => {
            this.smoothScrolling();
        });
    }
    ngOnInit() {
        this.socketService.setupSocketConnection();
        this.dataShare.message.subscribe((message = []) => {
            if (message.name != 'default') {
                this.infoName = message.name;
                if (message.id != this.cId) {
                    this.loader = true;
                }
                this.smoothScrolling();
                this.cId = message.id;
                this.fadeOut();
                this.changeStatus(message.status);
            }
        });
        this.dataShare.status.subscribe((id) => {
            if (id == '' || this.cId == this.publicId)
                return;
            if (this.info == 'Active now.') {
                this.info = 'Offline.';
            }
            else {
                this.info = 'Active now.';
            }
        });
        this.dataShare.changeUrl.subscribe((url) => {
            this.url = url;
        });
        this.dataShare.loader.subscribe(() => {
            this.loader = false;
            this.smoothScrolling();
        });
    }
    changeStatus(status) {
        if (status) {
            this.info = 'Active now.';
        }
        else {
            this.info = 'Offline.';
        }
    }
    //scroll to bottom
    smoothScrolling() {
        setTimeout(() => {
            this.el.scrollTop = this.el.scrollHeight - this.el.clientHeight;
        }, 200);
    }
    fadeOut() {
        this.fade = true;
        setTimeout(() => {
            this.fade = false;
        }, 800);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_socketio_service__WEBPACK_IMPORTED_MODULE_1__["SocketioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_share_service__WEBPACK_IMPORTED_MODULE_2__["DataShareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chatArea = _t.first);
    } }, decls: 15, vars: 6, consts: [[1, "content-wrapper"], [1, "chat-info"], [1, "avatar-holder"], [1, "user-avatar", "small", 3, "src"], [1, "user-details"], ["id", "ts-chat", 1, "chat-area"], ["chat", ""], ["class", "loader", 4, "ngIf"], ["name", "chatArea"], [1, "loader"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "chat-rooms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_div_12_Template, 1, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.infoName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fadeout", ctx.fade);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader);
    } }, directives: [_chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_4__["ChatRoomsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _input_field_input_field_component__WEBPACK_IMPORTED_MODULE_6__["InputFieldComponent"]], styles: [".side-top[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid rgb(234, 234, 234);\r\n}\r\n\r\n.user-avatar[_ngcontent-%COMP%] {\r\n    border-radius: 50%;\r\n    height: 60px;\r\n    width: 60px;\r\n}\r\n\r\n.inner-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    width: 100%;\r\n    border-radius: 14px;\r\n    background-color: rgb(230 230 230);\r\n    cursor: pointer;\r\n    padding: 6px;\r\n}\r\n\r\n.inner-content[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(221, 221, 221);\r\n}\r\n\r\n.border[_ngcontent-%COMP%] {\r\n    border-top: 2px solid red;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: 0px;\r\n    bottom: 0px;\r\n    width: 100%;\r\n    background-color: red;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n\r\n.content-wrapper[_ngcontent-%COMP%] {\r\n    left: 328px;\r\n    top: 50px;\r\n    height: calc(100vh - 50px);\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: calc(100% - 328px);\r\n    margin-right: 5px;\r\n    position: relative;\r\n}\r\n\r\n.chat-info[_ngcontent-%COMP%] {\r\n    min-height: 70px;\r\n    max-height: 70px;\r\n    border-bottom: 1px solid rgb(210, 210, 210);\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    padding: 12px;\r\n}\r\n\r\n.chat-area[_ngcontent-%COMP%] {\r\n    height: calc(100% - 70px);\r\n    overflow-y: scroll;\r\n    scroll-behavior: smooth;\r\n    min-height: 100px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 700px) {\r\n    .sidenav[_ngcontent-%COMP%] {\r\n        width: 115px;\r\n    }\r\n    .search-field[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] {\r\n        width: 50%;\r\n    }\r\n    .search-field[_ngcontent-%COMP%] {\r\n        width: 97px;\r\n        margin-left: 8px;\r\n    }\r\n    .content-wrapper[_ngcontent-%COMP%] {\r\n        left: 115px;\r\n        width: calc(100% - 115px);\r\n    }\r\n    .message[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] {\r\n        width: 80%;\r\n    }\r\n    .visible[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\r\n\r\n.small[_ngcontent-%COMP%] {\r\n    width: 43px;\r\n    height: 43px;\r\n}\r\n\r\n.user-details[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-left: 13px;\r\n    align-items: flex-start;\r\n}\r\n\r\n.user-details[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    margin-bottom: -3px;\r\n}\r\n\r\n.fadeout[_ngcontent-%COMP%] {\r\n    animation: fadein .800s;\r\n}\r\n\r\n@keyframes fadein {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.loader[_ngcontent-%COMP%] {\r\n    border: 7px solid #f3f3f3;\r\n    border-radius: 50%;\r\n    border-top: 7px solid #3498db;\r\n    width: 60px;\r\n    height: 60px;\r\n    animation: spin 2s linear infinite;\r\n    align-self: center;\r\n    position: absolute;\r\n    top: calc(50% - 30px);\r\n}\r\n\r\n@keyframes spin {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsMkNBQTJDO0lBQzNDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gseUJBQXlCO0lBQzdCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0k7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtBQUNKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlLXRvcCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzNCwgMjM0LCAyMzQpO1xyXG59XHJcblxyXG4udXNlci1hdmF0YXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbn1cclxuXHJcbi5pbm5lci1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAgMjMwIDIzMCk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbn1cclxuXHJcbi5pbm5lci1jb250ZW50OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxufVxyXG5cclxuLmJvcmRlciB7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmVkO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVudC13cmFwcGVyIHtcclxuICAgIGxlZnQ6IDMyOHB4O1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMjhweCk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNoYXQtaW5mbyB7XHJcbiAgICBtaW4taGVpZ2h0OiA3MHB4O1xyXG4gICAgbWF4LWhlaWdodDogNzBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG59XHJcblxyXG4uY2hhdC1hcmVhIHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNzBweCk7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAuc2lkZW5hdiB7XHJcbiAgICAgICAgd2lkdGg6IDExNXB4O1xyXG4gICAgfVxyXG4gICAgLnNlYXJjaC1maWVsZD5pbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgIC5zZWFyY2gtZmllbGQge1xyXG4gICAgICAgIHdpZHRoOiA5N3B4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICB9XHJcbiAgICAuY29udGVudC13cmFwcGVyIHtcclxuICAgICAgICBsZWZ0OiAxMTVweDtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTE1cHgpO1xyXG4gICAgfVxyXG4gICAgLm1lc3NhZ2U+aW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbiAgICAudmlzaWJsZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLnNtYWxsIHtcclxuICAgIHdpZHRoOiA0M3B4O1xyXG4gICAgaGVpZ2h0OiA0M3B4O1xyXG59XHJcblxyXG4udXNlci1kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEzcHg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuLnVzZXItZGV0YWlscz5oMSB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtM3B4O1xyXG59XHJcblxyXG4uZmFkZW91dCB7XHJcbiAgICBhbmltYXRpb246IGZhZGVpbiAuODAwcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlaW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuICAgIGJvcmRlcjogN3B4IHNvbGlkICNmM2YzZjM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItdG9wOiA3cHggc29saWQgIzM0OThkYjtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogY2FsYyg1MCUgLSAzMHB4KTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
            }]
    }], function () { return [{ type: _services_socketio_service__WEBPACK_IMPORTED_MODULE_1__["SocketioService"] }, { type: _services_data_share_service__WEBPACK_IMPORTED_MODULE_2__["DataShareService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { chatArea: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chat']
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    SOCKET_ENDPOINT: 'http://localhost:5000',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-handler.service */ "zZuk");






class DataService {
    constructor(http, er, url) {
        this.http = http;
        this.errorHandler = er;
        this.url = url;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        this.options = { headers: headers, withCredentials: true };
    }
    //get all but one
    getAll(uri) {
        return this.http
            .get(this.url + uri, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler.handleError));
    }
    getLastComment(uri) {
        return this.http
            .get(this.url + uri, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler.handleError));
    }
    getComments(uri, roomData) {
        return this.http
            .post(this.url + uri, roomData, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler.handleError));
    }
    //get spesific user
    getUser(uri) {
        return this.http
            .get(this.url + uri, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler.handleError));
    }
    //post avatar
    postAvatar(uri, file) {
        return this.http
            .post(this.url + uri, file, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler.handleError));
    }
    //get avatar
    getAvatar(uri) {
        return this.http
            .get(this.url + uri, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler.handleError));
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](String)); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [String]
            }] }]; }, null); })();


/***/ }),

/***/ "FT6g":
/*!************************************************!*\
  !*** ./src/app/home/conversation.directive.ts ***!
  \************************************************/
/*! exports provided: ConversationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationDirective", function() { return ConversationDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ConversationDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
ConversationDirective.ɵfac = function ConversationDirective_Factory(t) { return new (t || ConversationDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
ConversationDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ConversationDirective, selectors: [["", "appConversation", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConversationDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appConversation]',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, null); })();


/***/ }),

/***/ "JemR":
/*!************************************************!*\
  !*** ./src/app/services/data-share.service.ts ***!
  \************************************************/
/*! exports provided: DataShareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataShareService", function() { return DataShareService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class DataShareService {
    //emit to the subscribers
    constructor() {
        this.modalSwitch = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('default');
        this.currentMessage = this.modalSwitch.asObservable();
        //change current user info header
        this.changeName = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
            name: 'default',
            room: 0,
        });
        this.message = this.changeName.asObservable();
        //pass comment data to chatArea for new comments!!!
        this.commentData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
            sender: 'default',
        });
        this.remote = this.commentData.asObservable();
        //pass comment data to chatArea for new comments!!!
        this.localData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
            sender: 'default',
        });
        this.local = this.localData.asObservable();
        //potentially some one mede a new account so we need to render them on the list
        this.refreshRooms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.refresh = this.refreshRooms.asObservable();
        //update status
        this.userStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.status = this.userStatus.asObservable();
        //fetchRooms
        this.userIds = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.userIdsMessage = this.userStatus.asObservable();
        //send new url to chat room
        this.updateUrl = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.changeUrl = this.updateUrl.asObservable();
        //swap current room
        this.swap = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.swapRoom = this.swap.asObservable();
        //room loader
        this.load = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.loader = this.load.asObservable();
    }
    registerModal(hidden) {
        this.modalSwitch.next(hidden);
    }
    notifyChange(data) {
        if (data.sender == 'default')
            return;
        this.changeName.next(data);
    }
    sendRemote(d) {
        this.commentData.next(d);
    }
    sendlocal(d) {
        this.localData.next(d);
    }
    refreshUsers(id) {
        if (id == '')
            return;
        this.refreshRooms.next(id);
    }
    updateStatus(id) {
        if (id == '')
            return;
        this.userStatus.next(id);
    }
    sendIds(ids) {
        if (ids == '')
            return;
        this.userIds.next(ids);
    }
    sendUrl(url) {
        if (!url)
            return;
        this.updateUrl.next(url);
    }
    swapCurrent(id) {
        if (!id)
            return;
        this.swap.next(id);
    }
    stopLoading() {
        this.load.next(true);
    }
}
DataShareService.ɵfac = function DataShareService_Factory(t) { return new (t || DataShareService)(); };
DataShareService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataShareService, factory: DataShareService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataShareService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MKys":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuardService {
    constructor(a, r) {
        this.authService = a;
        this.router = r;
    }
    //ensure if a route can be activated
    canActivate() {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "O0qW":
/*!**********************************************!*\
  !*** ./src/app/services/socketio.service.ts ***!
  \**********************************************/
/*! exports provided: SocketioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketioService", function() { return SocketioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "lGQG");
/* harmony import */ var _data_share_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-share.service */ "JemR");





class SocketioService {
    constructor(auth, forwardMessage) {
        this.auth = auth;
        this.forwardMessage = forwardMessage;
    }
    setupSocketConnection() {
        //init , connect and create aprivate room for each user
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_1__["io"])('https://chat-app-ang.herokuapp.com');
        this.socket.emit('joinRoom', this.auth.getUserInfo().id);
        //some one joined , possibly a new account
        this.socket.on('joined', (data) => {
            if (data.id != this.auth.getUserInfo().id) {
                this.forwardMessage.refreshUsers(data.id);
                this.forwardMessage.updateStatus(data.id);
            }
        });
        //listen for messages
        this.socket.on('message', (data) => {
            this.forwardMessage.sendRemote(data.message);
        });
        //keep an eye out for anyone who might disconnect
        this.socket.on('left', (data) => {
            this.forwardMessage.updateStatus(data.id);
        });
    }
    //send messages
    messageSubmit(message) {
        this.socket.emit('message', message);
    }
    //disconnect on logout
    disconnectSocket() {
        if (this.socket) {
            this.socket.disconnect();
        }
    }
}
SocketioService.ɵfac = function SocketioService_Factory(t) { return new (t || SocketioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_share_service__WEBPACK_IMPORTED_MODULE_3__["DataShareService"])); };
SocketioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SocketioService, factory: SocketioService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _data_share_service__WEBPACK_IMPORTED_MODULE_3__["DataShareService"] }]; }, null); })();


/***/ }),

/***/ "O9gW":
/*!********************************************!*\
  !*** ./src/app/status/status.component.ts ***!
  \********************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class StatusComponent {
    constructor() { }
    ngOnInit() {
    }
}
StatusComponent.ɵfac = function StatusComponent_Factory(t) { return new (t || StatusComponent)(); };
StatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatusComponent, selectors: [["app-status"]], decls: 2, vars: 0, template: function StatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "status works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0dXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-status',
                templateUrl: './status.component.html',
                styleUrls: ['./status.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topbar/topbar.component */ "5Lta");






function AppComponent_app_topbar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topbar");
} }
class AppComponent {
    constructor(a) {
        this.title = 'Angular';
        this.authService = a;
    }
    ngOnInit() { }
    navBar() {
        return this.authService.isAuthenticated();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 1, consts: [[4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_topbar_0_Template, 1, 0, "app-topbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navBar());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_4__["TopbarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "Tvdm":
/*!**********************************************!*\
  !*** ./src/app/services/comments.service.ts ***!
  \**********************************************/
/*! exports provided: CommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return CommentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "EnSQ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-handler.service */ "zZuk");





class CommentsService extends _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] {
    constructor(http, er) {
        super(http, er, 'https://chat-app-ang.herokuapp.com/');
    }
}
CommentsService.ɵfac = function CommentsService_Factory(t) { return new (t || CommentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerService"])); };
CommentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommentsService, factory: CommentsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerService"] }]; }, null); })();


/***/ }),

/***/ "Uf94":
/*!**********************************************!*\
  !*** ./src/app/comment/comment.component.ts ***!
  \**********************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CommentComponent_div_0_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.data.senderName);
} }
function CommentComponent_div_0_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CommentComponent_div_0_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 12);
} }
function CommentComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CommentComponent_div_0_div_1_div_2_Template, 3, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CommentComponent_div_0_div_1_img_4_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CommentComponent_div_0_div_1_div_5_Template, 1, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isFirst);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isFirst);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isFirst);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.data.text, " ");
} }
function CommentComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.data.text, " ");
} }
function CommentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommentComponent_div_0_div_1_Template, 8, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CommentComponent_div_0_div_2_Template, 5, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.foreign);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.foreign);
} }
class CommentComponent {
    constructor(auth) {
        this.auth = auth;
        this.url = '';
        this.foreign = false;
        this.isFirst = true;
        this.shouldBeRendered = true;
        this.publicId = '60539a6801ac562984ae4f93';
        this.uid = this.auth.getUserInfo().id;
    }
    ngOnInit() {
        if (this.data.sender == 'default') {
            this.shouldBeRendered = false;
        } //public case
        else if (this.data.receiver == this.publicId) {
            this.url = this.data.url;
            if (this.data.sender != this.uid) {
                this.foreign = true;
                this.isConsecutive();
            }
        } //private case
        else if (this.data.sender != this.uid) {
            this.foreign = true;
            this.isConsecutive();
        }
    }
    isConsecutive() {
        if (this.data.sender == this.previousId) {
            this.isFirst = false;
        }
    }
}
CommentComponent.ɵfac = function CommentComponent_Factory(t) { return new (t || CommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
CommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentComponent, selectors: [["app-comment"]], inputs: { data: "data", url: "url", previousId: "previousId" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "comment-wrapper not-my-comment ", 4, "ngIf"], ["class", "comment-wrapper my-comment ", 4, "ngIf"], [1, "comment-wrapper", "not-my-comment"], [1, "comment"], ["class", "comment-user ", 4, "ngIf"], [1, "inner-wrapper"], ["class", "avatar ", 3, "src", 4, "ngIf"], ["class", "blank-avatar", 4, "ngIf"], [1, "comment-body", "comment-text"], [1, "comment-user"], [1, "avatar", 3, "src"], [1, "blank-avatar"], [1, "comment-wrapper", "my-comment"]], template: function CommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CommentComponent_div_0_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shouldBeRendered);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".comment-wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%] {\r\n    padding-left: .3rem;\r\n    padding-right: .3rem;\r\n    margin-right: 5px;\r\n    max-width: 75%;\r\n    display: inline-block;\r\n}\r\n\r\n.not-my-comment[_ngcontent-%COMP%] {\r\n    justify-content: flex-start;\r\n}\r\n\r\n.comment-user[_ngcontent-%COMP%] {\r\n    margin-left: 3rem;\r\n    font-size: 20px;\r\n    margin-bottom: -5px;\r\n}\r\n\r\n.comment-body[_ngcontent-%COMP%] {\r\n    background-color: rgb(222 222 222) !important;\r\n    border-radius: 14px;\r\n    margin-top: .3rem;\r\n    margin-left: .5rem;\r\n    display: inline-block;\r\n    min-width: 30px;\r\n    color: white;\r\n}\r\n\r\n.avatar[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    vertical-align: middle;\r\n    margin-top: 5px;\r\n}\r\n\r\n.blank-avatar[_ngcontent-%COMP%] {\r\n    min-width: 35px;\r\n    max-width: 35px;\r\n    height: 35px;\r\n    margin-top: 5px;\r\n    display: inline-block;\r\n}\r\n\r\n.inner-wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n    align-items: flex-start;\r\n}\r\n\r\n.comment-text[_ngcontent-%COMP%] {\r\n    margin-top: .3rem;\r\n    padding: .4rem;\r\n    word-break: break-all;\r\n    color: black;\r\n    min-height: 36px;\r\n}\r\n\r\n.my-comment[_ngcontent-%COMP%] {\r\n    justify-content: flex-end;\r\n}\r\n\r\n.my-comment[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\r\n    background-color: rgb(0, 132, 255) !important;\r\n    color: white !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw2Q0FBNkM7SUFDN0MsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDZDQUE2QztJQUM3Qyx1QkFBdUI7QUFDM0IiLCJmaWxlIjoiY29tbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW1lbnQtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmNvbW1lbnQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAuM3JlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IC4zcmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDc1JTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLm5vdC1teS1jb21tZW50IHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmNvbW1lbnQtdXNlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC01cHg7XHJcbn1cclxuXHJcbi5jb21tZW50LWJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiAyMjIgMjIyKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIG1hcmdpbi10b3A6IC4zcmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWluLXdpZHRoOiAzMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYXZhdGFyIHtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmJsYW5rLWF2YXRhciB7XHJcbiAgICBtaW4td2lkdGg6IDM1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5pbm5lci13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5jb21tZW50LXRleHQge1xyXG4gICAgbWFyZ2luLXRvcDogLjNyZW07XHJcbiAgICBwYWRkaW5nOiAuNHJlbTtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1pbi1oZWlnaHQ6IDM2cHg7XHJcbn1cclxuXHJcbi5teS1jb21tZW50IHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5teS1jb21tZW50PmRpdj5kaXY+ZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMzIsIDI1NSkgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comment',
                templateUrl: './comment.component.html',
                styleUrls: ['./comment.component.css'],
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], previousId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "V83B":
/*!********************************!*\
  !*** ./src/app/Models/room.ts ***!
  \********************************/
/*! exports provided: Room */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room", function() { return Room; });
class Room {
    constructor(list, id) {
        this.commentsList = Array();
        this.senderId = '';
        this.lastComment = '';
        this.commentsList = list;
        this.senderId = id;
    }
    addComment(comment) {
        this.commentsList.push(comment);
    }
    getSender() {
        return this.senderId;
    }
    getComments() {
        return this.commentsList;
    }
}


/***/ }),

/***/ "VO+T":
/*!**************************************************!*\
  !*** ./src/app/chat-area/chat-area.component.ts ***!
  \**************************************************/
/*! exports provided: ChatAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatAreaComponent", function() { return ChatAreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comment/comment.component */ "Uf94");
/* harmony import */ var _Models_room__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/room */ "V83B");
/* harmony import */ var _chat_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat.directive */ "zMGJ");
/* harmony import */ var _services_data_share_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data-share.service */ "JemR");
/* harmony import */ var _services_comments_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/comments.service */ "Tvdm");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/file.service */ "cpn4");










class ChatAreaComponent {
    constructor(componentFactoryResolver, fetchData, commentsService, auth, fileService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.fetchData = fetchData;
        this.commentsService = commentsService;
        this.auth = auth;
        this.fileService = fileService;
        this.rooms = Array();
        this.public = '60539a6801ac562984ae4f93';
        this.previousId = '';
        this.avatar = '';
    }
    ngOnInit() {
        //on room change
        this.fetchData.message.subscribe((data) => {
            if (data.name == 'default')
                return;
            if (data.id == this.activeRoom)
                return;
            this.vc = this.appChat.viewContainerRef;
            this.vc.clear();
            this.activeRoom = data.id;
            this.fetchUrl();
            this.previousId = '';
        });
        // local append
        this.fetchData.local.subscribe((data) => {
            this.commentSectionInit(data);
            this.saveLocal(this.activeRoom, data);
        });
        //remote append
        this.fetchData.remote.subscribe((data) => {
            if (data.receiver == this.public) {
                this.saveLocal(this.public, data);
                if (this.public == this.activeRoom) {
                    this.commentSectionInit(data);
                }
            }
            else {
                this.saveLocal(data.sender, data);
                if (this.activeRoom == data.sender) {
                    this.commentSectionInit(data);
                }
            }
        });
    }
    saveLocal(id, data) {
        this.rooms.forEach((room) => {
            if (room.getSender() == id) {
                room.addComment(data);
            }
        });
    }
    renderer(comments) {
        comments.forEach((comment) => {
            this.commentSectionInit(comment);
        });
        this.fetchData.stopLoading();
    }
    //create a comment instance for each comment
    commentSectionInit(data) {
        if (!data)
            return;
        this.vc = this.appChat.viewContainerRef;
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_comment_comment_component__WEBPACK_IMPORTED_MODULE_1__["CommentComponent"]);
        const componentRef = this.vc.createComponent(componentFactory);
        componentRef.instance.data = data;
        componentRef.instance.url = this.avatar;
        componentRef.instance.previousId = this.previousId;
        this.previousId = data.sender;
    }
    getRoom() {
        for (let room of this.rooms) {
            if (room.getSender() == this.activeRoom) {
                this.renderer(room.getComments());
                return;
            }
        }
        this.fetchFromServer();
    }
    fetchFromServer() {
        this.commentsService
            .getComments('room', {
            receiver: this.activeRoom,
            sender: this.auth.getUserInfo().id,
        })
            .subscribe((response = []) => {
            let room = new _Models_room__WEBPACK_IMPORTED_MODULE_2__["Room"](response.comments, this.activeRoom);
            this.rooms.push(room);
            this.renderer(response.comments);
        });
    }
    fetchUrl() {
        this.fileService
            .getAvatar('avatar/' + this.activeRoom)
            .subscribe((response = []) => {
            this.avatar = response.url;
            this.fetchData.sendUrl(this.avatar);
            this.getRoom();
        });
    }
}
ChatAreaComponent.ɵfac = function ChatAreaComponent_Factory(t) { return new (t || ChatAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_share_service__WEBPACK_IMPORTED_MODULE_4__["DataShareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_comments_service__WEBPACK_IMPORTED_MODULE_5__["CommentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_file_service__WEBPACK_IMPORTED_MODULE_7__["FileService"])); };
ChatAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatAreaComponent, selectors: [["chat-area"]], viewQuery: function ChatAreaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_chat_directive__WEBPACK_IMPORTED_MODULE_3__["ChatDirective"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.appChat = _t.first);
    } }, decls: 1, vars: 0, consts: [["appChat", ""]], template: function ChatAreaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ng-module", 0);
    } }, directives: [_chat_directive__WEBPACK_IMPORTED_MODULE_3__["ChatDirective"]], styles: [".comment-wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.chat-area[_ngcontent-%COMP%] {\r\n    height: calc(100% - 70px);\r\n    overflow-y: scroll;\r\n    min-height: 100px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%] {\r\n    padding-left: .3rem;\r\n    padding-right: .3rem;\r\n    margin-right: 5px;\r\n    max-width: 75%;\r\n    display: inline-block;\r\n}\r\n\r\n.not-my-comment[_ngcontent-%COMP%] {\r\n    justify-content: flex-start;\r\n}\r\n\r\n.comment-user[_ngcontent-%COMP%] {\r\n    margin-left: 3rem;\r\n    font-size: 20px;\r\n    margin-bottom: -5px;\r\n}\r\n\r\n.comment-body[_ngcontent-%COMP%] {\r\n    background-color: rgb(222 222 222) !important;\r\n    border-radius: 14px;\r\n    margin-top: .3rem;\r\n    margin-left: .5rem;\r\n    display: inline-block;\r\n    min-width: 30px;\r\n    color: white;\r\n}\r\n\r\n.avatar[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    vertical-align: middle;\r\n    margin-top: 5px;\r\n}\r\n\r\n.blank-avatar[_ngcontent-%COMP%] {\r\n    min-width: 35px;\r\n    max-width: 35px;\r\n    height: 35px;\r\n    margin-top: 5px;\r\n    display: inline-block;\r\n}\r\n\r\n.inner-wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n    align-items: flex-start;\r\n}\r\n\r\n.comment-text[_ngcontent-%COMP%] {\r\n    margin-top: .3rem;\r\n    margin-bottom: .3rem;\r\n    padding: .4rem;\r\n    word-break: break-all;\r\n    color: black;\r\n    min-height: 36px;\r\n}\r\n\r\n.my-comment[_ngcontent-%COMP%] {\r\n    justify-content: flex-end;\r\n}\r\n\r\n.my-comment[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\r\n    background-color: rgb(0, 132, 255) !important;\r\n    color: white !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtYXJlYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDZDQUE2QztJQUM3QyxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDZDQUE2QztJQUM3Qyx1QkFBdUI7QUFDM0IiLCJmaWxlIjoiY2hhdC1hcmVhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tbWVudC13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uY2hhdC1hcmVhIHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNzBweCk7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmNvbW1lbnQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAuM3JlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IC4zcmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDc1JTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLm5vdC1teS1jb21tZW50IHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmNvbW1lbnQtdXNlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC01cHg7XHJcbn1cclxuXHJcbi5jb21tZW50LWJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiAyMjIgMjIyKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIG1hcmdpbi10b3A6IC4zcmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWluLXdpZHRoOiAzMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYXZhdGFyIHtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmJsYW5rLWF2YXRhciB7XHJcbiAgICBtaW4td2lkdGg6IDM1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5pbm5lci13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5jb21tZW50LXRleHQge1xyXG4gICAgbWFyZ2luLXRvcDogLjNyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuM3JlbTtcclxuICAgIHBhZGRpbmc6IC40cmVtO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWluLWhlaWdodDogMzZweDtcclxufVxyXG5cclxuLm15LWNvbW1lbnQge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLm15LWNvbW1lbnQ+ZGl2PmRpdj5kaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEzMiwgMjU1KSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatAreaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'chat-area',
                templateUrl: './chat-area.component.html',
                styleUrls: ['./chat-area.component.css'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _services_data_share_service__WEBPACK_IMPORTED_MODULE_4__["DataShareService"] }, { type: _services_comments_service__WEBPACK_IMPORTED_MODULE_5__["CommentsService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _services_file_service__WEBPACK_IMPORTED_MODULE_7__["FileService"] }]; }, { appChat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_chat_directive__WEBPACK_IMPORTED_MODULE_3__["ChatDirective"], { static: true }]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth-guard.service */ "MKys");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _services_error_handler_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/error-handler.service */ "zZuk");
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./topbar/topbar.component */ "5Lta");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _services_data_share_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/data-share.service */ "JemR");
/* harmony import */ var _chat_area_chat_area_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./chat-area/chat-area.component */ "VO+T");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./comment/comment.component */ "Uf94");
/* harmony import */ var _chat_area_chat_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./chat-area/chat.directive */ "zMGJ");
/* harmony import */ var _home_conversation_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home/conversation.directive */ "FT6g");
/* harmony import */ var _services_socketio_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/socketio.service */ "O0qW");
/* harmony import */ var _chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./chat-rooms/chat-rooms.component */ "Zoh+");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/data.service */ "EnSQ");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/users.service */ "6Qg2");
/* harmony import */ var _input_field_input_field_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./input-field/input-field.component */ "sjE2");
/* harmony import */ var _services_comments_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/comments.service */ "Tvdm");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./status/status.component */ "O9gW");






























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__["CookieService"],
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__["JwtHelperService"],
        _services_error_handler_service__WEBPACK_IMPORTED_MODULE_13__["ErrorHandlerService"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
        _services_data_share_service__WEBPACK_IMPORTED_MODULE_16__["DataShareService"],
        _services_socketio_service__WEBPACK_IMPORTED_MODULE_21__["SocketioService"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_23__["DataService"],
        _services_users_service__WEBPACK_IMPORTED_MODULE_24__["UsersService"],
        _services_comments_service__WEBPACK_IMPORTED_MODULE_26__["CommentsService"],
    ], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__["JwtModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        ], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_14__["TopbarComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
        _chat_area_chat_area_component__WEBPACK_IMPORTED_MODULE_17__["ChatAreaComponent"],
        _comment_comment_component__WEBPACK_IMPORTED_MODULE_18__["CommentComponent"],
        _chat_area_chat_directive__WEBPACK_IMPORTED_MODULE_19__["ChatDirective"],
        _home_conversation_directive__WEBPACK_IMPORTED_MODULE_20__["ConversationDirective"],
        _chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_22__["ChatRoomsComponent"],
        _input_field_input_field_component__WEBPACK_IMPORTED_MODULE_25__["InputFieldComponent"],
        _status_status_component__WEBPACK_IMPORTED_MODULE_27__["StatusComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__["JwtModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                    _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_14__["TopbarComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                    _chat_area_chat_area_component__WEBPACK_IMPORTED_MODULE_17__["ChatAreaComponent"],
                    _comment_comment_component__WEBPACK_IMPORTED_MODULE_18__["CommentComponent"],
                    _chat_area_chat_directive__WEBPACK_IMPORTED_MODULE_19__["ChatDirective"],
                    _home_conversation_directive__WEBPACK_IMPORTED_MODULE_20__["ConversationDirective"],
                    _chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_22__["ChatRoomsComponent"],
                    _input_field_input_field_component__WEBPACK_IMPORTED_MODULE_25__["InputFieldComponent"],
                    _status_status_component__WEBPACK_IMPORTED_MODULE_27__["StatusComponent"],
                ],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__["JwtModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                ],
                providers: [
                    _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"],
                    ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__["CookieService"],
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__["JwtHelperService"],
                    _services_error_handler_service__WEBPACK_IMPORTED_MODULE_13__["ErrorHandlerService"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                    _services_data_share_service__WEBPACK_IMPORTED_MODULE_16__["DataShareService"],
                    _services_socketio_service__WEBPACK_IMPORTED_MODULE_21__["SocketioService"],
                    _services_data_service__WEBPACK_IMPORTED_MODULE_23__["DataService"],
                    _services_users_service__WEBPACK_IMPORTED_MODULE_24__["UsersService"],
                    _services_comments_service__WEBPACK_IMPORTED_MODULE_26__["CommentsService"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Zoh+":
/*!****************************************************!*\
  !*** ./src/app/chat-rooms/chat-rooms.component.ts ***!
  \****************************************************/
/*! exports provided: ChatRoomsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomsComponent", function() { return ChatRoomsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "tghg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/users.service */ "6Qg2");
/* harmony import */ var _services_data_share_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data-share.service */ "JemR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ChatRoomsComponent_li_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", user_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.details.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r1.lastComment, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("alive", user_r1.status);
} }
function ChatRoomsComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatRoomsComponent_li_10_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r2 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.changeRoom(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatRoomsComponent_li_10_div_1_Template, 9, 7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r1.isVisible);
} }
class ChatRoomsComponent {
    constructor(r, userService, dataShare) {
        this.r = r;
        this.userService = userService;
        this.dataShare = dataShare;
        this.users = [];
        this.userName = '';
        this.activeRoom = 0;
    }
    ngAfterViewInit() { }
    ngOnInit() {
        this.userService.getAll('users').subscribe((response = []) => {
            for (const user of response.users) {
                let newUser = new _user__WEBPACK_IMPORTED_MODULE_1__["User"](user);
                this.users.push(newUser);
            }
            this.changeRoom(0);
        });
        this.dataShare.refresh.subscribe((id) => {
            if (id == '')
                return;
            setTimeout(() => {
                this.addUser(id);
            }, 2500);
        });
        this.dataShare.status.subscribe((id) => {
            this.updateStatus(id);
        });
        this.dataShare.changeUrl.subscribe((url) => {
            if (this.activeRoom < this.users.length) {
                this.users[this.activeRoom].url = url;
            }
        });
        this.dataShare.swapRoom.subscribe((id) => {
            let i = 0;
            this.users.forEach((user) => {
                if (user.details.id == id) {
                    this.changeRoom(i);
                }
                i++;
            });
        });
    }
    get getUsers() {
        return this.users;
    }
    addUser(id) {
        for (const user of this.users) {
            if (user.details.id == id)
                return;
        }
        this.userService.getUser('users/' + id).subscribe((response = []) => {
            this.users.push(new _user__WEBPACK_IMPORTED_MODULE_1__["User"](response.user));
        });
    }
    changeRoom(index) {
        if (index < this.users.length) {
            this.dataShare.notifyChange({
                name: this.users[index].details.name,
                id: this.users[index].details.id,
                status: this.users[index].status,
            });
            this.r.navigate([
                { outlets: { chatArea: ['chat', this.users[index].details.id] } },
            ]);
            this.users[this.activeRoom].active = false;
            this.users[index].active = true;
            this.activeRoom = index;
        }
    }
    updateStatus(id) {
        if (id == '')
            return;
        this.users.forEach((user) => {
            if (user.details.id == id) {
                user.status = !user.status;
            }
        });
    }
    searchUser() {
        for (const user of this.users) {
            if (!user.details.name
                .trim()
                .toLowerCase()
                .startsWith(this.userName.trim().toLowerCase())) {
                user.isVisible = false;
            }
            else {
                user.isVisible = true;
            }
        }
    }
}
ChatRoomsComponent.ɵfac = function ChatRoomsComponent_Factory(t) { return new (t || ChatRoomsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_share_service__WEBPACK_IMPORTED_MODULE_4__["DataShareService"])); };
ChatRoomsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatRoomsComponent, selectors: [["chat-rooms"]], decls: 11, vars: 2, consts: [[1, "sidenav"], [1, "side-top"], [1, "chat-header"], [1, "search-chat", "search-field"], [1, "fas", "fa-search"], ["name", "userName", "placeholder", "Search users ", 1, "my-input", 3, "ngModel", "ngModelChange", "keyup"], [1, "user-list"], ["class", "ts-user ", 3, "click", 4, "ngFor", "ngForOf"], [1, "ts-user", 3, "click"], ["class", "inner-content", 3, "active", 4, "ngIf"], [1, "inner-content"], [1, "user-avatar", 3, "src"], [1, "last-msg"], [2, "margin-bottom", "0px", "font-size", "15px"], [1, "visible"], [1, "status"], [1, "fas", "fa-circle"]], template: function ChatRoomsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Chats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatRoomsComponent_Template_input_ngModelChange_8_listener($event) { return ctx.userName = $event; })("keyup", function ChatRoomsComponent_Template_input_keyup_8_listener() { return ctx.searchUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ChatRoomsComponent_li_10_Template, 2, 1, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getUsers);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".last-msg[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin-left: 8px;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    overflow: hidden;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.status[_ngcontent-%COMP%] {\r\n    margin-right: 5px;\r\n    color: rgb(162, 162, 162);\r\n    font-size: 10px;\r\n}\r\n\r\n.active[_ngcontent-%COMP%] {\r\n    background-color: rgb(209 255 209) !important;\r\n}\r\n\r\n.alive[_ngcontent-%COMP%] {\r\n    color: rgb(0, 21, 255) !important;\r\n}\r\n\r\n.search-chat[_ngcontent-%COMP%] > i[_ngcontent-%COMP%] {\r\n    margin-top: 1px;\r\n    margin-left: 15px;\r\n    color: rgb(103, 103, 103);\r\n}\r\n\r\n.side-top[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid rgb(234, 234, 234);\r\n}\r\n\r\n.user-list[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n    padding: 3px;\r\n    margin-top: 0px;\r\n    height: calc(100% - 11.6rem);\r\n}\r\n\r\n.ts-user[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    padding: 2px;\r\n}\r\n\r\n.user-avatar[_ngcontent-%COMP%] {\r\n    border-radius: 50%;\r\n    height: 60px;\r\n    width: 60px;\r\n}\r\n\r\n.inner-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    width: 100%;\r\n    border-radius: 14px;\r\n    background-color: rgb(230 230 230);\r\n    cursor: pointer;\r\n    padding: 6px;\r\n}\r\n\r\n.inner-content[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(221, 221, 221);\r\n}\r\n\r\n.border[_ngcontent-%COMP%] {\r\n    border-top: 2px solid red;\r\n}\r\n\r\n@media only screen and (max-width: 700px) {\r\n    .sidenav[_ngcontent-%COMP%] {\r\n        width: 115px;\r\n    }\r\n    .visible[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 330px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 3.2rem;\r\n    left: 0px;\r\n    background-color: rgb(255, 255, 255);\r\n    border-right: 1.7px solid rgb(192, 192, 192);\r\n    overflow: hidden;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.user-list[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n    padding: 3px;\r\n    margin-top: 0px;\r\n    height: calc(100% - 11.6rem);\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: rgb(241, 241, 241);\r\n}\r\n\r\n.chat-header[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    margin: 1rem;\r\n}\r\n\r\n.search-chat[_ngcontent-%COMP%] {\r\n    margin: 1rem;\r\n    border-radius: 16px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    background-color: rgb(234, 234, 234);\r\n}\r\n\r\n.my-input[_ngcontent-%COMP%] {\r\n    max-width: 83%;\r\n    margin-left: 6px;\r\n    height: 36px;\r\n    border: none;\r\n    background-color: rgb(234, 234, 234);\r\n    font-size: 18px;\r\n}\r\n\r\n.my-input[_ngcontent-%COMP%]:focus {\r\n    outline: none !important;\r\n}\r\n\r\n.my-input-send[_ngcontent-%COMP%] {\r\n    margin-left: 6px;\r\n    height: 36px;\r\n    border: none;\r\n    background-color: rgb(234, 234, 234);\r\n    font-size: 18px;\r\n}\r\n\r\n.my-input-send[_ngcontent-%COMP%]:focus {\r\n    outline: none !important;\r\n}\r\n\r\n.last-msg[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin-left: 8px;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    overflow: hidden;\r\n}\r\n\r\n.search-chat[_ngcontent-%COMP%] > i[_ngcontent-%COMP%] {\r\n    margin-top: 1px;\r\n    margin-left: 15px;\r\n    color: rgb(103, 103, 103);\r\n}\r\n\r\n.side-top[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid rgb(234, 234, 234);\r\n}\r\n\r\n@media only screen and (max-width: 700px) {\r\n    .sidenav[_ngcontent-%COMP%] {\r\n        width: 115px;\r\n    }\r\n    .search-field[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] {\r\n        width: 50%;\r\n    }\r\n    .search-field[_ngcontent-%COMP%] {\r\n        width: 97px;\r\n        margin-left: 8px;\r\n    }\r\n    .content-wrapper[_ngcontent-%COMP%] {\r\n        left: 115px;\r\n        width: calc(100% - 115px);\r\n    }\r\n    .message[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] {\r\n        width: 80%;\r\n    }\r\n    .visible[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtcm9vbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixVQUFVO0lBQ1YsV0FBVztJQUNYLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMsNENBQTRDO0lBQzVDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFdBQVc7UUFDWCxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFdBQVc7UUFDWCx5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6ImNoYXQtcm9vbXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXN0LW1zZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnN0YXR1cyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIGNvbG9yOiByZ2IoMTYyLCAxNjIsIDE2Mik7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSAyNTUgMjA5KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWxpdmUge1xyXG4gICAgY29sb3I6IHJnYigwLCAyMSwgMjU1KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VhcmNoLWNoYXQ+aSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGNvbG9yOiByZ2IoMTAzLCAxMDMsIDEwMyk7XHJcbn1cclxuXHJcbi5zaWRlLXRvcCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzNCwgMjM0LCAyMzQpO1xyXG59XHJcblxyXG4udXNlci1saXN0IHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDExLjZyZW0pO1xyXG59XHJcblxyXG4udHMtdXNlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbi51c2VyLWF2YXRhciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuLmlubmVyLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCAyMzAgMjMwKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDZweDtcclxufVxyXG5cclxuLmlubmVyLWNvbnRlbnQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG59XHJcblxyXG4uYm9yZGVyIHtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIC5zaWRlbmF2IHtcclxuICAgICAgICB3aWR0aDogMTE1cHg7XHJcbiAgICB9XHJcbiAgICAudmlzaWJsZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDMzMHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMy4ycmVtO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxLjdweCBzb2xpZCByZ2IoMTkyLCAxOTIsIDE5Mik7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi51c2VyLWxpc3Qge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTEuNnJlbSk7XHJcbn1cclxuXHJcbi5zaWRlbmF2IGE6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKTtcclxufVxyXG5cclxuLmNoYXQtaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbjogMXJlbTtcclxufVxyXG5cclxuLnNlYXJjaC1jaGF0IHtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbn1cclxuXHJcbi5teS1pbnB1dCB7XHJcbiAgICBtYXgtd2lkdGg6IDgzJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5teS1pbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5teS1pbnB1dC1zZW5kIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5teS1pbnB1dC1zZW5kOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxhc3QtbXNnIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnNlYXJjaC1jaGF0Pmkge1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBjb2xvcjogcmdiKDEwMywgMTAzLCAxMDMpO1xyXG59XHJcblxyXG4uc2lkZS10b3Age1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzQsIDIzNCwgMjM0KTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgLnNpZGVuYXYge1xyXG4gICAgICAgIHdpZHRoOiAxMTVweDtcclxuICAgIH1cclxuICAgIC5zZWFyY2gtZmllbGQ+aW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLWZpZWxkIHtcclxuICAgICAgICB3aWR0aDogOTdweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAgICAgbGVmdDogMTE1cHg7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDExNXB4KTtcclxuICAgIH1cclxuICAgIC5tZXNzYWdlPmlucHV0IHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG4gICAgLnZpc2libGUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatRoomsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'chat-rooms',
                templateUrl: './chat-rooms.component.html',
                styleUrls: ['./chat-rooms.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }, { type: _services_data_share_service__WEBPACK_IMPORTED_MODULE_4__["DataShareService"] }]; }, null); })();


/***/ }),

/***/ "cpn4":
/*!******************************************!*\
  !*** ./src/app/services/file.service.ts ***!
  \******************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "EnSQ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-handler.service */ "zZuk");





class FileService extends _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] {
    constructor(http, er) {
        super(http, er, 'https://chat-app-ang.herokuapp.com/');
    }
}
FileService.ɵfac = function FileService_Factory(t) { return new (t || FileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerService"])); };
FileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FileService, factory: FileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerService"] }]; }, null); })();


/***/ }),

/***/ "evPK":
/*!*************************************************!*\
  !*** ./src/app/register/password.validators.ts ***!
  \*************************************************/
/*! exports provided: mustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mustMatch", function() { return mustMatch; });
function mustMatch() {
    return (control) => {
        let confirmPassword = control.value;
        let password = localStorage.getItem('pass');
        if (confirmPassword != password) {
            return { mustMatch: false };
        }
        return null;
    };
}


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error-handler.service */ "zZuk");









class AuthService {
    constructor(http, er) {
        this.URL = 'https://chat-app-ang.herokuapp.com/';
        this.http = http;
        this.errorHandler = er;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        this.options = { headers: headers, withCredentials: true };
    }
    //main authentication routine
    isAuthenticated() {
        let token = localStorage.getItem('token');
        if (!token) {
            return false;
        }
        if (this.jwtHelper.isTokenExpired(token)) {
            return false;
        }
        else {
            return true;
        }
    }
    //get info from token
    getUserInfo() {
        let token = localStorage.getItem('token');
        let dec = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_4__["default"])(token);
        return { name: dec.name, email: dec.email, id: dec.id, avatar: dec.avatar };
    }
    //store user info into the local storage
    setUserInfo(token) {
        localStorage.setItem('token', JSON.stringify(token));
    }
    //remove user on logout
    removeUserInfo() {
        localStorage.clear();
    }
    //call the server to validate
    validate(email, password, uri) {
        return this.http.post(this.URL + uri, { email: email, password: password }, this.options);
    }
    //logout
    logout(uri) {
        if (this.isAuthenticated()) {
            this.removeUserInfo();
            return this.http
                .get(this.URL + uri, this.options)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler.handleError));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
    //register
    register(name, email, password, uri) {
        return this.http
            .post(this.URL + uri, { name: name, email: email, password: password }, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler.handleError));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlerService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlerService"] }]; }, null); })();


/***/ }),

/***/ "nODA":
/*!*********************************************!*\
  !*** ./src/app/register/email.validator.ts ***!
  \*********************************************/
/*! exports provided: EmailValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidators", function() { return EmailValidators; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

class EmailValidators {
    static shouldBeUnique(control) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let email = control.value;
            yield fetch('https://chat-app-ang.herokuapp.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email }),
            })
                .then((response = []) => {
                return response.json();
            })
                .then((res = []) => {
                console.log(res);
                if (res.found) {
                    resolve({ shouldBeUnique: false });
                }
                else {
                    resolve(null);
                }
            })
                .catch((err) => {
                if (err) {
                    reject({
                        error: 'Could not resolve request , most likely the server is out of reach',
                    });
                }
            });
        }));
    }
}


/***/ }),

/***/ "nod/":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "sjE2":
/*!******************************************************!*\
  !*** ./src/app/input-field/input-field.component.ts ***!
  \******************************************************/
/*! exports provided: InputFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFieldComponent", function() { return InputFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_share_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data-share.service */ "JemR");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_socketio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/socketio.service */ "O0qW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class InputFieldComponent {
    constructor(forwardMessage, auth, io) {
        this.forwardMessage = forwardMessage;
        this.auth = auth;
        this.io = io;
        this.receiver = '';
        this.comment = '';
    }
    ngOnInit() {
        this.forwardMessage.message.subscribe((message = []) => {
            if (message.name != 'default') {
                this.receiver = message.id;
            }
        });
    }
    newComment() {
        if (this.comment.trim().length < 2) {
            return;
        }
        let newComment = {
            sender: this.auth.getUserInfo().id,
            senderName: this.auth.getUserInfo().name,
            receiver: this.receiver,
            text: this.comment.trim(),
            url: this.auth.getUserInfo().avatar,
            date: new Date(),
        };
        this.forwardMessage.sendlocal(newComment);
        this.io.messageSubmit(newComment);
        this.comment = '';
    }
}
InputFieldComponent.ɵfac = function InputFieldComponent_Factory(t) { return new (t || InputFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_share_service__WEBPACK_IMPORTED_MODULE_1__["DataShareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_socketio_service__WEBPACK_IMPORTED_MODULE_3__["SocketioService"])); };
InputFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputFieldComponent, selectors: [["input-field"]], decls: 5, vars: 1, consts: [[1, "input-field"], [1, "search-chat", "send-message"], [1, "fas", "fa-envelope"], ["name", "comment", "type", "text", "placeholder", "write something... ", 1, "my-input-send", "ts-send", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "fas", "fa-paper-plane", 3, "click"]], template: function InputFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputFieldComponent_Template_input_ngModelChange_3_listener($event) { return ctx.comment = $event; })("keyup.enter", function InputFieldComponent_Template_input_keyup_enter_3_listener() { return ctx.newComment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputFieldComponent_Template_i_click_4_listener() { return ctx.newComment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.comment);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".sidenav[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 330px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 3.2rem;\r\n    left: 0px;\r\n    background-color: rgb(255, 255, 255);\r\n    border-right: 1.7px solid rgb(192, 192, 192);\r\n    overflow: hidden;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: rgb(241, 241, 241);\r\n}\r\n\r\n.chat-header[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    margin: 1rem;\r\n}\r\n\r\n.search-chat[_ngcontent-%COMP%] {\r\n    margin: 1rem;\r\n    border-radius: 16px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    background-color: rgb(234, 234, 234);\r\n}\r\n\r\n.my-input[_ngcontent-%COMP%] {\r\n    max-width: 83%;\r\n    margin-left: 6px;\r\n    height: 36px;\r\n    border: none;\r\n    background-color: rgb(234, 234, 234);\r\n    font-size: 18px;\r\n}\r\n\r\n.my-input[_ngcontent-%COMP%]:focus {\r\n    outline: none !important;\r\n}\r\n\r\n.my-input-send[_ngcontent-%COMP%] {\r\n    margin-left: 6px;\r\n    height: 36px;\r\n    border: none;\r\n    background-color: rgb(234, 234, 234);\r\n    font-size: 18px;\r\n}\r\n\r\n.my-input-send[_ngcontent-%COMP%]:focus {\r\n    outline: none !important;\r\n}\r\n\r\n.last-msg[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin-left: 8px;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    overflow: hidden;\r\n}\r\n\r\n.status[_ngcontent-%COMP%] {\r\n    margin-right: 5px;\r\n    color: green;\r\n    font-size: 10px;\r\n}\r\n\r\n.search-chat[_ngcontent-%COMP%] > i[_ngcontent-%COMP%] {\r\n    margin-top: 1px;\r\n    margin-left: 15px;\r\n    color: rgb(103, 103, 103);\r\n}\r\n\r\n.side-top[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid rgb(234, 234, 234);\r\n}\r\n\r\n.user-list[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n    padding: 3px;\r\n    margin-top: 0px;\r\n    height: calc(100% - 11.6rem);\r\n}\r\n\r\nul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    padding: 2px;\r\n}\r\n\r\n.user-avatar[_ngcontent-%COMP%] {\r\n    border-radius: 50%;\r\n    height: 60px;\r\n    width: 60px;\r\n}\r\n\r\n.inner-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    width: 100%;\r\n    border-radius: 14px;\r\n    background-color: rgb(230 230 230);\r\n    cursor: pointer;\r\n    padding: 6px;\r\n}\r\n\r\n.inner-content[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(221, 221, 221);\r\n}\r\n\r\n.border[_ngcontent-%COMP%] {\r\n    border-top: 2px solid red;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: 0px;\r\n    bottom: 0px;\r\n    width: 100%;\r\n    background-color: red;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n\r\n.content-wrapper[_ngcontent-%COMP%] {\r\n    left: 328px;\r\n    top: 50px;\r\n    height: calc(100vh - 50px);\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: calc(100% - 328px);\r\n    margin-right: 5px;\r\n    position: relative;\r\n}\r\n\r\n.chat-info[_ngcontent-%COMP%] {\r\n    min-height: 70px;\r\n    max-height: 70px;\r\n    border-bottom: 1px solid rgb(210, 210, 210);\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    padding: 12px;\r\n}\r\n\r\n.chat-area[_ngcontent-%COMP%] {\r\n    height: calc(100% - 70px);\r\n    overflow-y: scroll;\r\n    min-height: 100px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%] {\r\n    min-height: 68px !important;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n}\r\n\r\n.send-message[_ngcontent-%COMP%] {\r\n    padding-right: 15px;\r\n    width: 100%;\r\n}\r\n\r\n.send-message[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%] > i[_ngcontent-%COMP%] {\r\n    color: blue;\r\n    font-size: 25px;\r\n    margin-right: 30px;\r\n    cursor: pointer;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]:hover {\r\n    color: rgb(0, 0, 168);\r\n}\r\n\r\n.my-input[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n}\r\n\r\n@media only screen and (max-width: 700px) {\r\n    .sidenav[_ngcontent-%COMP%] {\r\n        width: 115px;\r\n    }\r\n    .search-field[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] {\r\n        width: 50%;\r\n    }\r\n    .search-field[_ngcontent-%COMP%] {\r\n        width: 97px;\r\n        margin-left: 8px;\r\n    }\r\n    .content-wrapper[_ngcontent-%COMP%] {\r\n        left: 115px;\r\n        width: calc(100% - 115px);\r\n    }\r\n    .message[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] {\r\n        width: 80%;\r\n    }\r\n    .visible[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\r\n\r\n.small[_ngcontent-%COMP%] {\r\n    width: 43px;\r\n    height: 43px;\r\n}\r\n\r\n.user-details[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-left: 13px;\r\n    align-items: flex-start;\r\n}\r\n\r\n.user-details[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    margin-bottom: -3px;\r\n}\r\n\r\n.comment-wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.my-comment[_ngcontent-%COMP%] {\r\n    justify-content: flex-end;\r\n}\r\n\r\n.not-my-comment[_ngcontent-%COMP%] {\r\n    justify-content: flex-start;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%] {\r\n    padding-left: .3rem;\r\n    padding-right: .3rem;\r\n    margin-right: 5px;\r\n    max-width: 75%;\r\n    display: inline-block;\r\n}\r\n\r\n.comment-user[_ngcontent-%COMP%] {\r\n    margin-left: 3rem;\r\n    font-size: 20px;\r\n    margin-bottom: -5px;\r\n}\r\n\r\n.comment-body[_ngcontent-%COMP%] {\r\n    background-color: rgb(222 222 222) !important;\r\n    border-radius: 14px;\r\n    margin-top: .3rem;\r\n    margin-left: .5rem;\r\n    display: inline-block;\r\n    min-width: 10px;\r\n    color: white;\r\n}\r\n\r\n.consecutive[_ngcontent-%COMP%] {\r\n    margin-left: 2.2rem !important;\r\n}\r\n\r\n.comment-text[_ngcontent-%COMP%] {\r\n    margin-top: .3rem;\r\n    margin-bottom: .3rem;\r\n    padding: .4rem;\r\n    word-break: break-all;\r\n    color: black;\r\n}\r\n\r\n.avatar[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    vertical-align: middle;\r\n    margin-top: 8px;\r\n}\r\n\r\n.blank-avatar[_ngcontent-%COMP%] {\r\n    min-width: 35px;\r\n    max-width: 35px;\r\n    height: 35px;\r\n    margin-top: 8px;\r\n    display: inline-block;\r\n}\r\n\r\n.inner-wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n    align-items: flex-start;\r\n}\r\n\r\n.my-comment[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\r\n    background-color: rgb(0, 132, 255) !important;\r\n    color: white !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LWZpZWxkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixVQUFVO0lBQ1YsV0FBVztJQUNYLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMsNENBQTRDO0lBQzVDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsMkNBQTJDO0lBQzNDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksV0FBVztRQUNYLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksV0FBVztRQUNYLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNkNBQTZDO0lBQzdDLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksNkNBQTZDO0lBQzdDLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJpbnB1dC1maWVsZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDMzMHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMy4ycmVtO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxLjdweCBzb2xpZCByZ2IoMTkyLCAxOTIsIDE5Mik7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zaWRlbmF2IGE6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKTtcclxufVxyXG5cclxuLmNoYXQtaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbjogMXJlbTtcclxufVxyXG5cclxuLnNlYXJjaC1jaGF0IHtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbn1cclxuXHJcbi5teS1pbnB1dCB7XHJcbiAgICBtYXgtd2lkdGg6IDgzJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5teS1pbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5teS1pbnB1dC1zZW5kIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5teS1pbnB1dC1zZW5kOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxhc3QtbXNnIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnN0YXR1cyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLnNlYXJjaC1jaGF0Pmkge1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBjb2xvcjogcmdiKDEwMywgMTAzLCAxMDMpO1xyXG59XHJcblxyXG4uc2lkZS10b3Age1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzQsIDIzNCwgMjM0KTtcclxufVxyXG5cclxuLnVzZXItbGlzdCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMS42cmVtKTtcclxufVxyXG5cclxudWw+bGkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG59XHJcblxyXG4udXNlci1hdmF0YXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbn1cclxuXHJcbi5pbm5lci1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAgMjMwIDIzMCk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbn1cclxuXHJcbi5pbm5lci1jb250ZW50OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxufVxyXG5cclxuLmJvcmRlciB7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmVkO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVudC13cmFwcGVyIHtcclxuICAgIGxlZnQ6IDMyOHB4O1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMjhweCk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNoYXQtaW5mbyB7XHJcbiAgICBtaW4taGVpZ2h0OiA3MHB4O1xyXG4gICAgbWF4LWhlaWdodDogNzBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG59XHJcblxyXG4uY2hhdC1hcmVhIHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNzBweCk7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIHtcclxuICAgIG1pbi1oZWlnaHQ6IDY4cHggIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNlbmQtbWVzc2FnZSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zZW5kLW1lc3NhZ2U+aW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZD5pIHtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQ+aTpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDE2OCk7XHJcbn1cclxuXHJcbi5teS1pbnB1dCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAuc2lkZW5hdiB7XHJcbiAgICAgICAgd2lkdGg6IDExNXB4O1xyXG4gICAgfVxyXG4gICAgLnNlYXJjaC1maWVsZD5pbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgIC5zZWFyY2gtZmllbGQge1xyXG4gICAgICAgIHdpZHRoOiA5N3B4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICB9XHJcbiAgICAuY29udGVudC13cmFwcGVyIHtcclxuICAgICAgICBsZWZ0OiAxMTVweDtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTE1cHgpO1xyXG4gICAgfVxyXG4gICAgLm1lc3NhZ2U+aW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbiAgICAudmlzaWJsZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLnNtYWxsIHtcclxuICAgIHdpZHRoOiA0M3B4O1xyXG4gICAgaGVpZ2h0OiA0M3B4O1xyXG59XHJcblxyXG4udXNlci1kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEzcHg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuLnVzZXItZGV0YWlscz5oMSB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtM3B4O1xyXG59XHJcblxyXG4uY29tbWVudC13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4ubXktY29tbWVudCB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4ubm90LW15LWNvbW1lbnQge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uY29tbWVudCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IC4zcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogLjNyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1heC13aWR0aDogNzUlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uY29tbWVudC11c2VyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTVweDtcclxufVxyXG5cclxuLmNvbW1lbnQtYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIyIDIyMiAyMjIpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLjNyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogLjVyZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtaW4td2lkdGg6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jb25zZWN1dGl2ZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMi4ycmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb21tZW50LXRleHQge1xyXG4gICAgbWFyZ2luLXRvcDogLjNyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuM3JlbTtcclxuICAgIHBhZGRpbmc6IC40cmVtO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uYXZhdGFyIHtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG5cclxuLmJsYW5rLWF2YXRhciB7XHJcbiAgICBtaW4td2lkdGg6IDM1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5pbm5lci13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5teS1jb21tZW50PmRpdj5kaXY+ZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMzIsIDI1NSkgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'input-field',
                templateUrl: './input-field.component.html',
                styleUrls: ['./input-field.component.css'],
            }]
    }], function () { return [{ type: _services_data_share_service__WEBPACK_IMPORTED_MODULE_1__["DataShareService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _services_socketio_service__WEBPACK_IMPORTED_MODULE_3__["SocketioService"] }]; }, null); })();


/***/ }),

/***/ "tghg":
/*!************************************!*\
  !*** ./src/app/chat-rooms/user.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(userData) {
        this.lastComment = 'Click to start chatting.';
        this.status = true;
        this.isVisible = true;
        this.active = false;
        this.url = '';
        this.details = userData;
        this.url = userData.avatar;
        if (userData.id == '60539a6801ac562984ae4f93') {
            this.status == true;
        }
        else {
            this.status = userData.alive;
        }
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chat_area_chat_area_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-area/chat-area.component */ "VO+T");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth-guard.service */ "MKys");









const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]],
        children: [
            {
                path: 'chat/:id',
                component: _chat_area_chat_area_component__WEBPACK_IMPORTED_MODULE_2__["ChatAreaComponent"],
                canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]],
                outlet: 'chatArea',
            },
        ],
    },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_data_share_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data-share.service */ "JemR");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../register/register.component */ "1W4x");









class LoginComponent {
    constructor(a, r, d) {
        this.password1 = '';
        //login validators
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
        });
        this.authService = a;
        this.router = r;
        this.dataShare = d;
    }
    login() {
        //check if the form is valid
        if (this.loginForm.invalid) {
            return;
        }
        this.authService
            .validate(this.loginForm.value.email, this.loginForm.value.password, 'login')
            .subscribe((response = []) => {
            console.log(response);
            this.authService.setUserInfo(response.user);
            localStorage.removeItem('pass');
            this.router.navigate(['']);
        }, 
        //handle the error locally so we can display detailed messages to the user
        (error) => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"] && error) {
                if (error.error.message[0] == 'Incorrect password') {
                    console.log(error.error.message[0]);
                    this.loginForm.controls['password'].setErrors({ invalid: true });
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
    }
    //login form
    get name() {
        return this.loginForm.get('email');
    }
    get password() {
        return this.loginForm.get('password');
    }
    toggleModal() {
        this.dataShare.registerModal('changed');
    }
    ngOnInit() { }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_share_service__WEBPACK_IMPORTED_MODULE_5__["DataShareService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 21, vars: 9, consts: [[1, "login-overlay"], [1, "container-fluid", "dark-color", "position"], [1, "login-wrapper"], [1, "avatar-wrapper"], [1, "login-avatar-holder"], ["src", "assets/38422.jpg", 1, "img"], [1, "name-tab"], [1, "login-card"], [3, "formGroup", "ngSubmit"], [1, "input-wrapper-email"], ["formControlName", "email", "name", "email", "type", "text", "placeholder", "Email", 1, "custom-input"], [1, "input-wrapper-password"], ["formControlName", "password", "name", "password", "type", "text", "placeholder", " Password ", 1, "custom-input"], ["name", "login ", "id", "js-login ", "type", "submit ", 1, "my-button"], [1, "divider"], ["id", "js-modal ", 1, "my-register-button", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "SuperUser");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_10_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_18_listener() { return ctx.toggleModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Create New Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "app-register");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("input-outline", ctx.name.touched && !ctx.name.invalid)("error-outline", ctx.name.invalid && ctx.name.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("input-outline", ctx.password.touched && !ctx.password.invalid)("error-outline", ctx.password.invalid && ctx.password.touched);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]], styles: [".login-card[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 25rem;\r\n    height: 23rem;\r\n    border-radius: 8px;\r\n    background-color: white;\r\n    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);\r\n}\r\n\r\n.login-wrapper[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    padding: 10px;\r\n    display: flex;\r\n    margin-top: 5rem;\r\n    flex-direction: row;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.input-wrapper-password[_ngcontent-%COMP%], .input-wrapper-email[_ngcontent-%COMP%] {\r\n    width: 22rem;\r\n    height: 3.6rem;\r\n    border: 1px solid #dddfe2;\r\n    border-radius: 6px;\r\n    margin: 20px;\r\n    display: flex;\r\n    position: relative;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.input-outline[_ngcontent-%COMP%] {\r\n    border-color: #1877f2;\r\n    box-shadow: 0 0 0 2px #e7f3ff;\r\n    caret-color: #1877f2;\r\n}\r\n\r\n.error-outline[_ngcontent-%COMP%] {\r\n    border-color: #fb0000 !important;\r\n    box-shadow: 0 0 0 2px #e7f3ff !important;\r\n}\r\n\r\n.custom-input[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 90%;\r\n    border: none;\r\n    font-size: 18px;\r\n}\r\n\r\n.custom-input[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n    background-color: rgb(231, 231, 231);\r\n}\r\n\r\n.my-button[_ngcontent-%COMP%] {\r\n    width: 22rem;\r\n    height: 3.3rem;\r\n    margin-left: 1.3rem;\r\n    border-radius: 6px;\r\n    border: none;\r\n    caret-color: #1877f2;\r\n    background-color: #1877f2;\r\n    color: white;\r\n    font-weight: 500;\r\n    font-size: 25px;\r\n    transition-property: background-color;\r\n    transition-duration: 300ms;\r\n}\r\n\r\n.my-button[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n}\r\n\r\n.my-button[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    background-color: #313dc3;\r\n}\r\n\r\n.my-register-button[_ngcontent-%COMP%] {\r\n    width: 14rem;\r\n    height: 3.6rem;\r\n    border-radius: 6px;\r\n    margin-top: 1.5rem;\r\n    border: none;\r\n    caret-color: #1877f2;\r\n    background-color: #149600;\r\n    color: white;\r\n    font-weight: 500;\r\n    font-size: 20px;\r\n    transition-property: background-color;\r\n    transition-duration: 300ms;\r\n}\r\n\r\n.my-register-button[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n}\r\n\r\n.my-register-button[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    background-color: #1c800f;\r\n}\r\n\r\n.divider[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #cbced1;\r\n    margin-top: 2rem;\r\n    width: 90%;\r\n    margin-left: 1.3rem;\r\n}\r\n\r\n.login-avatar-holder[_ngcontent-%COMP%] {\r\n    border: 1px solid #cbced1;\r\n    height: 210px;\r\n    width: 180px;\r\n    margin-bottom: 2rem;\r\n    border-radius: 8px;\r\n    position: relative;\r\n    justify-content: space-between;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.login-avatar-holder[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);\r\n}\r\n\r\n.avatar-wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    gap: 1.2rem;\r\n}\r\n\r\n.name-tab[_ngcontent-%COMP%] {\r\n    height: 40px;\r\n    width: 100%;\r\n    background-color: white;\r\n    border-bottom-right-radius: 6px;\r\n    border-bottom-left-radius: 6px;\r\n    text-align: center;\r\n    font-size: 20px !important;\r\n    color: grey;\r\n}\r\n\r\n.img[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n    border-top-right-radius: 8px;\r\n    border-top-left-radius: 8px;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n    display: none !important;\r\n}\r\n\r\n.register-field[_ngcontent-%COMP%] {\r\n    width: 23rem;\r\n    height: 3rem;\r\n    border: 1px solid #dddfe2;\r\n    background: #f5f6f7;\r\n    border-radius: 6px;\r\n    margin: 10px;\r\n    display: flex;\r\n    position: relative;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.register-field[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] {\r\n    background: #f5f6f7 !important;\r\n}\r\n\r\n.sign-up[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 5px;\r\n}\r\n\r\n.register-divider[_ngcontent-%COMP%] {\r\n    margin-top: 19px;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.sign-up-btn[_ngcontent-%COMP%] {\r\n    width: 15rem;\r\n    height: 3rem;\r\n    margin-left: 0;\r\n    margin-top: 1rem;\r\n    background-color: rgb(255, 94, 0);\r\n}\r\n\r\n.sign-up-btn[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(255, 51, 0);\r\n}\r\n\r\n.my-form[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    justify-content: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.overlay[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    -webkit-backdrop-filter: blur(3px);\r\n            backdrop-filter: blur(3px);\r\n    z-index: 9;\r\n}\r\n\r\n.login-overlay[_ngcontent-%COMP%] {\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: fixed;\r\n    background-color: #eaeaea;\r\n    z-index: -1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsbUVBQW1FO0FBQ3ZFOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YscUNBQXFDO0lBQ3JDLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHFDQUFxQztJQUNyQywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1FQUFtRTtBQUN2RTs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsV0FBVztBQUNmIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjVyZW07XHJcbiAgICBoZWlnaHQ6IDIzcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiKDAgMCAwIC8gMTAlKSwgMCA4cHggMTZweCByZ2IoMCAwIDAgLyAxMCUpO1xyXG59XHJcblxyXG4ubG9naW4td3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uaW5wdXQtd3JhcHBlci1wYXNzd29yZCxcclxuLmlucHV0LXdyYXBwZXItZW1haWwge1xyXG4gICAgd2lkdGg6IDIycmVtO1xyXG4gICAgaGVpZ2h0OiAzLjZyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZmUyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnB1dC1vdXRsaW5lIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzE4NzdmMjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjZTdmM2ZmO1xyXG4gICAgY2FyZXQtY29sb3I6ICMxODc3ZjI7XHJcbn1cclxuXHJcbi5lcnJvci1vdXRsaW5lIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZiMDAwMCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICNlN2YzZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1c3RvbS1pbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uY3VzdG9tLWlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAyMzEsIDIzMSk7XHJcbn1cclxuXHJcbi5teS1idXR0b24ge1xyXG4gICAgd2lkdGg6IDIycmVtO1xyXG4gICAgaGVpZ2h0OiAzLjNyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMS4zcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY2FyZXQtY29sb3I6ICMxODc3ZjI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg3N2YyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3I7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcclxufVxyXG5cclxuLm15LWJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubXktYnV0dG9uOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTNkYzM7XHJcbn1cclxuXHJcbi5teS1yZWdpc3Rlci1idXR0b24ge1xyXG4gICAgd2lkdGg6IDE0cmVtO1xyXG4gICAgaGVpZ2h0OiAzLjZyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjYXJldC1jb2xvcjogIzE4NzdmMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDk2MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvcjtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xyXG59XHJcblxyXG4ubXktcmVnaXN0ZXItYnV0dG9uOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5teS1yZWdpc3Rlci1idXR0b246aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjODAwZjtcclxufVxyXG5cclxuLmRpdmlkZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjYmNlZDE7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxLjNyZW07XHJcbn1cclxuXHJcbi5sb2dpbi1hdmF0YXItaG9sZGVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmNlZDE7XHJcbiAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubG9naW4tYXZhdGFyLWhvbGRlcjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiKDAgMCAwIC8gMTAlKSwgMCA4cHggMTZweCByZ2IoMCAwIDAgLyAxMCUpO1xyXG59XHJcblxyXG4uYXZhdGFyLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBnYXA6IDEuMnJlbTtcclxufVxyXG5cclxuLm5hbWUtdGFiIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVnaXN0ZXItZmllbGQge1xyXG4gICAgd2lkdGg6IDIzcmVtO1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGZlMjtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY2Zjc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWZpZWxkPmlucHV0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY2ZjcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNpZ24tdXAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4ucmVnaXN0ZXItZGl2aWRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxOXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLnNpZ24tdXAtYnRuIHtcclxuICAgIHdpZHRoOiAxNXJlbTtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDk0LCAwKTtcclxufVxyXG5cclxuLnNpZ24tdXAtYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDUxLCAwKTtcclxufVxyXG5cclxuLm15LWZvcm0ge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG4gICAgei1pbmRleDogOTtcclxufVxyXG5cclxuLmxvZ2luLW92ZXJsYXkge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css'],
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_data_share_service__WEBPACK_IMPORTED_MODULE_5__["DataShareService"] }]; }, null); })();


/***/ }),

/***/ "zMGJ":
/*!*********************************************!*\
  !*** ./src/app/chat-area/chat.directive.ts ***!
  \*********************************************/
/*! exports provided: ChatDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDirective", function() { return ChatDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ChatDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
ChatDirective.ɵfac = function ChatDirective_Factory(t) { return new (t || ChatDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
ChatDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ChatDirective, selectors: [["", "appChat", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appChat]',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zZuk":
/*!***************************************************!*\
  !*** ./src/app/services/error-handler.service.ts ***!
  \***************************************************/
/*! exports provided: ErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function() { return ErrorHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ErrorHandlerService {
    constructor() { }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // Return an observable with a user-facing error message.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    }
}
ErrorHandlerService.ɵfac = function ErrorHandlerService_Factory(t) { return new (t || ErrorHandlerService)(); };
ErrorHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorHandlerService, factory: ErrorHandlerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map