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
                            res.status(200).send(token);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL2NvbnRyb2xsZXJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFPLGtCQUFrQixDQUFDLENBQUE7QUFDMUIsMEJBQW1DLFdBQVcsQ0FBQyxDQUFBO0FBQy9DLElBQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBQ25DLElBQVksVUFBVSxXQUFNLGVBQWUsQ0FBQyxDQUFBO0FBTzVDO0lBV0UsMkJBQ3NCLFFBQThCLEVBQ2hDLE1BQTBCLEVBQ3JCLFdBQW9DLEVBQ25DLFlBQXNDLEVBQy9CLGlCQUNBO1FBakJuQyxpQkFpSEM7UUEvRVEsMEJBQXFCLEdBQUc7WUFDN0IsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztnQkFDcEMsSUFBSSxVQUFVLEdBQUcsS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQzFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxDQUFDO1lBRUgsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxVQUFVO2dCQUNsQyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0QsQ0FBQyxDQUFDLENBQUM7WUFFSCxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQUMsVUFBVTtnQkFDckQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hC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cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcbmltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCAqIGFzIElOVEVSRkFDRVMgZnJvbSBcIi4uL2ludGVyZmFjZXNcIjtcblxuLyoqXG4gKiBDb250cm9sbGVyTWFuYWdlciBpbnN0YW50aWF0ZXMgY29udHJvbGxlcnMsIGFzc2lnbnMgbW9kZWxzLCBhbmRcbiAqIGRlZmluZXMgcm91dGVzIGZvciB0aGVtLlxuICovXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyTWFuYWdlclxuaW1wbGVtZW50cyBJTlRFUkZBQ0VTLklDb250cm9sbGVyTWFuYWdlciB7XG4gIHB1YmxpYyBzZXR0aW5nczogSU5URVJGQUNFUy5JU2V0dGluZ3M7XG4gIHB1YmxpYyBsb2dnZXI6IElOVEVSRkFDRVMuSUxvZ2dlcjtcbiAgcHVibGljIHJvdXRlcjogZXhwcmVzcy5Sb3V0ZXI7XG4gIHB1YmxpYyBkYXRhTWFuYWdlcjogSU5URVJGQUNFUy5JRGF0YU1hbmFnZXI7XG4gIHB1YmxpYyB0b2tlbk1hbmFnZXI6IElOVEVSRkFDRVMuSVRva2VuTWFuYWdlcjtcbiAgcHVibGljIGNvbnRyb2xsZXJGYWN0b3J5OiAoKSA9PiBJTlRFUkZBQ0VTLklDb250cm9sbGVyO1xuICBwdWJsaWMgY29udHJvbGxlcnM6IElOVEVSRkFDRVMuSUNvbnRyb2xsZXJbXTtcbiAgcHVibGljIGF1dGhDb250cm9sbGVyOiBJTlRFUkZBQ0VTLklDb250cm9sbGVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoXCJTZXR0aW5nc1wiKSBzZXR0aW5nczogSU5URVJGQUNFUy5JU2V0dGluZ3MsXG4gICAgQGluamVjdChcIkxvZ2dlclwiKSBsb2dnZXI6IElOVEVSRkFDRVMuSUxvZ2dlcixcbiAgICBAaW5qZWN0KFwiRGF0YU1hbmFnZXJcIikgZGF0YU1hbmFnZXI6IElOVEVSRkFDRVMuSURhdGFNYW5hZ2VyLFxuICAgIEBpbmplY3QoXCJUb2tlbk1hbmFnZXJcIikgdG9rZW5NYW5hZ2VyOiBJTlRFUkZBQ0VTLklUb2tlbk1hbmFnZXIsXG4gICAgQGluamVjdChcIkZhY3Rvcnk8Q29udHJvbGxlcj5cIikgY29udHJvbGxlckZhY3Rvcnk6XG4gICAgICBJTlRFUkZBQ0VTLklDb250cm9sbGVyRmFjdG9yeVxuICApIHtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gICAgdGhpcy5kYXRhTWFuYWdlciA9IGRhdGFNYW5hZ2VyO1xuICAgIHRoaXMudG9rZW5NYW5hZ2VyID0gdG9rZW5NYW5hZ2VyO1xuICAgIHRoaXMuY29udHJvbGxlckZhY3RvcnkgPSBjb250cm9sbGVyRmFjdG9yeTtcblxuICAgIHRoaXMucm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbiAgICB0aGlzLnNldFJlcXVlc3RWYWxpZGF0aW9uKCk7XG4gICAgdGhpcy5jb250cm9sbGVycyA9IFtdO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUNvbnRyb2xsZXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogQXNzaWduIG1vZGVscyB0byBjb250cm9sbGVycyBhbmQgc2V0IENSVUQgYW5kIC9sb2dpbiByb3V0ZXMuXG4gICAqL1xuICBwdWJsaWMgaW5pdGlhbGl6ZUNvbnRyb2xsZXJzID0gKCkgPT4ge1xuICAgIHRoaXMuZGF0YU1hbmFnZXIubW9kZWxzLmZvckVhY2goKG1vZGVsKSA9PiB7XG4gICAgICBsZXQgY29udHJvbGxlciA9IHRoaXMuY29udHJvbGxlckZhY3RvcnkoKTtcbiAgICAgIGNvbnRyb2xsZXIuc2V0TW9kZWwobW9kZWwpO1xuICAgICAgdGhpcy5jb250cm9sbGVycy5wdXNoKGNvbnRyb2xsZXIpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb250cm9sbGVycy5mb3JFYWNoKChjb250cm9sbGVyKSA9PiB7XG4gICAgICB0aGlzLnJvdXRlci51c2UoXCIvYXBpXCIgKyBjb250cm9sbGVyLnBhdGgsIGNvbnRyb2xsZXIucm91dGVyKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXV0aENvbnRyb2xsZXIgPSB0aGlzLmNvbnRyb2xsZXJzLmZpbmQoKGNvbnRyb2xsZXIpID0+IHtcbiAgICAgIHJldHVybiBjb250cm9sbGVyLm1vZGVsLmlzQXV0aDtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmF1dGhDb250cm9sbGVyKSB7XG4gICAgICB0aGlzLm1ha2VBdXRoKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG1ha2VBdXRoID0gKCkgPT4ge1xuICAgIHRoaXMucm91dGVyLnBvc3QoXCIvbG9naW5cIiwgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICB0aGlzLmF1dGhDb250cm9sbGVyLmNoZWNrTG9naW4ocmVxLmJvZHkpXG4gICAgICAudGhlbigodXNlcikgPT4ge1xuICAgICAgICBpZiAodXNlciA9PT0gbnVsbCkge1xuICAgICAgICAgIHJlcy5zZW5kU3RhdHVzKDQwNCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IHBheWxvYWQgPSB7XG4gICAgICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgICAgIHBlcm1pc3Npb25zOiB1c2VyLnBlcm1pc3Npb25zLFxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy50b2tlbk1hbmFnZXIuc2lnblRva2VuKHBheWxvYWQpXG4gICAgICAgICAgLnRoZW4oKHRva2VuKSA9PiB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh0b2tlbik7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZXMuc2VuZFN0YXR1cyg1MDApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICAgIHJlcy5zZW5kU3RhdHVzKDUwMCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMucm91dGVyLnBvc3QoXCIvcmVnaXN0ZXJcIiwgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICB0aGlzLmF1dGhDb250cm9sbGVyLmNyZWF0ZShyZXEuYm9keSlcbiAgICAgIC50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgcmVzLnNlbmRTdGF0dXMoMjAwKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvci50b1N0cmluZygpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHNldFJlcXVlc3RWYWxpZGF0aW9uID0gKCkgPT4ge1xuICAgIHRoaXMucm91dGVyLnVzZShcIi86cGFnZUNhbGxlZFwiLCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICAgIGlmIChyZXEuZ2V0KFwiQXV0aG9yaXphdGlvblwiKSkge1xuICAgICAgICBsZXQgdG9rZW4gPSByZXEuZ2V0KFwiQXV0aG9yaXphdGlvblwiKS5zcGxpdChcIiBcIilbMV07XG4gICAgICAgIHRoaXMudG9rZW5NYW5hZ2VyLnZhbGlkYXRlVG9rZW4odG9rZW4pXG4gICAgICAgIC50aGVuKChkZWNvZGVkKSA9PiB7XG4gICAgICAgICAgcmVzLnNldChcIkF1dGhvcml6ZWRVc2VyXCIsIGRlY29kZWQuaWQpO1xuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHJlcy5zZW5kU3RhdHVzKDQwMSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHJlcS5wYXJhbXMucGFnZUNhbGxlZCA9PT0gXCJsb2dpblwiKSB7XG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcy5zZW5kU3RhdHVzKDQwMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19
