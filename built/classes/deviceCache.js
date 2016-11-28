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
var DeviceCache = (function () {
    function DeviceCache(eventSystem, dataManager) {
        var _this = this;
        this.refresh = function () {
            console.log("Refreshing device cache");
            _this.deviceModel.find()
                .then(function (devices) {
                _this.devices = [];
                devices.forEach(function (device) {
                    var helper = {
                        id: device.id,
                        name: device.name,
                        pin: device.pin,
                        state: device.state,
                        type: device.type,
                        value: device.value,
                    };
                    _this.devices.push(helper);
                });
            });
        };
        this.findDeviceModel = function () {
            _this.deviceModel = _this.dataManager.models.filter(function (model) {
                return model.modelName === "Device";
            })[0];
        };
        this.emitter = eventSystem;
        this.dataManager = dataManager;
        this.devices = [];
        this.findDeviceModel();
        this.emitter.on(this.deviceModel.modelName, this.refresh);
        this.refresh();
    }
    DeviceCache = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject("EventSystem")),
        __param(1, inversify_1.inject("DataManager")), 
        __metadata('design:paramtypes', [Object, Object])
    ], DeviceCache);
    return DeviceCache;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DeviceCache;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL2RldmljZUNhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQkFBbUMsV0FBVyxDQUFDLENBQUE7QUFDL0MsSUFBWSxVQUFVLFdBQU0sZUFBZSxDQUFDLENBQUE7QUFPNUM7SUFNRSxxQkFDeUIsV0FBb0MsRUFDcEMsV0FBb0M7UUFSL0QsaUJBMkNDO1FBeEJRLFlBQU8sR0FBRztZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRTtpQkFDdEIsSUFBSSxDQUFDLFVBQUMsT0FBTztnQkFDWixLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFDbEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQVc7b0JBQzFCLElBQUksTUFBTSxHQUFHO3dCQUNYLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRTt3QkFDYixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7d0JBQ2pCLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRzt3QkFDZixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7d0JBQ25CLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTt3QkFDakIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO3FCQUNwQixDQUFDO29CQUNGLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM1QixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFBO1FBRU0sb0JBQWUsR0FBRztZQUN2QixLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEtBQUs7Z0JBQ3RELE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxLQUFLLFFBQVEsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNSLENBQUMsQ0FBQTtRQWhDQyxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVsQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBbEJIO1FBQUMsc0JBQVUsRUFBRTttQkFRUixrQkFBTSxDQUFDLGFBQWEsQ0FBQzttQkFDckIsa0JBQU0sQ0FBQyxhQUFhLENBQUM7O21CQVRiO0lBNENiLGtCQUFDO0FBQUQsQ0EzQ0EsQUEyQ0MsSUFBQTtBQTNDRDs2QkEyQ0MsQ0FBQSIsImZpbGUiOiJjbGFzc2VzL2RldmljZUNhY2hlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0ICogYXMgSU5URVJGQUNFUyBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xuXG4vKipcbiAqIERldmljZUNhY2hlIGtlZXBzIG5ld2VzdCBkZXZpY2VzIGRhdGEgaW4gbWVtb3J5IGZvciB1c2VcbiAqIGluIG90aGVyIGNsYXNzZXMuXG4gKi9cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldmljZUNhY2hlIGltcGxlbWVudHMgSU5URVJGQUNFUy5JRGV2aWNlQ2FjaGUge1xuICBwdWJsaWMgZW1pdHRlcjogSU5URVJGQUNFUy5JRXZlbnRTeXN0ZW07XG4gIHB1YmxpYyBkYXRhTWFuYWdlcjogSU5URVJGQUNFUy5JRGF0YU1hbmFnZXI7XG4gIHB1YmxpYyBkZXZpY2VzOiBJTlRFUkZBQ0VTLklEZXZpY2VbXTtcbiAgcHVibGljIGRldmljZU1vZGVsOiBJTlRFUkZBQ0VTLklNb2RlbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAaW5qZWN0KFwiRXZlbnRTeXN0ZW1cIikgZXZlbnRTeXN0ZW06IElOVEVSRkFDRVMuSUV2ZW50U3lzdGVtLFxuICAgIEBpbmplY3QoXCJEYXRhTWFuYWdlclwiKSBkYXRhTWFuYWdlcjogSU5URVJGQUNFUy5JRGF0YU1hbmFnZXJcbiAgKSB7XG4gICAgdGhpcy5lbWl0dGVyID0gZXZlbnRTeXN0ZW07XG4gICAgdGhpcy5kYXRhTWFuYWdlciA9IGRhdGFNYW5hZ2VyO1xuICAgIHRoaXMuZGV2aWNlcyA9IFtdO1xuXG4gICAgdGhpcy5maW5kRGV2aWNlTW9kZWwoKTtcbiAgICB0aGlzLmVtaXR0ZXIub24odGhpcy5kZXZpY2VNb2RlbC5tb2RlbE5hbWUsIHRoaXMucmVmcmVzaCk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBwdWJsaWMgcmVmcmVzaCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlJlZnJlc2hpbmcgZGV2aWNlIGNhY2hlXCIpO1xuICAgIHRoaXMuZGV2aWNlTW9kZWwuZmluZCgpXG4gICAgLnRoZW4oKGRldmljZXMpID0+IHtcbiAgICAgIHRoaXMuZGV2aWNlcyA9IFtdO1xuICAgICAgZGV2aWNlcy5mb3JFYWNoKChkZXZpY2U6IGFueSkgPT4ge1xuICAgICAgICBsZXQgaGVscGVyID0ge1xuICAgICAgICAgIGlkOiBkZXZpY2UuaWQsXG4gICAgICAgICAgbmFtZTogZGV2aWNlLm5hbWUsXG4gICAgICAgICAgcGluOiBkZXZpY2UucGluLFxuICAgICAgICAgIHN0YXRlOiBkZXZpY2Uuc3RhdGUsXG4gICAgICAgICAgdHlwZTogZGV2aWNlLnR5cGUsXG4gICAgICAgICAgdmFsdWU6IGRldmljZS52YWx1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5kZXZpY2VzLnB1c2goaGVscGVyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGZpbmREZXZpY2VNb2RlbCA9ICgpID0+IHtcbiAgICB0aGlzLmRldmljZU1vZGVsID0gdGhpcy5kYXRhTWFuYWdlci5tb2RlbHMuZmlsdGVyKChtb2RlbCkgPT4ge1xuICAgICAgcmV0dXJuIG1vZGVsLm1vZGVsTmFtZSA9PT0gXCJEZXZpY2VcIjtcbiAgICB9KVswXTtcbiAgfVxufVxuIl19
