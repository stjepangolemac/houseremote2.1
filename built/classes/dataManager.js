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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL2RhdGFNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQkFBZ0QsV0FBVyxDQUFDLENBQUE7QUFDNUQsSUFBTyxRQUFRLFdBQVcsVUFBVSxDQUFDLENBQUM7QUFDdEMsSUFBWSxRQUFRLFdBQU0sVUFBVSxDQUFDLENBQUE7QUFDckMsUUFBUSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7QUFFNUIsSUFBWSxVQUFVLFdBQU0sZUFBZSxDQUFDLENBQUE7QUFPNUM7SUFRRSxxQkFDc0IsUUFBOEIsRUFDaEMsTUFBMEIsRUFDcEIsT0FBNkI7UUFYekQsaUJBNkRDO1FBbENTLDZCQUF3QixHQUFHO1lBQ2pDLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsVUFBVTtnQkFDbEMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUU7b0JBQ3pCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7Z0JBQ2hELENBQUMsQ0FBQyxDQUFDO2dCQUNILFVBQVUsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUMsS0FBcUI7b0JBQzNDLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbkMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsVUFBVSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUU7b0JBQzVCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBQ3pDLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUE7UUFLTyxtQkFBYyxHQUFHO1lBQ3ZCLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTSxFQUFFLEtBQUs7Z0JBQ2pDLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUNuQixRQUFRLENBQUMsZ0JBQWdCLENBQ3ZCLFlBQVksR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07b0JBQ25DLEdBQUcsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07b0JBQzFCLEdBQUcsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FDMUIsQ0FDRixDQUFDO2dCQUVGLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNkLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUMzQixLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FDckQsQ0FDRixDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUE7UUEvQ0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFFakIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUF2Qkg7UUFBQyxzQkFBVSxFQUFFO21CQVVSLGtCQUFNLENBQUMsVUFBVSxDQUFDO21CQUNsQixrQkFBTSxDQUFDLFFBQVEsQ0FBQzttQkFDaEIsdUJBQVcsQ0FBQyxTQUFTLENBQUM7O21CQVpkO0lBOERiLGtCQUFDO0FBQUQsQ0E3REEsQUE2REMsSUFBQTtBQTdERDs2QkE2REMsQ0FBQSIsImZpbGUiOiJjbGFzc2VzL2RhdGFNYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0LCBtdWx0aUluamVjdCB9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCBtb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcbmltcG9ydCAqIGFzIGJsdWViaXJkIGZyb20gXCJibHVlYmlyZFwiO1xubW9uZ29vc2UuUHJvbWlzZSA9IGJsdWViaXJkO1xuXG5pbXBvcnQgKiBhcyBJTlRFUkZBQ0VTIGZyb20gXCIuLi9pbnRlcmZhY2VzXCI7XG4vKipcbiAqIERhdGFNYW5hZ2VyIGRvZXMgdGhlIHdvcmsgb2YgY29ubmVjdGluZyB0byBvbmUgb3Igc2V2ZXJhbCBkYXRhYmFzZXMsXG4gKiBnZW5lcmF0ZXMgbW9kZWxzIGZyb20gZ2l2ZW4gc2NoZW1hcyBhbmQgcHJvdmlkZXMgdGhlIG1vZGVscyBmb3JcbiAqIG90aGVyIGNsYXNzZXMgdG8gdXNlLlxuICovXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhTWFuYWdlciBpbXBsZW1lbnRzIElOVEVSRkFDRVMuSURhdGFNYW5hZ2VyIHtcbiAgcHVibGljIHNldHRpbmdzOiBJTlRFUkZBQ0VTLklTZXR0aW5ncztcbiAgcHVibGljIGxvZ2dlcjogSU5URVJGQUNFUy5JTG9nZ2VyO1xuICBwdWJsaWMgbW9kZWxzOiBtb25nb29zZS5Nb2RlbDxtb25nb29zZS5Eb2N1bWVudD5bXTtcbiAgcHVibGljIHNjaGVtYXM6IElOVEVSRkFDRVMuSVNjaGVtYVtdO1xuXG4gIHByaXZhdGUgY29ubmVjdGlvbnM6IG1vbmdvb3NlLkNvbm5lY3Rpb25bXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAaW5qZWN0KFwiU2V0dGluZ3NcIikgc2V0dGluZ3M6IElOVEVSRkFDRVMuSVNldHRpbmdzLFxuICAgIEBpbmplY3QoXCJMb2dnZXJcIikgbG9nZ2VyOiBJTlRFUkZBQ0VTLklMb2dnZXIsXG4gICAgQG11bHRpSW5qZWN0KFwiU2NoZW1hc1wiKSBzY2hlbWFzOiBJTlRFUkZBQ0VTLklTY2hlbWFbXVxuICApIHtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gICAgdGhpcy5zY2hlbWFzID0gc2NoZW1hcztcblxuICAgIHRoaXMuY29ubmVjdGlvbnMgPSBbXTtcbiAgICB0aGlzLm1vZGVscyA9IFtdO1xuXG4gICAgdGhpcy5nZW5lcmF0ZU1vZGVscygpO1xuICAgIHRoaXMuc2V0Q29ubmVjdGlvblN0YXRlQ2hhbmdlKCk7XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lIGNvbm5lY3Rpb24gc3RhdGUgY2hhbmdlIGJlaGF2aW91cnMuXG4gICAqL1xuICBwcml2YXRlIHNldENvbm5lY3Rpb25TdGF0ZUNoYW5nZSA9ICgpID0+IHtcbiAgICB0aGlzLmNvbm5lY3Rpb25zLmZvckVhY2goKGNvbm5lY3Rpb24pID0+IHtcbiAgICAgIGNvbm5lY3Rpb24ub24oXCJjb25uZWN0ZWRcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiREIgY29ubmVjdGlvbiBlc3RhYmxpc2hlZFwiKTtcbiAgICAgIH0pO1xuICAgICAgY29ubmVjdGlvbi5vbihcImVycm9yXCIsIChlcnJvcjogbW9uZ29vc2UuRXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgICAgIGNvbm5lY3Rpb24ub24oXCJkaXNjb25uZWN0ZWRcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci53YXJuKFwiREIgY29ubmVjdGlvbiBsb3N0XCIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyB3aWxsIGdlbmVyYXRlIG1vZGVscyBhY2NvcmRpbmcgdG8gZ2l2ZW4gc2NoZW1hcyBhbmQgc2V0dGluZ3MuXG4gICAqL1xuICBwcml2YXRlIGdlbmVyYXRlTW9kZWxzID0gKCkgPT4ge1xuICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmNvbm5lY3Rpb25zLnB1c2goXG4gICAgICAgIG1vbmdvb3NlLmNyZWF0ZUNvbm5lY3Rpb24oXG4gICAgICAgICAgXCJtb25nb2RiOi8vXCIgKyB0aGlzLnNldHRpbmdzLmRiVXNlciArXG4gICAgICAgICAgXCI6XCIgKyB0aGlzLnNldHRpbmdzLmRiUGFzcyArXG4gICAgICAgICAgXCJAXCIgKyB0aGlzLnNldHRpbmdzLmRiVXJsXG4gICAgICAgIClcbiAgICAgICk7XG5cbiAgICAgIHRoaXMubW9kZWxzLnB1c2goXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnNbaW5kZXhdLm1vZGVsKFxuICAgICAgICAgIHRoaXMuc2NoZW1hc1tpbmRleF0ubmFtZSwgdGhpcy5zY2hlbWFzW2luZGV4XS5zY2hlbWFcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
