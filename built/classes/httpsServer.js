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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL2h0dHBzU2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFPLGtCQUFrQixDQUFDLENBQUE7QUFDMUIsMEJBQW1DLFdBQVcsQ0FBQyxDQUFBO0FBQy9DLElBQVksS0FBSyxXQUFNLE9BQU8sQ0FBQyxDQUFBO0FBQy9CLElBQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBQ25DLElBQVksVUFBVSxXQUFNLGFBQWEsQ0FBQyxDQUFBO0FBQzFDLElBQVksVUFBVSxXQUFNLGVBQWUsQ0FBQyxDQUFBO0FBQzVDLElBQVksSUFBSSxXQUFNLE1BQU0sQ0FBQyxDQUFBO0FBQzdCLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFRM0M7SUFZRSxxQkFDc0IsUUFBOEIsRUFDaEMsTUFBMEIsRUFFMUMsaUJBQWdEO1FBaEJ0RCxpQkE0RkM7UUF6RFEsYUFBUSxHQUFHO1lBQ2hCLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFBO1FBRU0sZUFBVSxHQUFHO1lBQ2xCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6RCxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFBO1FBRU0sYUFBUSxHQUFHO1lBQ2hCLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hELEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO2dCQUNuQyxHQUFHLENBQUMsTUFBTSxDQUFDLDZCQUE2QixFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQyxHQUFHLENBQUMsTUFBTSxDQUFDLDhCQUE4QixFQUN2QywrREFBK0QsQ0FBQyxDQUFDO2dCQUNuRSxHQUFHLENBQUMsTUFBTSxDQUFDLDhCQUE4QixFQUN2QyxpQ0FBaUMsQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLEVBQUUsQ0FBQztZQUNULENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7Z0JBQ25DLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDN0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDekIsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixJQUFJLEVBQUUsQ0FBQztnQkFDVCxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtnQkFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlELElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUN6QixHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUVwQixJQUFJLFNBQVMsR0FBRyxRQUFRLEdBQUcsR0FBRyxHQUFHLGlFQUFpRSxHQUFHLEdBQUcsR0FBRyxZQUFZLENBQUM7Z0JBQ3hILElBQUksQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFRLEVBQUUsTUFBVyxFQUFFLE1BQVc7b0JBQ2pELElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztvQkFDZCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixJQUFJLE1BQUksR0FBRyxpQ0FBaUMsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDO29CQUNoRSxDQUFDO29CQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUN0QyxJQUFJLE1BQUksR0FBRyxpQ0FBaUMsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDO29CQUNoRSxDQUFDO29CQUVELElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBQyxHQUFRLEVBQUUsTUFBVyxFQUFFLE1BQVc7d0JBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDMUMsQ0FBQyxDQUFDLENBQUE7Z0JBRUosQ0FBQyxDQUFDLENBQUM7Z0JBRUgsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFFL0IsQ0FBQztnQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFFdkMsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQTtRQXhFQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUUsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFFM0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFakIsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUk7WUFDeEIsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRztTQUN2QixDQUFDO1FBRUYsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQWxDSDtRQUFDLHNCQUFVLEVBQUU7bUJBY1Isa0JBQU0sQ0FBQyxVQUFVLENBQUM7bUJBQ2xCLGtCQUFNLENBQUMsUUFBUSxDQUFDO21CQUNoQixrQkFBTSxDQUFDLG1CQUFtQixDQUFDOzttQkFoQm5CO0lBNkZiLGtCQUFDO0FBQUQsQ0E1RkEsQUE0RkMsSUFBQTtBQTVGRDs2QkE0RkMsQ0FBQSIsImZpbGUiOiJjbGFzc2VzL2h0dHBzU2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVmbGVjdC1tZXRhZGF0YVwiO1xuaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0ICogYXMgaHR0cHMgZnJvbSBcImh0dHBzXCI7XG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gXCJib2R5LXBhcnNlclwiO1xuaW1wb3J0ICogYXMgSU5URVJGQUNFUyBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xuaW1wb3J0ICogYXMgcnBpbyBmcm9tIFwicnBpb1wiO1xuY29uc3QgZXhlYyA9IHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpLmV4ZWM7XG5cbi8qKlxuICogSFRUUFNTZXJ2ZXIgaW5zdGFudGlhdGVzIHRoZSBFeHByZXNzIGFwcCBhbmQgcm91dGVzIENSVURcbiAqIHRyYWZmaWMgdG8gQ29udHJvbGxlck1hbmFnZXIgYWZ0ZXIgdGhlIHJlcXVlc3QgaGFzIGJlZW5cbiAqIGF1dGhlbnRpY2F0ZWQgd2l0aCBUb2tlbk1hbmFnZXIuXG4gKi9cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhUVFBTU2VydmVyIGltcGxlbWVudHMgSU5URVJGQUNFUy5JSFRUUFNTZXJ2ZXIge1xuICBwdWJsaWMgc2VydmVyOiBodHRwcy5TZXJ2ZXI7XG4gIHB1YmxpYyBzZXR0aW5nczogSU5URVJGQUNFUy5JU2V0dGluZ3M7XG4gIHB1YmxpYyBsb2dnZXI6IElOVEVSRkFDRVMuSUxvZ2dlcjtcbiAgcHVibGljIGNvbnRyb2xsZXJNYW5hZ2VyOiBJTlRFUkZBQ0VTLklDb250cm9sbGVyTWFuYWdlcjtcbiAgcHVibGljIGRldmljZU1hbmFnZXI6IElOVEVSRkFDRVMuSURldmljZU1hbmFnZXI7XG4gIHB1YmxpYyBhcHA6IGV4cHJlc3MuRXhwcmVzcztcbiAgcHVibGljIHJwaW86IGFueTtcbiAgcHVibGljIGV4ZWM6IGFueTtcblxuICBwcml2YXRlIG9wdGlvbnM6IE9iamVjdDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAaW5qZWN0KFwiU2V0dGluZ3NcIikgc2V0dGluZ3M6IElOVEVSRkFDRVMuSVNldHRpbmdzLFxuICAgIEBpbmplY3QoXCJMb2dnZXJcIikgbG9nZ2VyOiBJTlRFUkZBQ0VTLklMb2dnZXIsXG4gICAgQGluamVjdChcIkNvbnRyb2xsZXJNYW5hZ2VyXCIpXG4gICAgICBjb250cm9sbGVyTWFuYWdlcjogSU5URVJGQUNFUy5JQ29udHJvbGxlck1hbmFnZXJcbiAgICAvLyBAaW5qZWN0KFwiRGV2aWNlTWFuYWdlclwiKSBkZXZpY2VNYW5hZ2VyOiBJTlRFUkZBQ0VTLklEZXZpY2VNYW5hZ2VyXG4gICkge1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICB0aGlzLiBsb2dnZXIgPSBsb2dnZXI7XG4gICAgdGhpcy5jb250cm9sbGVyTWFuYWdlciA9IGNvbnRyb2xsZXJNYW5hZ2VyO1xuICAgIC8vIHRoaXMuZGV2aWNlTWFuYWdlciA9IGRldmljZU1hbmFnZXI7XG4gICAgdGhpcy5ycGlvID0gcnBpbztcbiAgICB0aGlzLmV4ZWMgPSBleGVjO1xuXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgY2VydDogdGhpcy5zZXR0aW5ncy5jZXJ0LFxuICAgICAga2V5OiB0aGlzLnNldHRpbmdzLmtleSxcbiAgICB9O1xuXG4gICAgdGhpcy5hcHAgPSBleHByZXNzKCk7XG4gICAgdGhpcy5zZXR1cEFsbCgpO1xuICB9XG5cbiAgcHVibGljIHNldHVwQWxsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0dXBBcHAoKTtcbiAgICB0aGlzLnN0YXJ0SFRUUFMoKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGFydEhUVFBTID0gKCkgPT4ge1xuICAgIHRoaXMuc2VydmVyID0gaHR0cHMuY3JlYXRlU2VydmVyKHRoaXMub3B0aW9ucywgdGhpcy5hcHApO1xuICAgIHRoaXMuc2VydmVyLmxpc3Rlbih0aGlzLnNldHRpbmdzLnBvcnQpO1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJTZXJ2ZXIgc3RhcnRlZCBvbiBwb3J0XCIsIHRoaXMuc2V0dGluZ3MucG9ydCk7XG4gIH1cblxuICBwdWJsaWMgc2V0dXBBcHAgPSAoKSA9PiB7XG4gICAgdGhpcy5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcbiAgICB0aGlzLmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuICAgIHRoaXMuYXBwLnVzZShmdW5jdGlvbiAocmVxLCByZXMsIG5leHQpIHtcbiAgICAgIHJlcy5oZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIiwgXCIqXCIpO1xuICAgICAgcmVzLmhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnNcIixcbiAgICAgICAgXCJPcmlnaW4sIFgtUmVxdWVzdGVkLVdpdGgsIENvbnRlbnQtVHlwZSwgQWNjZXB0LCBBdXRob3JpemF0aW9uXCIpO1xuICAgICAgcmVzLmhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHNcIixcbiAgICAgICAgXCJQT1NULCBHRVQsIFBVVCwgREVMRVRFLCBPUFRJT05TXCIpO1xuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuICAgIHRoaXMuYXBwLnVzZShmdW5jdGlvbiAocmVxLCByZXMsIG5leHQpIHtcbiAgICAgIGlmIChyZXEubWV0aG9kID09PSBcIk9QVElPTlNcIikge1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dCgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuYXBwLnVzZShcIi9waW4vOnBpbi86bW9kZVwiLCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiVHVybiBcIiwgcmVxLnBhcmFtcy5waW4sIFwiIHRvIFwiLCByZXEucGFyYW1zLm1vZGUpO1xuICAgICAgbGV0IHBpbiA9IHJlcS5wYXJhbXMucGluO1xuICAgICAgcmVzLnNlbmRTdGF0dXMoMjAwKTtcblxuICAgICAgbGV0IGNtZFN0cmluZyA9ICdlY2hvIFwiJyArIHBpbiArICdcIiA+IC9zeXMvY2xhc3MvZ3Bpby9leHBvcnQgJiYgZWNobyBcIm91dFwiID4gL3N5cy9jbGFzcy9ncGlvL2dwaW8nICsgcGluICsgJy9kaXJlY3Rpb24nO1xuICAgICAgZXhlYyhjbWRTdHJpbmcsIChlcnI6IGFueSwgc3Rkb3V0OiBhbnksIHN0ZGVycjogYW55KSA9PiB7XG4gICAgICAgIGxldCBjbWQyID0gXCJcIjtcbiAgICAgICAgaWYgKHJlcS5wYXJhbXMubW9kZSA9PT0gXCJsb3dcIikge1xuICAgICAgICAgIGxldCBjbWQyID0gJ2VjaG8gXCIwXCIgPiAvc3lzL2NsYXNzL2dwaW8vZ3BpbycgKyBwaW4gKyAnL3ZhbHVlJztcbiAgICAgICAgfSBlbHNlIGlmIChyZXEucGFyYW1zLm1vZGUgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgICAgbGV0IGNtZDIgPSAnZWNobyBcIjFcIiA+IC9zeXMvY2xhc3MvZ3Bpby9ncGlvJyArIHBpbiArICcvdmFsdWUnO1xuICAgICAgICB9ICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGV4ZWMoY21kMiwgKGVycjogYW55LCBzdGRvdXQ6IGFueSwgc3RkZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhzdGRvdXQsIFwiXFxyXFxuXFxyXFxuXCIsIHN0ZGVycik7XG4gICAgICAgIH0pXG5cbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVxLnBhcmFtcy5tb2RlID09IFwibG93XCIpIHtcblxuICAgICAgfSBlbHNlIGlmIChyZXEucGFyYW1zLm1vZGUgPT0gXCJoaWdoXCIpIHtcblxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuYXBwLnVzZSh0aGlzLmNvbnRyb2xsZXJNYW5hZ2VyLnJvdXRlcik7XG4gIH1cbn1cbiJdfQ==
