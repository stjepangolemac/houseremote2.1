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
var exec = require("child_process").exec;
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
                var cmdString = 'ifconfig';
                exec(cmdString, function (err, stdout, stderr) {
                    console.log(stdout);
                });
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
        this.exec = exec;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL2h0dHBzU2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFPLGtCQUFrQixDQUFDLENBQUE7QUFDMUIsMEJBQW1DLFdBQVcsQ0FBQyxDQUFBO0FBQy9DLElBQVksS0FBSyxXQUFNLE9BQU8sQ0FBQyxDQUFBO0FBQy9CLElBQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBQ25DLElBQVksVUFBVSxXQUFNLGFBQWEsQ0FBQyxDQUFBO0FBQzFDLElBQVksVUFBVSxXQUFNLGVBQWUsQ0FBQyxDQUFBO0FBQzVDLElBQVksSUFBSSxXQUFNLE1BQU0sQ0FBQyxDQUFBO0FBQzdCLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFRM0M7SUFZRSxxQkFDc0IsUUFBOEIsRUFDaEMsTUFBMEIsRUFFMUMsaUJBQWdEO1FBaEJ0RCxpQkFpRkM7UUE5Q1EsYUFBUSxHQUFHO1lBQ2hCLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFBO1FBRU0sZUFBVSxHQUFHO1lBQ2xCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6RCxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFBO1FBRU0sYUFBUSxHQUFHO1lBQ2hCLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFR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QkFBbUIsQ0FBQzs7bUJBaEJuQjtJQWtGYixrQkFBQztBQUFELENBakZBLEFBaUZDLElBQUE7QUFqRkQ7NkJBaUZDLENBQUEiLCJmaWxlIjoiY2xhc3Nlcy9odHRwc1NlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcbmltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCAqIGFzIGh0dHBzIGZyb20gXCJodHRwc1wiO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIjtcbmltcG9ydCAqIGFzIElOVEVSRkFDRVMgZnJvbSBcIi4uL2ludGVyZmFjZXNcIjtcbmltcG9ydCAqIGFzIHJwaW8gZnJvbSBcInJwaW9cIjtcbmNvbnN0IGV4ZWMgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKS5leGVjO1xuXG4vKipcbiAqIEhUVFBTU2VydmVyIGluc3RhbnRpYXRlcyB0aGUgRXhwcmVzcyBhcHAgYW5kIHJvdXRlcyBDUlVEXG4gKiB0cmFmZmljIHRvIENvbnRyb2xsZXJNYW5hZ2VyIGFmdGVyIHRoZSByZXF1ZXN0IGhhcyBiZWVuXG4gKiBhdXRoZW50aWNhdGVkIHdpdGggVG9rZW5NYW5hZ2VyLlxuICovXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIVFRQU1NlcnZlciBpbXBsZW1lbnRzIElOVEVSRkFDRVMuSUhUVFBTU2VydmVyIHtcbiAgcHVibGljIHNlcnZlcjogaHR0cHMuU2VydmVyO1xuICBwdWJsaWMgc2V0dGluZ3M6IElOVEVSRkFDRVMuSVNldHRpbmdzO1xuICBwdWJsaWMgbG9nZ2VyOiBJTlRFUkZBQ0VTLklMb2dnZXI7XG4gIHB1YmxpYyBjb250cm9sbGVyTWFuYWdlcjogSU5URVJGQUNFUy5JQ29udHJvbGxlck1hbmFnZXI7XG4gIHB1YmxpYyBkZXZpY2VNYW5hZ2VyOiBJTlRFUkZBQ0VTLklEZXZpY2VNYW5hZ2VyO1xuICBwdWJsaWMgYXBwOiBleHByZXNzLkV4cHJlc3M7XG4gIHB1YmxpYyBycGlvOiBhbnk7XG4gIHB1YmxpYyBleGVjOiBhbnk7XG5cbiAgcHJpdmF0ZSBvcHRpb25zOiBPYmplY3Q7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQGluamVjdChcIlNldHRpbmdzXCIpIHNldHRpbmdzOiBJTlRFUkZBQ0VTLklTZXR0aW5ncyxcbiAgICBAaW5qZWN0KFwiTG9nZ2VyXCIpIGxvZ2dlcjogSU5URVJGQUNFUy5JTG9nZ2VyLFxuICAgIEBpbmplY3QoXCJDb250cm9sbGVyTWFuYWdlclwiKVxuICAgICAgY29udHJvbGxlck1hbmFnZXI6IElOVEVSRkFDRVMuSUNvbnRyb2xsZXJNYW5hZ2VyXG4gICAgLy8gQGluamVjdChcIkRldmljZU1hbmFnZXJcIikgZGV2aWNlTWFuYWdlcjogSU5URVJGQUNFUy5JRGV2aWNlTWFuYWdlclxuICApIHtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy4gbG9nZ2VyID0gbG9nZ2VyO1xuICAgIHRoaXMuY29udHJvbGxlck1hbmFnZXIgPSBjb250cm9sbGVyTWFuYWdlcjtcbiAgICAvLyB0aGlzLmRldmljZU1hbmFnZXIgPSBkZXZpY2VNYW5hZ2VyO1xuICAgIHRoaXMucnBpbyA9IHJwaW87XG4gICAgdGhpcy5leGVjID0gZXhlYztcblxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIGNlcnQ6IHRoaXMuc2V0dGluZ3MuY2VydCxcbiAgICAgIGtleTogdGhpcy5zZXR0aW5ncy5rZXksXG4gICAgfTtcblxuICAgIHRoaXMuYXBwID0gZXhwcmVzcygpO1xuICAgIHRoaXMuc2V0dXBBbGwoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXR1cEFsbCA9ICgpID0+IHtcbiAgICB0aGlzLnNldHVwQXBwKCk7XG4gICAgdGhpcy5zdGFydEhUVFBTKCk7XG4gIH1cblxuICBwdWJsaWMgc3RhcnRIVFRQUyA9ICgpID0+IHtcbiAgICB0aGlzLnNlcnZlciA9IGh0dHBzLmNyZWF0ZVNlcnZlcih0aGlzLm9wdGlvbnMsIHRoaXMuYXBwKTtcbiAgICB0aGlzLnNlcnZlci5saXN0ZW4odGhpcy5zZXR0aW5ncy5wb3J0KTtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiU2VydmVyIHN0YXJ0ZWQgb24gcG9ydFwiLCB0aGlzLnNldHRpbmdzLnBvcnQpO1xuICB9XG5cbiAgcHVibGljIHNldHVwQXBwID0gKCkgPT4ge1xuICAgIHRoaXMuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG4gICAgdGhpcy5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbiAgICB0aGlzLmFwcC51c2UoZnVuY3Rpb24gKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgICByZXMuaGVhZGVyKFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCIsIFwiKlwiKTtcbiAgICAgIHJlcy5oZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzXCIsXG4gICAgICAgIFwiT3JpZ2luLCBYLVJlcXVlc3RlZC1XaXRoLCBDb250ZW50LVR5cGUsIEFjY2VwdCwgQXV0aG9yaXphdGlvblwiKTtcbiAgICAgIHJlcy5oZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzXCIsXG4gICAgICAgIFwiUE9TVCwgR0VULCBQVVQsIERFTEVURSwgT1BUSU9OU1wiKTtcbiAgICAgIG5leHQoKTtcbiAgICB9KTtcbiAgICB0aGlzLmFwcC51c2UoZnVuY3Rpb24gKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgICBpZiAocmVxLm1ldGhvZCA9PT0gXCJPUFRJT05TXCIpIHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmFwcC51c2UoXCIvcGluLzpwaW4vOm1vZGVcIiwgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIlR1cm4gXCIsIHJlcS5wYXJhbXMucGluLCBcIiB0byBcIiwgcmVxLnBhcmFtcy5tb2RlKTtcbiAgICAgIGxldCBwaW4gPSByZXEucGFyYW1zLnBpbjtcblxuICAgICAgbGV0IGNtZFN0cmluZyA9ICdpZmNvbmZpZyc7XG4gICAgICBleGVjKGNtZFN0cmluZywgKGVycjogYW55LCBzdGRvdXQ6IGFueSwgc3RkZXJyOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coc3Rkb3V0KTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVxLnBhcmFtcy5tb2RlID09IFwibG93XCIpIHtcblxuICAgICAgfSBlbHNlIGlmIChyZXEucGFyYW1zLm1vZGUgPT0gXCJoaWdoXCIpIHtcblxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuYXBwLnVzZSh0aGlzLmNvbnRyb2xsZXJNYW5hZ2VyLnJvdXRlcik7XG4gIH1cbn1cbiJdfQ==
