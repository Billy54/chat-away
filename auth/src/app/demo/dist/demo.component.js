"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DemoComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var DemoComponent = /** @class */ (function () {
    function DemoComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        //demo validators
        this.demoForm = new forms_1.FormGroup({
            name: new forms_1.FormControl('', [forms_1.Validators.minLength(3), forms_1.Validators.required])
        });
    }
    DemoComponent.prototype.ngOnInit = function () { };
    DemoComponent.prototype.loginDemo = function () {
        var _this = this;
        if (this.demoForm.invalid) {
            return;
        }
        var uname = this.demoForm.value.name;
        this.authService
            .register(uname + '', uname + '@email.com', 'demoAccount', 'demo')
            .subscribe(function (res) {
            _this.closeModal();
            _this.router.navigate(['']);
        });
    };
    DemoComponent.prototype.closeModal = function () {
        var btn = document.querySelector('#close');
        btn.click();
    };
    Object.defineProperty(DemoComponent.prototype, "name", {
        get: function () {
            return this.demoForm.get('name');
        },
        enumerable: false,
        configurable: true
    });
    DemoComponent = __decorate([
        core_1.Component({
            selector: 'app-demo',
            templateUrl: './demo.component.html',
            styleUrls: ['./demo.component.css']
        })
    ], DemoComponent);
    return DemoComponent;
}());
exports.DemoComponent = DemoComponent;
