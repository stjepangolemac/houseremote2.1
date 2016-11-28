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
var inversify_1 = require("inversify");
require("reflect-metadata");
var Settings = (function () {
    function Settings() {
        var _this = this;
        this.setup = function () {
            _this.port = process.env.PORT;
            _this.logConsole = process.env.LOG_CONSOLE;
            _this.logConsoleLvl = process.env.LOG_CONSOLE_LVL;
            _this.logFile = process.env.LOG_FILE;
            _this.logFileLvl = process.env.LOG_FILE_LVL;
            _this.logFilename = process.env.LOG_FILENAME;
            _this.dbUrl = process.env.DB_URL;
            _this.dbUser = process.env.DB_USER;
            _this.dbPass = process.env.DB_PASS;
            _this.model = process.env.MODEL;
            _this.pinCount = process.env.PIN_COUNT;
            _this.cert = process.env.CERT;
            _this.key = process.env.KEY;
        };
        this.setup();
    }
    Settings = __decorate([
        inversify_1.injectable(), 
        __metadata('design:paramtypes', [])
    ], Settings);
    return Settings;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Settings;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL3NldHRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwwQkFBMkIsV0FBVyxDQUFDLENBQUE7QUFDdkMsUUFBTyxrQkFBa0IsQ0FBQyxDQUFBO0FBTzFCO0lBZUU7UUFmRixpQkFxQ0M7UUFmUyxVQUFLLEdBQUc7WUFDZCxLQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7WUFDMUMsS0FBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQztZQUNqRCxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7WUFDM0MsS0FBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQztZQUM1QyxLQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDbEMsS0FBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUNsQyxLQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFDdEMsS0FBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztZQUM3QixLQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzdCLENBQUMsQ0FBQTtRQXBCQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBbEJIO1FBQUMsc0JBQVUsRUFBRTs7Z0JBQUE7SUFzQ2IsZUFBQztBQUFELENBckNBLEFBcUNDLElBQUE7QUFyQ0Q7MEJBcUNDLENBQUEiLCJmaWxlIjoiY2xhc3Nlcy9zZXR0aW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XG5pbXBvcnQgXCJyZWZsZWN0LW1ldGFkYXRhXCI7XG5pbXBvcnQgKiBhcyBJTlRFUkZBQ0VTIGZyb20gXCIuLi9pbnRlcmZhY2VzXCI7XG5cbi8qKlxuICogU2V0dGluZ3MgZm9yIHNlcnZlclxuICovXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5ncyBpbXBsZW1lbnRzIElOVEVSRkFDRVMuSVNldHRpbmdzIHtcbiAgcHVibGljIHBvcnQ6IG51bWJlcjtcbiAgcHVibGljIGxvZ0NvbnNvbGU6IGJvb2xlYW47XG4gIHB1YmxpYyBsb2dDb25zb2xlTHZsOiBzdHJpbmc7XG4gIHB1YmxpYyBsb2dGaWxlOiBib29sZWFuO1xuICBwdWJsaWMgbG9nRmlsZUx2bDogc3RyaW5nO1xuICBwdWJsaWMgbG9nRmlsZW5hbWU6IHN0cmluZztcbiAgcHVibGljIGRiVXJsOiBzdHJpbmc7XG4gIHB1YmxpYyBkYlVzZXI6IHN0cmluZztcbiAgcHVibGljIGRiUGFzczogc3RyaW5nO1xuICBwdWJsaWMgbW9kZWw6IHN0cmluZztcbiAgcHVibGljIHBpbkNvdW50OiBudW1iZXI7XG4gIHB1YmxpYyBjZXJ0OiBhbnk7XG4gIHB1YmxpYyBrZXk6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNldHVwKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVhZHMgdGhlIHNldHRpbmdzIGZyb20gY29uZmlndXJhdGlvbiB2YXJpYWJsZVxuICAgKi9cbiAgcHJpdmF0ZSBzZXR1cCA9ICgpID0+IHtcbiAgICB0aGlzLnBvcnQgPSBwcm9jZXNzLmVudi5QT1JUO1xuICAgIHRoaXMubG9nQ29uc29sZSA9IHByb2Nlc3MuZW52LkxPR19DT05TT0xFO1xuICAgIHRoaXMubG9nQ29uc29sZUx2bCA9IHByb2Nlc3MuZW52LkxPR19DT05TT0xFX0xWTDtcbiAgICB0aGlzLmxvZ0ZpbGUgPSBwcm9jZXNzLmVudi5MT0dfRklMRTtcbiAgICB0aGlzLmxvZ0ZpbGVMdmwgPSBwcm9jZXNzLmVudi5MT0dfRklMRV9MVkw7XG4gICAgdGhpcy5sb2dGaWxlbmFtZSA9IHByb2Nlc3MuZW52LkxPR19GSUxFTkFNRTtcbiAgICB0aGlzLmRiVXJsID0gcHJvY2Vzcy5lbnYuREJfVVJMO1xuICAgIHRoaXMuZGJVc2VyID0gcHJvY2Vzcy5lbnYuREJfVVNFUjtcbiAgICB0aGlzLmRiUGFzcyA9IHByb2Nlc3MuZW52LkRCX1BBU1M7XG4gICAgdGhpcy5tb2RlbCA9IHByb2Nlc3MuZW52Lk1PREVMO1xuICAgIHRoaXMucGluQ291bnQgPSBwcm9jZXNzLmVudi5QSU5fQ09VTlQ7XG4gICAgdGhpcy5jZXJ0ID0gcHJvY2Vzcy5lbnYuQ0VSVDtcbiAgICB0aGlzLmtleSA9IHByb2Nlc3MuZW52LktFWTtcbiAgfVxufVxuIl19
