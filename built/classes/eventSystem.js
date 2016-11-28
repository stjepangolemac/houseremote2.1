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
var events = require("events");
var INTERFACES = require("../interfaces");
var EventSystem = (function () {
    function EventSystem(settings, logger) {
        var _this = this;
        this.on = function (eventName, cb) {
            _this.emitter.on(eventName, cb);
        };
        this.emit = function (eventName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return _this.emitter.emit(eventName, args);
        };
        this.settings = settings;
        this.logger = logger;
        this.emitter = new events.EventEmitter();
    }
    EventSystem = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject("Settings")),
        __param(1, inversify_1.inject("Logger")), 
        __metadata('design:paramtypes', [Object, Object])
    ], EventSystem);
    return EventSystem;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EventSystem;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL2V2ZW50U3lzdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQkFBa0MsV0FBVyxDQUFDLENBQUE7QUFDOUMsSUFBWSxNQUFNLFdBQU0sUUFBUSxDQUFDLENBQUE7QUFDakMsSUFBWSxVQUFVLFdBQU0sZUFBZSxDQUFDLENBQUE7QUFNNUM7SUFLRSxxQkFDc0IsUUFBOEIsRUFDaEMsTUFBMEI7UUFQaEQsaUJBMkJDO1FBVlEsT0FBRSxHQUFHLFVBQUMsU0FBMEIsRUFBRSxFQUFZO1lBQ25ELEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUE7UUFLTSxTQUFJLEdBQUcsVUFBQyxTQUFpQjtZQUFFLGNBQWM7aUJBQWQsV0FBYyxDQUFkLHNCQUFjLENBQWQsSUFBYztnQkFBZCw2QkFBYzs7WUFDOUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUE7UUFqQkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBYkg7UUFBQyxzQkFBVSxFQUFFO21CQU9SLGtCQUFNLENBQUMsVUFBVSxDQUFDO21CQUNsQixrQkFBTSxDQUFDLFFBQVEsQ0FBQzs7bUJBUlI7SUE0QmIsa0JBQUM7QUFBRCxDQTNCQSxBQTJCQyxJQUFBO0FBM0JEOzZCQTJCQyxDQUFBIiwiZmlsZSI6ImNsYXNzZXMvZXZlbnRTeXN0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3RhYmxlLCBpbmplY3R9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCAqIGFzIGV2ZW50cyBmcm9tIFwiZXZlbnRzXCI7XG5pbXBvcnQgKiBhcyBJTlRFUkZBQ0VTIGZyb20gXCIuLi9pbnRlcmZhY2VzXCI7XG5cbi8qKlxuICogRXZlbnRTeXN0ZW0gc2VydmVzIGFzIGEgY29tbXVuaWNhdGlvbiBzeXN0ZW0gZm9yIHN1YnNjcmliZWQgY2xhc3Nlcy5cbiAqL1xuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRTeXN0ZW0gaW1wbGVtZW50cyBJTlRFUkZBQ0VTLklFdmVudFN5c3RlbSB7XG4gIHB1YmxpYyBzZXR0aW5nczogSU5URVJGQUNFUy5JU2V0dGluZ3M7XG4gIHB1YmxpYyBsb2dnZXI6IElOVEVSRkFDRVMuSUxvZ2dlcjtcbiAgcHVibGljIGVtaXR0ZXI6IGV2ZW50cy5FdmVudEVtaXR0ZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQGluamVjdChcIlNldHRpbmdzXCIpIHNldHRpbmdzOiBJTlRFUkZBQ0VTLklTZXR0aW5ncyxcbiAgICBAaW5qZWN0KFwiTG9nZ2VyXCIpIGxvZ2dlcjogSU5URVJGQUNFUy5JTG9nZ2VyXG4gICkge1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgICB0aGlzLmVtaXR0ZXIgPSBuZXcgZXZlbnRzLkV2ZW50RW1pdHRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gc3Vic2NyaWJlIHRvIGFuIGV2ZW50LlxuICAgKi9cbiAgcHVibGljIG9uID0gKGV2ZW50TmFtZTogc3RyaW5nIHwgc3ltYm9sLCBjYjogRnVuY3Rpb24pID0+IHtcbiAgICB0aGlzLmVtaXR0ZXIub24oZXZlbnROYW1lLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBlbWl0IGEgbmV3IGV2ZW50LlxuICAgKi9cbiAgcHVibGljIGVtaXQgPSAoZXZlbnROYW1lOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuZW1pdHRlci5lbWl0KGV2ZW50TmFtZSwgYXJncyk7XG4gIH1cbn1cbiJdfQ==
