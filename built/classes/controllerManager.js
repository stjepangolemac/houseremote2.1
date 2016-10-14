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
                _this.router.use(controller.path, controller.router);
            });
            var authController = _this.controllers.find(function (controller) {
                return controller.model.isAuth;
            });
            _this.router.post("/login", function (req, res, next) {
                authController.checkLogin(req.body)
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
        };
        this.settings = settings;
        this.logger = logger;
        this.dataManager = dataManager;
        this.tokenManager = tokenManager;
        this.controllerFactory = controllerFactory;
        this.router = express.Router();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL2NvbnRyb2xsZXJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFPLGtCQUFrQixDQUFDLENBQUE7QUFDMUIsMEJBQW1DLFdBQVcsQ0FBQyxDQUFBO0FBQy9DLElBQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBQ25DLElBQVksVUFBVSxXQUFNLGVBQWUsQ0FBQyxDQUFBO0FBTzVDO0lBVUUsMkJBQ3NCLFFBQThCLEVBQ2hDLE1BQTBCLEVBQ3JCLFdBQW9DLEVBQ25DLFlBQXNDLEVBQy9CLGlCQUNBO1FBaEJuQyxpQkEwRUM7UUExQ1EsMEJBQXFCLEdBQUc7WUFDN0IsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztnQkFDcEMsSUFBSSxVQUFVLEdBQUcsS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQzFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxDQUFDO1lBRUgsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxVQUFVO2dCQUNsQyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0RCxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksY0FBYyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQUMsVUFBVTtnQkFDcEQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDO1lBRUgsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO2dCQUN4QyxjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7cUJBQ2xDLElBQUksQ0FBQyxVQUFDLElBQUk7b0JBQ1QsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2xCLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3RCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBR04sSUFBSSxPQUFPLEdBQUc7NEJBQ1osRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFOzRCQUNYLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVzt5QkFDOUIsQ0FBQzt3QkFDRixLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7NkJBQ25DLElBQUksQ0FBQyxVQUFDLEtBQUs7NEJBQ1YsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzlCLENBQUMsQ0FBQzs2QkFDRCxLQUFLLENBQUMsVUFBQyxLQUFLOzRCQUNYLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3RCLENBQUMsQ0FBQyxDQUFDO29CQUNMLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7b0JBQ1gsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pCLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3RCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUE7UUF2REMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBRTNDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUE1Qkg7UUFBQyxzQkFBVSxFQUFFO21CQVlSLGtCQUFNLENBQUMsVUFBVSxDQUFDO21CQUNsQixrQkFBTSxDQUFDLFFBQVEsQ0FBQzttQkFDaEIsa0JBQU0sQ0FBQyxhQUFhLENBQUM7bUJBQ3JCLGtCQUFNLENBQUMsY0FBYyxDQUFDO21CQUN0QixrQkFBTSxDQUFDLHFCQUFxQixDQUFDOzt5QkFoQnJCO0lBMkViLHdCQUFDO0FBQUQsQ0ExRUEsQUEwRUMsSUFBQTtBQTFFRDttQ0EwRUMsQ0FBQSIsImZpbGUiOiJjbGFzc2VzL2NvbnRyb2xsZXJNYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVmbGVjdC1tZXRhZGF0YVwiO1xuaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0ICogYXMgSU5URVJGQUNFUyBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xuXG4vKipcbiAqIENvbnRyb2xsZXJNYW5hZ2VyIGluc3RhbnRpYXRlcyBjb250cm9sbGVycywgYXNzaWducyBtb2RlbHMsIGFuZFxuICogZGVmaW5lcyByb3V0ZXMgZm9yIHRoZW0uXG4gKi9cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXJNYW5hZ2VyXG5pbXBsZW1lbnRzIElOVEVSRkFDRVMuSUNvbnRyb2xsZXJNYW5hZ2VyIHtcbiAgcHVibGljIHNldHRpbmdzOiBJTlRFUkZBQ0VTLklTZXR0aW5ncztcbiAgcHVibGljIGxvZ2dlcjogSU5URVJGQUNFUy5JTG9nZ2VyO1xuICBwdWJsaWMgcm91dGVyOiBleHByZXNzLlJvdXRlcjtcbiAgcHVibGljIGRhdGFNYW5hZ2VyOiBJTlRFUkZBQ0VTLklEYXRhTWFuYWdlcjtcbiAgcHVibGljIHRva2VuTWFuYWdlcjogSU5URVJGQUNFUy5JVG9rZW5NYW5hZ2VyO1xuICBwdWJsaWMgY29udHJvbGxlckZhY3Rvcnk6ICgpID0+IElOVEVSRkFDRVMuSUNvbnRyb2xsZXI7XG4gIHB1YmxpYyBjb250cm9sbGVyczogSU5URVJGQUNFUy5JQ29udHJvbGxlcltdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoXCJTZXR0aW5nc1wiKSBzZXR0aW5nczogSU5URVJGQUNFUy5JU2V0dGluZ3MsXG4gICAgQGluamVjdChcIkxvZ2dlclwiKSBsb2dnZXI6IElOVEVSRkFDRVMuSUxvZ2dlcixcbiAgICBAaW5qZWN0KFwiRGF0YU1hbmFnZXJcIikgZGF0YU1hbmFnZXI6IElOVEVSRkFDRVMuSURhdGFNYW5hZ2VyLFxuICAgIEBpbmplY3QoXCJUb2tlbk1hbmFnZXJcIikgdG9rZW5NYW5hZ2VyOiBJTlRFUkZBQ0VTLklUb2tlbk1hbmFnZXIsXG4gICAgQGluamVjdChcIkZhY3Rvcnk8Q29udHJvbGxlcj5cIikgY29udHJvbGxlckZhY3Rvcnk6XG4gICAgICBJTlRFUkZBQ0VTLklDb250cm9sbGVyRmFjdG9yeVxuICApIHtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gICAgdGhpcy5kYXRhTWFuYWdlciA9IGRhdGFNYW5hZ2VyO1xuICAgIHRoaXMudG9rZW5NYW5hZ2VyID0gdG9rZW5NYW5hZ2VyO1xuICAgIHRoaXMuY29udHJvbGxlckZhY3RvcnkgPSBjb250cm9sbGVyRmFjdG9yeTtcblxuICAgIHRoaXMucm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbiAgICB0aGlzLmNvbnRyb2xsZXJzID0gW107XG4gICAgdGhpcy5pbml0aWFsaXplQ29udHJvbGxlcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBc3NpZ24gbW9kZWxzIHRvIGNvbnRyb2xsZXJzIGFuZCBzZXQgQ1JVRCBhbmQgL2xvZ2luIHJvdXRlcy5cbiAgICovXG4gIHB1YmxpYyBpbml0aWFsaXplQ29udHJvbGxlcnMgPSAoKSA9PiB7XG4gICAgdGhpcy5kYXRhTWFuYWdlci5tb2RlbHMuZm9yRWFjaCgobW9kZWwpID0+IHtcbiAgICAgIGxldCBjb250cm9sbGVyID0gdGhpcy5jb250cm9sbGVyRmFjdG9yeSgpO1xuICAgICAgY29udHJvbGxlci5zZXRNb2RlbChtb2RlbCk7XG4gICAgICB0aGlzLmNvbnRyb2xsZXJzLnB1c2goY29udHJvbGxlcik7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbnRyb2xsZXJzLmZvckVhY2goKGNvbnRyb2xsZXIpID0+IHtcbiAgICAgIHRoaXMucm91dGVyLnVzZShjb250cm9sbGVyLnBhdGgsIGNvbnRyb2xsZXIucm91dGVyKTtcbiAgICB9KTtcblxuICAgIGxldCBhdXRoQ29udHJvbGxlciA9IHRoaXMuY29udHJvbGxlcnMuZmluZCgoY29udHJvbGxlcikgPT4ge1xuICAgICAgcmV0dXJuIGNvbnRyb2xsZXIubW9kZWwuaXNBdXRoO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yb3V0ZXIucG9zdChcIi9sb2dpblwiLCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICAgIGF1dGhDb250cm9sbGVyLmNoZWNrTG9naW4ocmVxLmJvZHkpXG4gICAgICAudGhlbigodXNlcikgPT4ge1xuICAgICAgICBpZiAodXNlciA9PT0gbnVsbCkge1xuICAgICAgICAgIHJlcy5zZW5kU3RhdHVzKDQwNCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gU0lHTiBUT0tFTlxuICAgICAgICAgIC8vIEdJVkUgTUUgVE9LRU5cbiAgICAgICAgICBsZXQgcGF5bG9hZCA9IHtcbiAgICAgICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgICAgICAgcGVybWlzc2lvbnM6IHVzZXIucGVybWlzc2lvbnMsXG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLnRva2VuTWFuYWdlci5zaWduVG9rZW4ocGF5bG9hZClcbiAgICAgICAgICAudGhlbigodG9rZW4pID0+IHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHRva2VuKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJlcy5zZW5kU3RhdHVzKDUwMCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmVzLnNlbmRTdGF0dXMoNTAwKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
