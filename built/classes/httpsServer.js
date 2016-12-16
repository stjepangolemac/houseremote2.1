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
                res.sendStatus(200);
                var cmdString = 'echo "' + pin + '" > /sys/class/gpio/export && echo "out" > /sys/class/gpio/gpio' + pin + '/direction';
                exec(cmdString, function (err, stdout, stderr) {
                    console.log(stdout, "\r\n\r\n", stderr);
                    var cmd2 = "";
                    if (req.params.mode === "low") {
                        var cmd2_1 = 'echo "0" > /sys/class/gpio/gpio' + pin + '/value';
                    }
                    else if (req.params.mode === "high") {
                        var cmd2_2 = 'echo "1" > /sys/class/gpio/gpio' + pin + '/value';
                    }
                    exec(cmd2, function (err, stdout, stderr) {
                        console.log(stdout, "\r\n\r\n", stderr);
                    });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL2h0dHBzU2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFPLGtCQUFrQixDQUFDLENBQUE7QUFDMUIsMEJBQW1DLFdBQVcsQ0FBQyxDQUFBO0FBQy9DLElBQVksS0FBSyxXQUFNLE9BQU8sQ0FBQyxDQUFBO0FBQy9CLElBQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBQ25DLElBQVksVUFBVSxXQUFNLGFBQWEsQ0FBQyxDQUFBO0FBQzFDLElBQVksVUFBVSxXQUFNLGVBQWUsQ0FBQyxDQUFBO0FBQzVDLElBQVksSUFBSSxXQUFNLE1BQU0sQ0FBQyxDQUFBO0FBQzdCLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFRM0M7SUFZRSxxQkFDc0IsUUFBOEIsRUFDaEMsTUFBMEIsRUFFMUMsaUJBQWdEO1FBaEJ0RCxpQkE2RkM7UUExRFEsYUFBUSxHQUFHO1lBQ2hCLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFBO1FBRU0sZUFBVSxHQUFHO1lBQ2xCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6RCxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFBO1FBRU0sYUFBUSxHQUFHO1lBQ2hCLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFR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LENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFBO1FBekVDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBRSxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUUzQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUVqQixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTtZQUN4QixHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHO1NBQ3ZCLENBQUM7UUFFRixJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBbENIO1FBQUMsc0JBQVUsRUFBRTttQkFjUixrQkFBTSxDQUFDLFVBQVUsQ0FBQzttQkFDbEIsa0JBQU0sQ0FBQyxRQUFRLENBQUM7bUJBQ2hCLGtCQUFNLENBQUMsbUJBQW1CLENBQUM7O21CQWhCbkI7SUE4RmIsa0JBQUM7QUFBRCxDQTdGQSxBQTZGQyxJQUFBO0FBN0ZEOzZCQTZGQyxDQUFBIiwiZmlsZSI6ImNsYXNzZXMvaHR0cHNTZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJyZWZsZWN0LW1ldGFkYXRhXCI7XG5pbXBvcnQgeyBpbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XG5pbXBvcnQgKiBhcyBodHRwcyBmcm9tIFwiaHR0cHNcIjtcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSBcImJvZHktcGFyc2VyXCI7XG5pbXBvcnQgKiBhcyBJTlRFUkZBQ0VTIGZyb20gXCIuLi9pbnRlcmZhY2VzXCI7XG5pbXBvcnQgKiBhcyBycGlvIGZyb20gXCJycGlvXCI7XG5jb25zdCBleGVjID0gcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIikuZXhlYztcblxuLyoqXG4gKiBIVFRQU1NlcnZlciBpbnN0YW50aWF0ZXMgdGhlIEV4cHJlc3MgYXBwIGFuZCByb3V0ZXMgQ1JVRFxuICogdHJhZmZpYyB0byBDb250cm9sbGVyTWFuYWdlciBhZnRlciB0aGUgcmVxdWVzdCBoYXMgYmVlblxuICogYXV0aGVudGljYXRlZCB3aXRoIFRva2VuTWFuYWdlci5cbiAqL1xuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSFRUUFNTZXJ2ZXIgaW1wbGVtZW50cyBJTlRFUkZBQ0VTLklIVFRQU1NlcnZlciB7XG4gIHB1YmxpYyBzZXJ2ZXI6IGh0dHBzLlNlcnZlcjtcbiAgcHVibGljIHNldHRpbmdzOiBJTlRFUkZBQ0VTLklTZXR0aW5ncztcbiAgcHVibGljIGxvZ2dlcjogSU5URVJGQUNFUy5JTG9nZ2VyO1xuICBwdWJsaWMgY29udHJvbGxlck1hbmFnZXI6IElOVEVSRkFDRVMuSUNvbnRyb2xsZXJNYW5hZ2VyO1xuICBwdWJsaWMgZGV2aWNlTWFuYWdlcjogSU5URVJGQUNFUy5JRGV2aWNlTWFuYWdlcjtcbiAgcHVibGljIGFwcDogZXhwcmVzcy5FeHByZXNzO1xuICBwdWJsaWMgcnBpbzogYW55O1xuICBwdWJsaWMgZXhlYzogYW55O1xuXG4gIHByaXZhdGUgb3B0aW9uczogT2JqZWN0O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoXCJTZXR0aW5nc1wiKSBzZXR0aW5nczogSU5URVJGQUNFUy5JU2V0dGluZ3MsXG4gICAgQGluamVjdChcIkxvZ2dlclwiKSBsb2dnZXI6IElOVEVSRkFDRVMuSUxvZ2dlcixcbiAgICBAaW5qZWN0KFwiQ29udHJvbGxlck1hbmFnZXJcIilcbiAgICAgIGNvbnRyb2xsZXJNYW5hZ2VyOiBJTlRFUkZBQ0VTLklDb250cm9sbGVyTWFuYWdlclxuICAgIC8vIEBpbmplY3QoXCJEZXZpY2VNYW5hZ2VyXCIpIGRldmljZU1hbmFnZXI6IElOVEVSRkFDRVMuSURldmljZU1hbmFnZXJcbiAgKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMuIGxvZ2dlciA9IGxvZ2dlcjtcbiAgICB0aGlzLmNvbnRyb2xsZXJNYW5hZ2VyID0gY29udHJvbGxlck1hbmFnZXI7XG4gICAgLy8gdGhpcy5kZXZpY2VNYW5hZ2VyID0gZGV2aWNlTWFuYWdlcjtcbiAgICB0aGlzLnJwaW8gPSBycGlvO1xuICAgIHRoaXMuZXhlYyA9IGV4ZWM7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBjZXJ0OiB0aGlzLnNldHRpbmdzLmNlcnQsXG4gICAgICBrZXk6IHRoaXMuc2V0dGluZ3Mua2V5LFxuICAgIH07XG5cbiAgICB0aGlzLmFwcCA9IGV4cHJlc3MoKTtcbiAgICB0aGlzLnNldHVwQWxsKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0dXBBbGwgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXR1cEFwcCgpO1xuICAgIHRoaXMuc3RhcnRIVFRQUygpO1xuICB9XG5cbiAgcHVibGljIHN0YXJ0SFRUUFMgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXJ2ZXIgPSBodHRwcy5jcmVhdGVTZXJ2ZXIodGhpcy5vcHRpb25zLCB0aGlzLmFwcCk7XG4gICAgdGhpcy5zZXJ2ZXIubGlzdGVuKHRoaXMuc2V0dGluZ3MucG9ydCk7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcIlNlcnZlciBzdGFydGVkIG9uIHBvcnRcIiwgdGhpcy5zZXR0aW5ncy5wb3J0KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXR1cEFwcCA9ICgpID0+IHtcbiAgICB0aGlzLmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuICAgIHRoaXMuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG4gICAgdGhpcy5hcHAudXNlKGZ1bmN0aW9uIChyZXEsIHJlcywgbmV4dCkge1xuICAgICAgcmVzLmhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiLCBcIipcIik7XG4gICAgICByZXMuaGVhZGVyKFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVyc1wiLFxuICAgICAgICBcIk9yaWdpbiwgWC1SZXF1ZXN0ZWQtV2l0aCwgQ29udGVudC1UeXBlLCBBY2NlcHQsIEF1dGhvcml6YXRpb25cIik7XG4gICAgICByZXMuaGVhZGVyKFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kc1wiLFxuICAgICAgICBcIlBPU1QsIEdFVCwgUFVULCBERUxFVEUsIE9QVElPTlNcIik7XG4gICAgICBuZXh0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5hcHAudXNlKGZ1bmN0aW9uIChyZXEsIHJlcywgbmV4dCkge1xuICAgICAgaWYgKHJlcS5tZXRob2QgPT09IFwiT1BUSU9OU1wiKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5hcHAudXNlKFwiL3Bpbi86cGluLzptb2RlXCIsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJUdXJuIFwiLCByZXEucGFyYW1zLnBpbiwgXCIgdG8gXCIsIHJlcS5wYXJhbXMubW9kZSk7XG4gICAgICBsZXQgcGluID0gcmVxLnBhcmFtcy5waW47XG4gICAgICByZXMuc2VuZFN0YXR1cygyMDApO1xuXG4gICAgICBsZXQgY21kU3RyaW5nID0gJ2VjaG8gXCInICsgcGluICsgJ1wiID4gL3N5cy9jbGFzcy9ncGlvL2V4cG9ydCAmJiBlY2hvIFwib3V0XCIgPiAvc3lzL2NsYXNzL2dwaW8vZ3BpbycgKyBwaW4gKyAnL2RpcmVjdGlvbic7XG4gICAgICBleGVjKGNtZFN0cmluZywgKGVycjogYW55LCBzdGRvdXQ6IGFueSwgc3RkZXJyOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coc3Rkb3V0LCBcIlxcclxcblxcclxcblwiLCBzdGRlcnIpO1xuICAgICAgICBsZXQgY21kMiA9IFwiXCI7XG4gICAgICAgIGlmIChyZXEucGFyYW1zLm1vZGUgPT09IFwibG93XCIpIHtcbiAgICAgICAgICBsZXQgY21kMiA9ICdlY2hvIFwiMFwiID4gL3N5cy9jbGFzcy9ncGlvL2dwaW8nICsgcGluICsgJy92YWx1ZSc7XG4gICAgICAgIH0gZWxzZSBpZiAocmVxLnBhcmFtcy5tb2RlID09PSBcImhpZ2hcIikge1xuICAgICAgICAgIGxldCBjbWQyID0gJ2VjaG8gXCIxXCIgPiAvc3lzL2NsYXNzL2dwaW8vZ3BpbycgKyBwaW4gKyAnL3ZhbHVlJztcbiAgICAgICAgfSAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBleGVjKGNtZDIsIChlcnI6IGFueSwgc3Rkb3V0OiBhbnksIHN0ZGVycjogYW55KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coc3Rkb3V0LCBcIlxcclxcblxcclxcblwiLCBzdGRlcnIpO1xuICAgICAgICB9KVxuXG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlcS5wYXJhbXMubW9kZSA9PSBcImxvd1wiKSB7XG5cbiAgICAgIH0gZWxzZSBpZiAocmVxLnBhcmFtcy5tb2RlID09IFwiaGlnaFwiKSB7XG5cbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmFwcC51c2UodGhpcy5jb250cm9sbGVyTWFuYWdlci5yb3V0ZXIpO1xuICB9XG59XG4iXX0=
