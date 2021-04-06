"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var route_reuse_service_1 = require("./services/route-reuse.service");
describe('RouteReuseService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(route_reuse_service_1.RouteReuseService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
