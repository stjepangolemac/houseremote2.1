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
var INTERFACES = require("../interfaces");
var DeviceManager = (function () {
    function DeviceManager(settings, logger, dataManager, cacheFactory) {
        var _this = this;
        this.loop = function () {
        };
        this.getModel = function (name) {
            return _this.dataManager.models.filter(function (model) {
                return model.modelName === name;
            })[0];
        };
        this.dataManager = dataManager;
        this.cacheFactory = cacheFactory;
        this.deviceCache = this.cacheFactory();
        this.deviceCache.setModel(this.getModel("Device"));
        this.timerCache = this.cacheFactory();
        this.timerCache.setModel(this.getModel("Timer"));
        this.pins = [];
    }
    DeviceManager = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject("Settings")),
        __param(1, inversify_1.inject("Logger")),
        __param(2, inversify_1.inject("DataManager")),
        __param(3, inversify_1.inject("Factory<Cache>")), 
        __metadata('design:paramtypes', [Object, Object, Object, Function])
    ], DeviceManager);
    return DeviceManager;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DeviceManager;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL2RldmljZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDBCQUFtQyxXQUFXLENBQUMsQ0FBQTtBQUMvQyxJQUFZLFVBQVUsV0FBTSxlQUFlLENBQUMsQ0FBQTtBQU81QztJQVVFLHVCQUNzQixRQUE4QixFQUNoQyxNQUEwQixFQUNyQixXQUFvQyxFQUNqQyxZQUFzQztRQWRwRSxpQkFzREM7UUEzQlEsU0FBSSxHQUFHO1FBb0JkLENBQUMsQ0FBQTtRQUVNLGFBQVEsR0FBRyxVQUFDLElBQVk7WUFDN0IsTUFBTSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEtBQUs7Z0JBQzFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNSLENBQUMsQ0FBQTtRQXJDQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUVqQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUExQkg7UUFBQyxzQkFBVSxFQUFFO21CQVlSLGtCQUFNLENBQUMsVUFBVSxDQUFDO21CQUNsQixrQkFBTSxDQUFDLFFBQVEsQ0FBQzttQkFDaEIsa0JBQU0sQ0FBQyxhQUFhLENBQUM7bUJBQ3JCLGtCQUFNLENBQUMsZ0JBQWdCLENBQUM7O3FCQWZoQjtJQXVEYixvQkFBQztBQUFELENBdERBLEFBc0RDLElBQUE7QUF0REQ7K0JBc0RDLENBQUEiLCJmaWxlIjoiY2xhc3Nlcy9kZXZpY2VNYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0ICogYXMgSU5URVJGQUNFUyBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xuXG4vKipcbiAqIERldmljZU1hbmFnZXIgbWFuYWdlcyB0aGUgZGV2aWNlcyBhbmQgdGltZXJzIGFuZCB0ZWxsc1xuICogUGluQ29udHJvbCB3aGVuIGFuZCBob3cgdG8gdHJpZ2dlciB0aGVtLlxuICovXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXZpY2VNYW5hZ2VyIGltcGxlbWVudHMgSU5URVJGQUNFUy5JRGV2aWNlTWFuYWdlciB7XG4gIHB1YmxpYyBzZXR0aW5nczogSU5URVJGQUNFUy5JU2V0dGluZ3M7XG4gIHB1YmxpYyBsb2dnZXI6IElOVEVSRkFDRVMuSUxvZ2dlcjtcbiAgcHVibGljIGRhdGFNYW5hZ2VyOiBJTlRFUkZBQ0VTLklEYXRhTWFuYWdlcjtcbiAgcHVibGljIGNhY2hlRmFjdG9yeTogSU5URVJGQUNFUy5JQ2FjaGVGYWN0b3J5O1xuICBwdWJsaWMgZGV2aWNlQ2FjaGU6IElOVEVSRkFDRVMuSUNhY2hlO1xuICBwdWJsaWMgdGltZXJDYWNoZTogSU5URVJGQUNFUy5JQ2FjaGU7XG4gIHB1YmxpYyBwaW5Db250cm9sOiBJTlRFUkZBQ0VTLklQaW5Db250cm9sO1xuICBwdWJsaWMgcGluczogbnVtYmVyW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQGluamVjdChcIlNldHRpbmdzXCIpIHNldHRpbmdzOiBJTlRFUkZBQ0VTLklTZXR0aW5ncyxcbiAgICBAaW5qZWN0KFwiTG9nZ2VyXCIpIGxvZ2dlcjogSU5URVJGQUNFUy5JTG9nZ2VyLFxuICAgIEBpbmplY3QoXCJEYXRhTWFuYWdlclwiKSBkYXRhTWFuYWdlcjogSU5URVJGQUNFUy5JRGF0YU1hbmFnZXIsXG4gICAgQGluamVjdChcIkZhY3Rvcnk8Q2FjaGU+XCIpIGNhY2hlRmFjdG9yeTogSU5URVJGQUNFUy5JQ2FjaGVGYWN0b3J5XG4gICkge1xuICAgIHRoaXMuZGF0YU1hbmFnZXIgPSBkYXRhTWFuYWdlcjtcbiAgICB0aGlzLmNhY2hlRmFjdG9yeSA9IGNhY2hlRmFjdG9yeTtcblxuICAgIHRoaXMuZGV2aWNlQ2FjaGUgPSB0aGlzLmNhY2hlRmFjdG9yeSgpO1xuICAgIHRoaXMuZGV2aWNlQ2FjaGUuc2V0TW9kZWwodGhpcy5nZXRNb2RlbChcIkRldmljZVwiKSk7XG4gICAgdGhpcy50aW1lckNhY2hlID0gdGhpcy5jYWNoZUZhY3RvcnkoKTtcbiAgICB0aGlzLnRpbWVyQ2FjaGUuc2V0TW9kZWwodGhpcy5nZXRNb2RlbChcIlRpbWVyXCIpKTtcblxuICAgIHRoaXMucGlucyA9IFtdO1xuICB9XG5cbiAgcHVibGljIGxvb3AgPSAoKSA9PiB7XG4gICAgLy8gRm9yIGVhY2ggdGltZXIgZmlyc3QgY2hlY2sgZGF5LCB0aGVuIHRpbWUuXG4gICAgLypcbiAgICB0aGlzLnRpbWVyQ2FjaGUudGltZXJzLmZvckVhY2goKHRpbWVyKSA9PiB7XG4gICAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIGxldCBzaG91bGRCZU9uID0gZmFsc2U7XG4gICAgICBzaG91bGRCZU9uID0gc2hvdWxkQmVPbjsgLy8ganVzdCBmb3IgZ3VscFxuXG4gICAgICBpZiAodGltZXIuZGF5cy5jaGFyQXQobm93LmdldERheSgpKSA9PT0gXCIxXCIpIHtcbiAgICAgICAgc2hvdWxkQmVPbiA9IHNob3VsZEJlT247XG4gICAgICB9XG5cbiAgICAgIGlmICh0aW1lci5zdGFydFRpbWUgJiYgdGltZXIuZW5kVGltZSkge1xuICAgICAgICAvLyBUaW1lciBpcyBkYWlseVxuICAgICAgICBzaG91bGRCZU9uID0gc2hvdWxkQmVPbjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQodGhpcy5sb29wLCAxMDAwKTtcbiAgICAqL1xuICB9XG5cbiAgcHVibGljIGdldE1vZGVsID0gKG5hbWU6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiB0aGlzLmRhdGFNYW5hZ2VyLm1vZGVscy5maWx0ZXIoKG1vZGVsKSA9PiB7XG4gICAgICByZXR1cm4gbW9kZWwubW9kZWxOYW1lID09PSBuYW1lO1xuICAgIH0pWzBdO1xuICB9XG59XG4iXX0=
