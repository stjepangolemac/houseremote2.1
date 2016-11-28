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
var Cache = (function () {
    function Cache(eventSystem) {
        var _this = this;
        this.refresh = function () {
            if (_this.model) {
                _this.model.find()
                    .then(function (data) {
                    var temp = [];
                    data.forEach(function (one) {
                        var helper = {
                            id: one.id,
                            name: one.name,
                            pin: one.pin,
                            state: one.state,
                            type: one.type,
                            value: one.value,
                        };
                        temp.push(helper);
                    });
                    _this.cached = temp;
                });
            }
        };
        this.setEmitter = function () {
            _this.emitter.on(_this.model.modelName, _this.refresh);
        };
        this.setModel = function (model) {
            _this.model = model;
            _this.setEmitter();
            _this.refresh();
        };
        this.emitter = eventSystem;
        this.cached = [];
    }
    Cache = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject("EventSystem")), 
        __metadata('design:paramtypes', [Object])
    ], Cache);
    return Cache;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Cache;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL2NhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQkFBbUMsV0FBVyxDQUFDLENBQUE7QUFDL0MsSUFBWSxVQUFVLFdBQU0sZUFBZSxDQUFDLENBQUE7QUFPNUM7SUFLRSxlQUN5QixXQUFvQztRQU4vRCxpQkEwQ0M7UUE5QlEsWUFBTyxHQUFHO1lBQ2YsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7cUJBQ2hCLElBQUksQ0FBQyxVQUFDLElBQUk7b0JBQ1QsSUFBSSxJQUFJLEdBQVEsRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBUTt3QkFDcEIsSUFBSSxNQUFNLEdBQUc7NEJBQ1gsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFOzRCQUNWLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTs0QkFDZCxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUc7NEJBQ1osS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLOzRCQUNoQixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7NEJBQ2QsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLO3lCQUNqQixDQUFDO3dCQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3BCLENBQUMsQ0FBQyxDQUFDO29CQUNILEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7UUFDSCxDQUFDLENBQUE7UUFFTSxlQUFVLEdBQUc7WUFDbEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQTtRQUVNLGFBQVEsR0FBRyxVQUFDLEtBQXdCO1lBQ3pDLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFBO1FBakNDLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFYSDtRQUFDLHNCQUFVLEVBQUU7bUJBT1Isa0JBQU0sQ0FBQyxhQUFhLENBQUM7O2FBUGI7SUEyQ2IsWUFBQztBQUFELENBMUNBLEFBMENDLElBQUE7QUExQ0Q7dUJBMENDLENBQUEiLCJmaWxlIjoiY2xhc3Nlcy9jYWNoZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCAqIGFzIElOVEVSRkFDRVMgZnJvbSBcIi4uL2ludGVyZmFjZXNcIjtcblxuLyoqXG4gKiBDYWNoZSBrZWVwcyBuZXdlc3QgZGIgZGF0YSBpbiBtZW1vcnkgZm9yIHVzZVxuICogaW4gb3RoZXIgY2xhc3Nlcy5cbiAqL1xuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FjaGUgaW1wbGVtZW50cyBJTlRFUkZBQ0VTLklDYWNoZSB7XG4gIHB1YmxpYyBlbWl0dGVyOiBJTlRFUkZBQ0VTLklFdmVudFN5c3RlbTtcbiAgcHVibGljIG1vZGVsOiBJTlRFUkZBQ0VTLklNb2RlbDtcbiAgcHVibGljIGNhY2hlZDogYW55W107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQGluamVjdChcIkV2ZW50U3lzdGVtXCIpIGV2ZW50U3lzdGVtOiBJTlRFUkZBQ0VTLklFdmVudFN5c3RlbVxuICApIHtcbiAgICB0aGlzLmVtaXR0ZXIgPSBldmVudFN5c3RlbTtcbiAgICB0aGlzLmNhY2hlZCA9IFtdO1xuICB9XG5cbiAgcHVibGljIHJlZnJlc2ggPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMubW9kZWwpIHtcbiAgICAgIHRoaXMubW9kZWwuZmluZCgpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBsZXQgdGVtcDogYW55ID0gW107XG4gICAgICAgIGRhdGEuZm9yRWFjaCgob25lOiBhbnkpID0+IHtcbiAgICAgICAgICBsZXQgaGVscGVyID0ge1xuICAgICAgICAgICAgaWQ6IG9uZS5pZCxcbiAgICAgICAgICAgIG5hbWU6IG9uZS5uYW1lLFxuICAgICAgICAgICAgcGluOiBvbmUucGluLFxuICAgICAgICAgICAgc3RhdGU6IG9uZS5zdGF0ZSxcbiAgICAgICAgICAgIHR5cGU6IG9uZS50eXBlLFxuICAgICAgICAgICAgdmFsdWU6IG9uZS52YWx1ZSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRlbXAucHVzaChoZWxwZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jYWNoZWQgPSB0ZW1wO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldEVtaXR0ZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5lbWl0dGVyLm9uKHRoaXMubW9kZWwubW9kZWxOYW1lLCB0aGlzLnJlZnJlc2gpO1xuICB9XG5cbiAgcHVibGljIHNldE1vZGVsID0gKG1vZGVsOiBJTlRFUkZBQ0VTLklNb2RlbCkgPT4ge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLnNldEVtaXR0ZXIoKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxufVxuIl19
