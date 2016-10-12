"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var inversify_1 = require("inversify");
var express = require("express");
var INTERFACES = require("../interfaces");
var ControllerManager = (function () {
    function ControllerManager(settings, logger, dataManager, controllerFactory) {
        var _this = this;
        this.initializeControllers = function () {
            _this.dataManager.models.forEach(function (model) {
                var controller = _this.controllerFactory();
                controller.setModel(model);
                _this.controllers.push(controller);
            });
            _this.controllers.forEach(function (controller) {
                _this.router.use(controller.path, controller.router);
            });
        };
        this.settings = settings;
        this.logger = logger;
        this.dataManager = dataManager;
        this.controllerFactory = controllerFactory;
        this.router = express.Router();
        this.controllers = [];
        this.initializeControllers();
    }
    ControllerManager = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject("Settings")),
        __param(1, inversify_1.inject("Logger")),
        __param(2, inversify_1.inject("DataManager")),
        __param(3, inversify_1.inject("Factory<Controller>")), 
        __metadata('design:paramtypes', [Object, Object, Object, Function])
    ], ControllerManager);
    return ControllerManager;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ControllerManager;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL2NvbnRyb2xsZXJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQkFBbUMsV0FBVyxDQUFDLENBQUE7QUFDL0MsSUFBWSxPQUFPLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFDbkMsSUFBWSxVQUFVLFdBQU0sZUFBZSxDQUFDLENBQUE7QUFPNUM7SUFTRSwyQkFDc0IsUUFBOEIsRUFDaEMsTUFBMEIsRUFDckIsV0FBb0MsRUFDNUIsaUJBQ0Q7UUFkbEMsaUJBd0NDO1FBWFEsMEJBQXFCLEdBQUc7WUFDN0IsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztnQkFDcEMsSUFBSSxVQUFVLEdBQUcsS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQzFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxDQUFDO1lBRUgsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxVQUFVO2dCQUNsQyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0RCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQTtRQXZCQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFFM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQXpCSDtRQUFDLHNCQUFVLEVBQUU7bUJBV1Isa0JBQU0sQ0FBQyxVQUFVLENBQUM7bUJBQ2xCLGtCQUFNLENBQUMsUUFBUSxDQUFDO21CQUNoQixrQkFBTSxDQUFDLGFBQWEsQ0FBQzttQkFDckIsa0JBQU0sQ0FBQyxxQkFBcUIsQ0FBQzs7eUJBZHJCO0lBeUNiLHdCQUFDO0FBQUQsQ0F4Q0EsQUF3Q0MsSUFBQTtBQXhDRDttQ0F3Q0MsQ0FBQSIsImZpbGUiOiJjbGFzc2VzL2NvbnRyb2xsZXJNYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0ICogYXMgSU5URVJGQUNFUyBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xuXG4vKipcbiAqIENvbnRyb2xsZXJNYW5hZ2VyIGluc3RhbnRpYXRlcyBjb250cm9sbGVycywgYXNzaWducyBtb2RlbHMsIGFuZFxuICogZGVmaW5lcyByb3V0ZXMgZm9yIHRoZW0uXG4gKi9cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXJNYW5hZ2VyXG5pbXBsZW1lbnRzIElOVEVSRkFDRVMuSUNvbnRyb2xsZXJNYW5hZ2VyIHtcbiAgcHVibGljIHNldHRpbmdzOiBJTlRFUkZBQ0VTLklTZXR0aW5ncztcbiAgcHVibGljIGxvZ2dlcjogSU5URVJGQUNFUy5JTG9nZ2VyO1xuICBwdWJsaWMgcm91dGVyOiBleHByZXNzLlJvdXRlcjtcbiAgcHVibGljIGRhdGFNYW5hZ2VyOiBJTlRFUkZBQ0VTLklEYXRhTWFuYWdlcjtcbiAgcHVibGljIGNvbnRyb2xsZXJGYWN0b3J5OiAoKSA9PiBJTlRFUkZBQ0VTLklDb250cm9sbGVyO1xuICBwdWJsaWMgY29udHJvbGxlcnM6IElOVEVSRkFDRVMuSUNvbnRyb2xsZXJbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAaW5qZWN0KFwiU2V0dGluZ3NcIikgc2V0dGluZ3M6IElOVEVSRkFDRVMuSVNldHRpbmdzLFxuICAgIEBpbmplY3QoXCJMb2dnZXJcIikgbG9nZ2VyOiBJTlRFUkZBQ0VTLklMb2dnZXIsXG4gICAgQGluamVjdChcIkRhdGFNYW5hZ2VyXCIpIGRhdGFNYW5hZ2VyOiBJTlRFUkZBQ0VTLklEYXRhTWFuYWdlcixcbiAgICBAaW5qZWN0KFwiRmFjdG9yeTxDb250cm9sbGVyPlwiKSBjb250cm9sbGVyRmFjdG9yeTpcbiAgICAgICgpID0+IElOVEVSRkFDRVMuSUNvbnRyb2xsZXJcbiAgKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuICAgIHRoaXMuZGF0YU1hbmFnZXIgPSBkYXRhTWFuYWdlcjtcbiAgICB0aGlzLmNvbnRyb2xsZXJGYWN0b3J5ID0gY29udHJvbGxlckZhY3Rvcnk7XG5cbiAgICB0aGlzLnJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG4gICAgdGhpcy5jb250cm9sbGVycyA9IFtdO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUNvbnRyb2xsZXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogQXNzaWduIG1vZGVscyB0byBjb250cm9sbGVycyBhbmQgc2V0IHRoZW0gdXAuXG4gICAqL1xuICBwdWJsaWMgaW5pdGlhbGl6ZUNvbnRyb2xsZXJzID0gKCkgPT4ge1xuICAgIHRoaXMuZGF0YU1hbmFnZXIubW9kZWxzLmZvckVhY2goKG1vZGVsKSA9PiB7XG4gICAgICBsZXQgY29udHJvbGxlciA9IHRoaXMuY29udHJvbGxlckZhY3RvcnkoKTtcbiAgICAgIGNvbnRyb2xsZXIuc2V0TW9kZWwobW9kZWwpO1xuICAgICAgdGhpcy5jb250cm9sbGVycy5wdXNoKGNvbnRyb2xsZXIpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb250cm9sbGVycy5mb3JFYWNoKChjb250cm9sbGVyKSA9PiB7XG4gICAgICB0aGlzLnJvdXRlci51c2UoY29udHJvbGxlci5wYXRoLCBjb250cm9sbGVyLnJvdXRlcik7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
