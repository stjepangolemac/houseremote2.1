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
                var pin = req.params.pin;
                _this.rpio.open(pin, _this.rpio.OUTPUT, _this.rpio.LOW);
                if (req.params.mode == "low") {
                    _this.rpio.write(12, _this.rpio.LOW);
                }
                else if (req.params.mode == "high") {
                    _this.rpio.write(12, _this.rpio.HIGH);
                }
            });
            _this.app.use(_this.controllerManager.router);
        };
        this.settings = settings;
        this.logger = logger;
        this.controllerManager = controllerManager;
        this.rpio = rpio;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL2h0dHBzU2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFPLGtCQUFrQixDQUFDLENBQUE7QUFDMUIsMEJBQW1DLFdBQVcsQ0FBQyxDQUFBO0FBQy9DLElBQVksS0FBSyxXQUFNLE9BQU8sQ0FBQyxDQUFBO0FBQy9CLElBQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBQ25DLElBQVksVUFBVSxXQUFNLGFBQWEsQ0FBQyxDQUFBO0FBQzFDLElBQVksVUFBVSxXQUFNLGVBQWUsQ0FBQyxDQUFBO0FBQzVDLElBQVksSUFBSSxXQUFNLE1BQU0sQ0FBQyxDQUFBO0FBUTdCO0lBV0UscUJBQ3NCLFFBQThCLEVBQ2hDLE1BQTBCLEVBRTFDLGlCQUFnRDtRQWZ0RCxpQkEwRUM7UUF6Q1EsYUFBUSxHQUFHO1lBQ2hCLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFBO1FBRU0sZUFBVSxHQUFHO1lBQ2xCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6RCxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFBO1FBRU0sYUFBUSxHQUFHO1lBQ2hCLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hELEtBQUksQ0FBQyxHQUFHLENBQUMs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bGFzc2VzL2h0dHBzU2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVmbGVjdC1tZXRhZGF0YVwiO1xuaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0ICogYXMgaHR0cHMgZnJvbSBcImh0dHBzXCI7XG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gXCJib2R5LXBhcnNlclwiO1xuaW1wb3J0ICogYXMgSU5URVJGQUNFUyBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xuaW1wb3J0ICogYXMgcnBpbyBmcm9tIFwicnBpb1wiO1xuXG4vKipcbiAqIEhUVFBTU2VydmVyIGluc3RhbnRpYXRlcyB0aGUgRXhwcmVzcyBhcHAgYW5kIHJvdXRlcyBDUlVEXG4gKiB0cmFmZmljIHRvIENvbnRyb2xsZXJNYW5hZ2VyIGFmdGVyIHRoZSByZXF1ZXN0IGhhcyBiZWVuXG4gKiBhdXRoZW50aWNhdGVkIHdpdGggVG9rZW5NYW5hZ2VyLlxuICovXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIVFRQU1NlcnZlciBpbXBsZW1lbnRzIElOVEVSRkFDRVMuSUhUVFBTU2VydmVyIHtcbiAgcHVibGljIHNlcnZlcjogaHR0cHMuU2VydmVyO1xuICBwdWJsaWMgc2V0dGluZ3M6IElOVEVSRkFDRVMuSVNldHRpbmdzO1xuICBwdWJsaWMgbG9nZ2VyOiBJTlRFUkZBQ0VTLklMb2dnZXI7XG4gIHB1YmxpYyBjb250cm9sbGVyTWFuYWdlcjogSU5URVJGQUNFUy5JQ29udHJvbGxlck1hbmFnZXI7XG4gIHB1YmxpYyBkZXZpY2VNYW5hZ2VyOiBJTlRFUkZBQ0VTLklEZXZpY2VNYW5hZ2VyO1xuICBwdWJsaWMgYXBwOiBleHByZXNzLkV4cHJlc3M7XG4gIHB1YmxpYyBycGlvOiBhbnk7XG5cbiAgcHJpdmF0ZSBvcHRpb25zOiBPYmplY3Q7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQGluamVjdChcIlNldHRpbmdzXCIpIHNldHRpbmdzOiBJTlRFUkZBQ0VTLklTZXR0aW5ncyxcbiAgICBAaW5qZWN0KFwiTG9nZ2VyXCIpIGxvZ2dlcjogSU5URVJGQUNFUy5JTG9nZ2VyLFxuICAgIEBpbmplY3QoXCJDb250cm9sbGVyTWFuYWdlclwiKVxuICAgICAgY29udHJvbGxlck1hbmFnZXI6IElOVEVSRkFDRVMuSUNvbnRyb2xsZXJNYW5hZ2VyXG4gICAgLy8gQGluamVjdChcIkRldmljZU1hbmFnZXJcIikgZGV2aWNlTWFuYWdlcjogSU5URVJGQUNFUy5JRGV2aWNlTWFuYWdlclxuICApIHtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy4gbG9nZ2VyID0gbG9nZ2VyO1xuICAgIHRoaXMuY29udHJvbGxlck1hbmFnZXIgPSBjb250cm9sbGVyTWFuYWdlcjtcbiAgICAvLyB0aGlzLmRldmljZU1hbmFnZXIgPSBkZXZpY2VNYW5hZ2VyO1xuICAgIHRoaXMucnBpbyA9IHJwaW87XG5cbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBjZXJ0OiB0aGlzLnNldHRpbmdzLmNlcnQsXG4gICAgICBrZXk6IHRoaXMuc2V0dGluZ3Mua2V5LFxuICAgIH07XG5cbiAgICB0aGlzLmFwcCA9IGV4cHJlc3MoKTtcbiAgICB0aGlzLnNldHVwQWxsKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0dXBBbGwgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXR1cEFwcCgpO1xuICAgIHRoaXMuc3RhcnRIVFRQUygpO1xuICB9XG5cbiAgcHVibGljIHN0YXJ0SFRUUFMgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXJ2ZXIgPSBodHRwcy5jcmVhdGVTZXJ2ZXIodGhpcy5vcHRpb25zLCB0aGlzLmFwcCk7XG4gICAgdGhpcy5zZXJ2ZXIubGlzdGVuKHRoaXMuc2V0dGluZ3MucG9ydCk7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcIlNlcnZlciBzdGFydGVkIG9uIHBvcnRcIiwgdGhpcy5zZXR0aW5ncy5wb3J0KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXR1cEFwcCA9ICgpID0+IHtcbiAgICB0aGlzLmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuICAgIHRoaXMuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG4gICAgdGhpcy5hcHAudXNlKGZ1bmN0aW9uIChyZXEsIHJlcywgbmV4dCkge1xuICAgICAgcmVzLmhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiLCBcIipcIik7XG4gICAgICByZXMuaGVhZGVyKFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVyc1wiLFxuICAgICAgICBcIk9yaWdpbiwgWC1SZXF1ZXN0ZWQtV2l0aCwgQ29udGVudC1UeXBlLCBBY2NlcHQsIEF1dGhvcml6YXRpb25cIik7XG4gICAgICByZXMuaGVhZGVyKFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kc1wiLFxuICAgICAgICBcIlBPU1QsIEdFVCwgUFVULCBERUxFVEUsIE9QVElPTlNcIik7XG4gICAgICBuZXh0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5hcHAudXNlKGZ1bmN0aW9uIChyZXEsIHJlcywgbmV4dCkge1xuICAgICAgaWYgKHJlcS5tZXRob2QgPT09IFwiT1BUSU9OU1wiKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5hcHAudXNlKFwiL3Bpbi86cGluLzptb2RlXCIsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgICAgbGV0IHBpbiA9IHJlcS5wYXJhbXMucGluO1xuICAgICAgdGhpcy5ycGlvLm9wZW4ocGluLCB0aGlzLnJwaW8uT1VUUFVULCB0aGlzLnJwaW8uTE9XKTtcblxuICAgICAgaWYgKHJlcS5wYXJhbXMubW9kZSA9PSBcImxvd1wiKSB7XG4gICAgICAgIHRoaXMucnBpby53cml0ZSgxMiwgdGhpcy5ycGlvLkxPVyk7ICBcbiAgICAgIH0gZWxzZSBpZiAocmVxLnBhcmFtcy5tb2RlID09IFwiaGlnaFwiKSB7XG4gICAgICAgIHRoaXMucnBpby53cml0ZSgxMiwgdGhpcy5ycGlvLkhJR0gpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuYXBwLnVzZSh0aGlzLmNvbnRyb2xsZXJNYW5hZ2VyLnJvdXRlcik7XG4gIH1cbn1cbiJdfQ==
