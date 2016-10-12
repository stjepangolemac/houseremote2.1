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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL2RhdGFNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFPLGtCQUFrQixDQUFDLENBQUE7QUFDMUIsMEJBQWdELFdBQVcsQ0FBQyxDQUFBO0FBQzVELElBQU8sUUFBUSxXQUFXLFVBQVUsQ0FBQyxDQUFDO0FBQ3RDLElBQVksUUFBUSxXQUFNLFVBQVUsQ0FBQyxDQUFBO0FBQ3JDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO0FBRTVCLElBQVksVUFBVSxXQUFNLGVBQWUsQ0FBQyxDQUFBO0FBTzVDO0lBUUUscUJBQ3NCLFFBQThCLEVBQ2hDLE1BQTBCLEVBQ3BCLE9BQTZCO1FBWHpELGlCQTZEQztRQWxDUyw2QkFBd0IsR0FBRztZQUNqQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFVBQVU7Z0JBQ2xDLFVBQVUsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFO29CQUN6QixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDLENBQUMsQ0FBQztnQkFDSCxVQUFVLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQXFCO29CQUMzQyxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ25DLENBQUMsQ0FBQyxDQUFDO2dCQUNILFVBQVUsQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFO29CQUM1QixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFBO1FBS08sbUJBQWMsR0FBRztZQUN2QixLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU0sRUFBRSxLQUFLO2dCQUNqQyxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDbkIsUUFBUSxDQUFDLGdCQUFnQixDQUN2QixZQUFZLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO29CQUNuQyxHQUFHLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO29CQUMxQixHQUFHLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQzFCLENBQ0YsQ0FBQztnQkFFRixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDZCxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FDM0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQ3JELENBQ0YsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFBO1FBL0NDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXZCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBRWpCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBdkJIO1FBQUMsc0JBQVUsRUFBRTttQkFVUixrQkFBTSxDQUFDLFVBQVUsQ0FBQzttQkFDbEIsa0JBQU0sQ0FBQyxRQUFRLENBQUM7bUJBQ2hCLHVCQUFXLENBQUMsU0FBUyxDQUFDOzttQkFaZDtJQThEYixrQkFBQztBQUFELENBN0RBLEFBNkRDLElBQUE7QUE3REQ7NkJBNkRDLENBQUEiLCJmaWxlIjoiY2xhc3Nlcy9kYXRhTWFuYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcbmltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCwgbXVsdGlJbmplY3QgfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XG5pbXBvcnQgbW9uZ29vc2UgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XG5pbXBvcnQgKiBhcyBibHVlYmlyZCBmcm9tIFwiYmx1ZWJpcmRcIjtcbm1vbmdvb3NlLlByb21pc2UgPSBibHVlYmlyZDtcblxuaW1wb3J0ICogYXMgSU5URVJGQUNFUyBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xuLyoqXG4gKiBEYXRhTWFuYWdlciBkb2VzIHRoZSB3b3JrIG9mIGNvbm5lY3RpbmcgdG8gb25lIG9yIHNldmVyYWwgZGF0YWJhc2VzLFxuICogZ2VuZXJhdGVzIG1vZGVscyBmcm9tIGdpdmVuIHNjaGVtYXMgYW5kIHByb3ZpZGVzIHRoZSBtb2RlbHMgZm9yXG4gKiBvdGhlciBjbGFzc2VzIHRvIHVzZS5cbiAqL1xuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YU1hbmFnZXIgaW1wbGVtZW50cyBJTlRFUkZBQ0VTLklEYXRhTWFuYWdlciB7XG4gIHB1YmxpYyBzZXR0aW5nczogSU5URVJGQUNFUy5JU2V0dGluZ3M7XG4gIHB1YmxpYyBsb2dnZXI6IElOVEVSRkFDRVMuSUxvZ2dlcjtcbiAgcHVibGljIG1vZGVsczogbW9uZ29vc2UuTW9kZWw8bW9uZ29vc2UuRG9jdW1lbnQ+W107XG4gIHB1YmxpYyBzY2hlbWFzOiBJTlRFUkZBQ0VTLklTY2hlbWFbXTtcblxuICBwcml2YXRlIGNvbm5lY3Rpb25zOiBtb25nb29zZS5Db25uZWN0aW9uW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQGluamVjdChcIlNldHRpbmdzXCIpIHNldHRpbmdzOiBJTlRFUkZBQ0VTLklTZXR0aW5ncyxcbiAgICBAaW5qZWN0KFwiTG9nZ2VyXCIpIGxvZ2dlcjogSU5URVJGQUNFUy5JTG9nZ2VyLFxuICAgIEBtdWx0aUluamVjdChcIlNjaGVtYXNcIikgc2NoZW1hczogSU5URVJGQUNFUy5JU2NoZW1hW11cbiAgKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuICAgIHRoaXMuc2NoZW1hcyA9IHNjaGVtYXM7XG5cbiAgICB0aGlzLmNvbm5lY3Rpb25zID0gW107XG4gICAgdGhpcy5tb2RlbHMgPSBbXTtcblxuICAgIHRoaXMuZ2VuZXJhdGVNb2RlbHMoKTtcbiAgICB0aGlzLnNldENvbm5lY3Rpb25TdGF0ZUNoYW5nZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZSBjb25uZWN0aW9uIHN0YXRlIGNoYW5nZSBiZWhhdmlvdXJzLlxuICAgKi9cbiAgcHJpdmF0ZSBzZXRDb25uZWN0aW9uU3RhdGVDaGFuZ2UgPSAoKSA9PiB7XG4gICAgdGhpcy5jb25uZWN0aW9ucy5mb3JFYWNoKChjb25uZWN0aW9uKSA9PiB7XG4gICAgICBjb25uZWN0aW9uLm9uKFwiY29ubmVjdGVkXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIkRCIGNvbm5lY3Rpb24gZXN0YWJsaXNoZWRcIik7XG4gICAgICB9KTtcbiAgICAgIGNvbm5lY3Rpb24ub24oXCJlcnJvclwiLCAoZXJyb3I6IG1vbmdvb3NlLkVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gICAgICBjb25uZWN0aW9uLm9uKFwiZGlzY29ubmVjdGVkXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIud2FybihcIkRCIGNvbm5lY3Rpb24gbG9zdFwiKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgd2lsbCBnZW5lcmF0ZSBtb2RlbHMgYWNjb3JkaW5nIHRvIGdpdmVuIHNjaGVtYXMgYW5kIHNldHRpbmdzLlxuICAgKi9cbiAgcHJpdmF0ZSBnZW5lcmF0ZU1vZGVscyA9ICgpID0+IHtcbiAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5jb25uZWN0aW9ucy5wdXNoKFxuICAgICAgICBtb25nb29zZS5jcmVhdGVDb25uZWN0aW9uKFxuICAgICAgICAgIFwibW9uZ29kYjovL1wiICsgdGhpcy5zZXR0aW5ncy5kYlVzZXIgK1xuICAgICAgICAgIFwiOlwiICsgdGhpcy5zZXR0aW5ncy5kYlBhc3MgK1xuICAgICAgICAgIFwiQFwiICsgdGhpcy5zZXR0aW5ncy5kYlVybFxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICB0aGlzLm1vZGVscy5wdXNoKFxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zW2luZGV4XS5tb2RlbChcbiAgICAgICAgICB0aGlzLnNjaGVtYXNbaW5kZXhdLm5hbWUsIHRoaXMuc2NoZW1hc1tpbmRleF0uc2NoZW1hXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
