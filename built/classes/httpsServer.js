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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL2h0dHBzU2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFPLGtCQUFrQixDQUFDLENBQUE7QUFDMUIsMEJBQW1DLFdBQVcsQ0FBQyxDQUFBO0FBQy9DLElBQVksRUFBRSxXQUFNLElBQUksQ0FBQyxDQUFBO0FBQ3pCLElBQVksS0FBSyxXQUFNLE9BQU8sQ0FBQyxDQUFBO0FBQy9CLElBQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBQ25DLElBQVksVUFBVSxXQUFNLGFBQWEsQ0FBQyxDQUFBO0FBQzFDLElBQVksVUFBVSxXQUFNLGVBQWUsQ0FBQyxDQUFBO0FBUTVDO0lBWUUscUJBQ3NCLFFBQThCLEVBQ2hDLE1BQTBCLEVBRTFDLGlCQUFnRDtRQWhCdEQsaUJBMENDO1FBbkNTLFlBQU8sR0FBRztZQUNoQixJQUFJLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQywwQ0FBMEMsQ0FBQztZQUNqRSxHQUFHLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQywwQ0FBMEMsQ0FBQztTQUNqRSxDQUFDO1FBZ0JLLGFBQVEsR0FBRztZQUNoQixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQTtRQUVNLGVBQVUsR0FBRztZQUNsQixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRSxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQTtRQUVNLGFBQVEsR0FBRztZQUNoQixLQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4RCxLQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNoQyxLQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQTtRQXZCQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUUsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFFM0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQXpCSDtRQUFDLHNCQUFVLEVBQUU7bUJBY1Isa0JBQU0sQ0FBQyxVQUFVLENBQUM7bUJBQ2xCLGtCQUFNLENBQUMsUUFBUSxDQUFDO21CQUNoQixrQkFBTSxDQUFDLG1CQUFtQixDQUFDOzttQkFoQm5CO0lBMkNiLGtCQUFDO0FBQUQsQ0ExQ0EsQUEwQ0MsSUFBQTtBQTFDRDs2QkEwQ0MsQ0FBQSIsImZpbGUiOiJjbGFzc2VzL2h0dHBzU2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVmbGVjdC1tZXRhZGF0YVwiO1xuaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgKiBhcyBodHRwcyBmcm9tIFwiaHR0cHNcIjtcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSBcImJvZHktcGFyc2VyXCI7XG5pbXBvcnQgKiBhcyBJTlRFUkZBQ0VTIGZyb20gXCIuLi9pbnRlcmZhY2VzXCI7XG5cbi8qKlxuICogSFRUUFNTZXJ2ZXIgaW5zdGFudGlhdGVzIHRoZSBFeHByZXNzIGFwcCBhbmQgcm91dGVzIENSVURcbiAqIHRyYWZmaWMgdG8gQ29udHJvbGxlck1hbmFnZXIgYWZ0ZXIgdGhlIHJlcXVlc3QgaGFzIGJlZW5cbiAqIGF1dGhlbnRpY2F0ZWQgd2l0aCBUb2tlbk1hbmFnZXIuXG4gKi9cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhUVFBTU2VydmVyIGltcGxlbWVudHMgSU5URVJGQUNFUy5JSFRUUFNTZXJ2ZXIge1xuICBwdWJsaWMgc2VydmVyOiBodHRwcy5TZXJ2ZXI7XG4gIHB1YmxpYyBzZXR0aW5nczogSU5URVJGQUNFUy5JU2V0dGluZ3M7XG4gIHB1YmxpYyBsb2dnZXI6IElOVEVSRkFDRVMuSUxvZ2dlcjtcbiAgcHVibGljIGNvbnRyb2xsZXJNYW5hZ2VyOiBJTlRFUkZBQ0VTLklDb250cm9sbGVyTWFuYWdlcjtcbiAgcHVibGljIGFwcDogZXhwcmVzcy5FeHByZXNzO1xuXG4gIHByaXZhdGUgb3B0aW9ucyA9IHtcbiAgICBjZXJ0OiBmcy5yZWFkRmlsZVN5bmMoXCJjb25maWd1cmF0aW9uL2NlcnRpZmljYXRlcy9sb2NhbGhvc3QuY3J0XCIpLFxuICAgIGtleTogZnMucmVhZEZpbGVTeW5jKFwiY29uZmlndXJhdGlvbi9jZXJ0aWZpY2F0ZXMvbG9jYWxob3N0LnBlbVwiKSxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAaW5qZWN0KFwiU2V0dGluZ3NcIikgc2V0dGluZ3M6IElOVEVSRkFDRVMuSVNldHRpbmdzLFxuICAgIEBpbmplY3QoXCJMb2dnZXJcIikgbG9nZ2VyOiBJTlRFUkZBQ0VTLklMb2dnZXIsXG4gICAgQGluamVjdChcIkNvbnRyb2xsZXJNYW5hZ2VyXCIpXG4gICAgICBjb250cm9sbGVyTWFuYWdlcjogSU5URVJGQUNFUy5JQ29udHJvbGxlck1hbmFnZXJcbiAgKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMuIGxvZ2dlciA9IGxvZ2dlcjtcbiAgICB0aGlzLmNvbnRyb2xsZXJNYW5hZ2VyID0gY29udHJvbGxlck1hbmFnZXI7XG5cbiAgICB0aGlzLmFwcCA9IGV4cHJlc3MoKTtcbiAgICB0aGlzLnNldHVwQWxsKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0dXBBbGwgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXR1cEFwcCgpO1xuICAgIHRoaXMuc3RhcnRIVFRQUygpO1xuICB9XG5cbiAgcHVibGljIHN0YXJ0SFRUUFMgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXJ2ZXIgPSBodHRwcy5jcmVhdGVTZXJ2ZXIodGhpcy5vcHRpb25zLCB0aGlzLmFwcCk7XG4gICAgdGhpcy5zZXJ2ZXIubGlzdGVuKHRoaXMuc2V0dGluZ3MucG9ydCk7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcIlNlcnZlciBzdGFydGVkIG9uIHBvcnRcIiwgdGhpcy5zZXR0aW5ncy5wb3J0KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXR1cEFwcCA9ICgpID0+IHtcbiAgICB0aGlzLmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuICAgIHRoaXMuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG4gICAgdGhpcy5hcHAudXNlKFwiL2FwaVwiLCB0aGlzLmNvbnRyb2xsZXJNYW5hZ2VyLnJvdXRlcik7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
