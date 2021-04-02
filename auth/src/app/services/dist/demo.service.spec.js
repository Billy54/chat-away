"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var demo_service_1 = require("./demo.service");
describe('DemoService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(demo_service_1.DemoService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
