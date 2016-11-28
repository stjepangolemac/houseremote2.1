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
var TimerCache = (function () {
    function TimerCache(eventSystem, dataManager) {
        var _this = this;
        this.refresh = function () {
            _this.timerModel.find()
                .then(function (timers) {
                _this.timers = [];
                timers.forEach(function (timer) {
                    var helper;
                    helper.days = timer.days;
                    helper.device = timer.device;
                    helper.duration = timer.duration;
                    helper.enabled = timer.enabled;
                    helper.endTime = timer.endTime;
                    helper.forceOn = timer.forceOn;
                    helper.name = timer.name;
                    helper.restTime = timer.restTime;
                    helper.startTime = timer.startTime;
                    helper.state = timer.state;
                    helper.turnedOff = timer.turnedOff;
                    helper.turnedOn = timer.turnedOn;
                    helper.type = timer.type;
                    _this.timers.push(helper);
                });
            });
        };
        this.findTimerModel = function () {
            _this.timerModel = _this.dataManager.models.filter(function (model) {
                console.log(model.modelName);
                return model.modelName === "Timer";
            })[0];
        };
        this.emitter = eventSystem;
        this.dataManager = dataManager;
        this.timers = [];
    }
    TimerCache = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject("EventSystem")),
        __param(1, inversify_1.inject("DataManager")), 
        __metadata('design:paramtypes', [Object, Object])
    ], TimerCache);
    return TimerCache;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TimerCache;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL3RpbWVyQ2FjaGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDBCQUFtQyxXQUFXLENBQUMsQ0FBQTtBQUMvQyxJQUFZLFVBQVUsV0FBTSxlQUFlLENBQUMsQ0FBQTtBQU81QztJQU1FLG9CQUN5QixXQUFvQyxFQUNwQyxXQUFvQztRQVIvRCxpQkFrREM7UUEvQlEsWUFBTyxHQUFHO1lBQ2YsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUU7aUJBQ3JCLElBQUksQ0FBQyxVQUFDLE1BQU07Z0JBQ1gsS0FBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ2pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFVO29CQUN4QixJQUFJLE1BQXlCLENBQUM7b0JBQzlCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFDekIsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO29CQUM3QixNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7b0JBQ2pDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztvQkFDL0IsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO29CQUMvQixNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7b0JBQy9CLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFDekIsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO29CQUNqQyxNQUFNLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7b0JBQ25DLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztvQkFDM0IsTUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO29CQUNuQyxNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7b0JBQ2pDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFFekIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzNCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUE7UUFFTSxtQkFBYyxHQUFHO1lBQ3RCLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBSztnQkFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQztZQUNyQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNSLENBQUMsQ0FBQTtRQXZDQyxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUtuQixDQUFDO0lBbEJIO1FBQUMsc0JBQVUsRUFBRTttQkFRUixrQkFBTSxDQUFDLGFBQWEsQ0FBQzttQkFDckIsa0JBQU0sQ0FBQyxhQUFhLENBQUM7O2tCQVRiO0lBbURiLGlCQUFDO0FBQUQsQ0FsREEsQUFrREMsSUFBQTtBQWxERDs0QkFrREMsQ0FBQSIsImZpbGUiOiJjbGFzc2VzL3RpbWVyQ2FjaGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XG5pbXBvcnQgKiBhcyBJTlRFUkZBQ0VTIGZyb20gXCIuLi9pbnRlcmZhY2VzXCI7XG5cbi8qKlxuICogVGltZXJDYWNoZSBrZWVwcyBuZXdlc3QgZGV2aWNlcyBkYXRhIGluIG1lbW9yeSBmb3IgdXNlXG4gKiBpbiBvdGhlciBjbGFzc2VzLlxuICovXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lckNhY2hlIGltcGxlbWVudHMgSU5URVJGQUNFUy5JVGltZXJDYWNoZSB7XG4gIHB1YmxpYyBlbWl0dGVyOiBJTlRFUkZBQ0VTLklFdmVudFN5c3RlbTtcbiAgcHVibGljIGRhdGFNYW5hZ2VyOiBJTlRFUkZBQ0VTLklEYXRhTWFuYWdlcjtcbiAgcHVibGljIHRpbWVyczogSU5URVJGQUNFUy5JVGltZXJbXTtcbiAgcHVibGljIHRpbWVyTW9kZWw6IElOVEVSRkFDRVMuSU1vZGVsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoXCJFdmVudFN5c3RlbVwiKSBldmVudFN5c3RlbTogSU5URVJGQUNFUy5JRXZlbnRTeXN0ZW0sXG4gICAgQGluamVjdChcIkRhdGFNYW5hZ2VyXCIpIGRhdGFNYW5hZ2VyOiBJTlRFUkZBQ0VTLklEYXRhTWFuYWdlclxuICApIHtcbiAgICB0aGlzLmVtaXR0ZXIgPSBldmVudFN5c3RlbTtcbiAgICB0aGlzLmRhdGFNYW5hZ2VyID0gZGF0YU1hbmFnZXI7XG4gICAgdGhpcy50aW1lcnMgPSBbXTtcblxuICAgIC8vIHRoaXMuZmluZFRpbWVyTW9kZWwoKTtcbiAgICAvLyB0aGlzLmVtaXR0ZXIub24odGhpcy50aW1lck1vZGVsLm1vZGVsTmFtZSwgdGhpcy5yZWZyZXNoKTtcbiAgICAvLyB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIHB1YmxpYyByZWZyZXNoID0gKCkgPT4ge1xuICAgIHRoaXMudGltZXJNb2RlbC5maW5kKClcbiAgICAudGhlbigodGltZXJzKSA9PiB7XG4gICAgICB0aGlzLnRpbWVycyA9IFtdO1xuICAgICAgdGltZXJzLmZvckVhY2goKHRpbWVyOiBhbnkpID0+IHtcbiAgICAgICAgbGV0IGhlbHBlcjogSU5URVJGQUNFUy5JVGltZXI7XG4gICAgICAgIGhlbHBlci5kYXlzID0gdGltZXIuZGF5cztcbiAgICAgICAgaGVscGVyLmRldmljZSA9IHRpbWVyLmRldmljZTtcbiAgICAgICAgaGVscGVyLmR1cmF0aW9uID0gdGltZXIuZHVyYXRpb247XG4gICAgICAgIGhlbHBlci5lbmFibGVkID0gdGltZXIuZW5hYmxlZDtcbiAgICAgICAgaGVscGVyLmVuZFRpbWUgPSB0aW1lci5lbmRUaW1lO1xuICAgICAgICBoZWxwZXIuZm9yY2VPbiA9IHRpbWVyLmZvcmNlT247XG4gICAgICAgIGhlbHBlci5uYW1lID0gdGltZXIubmFtZTtcbiAgICAgICAgaGVscGVyLnJlc3RUaW1lID0gdGltZXIucmVzdFRpbWU7XG4gICAgICAgIGhlbHBlci5zdGFydFRpbWUgPSB0aW1lci5zdGFydFRpbWU7XG4gICAgICAgIGhlbHBlci5zdGF0ZSA9IHRpbWVyLnN0YXRlO1xuICAgICAgICBoZWxwZXIudHVybmVkT2ZmID0gdGltZXIudHVybmVkT2ZmO1xuICAgICAgICBoZWxwZXIudHVybmVkT24gPSB0aW1lci50dXJuZWRPbjtcbiAgICAgICAgaGVscGVyLnR5cGUgPSB0aW1lci50eXBlO1xuXG4gICAgICAgIHRoaXMudGltZXJzLnB1c2goaGVscGVyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGZpbmRUaW1lck1vZGVsID0gKCkgPT4ge1xuICAgIHRoaXMudGltZXJNb2RlbCA9IHRoaXMuZGF0YU1hbmFnZXIubW9kZWxzLmZpbHRlcigobW9kZWwpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKG1vZGVsLm1vZGVsTmFtZSk7XG4gICAgICByZXR1cm4gbW9kZWwubW9kZWxOYW1lID09PSBcIlRpbWVyXCI7XG4gICAgfSlbMF07XG4gIH1cbn1cbiJdfQ==
