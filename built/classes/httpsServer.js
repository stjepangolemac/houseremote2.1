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
var fs = require("fs");
var https = require("https");
var express = require("express");
var bodyParser = require("body-parser");
var INTERFACES = require("../interfaces");
var HTTPSServer = (function () {
    function HTTPSServer(settings, logger, controllerManager) {
        var _this = this;
        this.options = {
            cert: fs.readFileSync("configuration/certificates/localhost.crt"),
            key: fs.readFileSync("configuration/certificates/localhost.pem"),
        };
        this.setupAll = function () {
            _this.setupApp();
            _this.startHTTPS();
        };
        this.startHTTPS = function () {
            _this.server = https.createServer(_this.options, _this.app);
            _this.server.listen(_this.settings.port);
            _this.logger.info("Server started on port", _this.settings.port);
        };
        this.setupApp = function () {
            _this.app.use(bodyParser.urlencoded({ extended: true }));
            _this.app.use(bodyParser.json());
            _this.app.use("/api", _this.controllerManager.router);
        };
        this.settings = settings;
        this.logger = logger;
        this.controllerManager = controllerManager;
        this.app = express();
        this.setupAll();
    }
    HTTPSServer = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject("Settings")),
        __param(1, inversify_1.inject("Logger")),
        __param(2, inversify_1.inject("ControllerManager")), 
        __metadata('design:paramtypes', [Object, Object, Object])
    ], HTTPSServer);
    return HTTPSServer;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HTTPSServer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL2h0dHBzU2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQkFBbUMsV0FBVyxDQUFDLENBQUE7QUFDL0MsSUFBWSxFQUFFLFdBQU0sSUFBSSxDQUFDLENBQUE7QUFDekIsSUFBWSxLQUFLLFdBQU0sT0FBTyxDQUFDLENBQUE7QUFDL0IsSUFBWSxPQUFPLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFDbkMsSUFBWSxVQUFVLFdBQU0sYUFBYSxDQUFDLENBQUE7QUFDMUMsSUFBWSxVQUFVLFdBQU0sZUFBZSxDQUFDLENBQUE7QUFRNUM7SUFZRSxxQkFDc0IsUUFBOEIsRUFDaEMsTUFBMEIsRUFFMUMsaUJBQWdEO1FBaEJ0RCxpQkEwQ0M7UUFuQ1MsWUFBTyxHQUFHO1lBQ2hCLElBQUksRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLDBDQUEwQyxDQUFDO1lBQ2pFLEdBQUcsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLDBDQUEwQyxDQUFDO1NBQ2pFLENBQUM7UUFnQkssYUFBUSxHQUFHO1lBQ2hCLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFBO1FBRU0sZUFBVSxHQUFHO1lBQ2xCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6RCxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFBO1FBRU0sYUFBUSxHQUFHO1lBQ2hCLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hELEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFBO1FBdkJDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBRSxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUUzQyxJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBekJIO1FBQUMsc0JBQVUsRUFBRTttQkFjUixrQkFBTSxDQUFDLFVBQVUsQ0FBQzttQkFDbEIsa0JBQU0sQ0FBQyxRQUFRLENBQUM7bUJBQ2hCLGtCQUFNLENBQUMsbUJBQW1CLENBQUM7O21CQWhCbkI7SUEyQ2Isa0JBQUM7QUFBRCxDQTFDQSxBQTBDQyxJQUFBO0FBMUNEOzZCQTBDQyxDQUFBIiwiZmlsZSI6ImNsYXNzZXMvaHR0cHNTZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCAqIGFzIGh0dHBzIGZyb20gXCJodHRwc1wiO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIjtcbmltcG9ydCAqIGFzIElOVEVSRkFDRVMgZnJvbSBcIi4uL2ludGVyZmFjZXNcIjtcblxuLyoqXG4gKiBIVFRQU1NlcnZlciBpbnN0YW50aWF0ZXMgdGhlIEV4cHJlc3MgYXBwIGFuZCByb3V0ZXMgQ1JVRFxuICogdHJhZmZpYyB0byBDb250cm9sbGVyTWFuYWdlciBhZnRlciB0aGUgcmVxdWVzdCBoYXMgYmVlblxuICogYXV0aGVudGljYXRlZCB3aXRoIFRva2VuTWFuYWdlci5cbiAqL1xuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSFRUUFNTZXJ2ZXIgaW1wbGVtZW50cyBJTlRFUkZBQ0VTLklIVFRQU1NlcnZlciB7XG4gIHB1YmxpYyBzZXJ2ZXI6IGh0dHBzLlNlcnZlcjtcbiAgcHVibGljIHNldHRpbmdzOiBJTlRFUkZBQ0VTLklTZXR0aW5ncztcbiAgcHVibGljIGxvZ2dlcjogSU5URVJGQUNFUy5JTG9nZ2VyO1xuICBwdWJsaWMgY29udHJvbGxlck1hbmFnZXI6IElOVEVSRkFDRVMuSUNvbnRyb2xsZXJNYW5hZ2VyO1xuICBwdWJsaWMgYXBwOiBleHByZXNzLkV4cHJlc3M7XG5cbiAgcHJpdmF0ZSBvcHRpb25zID0ge1xuICAgIGNlcnQ6IGZzLnJlYWRGaWxlU3luYyhcImNvbmZpZ3VyYXRpb24vY2VydGlmaWNhdGVzL2xvY2FsaG9zdC5jcnRcIiksXG4gICAga2V5OiBmcy5yZWFkRmlsZVN5bmMoXCJjb25maWd1cmF0aW9uL2NlcnRpZmljYXRlcy9sb2NhbGhvc3QucGVtXCIpLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoXCJTZXR0aW5nc1wiKSBzZXR0aW5nczogSU5URVJGQUNFUy5JU2V0dGluZ3MsXG4gICAgQGluamVjdChcIkxvZ2dlclwiKSBsb2dnZXI6IElOVEVSRkFDRVMuSUxvZ2dlcixcbiAgICBAaW5qZWN0KFwiQ29udHJvbGxlck1hbmFnZXJcIilcbiAgICAgIGNvbnRyb2xsZXJNYW5hZ2VyOiBJTlRFUkZBQ0VTLklDb250cm9sbGVyTWFuYWdlclxuICApIHtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy4gbG9nZ2VyID0gbG9nZ2VyO1xuICAgIHRoaXMuY29udHJvbGxlck1hbmFnZXIgPSBjb250cm9sbGVyTWFuYWdlcjtcblxuICAgIHRoaXMuYXBwID0gZXhwcmVzcygpO1xuICAgIHRoaXMuc2V0dXBBbGwoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXR1cEFsbCA9ICgpID0+IHtcbiAgICB0aGlzLnNldHVwQXBwKCk7XG4gICAgdGhpcy5zdGFydEhUVFBTKCk7XG4gIH1cblxuICBwdWJsaWMgc3RhcnRIVFRQUyA9ICgpID0+IHtcbiAgICB0aGlzLnNlcnZlciA9IGh0dHBzLmNyZWF0ZVNlcnZlcih0aGlzLm9wdGlvbnMsIHRoaXMuYXBwKTtcbiAgICB0aGlzLnNlcnZlci5saXN0ZW4odGhpcy5zZXR0aW5ncy5wb3J0KTtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiU2VydmVyIHN0YXJ0ZWQgb24gcG9ydFwiLCB0aGlzLnNldHRpbmdzLnBvcnQpO1xuICB9XG5cbiAgcHVibGljIHNldHVwQXBwID0gKCkgPT4ge1xuICAgIHRoaXMuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG4gICAgdGhpcy5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbiAgICB0aGlzLmFwcC51c2UoXCIvYXBpXCIsIHRoaXMuY29udHJvbGxlck1hbmFnZXIucm91dGVyKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
