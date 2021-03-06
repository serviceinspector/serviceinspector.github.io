System.register(['@angular/core', '../services/request.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, request_service_1;
    var QuickHTTP;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (request_service_1_1) {
                request_service_1 = request_service_1_1;
            }],
        execute: function() {
            QuickHTTP = (function () {
                function QuickHTTP(service, element) {
                    this.input = "";
                    this.element = element;
                    this.service = service;
                }
                QuickHTTP.prototype.submit = function () {
                    debugger;
                    if (!this.input.startsWith('http://') && !this.input.startsWith('https://')) {
                        this.input = 'http://' + this.input;
                    }
                    this.service.get(this.input)
                        .then(this.onGetResult.bind(this));
                };
                QuickHTTP.prototype.onGetResult = function (result) {
                    console.log(result);
                };
                QuickHTTP.prototype.isButtonDisabled = function () {
                    return this.input && this.input.length;
                };
                QuickHTTP = __decorate([
                    core_1.Component({
                        selector: 'quick-http',
                        templateUrl: '/html/quick-http.html'
                    }), 
                    __metadata('design:paramtypes', [request_service_1.WebRequestService, core_1.ElementRef])
                ], QuickHTTP);
                return QuickHTTP;
            }());
            exports_1("QuickHTTP", QuickHTTP);
        }
    }
});
//# sourceMappingURL=quick-http.component.js.map