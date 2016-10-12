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
    function ControllerManager(settings, logger, dataManager, controllerFactory) {
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
        };
        this.settings = settings;
        this.logger = logger;
        this.dataManager = dataManager;
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
        __param(3, inversify_1.inject("Factory<Controller>")), 
        __metadata('design:paramtypes', [Object, Object, Object, Function])
    ], ControllerManager);
    return ControllerManager;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ControllerManager;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL2NvbnRyb2xsZXJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFPLGtCQUFrQixDQUFDLENBQUE7QUFDMUIsMEJBQW1DLFdBQVcsQ0FBQyxDQUFBO0FBQy9DLElBQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBQ25DLElBQVksVUFBVSxXQUFNLGVBQWUsQ0FBQyxDQUFBO0FBTzVDO0lBU0UsMkJBQ3NCLFFBQThCLEVBQ2hDLE1BQTBCLEVBQ3JCLFdBQW9DLEVBQzVCLGlCQUNEO1FBZGxDLGlCQXdDQztRQVhRLDBCQUFxQixHQUFHO1lBQzdCLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7Z0JBQ3BDLElBQUksVUFBVSxHQUFHLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUMxQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FBQztZQUVILEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsVUFBVTtnQkFDbEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUE7UUF2QkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBRTNDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUF6Qkg7UUFBQyxzQkFBVSxFQUFFO21CQVdSLGtCQUFNLENBQUMsVUFBVSxDQUFDO21CQUNsQixrQkFBTSxDQUFDLFFBQVEsQ0FBQzttQkFDaEIsa0JBQU0sQ0FBQyxhQUFhLENBQUM7bUJBQ3JCLGtCQUFNLENBQUMscUJBQXFCLENBQUM7O3lCQWRyQjtJQXlDYix3QkFBQztBQUFELENBeENBLEFBd0NDLElBQUE7QUF4Q0Q7bUNBd0NDLENBQUEiLCJmaWxlIjoiY2xhc3Nlcy9jb250cm9sbGVyTWFuYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcbmltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCAqIGFzIElOVEVSRkFDRVMgZnJvbSBcIi4uL2ludGVyZmFjZXNcIjtcblxuLyoqXG4gKiBDb250cm9sbGVyTWFuYWdlciBpbnN0YW50aWF0ZXMgY29udHJvbGxlcnMsIGFzc2lnbnMgbW9kZWxzLCBhbmRcbiAqIGRlZmluZXMgcm91dGVzIGZvciB0aGVtLlxuICovXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyTWFuYWdlclxuaW1wbGVtZW50cyBJTlRFUkZBQ0VTLklDb250cm9sbGVyTWFuYWdlciB7XG4gIHB1YmxpYyBzZXR0aW5nczogSU5URVJGQUNFUy5JU2V0dGluZ3M7XG4gIHB1YmxpYyBsb2dnZXI6IElOVEVSRkFDRVMuSUxvZ2dlcjtcbiAgcHVibGljIHJvdXRlcjogZXhwcmVzcy5Sb3V0ZXI7XG4gIHB1YmxpYyBkYXRhTWFuYWdlcjogSU5URVJGQUNFUy5JRGF0YU1hbmFnZXI7XG4gIHB1YmxpYyBjb250cm9sbGVyRmFjdG9yeTogKCkgPT4gSU5URVJGQUNFUy5JQ29udHJvbGxlcjtcbiAgcHVibGljIGNvbnRyb2xsZXJzOiBJTlRFUkZBQ0VTLklDb250cm9sbGVyW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQGluamVjdChcIlNldHRpbmdzXCIpIHNldHRpbmdzOiBJTlRFUkZBQ0VTLklTZXR0aW5ncyxcbiAgICBAaW5qZWN0KFwiTG9nZ2VyXCIpIGxvZ2dlcjogSU5URVJGQUNFUy5JTG9nZ2VyLFxuICAgIEBpbmplY3QoXCJEYXRhTWFuYWdlclwiKSBkYXRhTWFuYWdlcjogSU5URVJGQUNFUy5JRGF0YU1hbmFnZXIsXG4gICAgQGluamVjdChcIkZhY3Rvcnk8Q29udHJvbGxlcj5cIikgY29udHJvbGxlckZhY3Rvcnk6XG4gICAgICAoKSA9PiBJTlRFUkZBQ0VTLklDb250cm9sbGVyXG4gICkge1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgICB0aGlzLmRhdGFNYW5hZ2VyID0gZGF0YU1hbmFnZXI7XG4gICAgdGhpcy5jb250cm9sbGVyRmFjdG9yeSA9IGNvbnRyb2xsZXJGYWN0b3J5O1xuXG4gICAgdGhpcy5yb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuICAgIHRoaXMuY29udHJvbGxlcnMgPSBbXTtcbiAgICB0aGlzLmluaXRpYWxpemVDb250cm9sbGVycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFzc2lnbiBtb2RlbHMgdG8gY29udHJvbGxlcnMgYW5kIHNldCB0aGVtIHVwLlxuICAgKi9cbiAgcHVibGljIGluaXRpYWxpemVDb250cm9sbGVycyA9ICgpID0+IHtcbiAgICB0aGlzLmRhdGFNYW5hZ2VyLm1vZGVscy5mb3JFYWNoKChtb2RlbCkgPT4ge1xuICAgICAgbGV0IGNvbnRyb2xsZXIgPSB0aGlzLmNvbnRyb2xsZXJGYWN0b3J5KCk7XG4gICAgICBjb250cm9sbGVyLnNldE1vZGVsKG1vZGVsKTtcbiAgICAgIHRoaXMuY29udHJvbGxlcnMucHVzaChjb250cm9sbGVyKTtcbiAgICB9KTtcblxuICAgIHRoaXMuY29udHJvbGxlcnMuZm9yRWFjaCgoY29udHJvbGxlcikgPT4ge1xuICAgICAgdGhpcy5yb3V0ZXIudXNlKGNvbnRyb2xsZXIucGF0aCwgY29udHJvbGxlci5yb3V0ZXIpO1xuICAgIH0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
