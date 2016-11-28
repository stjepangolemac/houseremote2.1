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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL2NvbnRyb2xsZXJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFPLGtCQUFrQixDQUFDLENBQUE7QUFDMUIsMEJBQW1DLFdBQVcsQ0FBQyxDQUFBO0FBQy9DLElBQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBQ25DLElBQVksVUFBVSxXQUFNLGVBQWUsQ0FBQyxDQUFBO0FBTzVDO0lBV0UsMkJBQ3NCLFFBQThCLEVBQ2hDLE1BQTBCLEVBQ3JCLFdBQW9DLEVBQ25DLFlBQXNDLEVBQy9CLGlCQUNBO1FBakJuQyxpQkFrSEM7UUFoRlEsMEJBQXFCLEdBQUc7WUFDN0IsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztnQkFDcEMsSUFBSSxVQUFVLEdBQUcsS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQzFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxDQUFDO1lBRUgsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxVQUFVO2dCQUNsQyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0QsQ0FBQyxDQUFDLENBQUM7WUFFSCxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQUMsVUFBVTtnQkFDckQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hC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O0FBQUQsQ0FsSEEsQUFrSEMsSUFBQTtBQWxIRDttQ0FrSEMsQ0FBQSIsImZpbGUiOiJjbGFzc2VzL2NvbnRyb2xsZXJNYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVmbGVjdC1tZXRhZGF0YVwiO1xuaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0ICogYXMgSU5URVJGQUNFUyBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xuXG4vKipcbiAqIENvbnRyb2xsZXJNYW5hZ2VyIGluc3RhbnRpYXRlcyBjb250cm9sbGVycywgYXNzaWducyBtb2RlbHMsIGFuZFxuICogZGVmaW5lcyByb3V0ZXMgZm9yIHRoZW0uXG4gKi9cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXJNYW5hZ2VyXG5pbXBsZW1lbnRzIElOVEVSRkFDRVMuSUNvbnRyb2xsZXJNYW5hZ2VyIHtcbiAgcHVibGljIHNldHRpbmdzOiBJTlRFUkZBQ0VTLklTZXR0aW5ncztcbiAgcHVibGljIGxvZ2dlcjogSU5URVJGQUNFUy5JTG9nZ2VyO1xuICBwdWJsaWMgcm91dGVyOiBleHByZXNzLlJvdXRlcjtcbiAgcHVibGljIGRhdGFNYW5hZ2VyOiBJTlRFUkZBQ0VTLklEYXRhTWFuYWdlcjtcbiAgcHVibGljIHRva2VuTWFuYWdlcjogSU5URVJGQUNFUy5JVG9rZW5NYW5hZ2VyO1xuICBwdWJsaWMgY29udHJvbGxlckZhY3Rvcnk6ICgpID0+IElOVEVSRkFDRVMuSUNvbnRyb2xsZXI7XG4gIHB1YmxpYyBjb250cm9sbGVyczogSU5URVJGQUNFUy5JQ29udHJvbGxlcltdO1xuICBwdWJsaWMgYXV0aENvbnRyb2xsZXI6IElOVEVSRkFDRVMuSUNvbnRyb2xsZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQGluamVjdChcIlNldHRpbmdzXCIpIHNldHRpbmdzOiBJTlRFUkZBQ0VTLklTZXR0aW5ncyxcbiAgICBAaW5qZWN0KFwiTG9nZ2VyXCIpIGxvZ2dlcjogSU5URVJGQUNFUy5JTG9nZ2VyLFxuICAgIEBpbmplY3QoXCJEYXRhTWFuYWdlclwiKSBkYXRhTWFuYWdlcjogSU5URVJGQUNFUy5JRGF0YU1hbmFnZXIsXG4gICAgQGluamVjdChcIlRva2VuTWFuYWdlclwiKSB0b2tlbk1hbmFnZXI6IElOVEVSRkFDRVMuSVRva2VuTWFuYWdlcixcbiAgICBAaW5qZWN0KFwiRmFjdG9yeTxDb250cm9sbGVyPlwiKSBjb250cm9sbGVyRmFjdG9yeTpcbiAgICAgIElOVEVSRkFDRVMuSUNvbnRyb2xsZXJGYWN0b3J5XG4gICkge1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgICB0aGlzLmRhdGFNYW5hZ2VyID0gZGF0YU1hbmFnZXI7XG4gICAgdGhpcy50b2tlbk1hbmFnZXIgPSB0b2tlbk1hbmFnZXI7XG4gICAgdGhpcy5jb250cm9sbGVyRmFjdG9yeSA9IGNvbnRyb2xsZXJGYWN0b3J5O1xuXG4gICAgdGhpcy5yb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuICAgIHRoaXMuc2V0UmVxdWVzdFZhbGlkYXRpb24oKTtcbiAgICB0aGlzLmNvbnRyb2xsZXJzID0gW107XG4gICAgdGhpcy5pbml0aWFsaXplQ29udHJvbGxlcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBc3NpZ24gbW9kZWxzIHRvIGNvbnRyb2xsZXJzIGFuZCBzZXQgQ1JVRCBhbmQgL2xvZ2luIHJvdXRlcy5cbiAgICovXG4gIHB1YmxpYyBpbml0aWFsaXplQ29udHJvbGxlcnMgPSAoKSA9PiB7XG4gICAgdGhpcy5kYXRhTWFuYWdlci5tb2RlbHMuZm9yRWFjaCgobW9kZWwpID0+IHtcbiAgICAgIGxldCBjb250cm9sbGVyID0gdGhpcy5jb250cm9sbGVyRmFjdG9yeSgpO1xuICAgICAgY29udHJvbGxlci5zZXRNb2RlbChtb2RlbCk7XG4gICAgICB0aGlzLmNvbnRyb2xsZXJzLnB1c2goY29udHJvbGxlcik7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbnRyb2xsZXJzLmZvckVhY2goKGNvbnRyb2xsZXIpID0+IHtcbiAgICAgIHRoaXMucm91dGVyLnVzZShcIi9hcGlcIiArIGNvbnRyb2xsZXIucGF0aCwgY29udHJvbGxlci5yb3V0ZXIpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hdXRoQ29udHJvbGxlciA9IHRoaXMuY29udHJvbGxlcnMuZmluZCgoY29udHJvbGxlcikgPT4ge1xuICAgICAgcmV0dXJuIGNvbnRyb2xsZXIubW9kZWwuaXNBdXRoO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuYXV0aENvbnRyb2xsZXIpIHtcbiAgICAgIHRoaXMubWFrZUF1dGgoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbWFrZUF1dGggPSAoKSA9PiB7XG4gICAgdGhpcy5yb3V0ZXIucG9zdChcIi9sb2dpblwiLCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlcS5ib2R5KSk7XG4gICAgICB0aGlzLmF1dGhDb250cm9sbGVyLmNoZWNrTG9naW4ocmVxLmJvZHkpXG4gICAgICAudGhlbigodXNlcikgPT4ge1xuICAgICAgICBpZiAodXNlciA9PT0gbnVsbCkge1xuICAgICAgICAgIHJlcy5zZW5kU3RhdHVzKDQwNCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IHBheWxvYWQgPSB7XG4gICAgICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgICAgIHBlcm1pc3Npb25zOiB1c2VyLnBlcm1pc3Npb25zLFxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy50b2tlbk1hbmFnZXIuc2lnblRva2VuKHBheWxvYWQpXG4gICAgICAgICAgLnRoZW4oKHRva2VuKSA9PiB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh0b2tlbik7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZXMuc2VuZFN0YXR1cyg1MDApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICAgIHJlcy5zZW5kU3RhdHVzKDUwMCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMucm91dGVyLnBvc3QoXCIvcmVnaXN0ZXJcIiwgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICB0aGlzLmF1dGhDb250cm9sbGVyLmNyZWF0ZShyZXEuYm9keSlcbiAgICAgIC50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgcmVzLnNlbmRTdGF0dXMoMjAwKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvci50b1N0cmluZygpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHNldFJlcXVlc3RWYWxpZGF0aW9uID0gKCkgPT4ge1xuICAgIHRoaXMucm91dGVyLnVzZShcIi86cGFnZUNhbGxlZFwiLCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICAgIGlmIChyZXEuZ2V0KFwiQXV0aG9yaXphdGlvblwiKSkge1xuICAgICAgICBsZXQgdG9rZW4gPSByZXEuZ2V0KFwiQXV0aG9yaXphdGlvblwiKS5zcGxpdChcIiBcIilbMV07XG4gICAgICAgIHRoaXMudG9rZW5NYW5hZ2VyLnZhbGlkYXRlVG9rZW4odG9rZW4pXG4gICAgICAgIC50aGVuKChkZWNvZGVkKSA9PiB7XG4gICAgICAgICAgcmVzLnNldChcIkF1dGhvcml6ZWRVc2VyXCIsIGRlY29kZWQuaWQpO1xuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHJlcy5zZW5kU3RhdHVzKDQwMSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHJlcS5wYXJhbXMucGFnZUNhbGxlZCA9PT0gXCJsb2dpblwiKSB7XG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcy5zZW5kU3RhdHVzKDQwMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19
