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
var express = require("express");
var INTERFACES = require("../interfaces");
var ControllerManager = (function () {
    function ControllerManager(settings, logger, dataManager, tokenManager, controllerFactory) {
        var _this = this;
        this.initializeControllers = function () {
            _this.dataManager.models.forEach(function (model) {
                var controller = _this.controllerFactory();
                controller.setModel(model);
                _this.controllers.push(controller);
            });
            _this.controllers.forEach(function (controller) {
                _this.router.use("/api" + controller.path, controller.router);
            });
            _this.authController = _this.controllers.find(function (controller) {
                return controller.model.isAuth;
            });
            if (_this.authController) {
                _this.makeAuth();
            }
        };
        this.makeAuth = function () {
            _this.router.post("/login", function (req, res, next) {
                console.log(JSON.stringify(req.body));
                _this.authController.checkLogin(req.body)
                    .then(function (user) {
                    if (user === null) {
                        res.sendStatus(404);
                    }
                    else {
                        var payload = {
                            id: user.id,
                            permissions: user.permissions,
                        };
                        _this.tokenManager.signToken(payload)
                            .then(function (token) {
                            res.status(200).send({ token: token });
                        })
                            .catch(function (error) {
                            res.sendStatus(500);
                        });
                    }
                })
                    .catch(function (error) {
                    _this.logger.error(error);
                    res.sendStatus(500);
                });
            });
            _this.router.post("/register", function (req, res, next) {
                _this.authController.create(req.body)
                    .then(function (data) {
                    res.sendStatus(200);
                })
                    .catch(function (error) {
                    _this.logger.error(error);
                    res.status(400).send(error.toString());
                });
            });
        };
        this.setRequestValidation = function () {
            _this.router.use("/:pageCalled", function (req, res, next) {
                if (req.get("Authorization")) {
                    var token = req.get("Authorization").split(" ")[1];
                    _this.tokenManager.validateToken(token)
                        .then(function (decoded) {
                        res.set("AuthorizedUser", decoded.id);
                        next();
                    })
                        .catch(function (error) {
                        res.sendStatus(401);
                    });
                }
                else {
                    if (req.params.pageCalled === "login") {
                        next();
                    }
                    else {
                        res.sendStatus(401);
                    }
                }
            });
        };
        this.settings = settings;
        this.logger = logger;
        this.dataManager = dataManager;
        this.tokenManager = tokenManager;
        this.controllerFactory = controllerFactory;
        this.router = express.Router();
        this.setRequestValidation();
        this.controllers = [];
        this.initializeControllers();
    }
    ControllerManager = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject("Settings")),
        __param(1, inversify_1.inject("Logger")),
        __param(2, inversify_1.inject("DataManager")),
        __param(3, inversify_1.inject("TokenManager")),
        __param(4, inversify_1.inject("Factory<Controller>")), 
        __metadata('design:paramtypes', [Object, Object, Object, Object, Function])
    ], ControllerManager);
    return ControllerManager;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ControllerManager;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL2NvbnRyb2xsZXJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFPLGtCQUFrQixDQUFDLENBQUE7QUFDMUIsMEJBQW1DLFdBQVcsQ0FBQyxDQUFBO0FBQy9DLElBQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBQ25DLElBQVksVUFBVSxXQUFNLGVBQWUsQ0FBQyxDQUFBO0FBTzVDO0lBV0UsMkJBQ3NCLFFBQThCLEVBQ2hDLE1BQTBCLEVBQ3JCLFdBQW9DLEVBQ25DLFlBQXNDLEVBQy9CLGlCQUNBO1FBakJuQyxpQkFrSEM7UUFoRlEsMEJBQXFCLEdBQUc7WUFDN0IsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztnQkFDcEMsSUFBSSxVQUFVLEdBQUcsS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQzFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxDQUFDO1lBRUgsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxVQUFVO2dCQUNsQyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0QsQ0FBQyxDQUFDLENBQUM7WUFFSCxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQUMsVUFBVTtnQkFDckQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hC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QW1IYix3QkFBQztBQUFELENBbEhBLEFBa0hDLElBQUE7QUFsSEQ7bUNBa0hDLENBQUEiLCJmaWxlIjoiY2xhc3Nlcy9jb250cm9sbGVyTWFuYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcbmltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCAqIGFzIElOVEVSRkFDRVMgZnJvbSBcIi4uL2ludGVyZmFjZXNcIjtcblxuLyoqXG4gKiBDb250cm9sbGVyTWFuYWdlciBpbnN0YW50aWF0ZXMgY29udHJvbGxlcnMsIGFzc2lnbnMgbW9kZWxzLCBhbmRcbiAqIGRlZmluZXMgcm91dGVzIGZvciB0aGVtLlxuICovXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyTWFuYWdlclxuaW1wbGVtZW50cyBJTlRFUkZBQ0VTLklDb250cm9sbGVyTWFuYWdlciB7XG4gIHB1YmxpYyBzZXR0aW5nczogSU5URVJGQUNFUy5JU2V0dGluZ3M7XG4gIHB1YmxpYyBsb2dnZXI6IElOVEVSRkFDRVMuSUxvZ2dlcjtcbiAgcHVibGljIHJvdXRlcjogZXhwcmVzcy5Sb3V0ZXI7XG4gIHB1YmxpYyBkYXRhTWFuYWdlcjogSU5URVJGQUNFUy5JRGF0YU1hbmFnZXI7XG4gIHB1YmxpYyB0b2tlbk1hbmFnZXI6IElOVEVSRkFDRVMuSVRva2VuTWFuYWdlcjtcbiAgcHVibGljIGNvbnRyb2xsZXJGYWN0b3J5OiAoKSA9PiBJTlRFUkZBQ0VTLklDb250cm9sbGVyO1xuICBwdWJsaWMgY29udHJvbGxlcnM6IElOVEVSRkFDRVMuSUNvbnRyb2xsZXJbXTtcbiAgcHVibGljIGF1dGhDb250cm9sbGVyOiBJTlRFUkZBQ0VTLklDb250cm9sbGVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoXCJTZXR0aW5nc1wiKSBzZXR0aW5nczogSU5URVJGQUNFUy5JU2V0dGluZ3MsXG4gICAgQGluamVjdChcIkxvZ2dlclwiKSBsb2dnZXI6IElOVEVSRkFDRVMuSUxvZ2dlcixcbiAgICBAaW5qZWN0KFwiRGF0YU1hbmFnZXJcIikgZGF0YU1hbmFnZXI6IElOVEVSRkFDRVMuSURhdGFNYW5hZ2VyLFxuICAgIEBpbmplY3QoXCJUb2tlbk1hbmFnZXJcIikgdG9rZW5NYW5hZ2VyOiBJTlRFUkZBQ0VTLklUb2tlbk1hbmFnZXIsXG4gICAgQGluamVjdChcIkZhY3Rvcnk8Q29udHJvbGxlcj5cIikgY29udHJvbGxlckZhY3Rvcnk6XG4gICAgICBJTlRFUkZBQ0VTLklDb250cm9sbGVyRmFjdG9yeVxuICApIHtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gICAgdGhpcy5kYXRhTWFuYWdlciA9IGRhdGFNYW5hZ2VyO1xuICAgIHRoaXMudG9rZW5NYW5hZ2VyID0gdG9rZW5NYW5hZ2VyO1xuICAgIHRoaXMuY29udHJvbGxlckZhY3RvcnkgPSBjb250cm9sbGVyRmFjdG9yeTtcblxuICAgIHRoaXMucm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbiAgICB0aGlzLnNldFJlcXVlc3RWYWxpZGF0aW9uKCk7XG4gICAgdGhpcy5jb250cm9sbGVycyA9IFtdO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUNvbnRyb2xsZXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogQXNzaWduIG1vZGVscyB0byBjb250cm9sbGVycyBhbmQgc2V0IENSVUQgYW5kIC9sb2dpbiByb3V0ZXMuXG4gICAqL1xuICBwdWJsaWMgaW5pdGlhbGl6ZUNvbnRyb2xsZXJzID0gKCkgPT4ge1xuICAgIHRoaXMuZGF0YU1hbmFnZXIubW9kZWxzLmZvckVhY2goKG1vZGVsKSA9PiB7XG4gICAgICBsZXQgY29udHJvbGxlciA9IHRoaXMuY29udHJvbGxlckZhY3RvcnkoKTtcbiAgICAgIGNvbnRyb2xsZXIuc2V0TW9kZWwobW9kZWwpO1xuICAgICAgdGhpcy5jb250cm9sbGVycy5wdXNoKGNvbnRyb2xsZXIpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb250cm9sbGVycy5mb3JFYWNoKChjb250cm9sbGVyKSA9PiB7XG4gICAgICB0aGlzLnJvdXRlci51c2UoXCIvYXBpXCIgKyBjb250cm9sbGVyLnBhdGgsIGNvbnRyb2xsZXIucm91dGVyKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXV0aENvbnRyb2xsZXIgPSB0aGlzLmNvbnRyb2xsZXJzLmZpbmQoKGNvbnRyb2xsZXIpID0+IHtcbiAgICAgIHJldHVybiBjb250cm9sbGVyLm1vZGVsLmlzQXV0aDtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmF1dGhDb250cm9sbGVyKSB7XG4gICAgICB0aGlzLm1ha2VBdXRoKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG1ha2VBdXRoID0gKCkgPT4ge1xuICAgIHRoaXMucm91dGVyLnBvc3QoXCIvbG9naW5cIiwgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXEuYm9keSkpO1xuICAgICAgdGhpcy5hdXRoQ29udHJvbGxlci5jaGVja0xvZ2luKHJlcS5ib2R5KVxuICAgICAgLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgICAgaWYgKHVzZXIgPT09IG51bGwpIHtcbiAgICAgICAgICByZXMuc2VuZFN0YXR1cyg0MDQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBwYXlsb2FkID0ge1xuICAgICAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICBwZXJtaXNzaW9uczogdXNlci5wZXJtaXNzaW9ucyxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMudG9rZW5NYW5hZ2VyLnNpZ25Ub2tlbihwYXlsb2FkKVxuICAgICAgICAgICAgLnRoZW4oKHRva2VuKSA9PiB7XG4gICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHt0b2tlbn0pO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmVzLnNlbmRTdGF0dXMoNTAwKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXMuc2VuZFN0YXR1cyg1MDApO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJvdXRlci5wb3N0KFwiL3JlZ2lzdGVyXCIsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgICAgdGhpcy5hdXRoQ29udHJvbGxlci5jcmVhdGUocmVxLmJvZHkpXG4gICAgICAudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIHJlcy5zZW5kU3RhdHVzKDIwMCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IudG9TdHJpbmcoKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRSZXF1ZXN0VmFsaWRhdGlvbiA9ICgpID0+IHtcbiAgICB0aGlzLnJvdXRlci51c2UoXCIvOnBhZ2VDYWxsZWRcIiwgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICBpZiAocmVxLmdldChcIkF1dGhvcml6YXRpb25cIikpIHtcbiAgICAgICAgbGV0IHRva2VuID0gcmVxLmdldChcIkF1dGhvcml6YXRpb25cIikuc3BsaXQoXCIgXCIpWzFdO1xuICAgICAgICB0aGlzLnRva2VuTWFuYWdlci52YWxpZGF0ZVRva2VuKHRva2VuKVxuICAgICAgICAudGhlbigoZGVjb2RlZCkgPT4ge1xuICAgICAgICAgIHJlcy5zZXQoXCJBdXRob3JpemVkVXNlclwiLCBkZWNvZGVkLmlkKTtcbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICByZXMuc2VuZFN0YXR1cyg0MDEpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChyZXEucGFyYW1zLnBhZ2VDYWxsZWQgPT09IFwibG9naW5cIikge1xuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXMuc2VuZFN0YXR1cyg0MDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
