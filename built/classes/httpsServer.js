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
require("reflect-metadata");
var inversify_1 = require("inversify");
var https = require("https");
var express = require("express");
var bodyParser = require("body-parser");
var INTERFACES = require("../interfaces");
var HTTPSServer = (function () {
    function HTTPSServer(settings, logger, controllerManager) {
        var _this = this;
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
        this.options = {
            cert: this.settings.cert,
            key: this.settings.key,
        };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL2h0dHBzU2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFPLGtCQUFrQixDQUFDLENBQUE7QUFDMUIsMEJBQW1DLFdBQVcsQ0FBQyxDQUFBO0FBQy9DLElBQVksS0FBSyxXQUFNLE9BQU8sQ0FBQyxDQUFBO0FBQy9CLElBQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBQ25DLElBQVksVUFBVSxXQUFNLGFBQWEsQ0FBQyxDQUFBO0FBQzFDLElBQVksVUFBVSxXQUFNLGVBQWUsQ0FBQyxDQUFBO0FBUTVDO0lBU0UscUJBQ3NCLFFBQThCLEVBQ2hDLE1BQTBCLEVBRTFDLGlCQUFnRDtRQWJ0RCxpQkE0Q0M7UUFoQlEsYUFBUSxHQUFHO1lBQ2hCLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFBO1FBRU0sZUFBVSxHQUFHO1lBQ2xCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6RCxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFBO1FBRU0sYUFBUSxHQUFHO1lBQ2hCLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hELEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFBO1FBNUJDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBRSxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUUzQyxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTtZQUN4QixHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHO1NBQ3ZCLENBQUM7UUFFRixJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBM0JIO1FBQUMsc0JBQVUsRUFBRTttQkFXUixrQkFBTSxDQUFDLFVBQVUsQ0FBQzttQkFDbEIsa0JBQU0sQ0FBQyxRQUFRLENBQUM7bUJBQ2hCLGtCQUFNLENBQUMsbUJBQW1CLENBQUM7O21CQWJuQjtJQTZDYixrQkFBQztBQUFELENBNUNBLEFBNENDLElBQUE7QUE1Q0Q7NkJBNENDLENBQUEiLCJmaWxlIjoiY2xhc3Nlcy9odHRwc1NlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcbmltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCAqIGFzIGh0dHBzIGZyb20gXCJodHRwc1wiO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIjtcbmltcG9ydCAqIGFzIElOVEVSRkFDRVMgZnJvbSBcIi4uL2ludGVyZmFjZXNcIjtcblxuLyoqXG4gKiBIVFRQU1NlcnZlciBpbnN0YW50aWF0ZXMgdGhlIEV4cHJlc3MgYXBwIGFuZCByb3V0ZXMgQ1JVRFxuICogdHJhZmZpYyB0byBDb250cm9sbGVyTWFuYWdlciBhZnRlciB0aGUgcmVxdWVzdCBoYXMgYmVlblxuICogYXV0aGVudGljYXRlZCB3aXRoIFRva2VuTWFuYWdlci5cbiAqL1xuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSFRUUFNTZXJ2ZXIgaW1wbGVtZW50cyBJTlRFUkZBQ0VTLklIVFRQU1NlcnZlciB7XG4gIHB1YmxpYyBzZXJ2ZXI6IGh0dHBzLlNlcnZlcjtcbiAgcHVibGljIHNldHRpbmdzOiBJTlRFUkZBQ0VTLklTZXR0aW5ncztcbiAgcHVibGljIGxvZ2dlcjogSU5URVJGQUNFUy5JTG9nZ2VyO1xuICBwdWJsaWMgY29udHJvbGxlck1hbmFnZXI6IElOVEVSRkFDRVMuSUNvbnRyb2xsZXJNYW5hZ2VyO1xuICBwdWJsaWMgYXBwOiBleHByZXNzLkV4cHJlc3M7XG5cbiAgcHJpdmF0ZSBvcHRpb25zOiBPYmplY3Q7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQGluamVjdChcIlNldHRpbmdzXCIpIHNldHRpbmdzOiBJTlRFUkZBQ0VTLklTZXR0aW5ncyxcbiAgICBAaW5qZWN0KFwiTG9nZ2VyXCIpIGxvZ2dlcjogSU5URVJGQUNFUy5JTG9nZ2VyLFxuICAgIEBpbmplY3QoXCJDb250cm9sbGVyTWFuYWdlclwiKVxuICAgICAgY29udHJvbGxlck1hbmFnZXI6IElOVEVSRkFDRVMuSUNvbnRyb2xsZXJNYW5hZ2VyXG4gICkge1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICB0aGlzLiBsb2dnZXIgPSBsb2dnZXI7XG4gICAgdGhpcy5jb250cm9sbGVyTWFuYWdlciA9IGNvbnRyb2xsZXJNYW5hZ2VyO1xuXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgY2VydDogdGhpcy5zZXR0aW5ncy5jZXJ0LFxuICAgICAga2V5OiB0aGlzLnNldHRpbmdzLmtleSxcbiAgICB9O1xuXG4gICAgdGhpcy5hcHAgPSBleHByZXNzKCk7XG4gICAgdGhpcy5zZXR1cEFsbCgpO1xuICB9XG5cbiAgcHVibGljIHNldHVwQWxsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0dXBBcHAoKTtcbiAgICB0aGlzLnN0YXJ0SFRUUFMoKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGFydEhUVFBTID0gKCkgPT4ge1xuICAgIHRoaXMuc2VydmVyID0gaHR0cHMuY3JlYXRlU2VydmVyKHRoaXMub3B0aW9ucywgdGhpcy5hcHApO1xuICAgIHRoaXMuc2VydmVyLmxpc3Rlbih0aGlzLnNldHRpbmdzLnBvcnQpO1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJTZXJ2ZXIgc3RhcnRlZCBvbiBwb3J0XCIsIHRoaXMuc2V0dGluZ3MucG9ydCk7XG4gIH1cblxuICBwdWJsaWMgc2V0dXBBcHAgPSAoKSA9PiB7XG4gICAgdGhpcy5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcbiAgICB0aGlzLmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuICAgIHRoaXMuYXBwLnVzZShcIi9hcGlcIiwgdGhpcy5jb250cm9sbGVyTWFuYWdlci5yb3V0ZXIpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
