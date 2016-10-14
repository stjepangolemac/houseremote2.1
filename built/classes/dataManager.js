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
var mongoose = require("mongoose");
var bluebird = require("bluebird");
mongoose.Promise = bluebird;
var INTERFACES = require("../interfaces");
var DataManager = (function () {
    function DataManager(settings, logger, schemas) {
        var _this = this;
        this.setConnectionStateChange = function () {
            _this.connections.forEach(function (connection) {
                connection.on("connected", function () {
                    _this.logger.info("DB connection established");
                });
                connection.on("error", function (error) {
                    _this.logger.error(error.message);
                });
                connection.on("disconnected", function () {
                    _this.logger.warn("DB connection lost");
                });
            });
        };
        this.generateModels = function () {
            _this.schemas.forEach(function (schema, index) {
                _this.connections.push(mongoose.createConnection("mongodb://" + _this.settings.dbUser +
                    ":" + _this.settings.dbPass +
                    "@" + _this.settings.dbUrl));
                _this.models.push(_this.connections[index].model(_this.schemas[index].name, _this.schemas[index].schema));
                if (_this.schemas[index].isAuth) {
                    _this.models[index].isAuth = true;
                }
            });
        };
        this.settings = settings;
        this.logger = logger;
        this.schemas = schemas;
        this.connections = [];
        this.models = [];
        this.generateModels();
        this.setConnectionStateChange();
    }
    DataManager = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject("Settings")),
        __param(1, inversify_1.inject("Logger")),
        __param(2, inversify_1.multiInject("Schemas")), 
        __metadata('design:paramtypes', [Object, Object, Array])
    ], DataManager);
    return DataManager;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DataManager;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL2RhdGFNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFPLGtCQUFrQixDQUFDLENBQUE7QUFDMUIsMEJBQWdELFdBQVcsQ0FBQyxDQUFBO0FBQzVELElBQU8sUUFBUSxXQUFXLFVBQVUsQ0FBQyxDQUFDO0FBQ3RDLElBQVksUUFBUSxXQUFNLFVBQVUsQ0FBQyxDQUFBO0FBQ3JDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO0FBRTVCLElBQVksVUFBVSxXQUFNLGVBQWUsQ0FBQyxDQUFBO0FBTzVDO0lBUUUscUJBQ3NCLFFBQThCLEVBQ2hDLE1BQTBCLEVBQ3BCLE9BQTZCO1FBWHpELGlCQW9FQztRQXpDUyw2QkFBd0IsR0FBRztZQUNqQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFVBQVU7Z0JBQ2xDLFVBQVUsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFO29CQUN6QixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDLENBQUMsQ0FBQztnQkFDSCxVQUFVLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQXFCO29CQUMzQyxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ25DLENBQUMsQ0FBQyxDQUFDO2dCQUNILFVBQVUsQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFO29CQUM1QixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFBO1FBS08sbUJBQWMsR0FBRztZQUN2QixLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU0sRUFBRSxLQUFLO2dCQUNqQyxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDbkIsUUFBUSxDQUFDLGdCQUFnQixDQUN2QixZQUFZLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO29CQUNuQyxHQUFHLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO29CQUMxQixHQUFHLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQzFCLENBQ0YsQ0FBQztnQkFFRixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDZCxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FDM0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQ3JELENBQ0YsQ0FBQztnQkFLRixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQy9CLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkMsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFBO1FBdERDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXZCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBRWpCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBdkJIO1FBQUMsc0JBQVUsRUFBRTttQkFVUixrQkFBTSxDQUFDLFVBQVUsQ0FBQzttQkFDbEIsa0JBQU0sQ0FBQyxRQUFRLENBQUM7bUJBQ2hCLHVCQUFXLENBQUMsU0FBUyxDQUFDOzttQkFaZDtJQXFFYixrQkFBQztBQUFELENBcEVBLEFBb0VDLElBQUE7QUFwRUQ7NkJBb0VDLENBQUEiLCJmaWxlIjoiY2xhc3Nlcy9kYXRhTWFuYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcbmltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCwgbXVsdGlJbmplY3QgfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XG5pbXBvcnQgbW9uZ29vc2UgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XG5pbXBvcnQgKiBhcyBibHVlYmlyZCBmcm9tIFwiYmx1ZWJpcmRcIjtcbm1vbmdvb3NlLlByb21pc2UgPSBibHVlYmlyZDtcblxuaW1wb3J0ICogYXMgSU5URVJGQUNFUyBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xuLyoqXG4gKiBEYXRhTWFuYWdlciBkb2VzIHRoZSB3b3JrIG9mIGNvbm5lY3RpbmcgdG8gb25lIG9yIHNldmVyYWwgZGF0YWJhc2VzLFxuICogZ2VuZXJhdGVzIG1vZGVscyBmcm9tIGdpdmVuIHNjaGVtYXMgYW5kIHByb3ZpZGVzIHRoZSBtb2RlbHMgZm9yXG4gKiBvdGhlciBjbGFzc2VzIHRvIHVzZS5cbiAqL1xuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YU1hbmFnZXIgaW1wbGVtZW50cyBJTlRFUkZBQ0VTLklEYXRhTWFuYWdlciB7XG4gIHB1YmxpYyBzZXR0aW5nczogSU5URVJGQUNFUy5JU2V0dGluZ3M7XG4gIHB1YmxpYyBsb2dnZXI6IElOVEVSRkFDRVMuSUxvZ2dlcjtcbiAgcHVibGljIG1vZGVsczogSU5URVJGQUNFUy5JTW9kZWxbXTtcbiAgcHVibGljIHNjaGVtYXM6IElOVEVSRkFDRVMuSVNjaGVtYVtdO1xuXG4gIHByaXZhdGUgY29ubmVjdGlvbnM6IG1vbmdvb3NlLkNvbm5lY3Rpb25bXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAaW5qZWN0KFwiU2V0dGluZ3NcIikgc2V0dGluZ3M6IElOVEVSRkFDRVMuSVNldHRpbmdzLFxuICAgIEBpbmplY3QoXCJMb2dnZXJcIikgbG9nZ2VyOiBJTlRFUkZBQ0VTLklMb2dnZXIsXG4gICAgQG11bHRpSW5qZWN0KFwiU2NoZW1hc1wiKSBzY2hlbWFzOiBJTlRFUkZBQ0VTLklTY2hlbWFbXVxuICApIHtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gICAgdGhpcy5zY2hlbWFzID0gc2NoZW1hcztcblxuICAgIHRoaXMuY29ubmVjdGlvbnMgPSBbXTtcbiAgICB0aGlzLm1vZGVscyA9IFtdO1xuXG4gICAgdGhpcy5nZW5lcmF0ZU1vZGVscygpO1xuICAgIHRoaXMuc2V0Q29ubmVjdGlvblN0YXRlQ2hhbmdlKCk7XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lIGNvbm5lY3Rpb24gc3RhdGUgY2hhbmdlIGJlaGF2aW91cnMuXG4gICAqL1xuICBwcml2YXRlIHNldENvbm5lY3Rpb25TdGF0ZUNoYW5nZSA9ICgpID0+IHtcbiAgICB0aGlzLmNvbm5lY3Rpb25zLmZvckVhY2goKGNvbm5lY3Rpb24pID0+IHtcbiAgICAgIGNvbm5lY3Rpb24ub24oXCJjb25uZWN0ZWRcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiREIgY29ubmVjdGlvbiBlc3RhYmxpc2hlZFwiKTtcbiAgICAgIH0pO1xuICAgICAgY29ubmVjdGlvbi5vbihcImVycm9yXCIsIChlcnJvcjogbW9uZ29vc2UuRXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgICAgIGNvbm5lY3Rpb24ub24oXCJkaXNjb25uZWN0ZWRcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci53YXJuKFwiREIgY29ubmVjdGlvbiBsb3N0XCIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyB3aWxsIGdlbmVyYXRlIG1vZGVscyBhY2NvcmRpbmcgdG8gZ2l2ZW4gc2NoZW1hcyBhbmQgc2V0dGluZ3MuXG4gICAqL1xuICBwcml2YXRlIGdlbmVyYXRlTW9kZWxzID0gKCkgPT4ge1xuICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmNvbm5lY3Rpb25zLnB1c2goXG4gICAgICAgIG1vbmdvb3NlLmNyZWF0ZUNvbm5lY3Rpb24oXG4gICAgICAgICAgXCJtb25nb2RiOi8vXCIgKyB0aGlzLnNldHRpbmdzLmRiVXNlciArXG4gICAgICAgICAgXCI6XCIgKyB0aGlzLnNldHRpbmdzLmRiUGFzcyArXG4gICAgICAgICAgXCJAXCIgKyB0aGlzLnNldHRpbmdzLmRiVXJsXG4gICAgICAgIClcbiAgICAgICk7XG5cbiAgICAgIHRoaXMubW9kZWxzLnB1c2goXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnNbaW5kZXhdLm1vZGVsKFxuICAgICAgICAgIHRoaXMuc2NoZW1hc1tpbmRleF0ubmFtZSwgdGhpcy5zY2hlbWFzW2luZGV4XS5zY2hlbWFcbiAgICAgICAgKVxuICAgICAgKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiBzY2hlbWEgaXMgYXV0aCB0aGlzIG1vZGVsIGlzIGF1dGggdG9vLlxuICAgICAgICovXG4gICAgICBpZiAodGhpcy5zY2hlbWFzW2luZGV4XS5pc0F1dGgpIHtcbiAgICAgICAgdGhpcy5tb2RlbHNbaW5kZXhdLmlzQXV0aCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
