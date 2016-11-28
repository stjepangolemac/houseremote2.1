"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
require("reflect-metadata");
var INTERFACES = require("../interfaces");
var winston = require("winston");
var Logger = (function (_super) {
    __extends(Logger, _super);
    function Logger(settings) {
        _super.call(this);
        this.settings = settings;
        this.setLogger();
    }
    Logger.prototype.setLogger = function () {
        if (this.settings.logConsole) {
            this.add(winston.transports.Console, {
                level: this.settings.logConsoleLvl,
            });
        }
        if (this.settings.logFile) {
            this.add(winston.transports.File, {
                filename: this.settings.logFilename,
                level: this.settings.logFileLvl,
            });
        }
    };
    Logger = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject("Settings")), 
        __metadata('design:paramtypes', [Object])
    ], Logger);
    return Logger;
}(winston.Logger));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Logger;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQkFBbUMsV0FBVyxDQUFDLENBQUE7QUFDL0MsUUFBTyxrQkFBa0IsQ0FBQyxDQUFBO0FBQzFCLElBQVksVUFBVSxXQUFNLGVBQWUsQ0FBQyxDQUFBO0FBQzVDLElBQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBTW5DO0lBQ1UsMEJBQWM7SUFHdEIsZ0JBQ3NCLFFBQThCO1FBRWhELGlCQUFPLENBQUM7UUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUtPLDBCQUFTLEdBQWpCO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQ2pDO2dCQUNFLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWE7YUFDbkMsQ0FDRixDQUFDO1FBQ0osQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUM5QjtnQkFDRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXO2dCQUNuQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVO2FBQ2hDLENBQ0YsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBakNIO1FBQUMsc0JBQVUsRUFBRTttQkFNUixrQkFBTSxDQUFDLFVBQVUsQ0FBQzs7Y0FOVjtJQWtDYixhQUFDO0FBQUQsQ0FqQ0EsQUFpQ0MsQ0FoQ1MsT0FBTyxDQUFDLE1BQU0sR0FnQ3ZCO0FBakNEO3dCQWlDQyxDQUFBIiwiZmlsZSI6ImNsYXNzZXMvbG9nZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0IFwicmVmbGVjdC1tZXRhZGF0YVwiO1xuaW1wb3J0ICogYXMgSU5URVJGQUNFUyBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xuaW1wb3J0ICogYXMgd2luc3RvbiBmcm9tIFwid2luc3RvblwiO1xuXG4vKipcbiAqIEFzeW5jaHJvbm91cyBzZXJ2ZXIgbG9nZ2VyXG4gKi9cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlclxuICBleHRlbmRzIHdpbnN0b24uTG9nZ2VyIGltcGxlbWVudHMgSU5URVJGQUNFUy5JTG9nZ2VyIHtcbiAgcHVibGljIHNldHRpbmdzOiBJTlRFUkZBQ0VTLklTZXR0aW5ncztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAaW5qZWN0KFwiU2V0dGluZ3NcIikgc2V0dGluZ3M6IElOVEVSRkFDRVMuSVNldHRpbmdzXG4gICkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICAgIHRoaXMuc2V0TG9nZ2VyKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBsb2dnaW5nIG91dHB1dHMgYmFzZWQgb24gc2V0dGluZ3NcbiAgICovXG4gIHByaXZhdGUgc2V0TG9nZ2VyKCkge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLmxvZ0NvbnNvbGUpIHtcbiAgICAgIHRoaXMuYWRkKHdpbnN0b24udHJhbnNwb3J0cy5Db25zb2xlLFxuICAgICAgICB7XG4gICAgICAgICAgbGV2ZWw6IHRoaXMuc2V0dGluZ3MubG9nQ29uc29sZUx2bCxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5sb2dGaWxlKSB7XG4gICAgICB0aGlzLmFkZCh3aW5zdG9uLnRyYW5zcG9ydHMuRmlsZSxcbiAgICAgICAge1xuICAgICAgICAgIGZpbGVuYW1lOiB0aGlzLnNldHRpbmdzLmxvZ0ZpbGVuYW1lLFxuICAgICAgICAgIGxldmVsOiB0aGlzLnNldHRpbmdzLmxvZ0ZpbGVMdmwsXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=
