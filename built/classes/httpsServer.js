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
var rpio = require("rpio");
var spawn = require("child_process");
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
            _this.app.use(function (req, res, next) {
                res.header("Access-Control-Allow-Origin", "*");
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
                res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
                next();
            });
            _this.app.use(function (req, res, next) {
                if (req.method === "OPTIONS") {
                    res.status(200).send();
                }
                else {
                    next();
                }
            });
            _this.app.use("/pin/:pin/:mode", function (req, res, next) {
                console.log("Turn ", req.params.pin, " to ", req.params.mode);
                var pin = req.params.pin;
                var test = _this.spawn('echo', ["13", ">", "/sys/class/gpio/export"]);
                console.log(test.stdout);
                if (req.params.mode == "low") {
                }
                else if (req.params.mode == "high") {
                }
            });
            _this.app.use(_this.controllerManager.router);
        };
        this.settings = settings;
        this.logger = logger;
        this.controllerManager = controllerManager;
        this.rpio = rpio;
        this.spawn = spawn;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL2h0dHBzU2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFPLGtCQUFrQixDQUFDLENBQUE7QUFDMUIsMEJBQW1DLFdBQVcsQ0FBQyxDQUFBO0FBQy9DLElBQVksS0FBSyxXQUFNLE9BQU8sQ0FBQyxDQUFBO0FBQy9CLElBQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBQ25DLElBQVksVUFBVSxXQUFNLGFBQWEsQ0FBQyxDQUFBO0FBQzFDLElBQVksVUFBVSxXQUFNLGVBQWUsQ0FBQyxDQUFBO0FBQzVDLElBQVksSUFBSSxXQUFNLE1BQU0sQ0FBQyxDQUFBO0FBQzdCLElBQVksS0FBSyxXQUFNLGVBQWUsQ0FBQyxDQUFBO0FBUXZDO0lBWUUscUJBQ3NCLFFBQThCLEVBQ2hDLE1BQTBCLEVBRTFDLGlCQUFnRDtRQWhCdEQsaUJBK0VDO1FBNUNRLGFBQVEsR0FBRztZQUNoQixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQTtRQUVNLGVBQVUsR0FBRztZQUNsQixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRSxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQTtRQUVNLGFBQVEsR0FBRztZQUNoQixLQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFD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QWdGYixrQkFBQztBQUFELENBL0VBLEFBK0VDLElBQUE7QUEvRUQ7NkJBK0VDLENBQUEiLCJmaWxlIjoiY2xhc3Nlcy9odHRwc1NlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcbmltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCAqIGFzIGh0dHBzIGZyb20gXCJodHRwc1wiO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIjtcbmltcG9ydCAqIGFzIElOVEVSRkFDRVMgZnJvbSBcIi4uL2ludGVyZmFjZXNcIjtcbmltcG9ydCAqIGFzIHJwaW8gZnJvbSBcInJwaW9cIjtcbmltcG9ydCAqIGFzIHNwYXduIGZyb20gXCJjaGlsZF9wcm9jZXNzXCI7XG5cbi8qKlxuICogSFRUUFNTZXJ2ZXIgaW5zdGFudGlhdGVzIHRoZSBFeHByZXNzIGFwcCBhbmQgcm91dGVzIENSVURcbiAqIHRyYWZmaWMgdG8gQ29udHJvbGxlck1hbmFnZXIgYWZ0ZXIgdGhlIHJlcXVlc3QgaGFzIGJlZW5cbiAqIGF1dGhlbnRpY2F0ZWQgd2l0aCBUb2tlbk1hbmFnZXIuXG4gKi9cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhUVFBTU2VydmVyIGltcGxlbWVudHMgSU5URVJGQUNFUy5JSFRUUFNTZXJ2ZXIge1xuICBwdWJsaWMgc2VydmVyOiBodHRwcy5TZXJ2ZXI7XG4gIHB1YmxpYyBzZXR0aW5nczogSU5URVJGQUNFUy5JU2V0dGluZ3M7XG4gIHB1YmxpYyBsb2dnZXI6IElOVEVSRkFDRVMuSUxvZ2dlcjtcbiAgcHVibGljIGNvbnRyb2xsZXJNYW5hZ2VyOiBJTlRFUkZBQ0VTLklDb250cm9sbGVyTWFuYWdlcjtcbiAgcHVibGljIGRldmljZU1hbmFnZXI6IElOVEVSRkFDRVMuSURldmljZU1hbmFnZXI7XG4gIHB1YmxpYyBhcHA6IGV4cHJlc3MuRXhwcmVzcztcbiAgcHVibGljIHJwaW86IGFueTtcbiAgcHVibGljIHNwYXduOiBhbnk7XG5cbiAgcHJpdmF0ZSBvcHRpb25zOiBPYmplY3Q7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQGluamVjdChcIlNldHRpbmdzXCIpIHNldHRpbmdzOiBJTlRFUkZBQ0VTLklTZXR0aW5ncyxcbiAgICBAaW5qZWN0KFwiTG9nZ2VyXCIpIGxvZ2dlcjogSU5URVJGQUNFUy5JTG9nZ2VyLFxuICAgIEBpbmplY3QoXCJDb250cm9sbGVyTWFuYWdlclwiKVxuICAgICAgY29udHJvbGxlck1hbmFnZXI6IElOVEVSRkFDRVMuSUNvbnRyb2xsZXJNYW5hZ2VyXG4gICAgLy8gQGluamVjdChcIkRldmljZU1hbmFnZXJcIikgZGV2aWNlTWFuYWdlcjogSU5URVJGQUNFUy5JRGV2aWNlTWFuYWdlclxuICApIHtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy4gbG9nZ2VyID0gbG9nZ2VyO1xuICAgIHRoaXMuY29udHJvbGxlck1hbmFnZXIgPSBjb250cm9sbGVyTWFuYWdlcjtcbiAgICAvLyB0aGlzLmRldmljZU1hbmFnZXIgPSBkZXZpY2VNYW5hZ2VyO1xuICAgIHRoaXMucnBpbyA9IHJwaW87XG4gICAgdGhpcy5zcGF3biA9IHNwYXduO1xuXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgY2VydDogdGhpcy5zZXR0aW5ncy5jZXJ0LFxuICAgICAga2V5OiB0aGlzLnNldHRpbmdzLmtleSxcbiAgICB9O1xuXG4gICAgdGhpcy5hcHAgPSBleHByZXNzKCk7XG4gICAgdGhpcy5zZXR1cEFsbCgpO1xuICB9XG5cbiAgcHVibGljIHNldHVwQWxsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0dXBBcHAoKTtcbiAgICB0aGlzLnN0YXJ0SFRUUFMoKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGFydEhUVFBTID0gKCkgPT4ge1xuICAgIHRoaXMuc2VydmVyID0gaHR0cHMuY3JlYXRlU2VydmVyKHRoaXMub3B0aW9ucywgdGhpcy5hcHApO1xuICAgIHRoaXMuc2VydmVyLmxpc3Rlbih0aGlzLnNldHRpbmdzLnBvcnQpO1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJTZXJ2ZXIgc3RhcnRlZCBvbiBwb3J0XCIsIHRoaXMuc2V0dGluZ3MucG9ydCk7XG4gIH1cblxuICBwdWJsaWMgc2V0dXBBcHAgPSAoKSA9PiB7XG4gICAgdGhpcy5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcbiAgICB0aGlzLmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuICAgIHRoaXMuYXBwLnVzZShmdW5jdGlvbiAocmVxLCByZXMsIG5leHQpIHtcbiAgICAgIHJlcy5oZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIiwgXCIqXCIpO1xuICAgICAgcmVzLmhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnNcIixcbiAgICAgICAgXCJPcmlnaW4sIFgtUmVxdWVzdGVkLVdpdGgsIENvbnRlbnQtVHlwZSwgQWNjZXB0LCBBdXRob3JpemF0aW9uXCIpO1xuICAgICAgcmVzLmhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHNcIixcbiAgICAgICAgXCJQT1NULCBHRVQsIFBVVCwgREVMRVRFLCBPUFRJT05TXCIpO1xuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuICAgIHRoaXMuYXBwLnVzZShmdW5jdGlvbiAocmVxLCByZXMsIG5leHQpIHtcbiAgICAgIGlmIChyZXEubWV0aG9kID09PSBcIk9QVElPTlNcIikge1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dCgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuYXBwLnVzZShcIi9waW4vOnBpbi86bW9kZVwiLCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiVHVybiBcIiwgcmVxLnBhcmFtcy5waW4sIFwiIHRvIFwiLCByZXEucGFyYW1zLm1vZGUpO1xuICAgICAgbGV0IHBpbiA9IHJlcS5wYXJhbXMucGluO1xuXG4gICAgICBsZXQgdGVzdCA9IHRoaXMuc3Bhd24oJ2VjaG8nLCBbXCIxM1wiLCBcIj5cIiwgXCIvc3lzL2NsYXNzL2dwaW8vZXhwb3J0XCJdKTtcbiAgICAgIGNvbnNvbGUubG9nKHRlc3Quc3Rkb3V0KTtcblxuICAgICAgaWYgKHJlcS5wYXJhbXMubW9kZSA9PSBcImxvd1wiKSB7XG5cbiAgICAgIH0gZWxzZSBpZiAocmVxLnBhcmFtcy5tb2RlID09IFwiaGlnaFwiKSB7XG5cbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmFwcC51c2UodGhpcy5jb250cm9sbGVyTWFuYWdlci5yb3V0ZXIpO1xuICB9XG59XG4iXX0=
