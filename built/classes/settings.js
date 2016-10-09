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
        this.setup = function (config) {
            var configuration;
            try {
                configuration = require("../../configuration/" + config + ".js");
            }
            catch (error) {
                console.log("Settings cannot find", config, "configuration file");
                throw error;
            }
            _this.port = configuration.port;
            _this.logConsole = configuration.logconsole;
            _this.logConsoleLvl = configuration.logconsolelvl;
            _this.logFile = configuration.logfile;
            _this.logFileLvl = configuration.logfilelvl;
            _this.logFilename = configuration.logfilename;
            _this.dbUrl = configuration.dburl;
            _this.dbUser = configuration.dbuser;
            _this.dbPass = configuration.dbpass;
        };
        this.setup(process.env.CONFIG);
    }
    Settings = __decorate([
        inversify_1.injectable(), 
        __metadata('design:paramtypes', [])
    ], Settings);
    return Settings;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Settings;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL3NldHRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwwQkFBMkIsV0FBVyxDQUFDLENBQUE7QUFDdkMsUUFBTyxrQkFBa0IsQ0FBQyxDQUFBO0FBTzFCO0lBV0U7UUFYRixpQkFxQ0M7UUFuQlMsVUFBSyxHQUFHLFVBQUMsTUFBYztZQUM3QixJQUFJLGFBQWtCLENBQUM7WUFDdkIsSUFBSSxDQUFDO2dCQUNILGFBQWEsR0FBRyxPQUFPLENBQUMsc0JBQXNCLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ25FLENBQUU7WUFBQSxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsTUFBTSxFQUFFLG9CQUFvQixDQUFDLENBQUM7Z0JBQ2xFLE1BQU0sS0FBSyxDQUFDO1lBQ2QsQ0FBQztZQUVELEtBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQztZQUMvQixLQUFJLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQyxVQUFVLENBQUM7WUFDM0MsS0FBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDO1lBQ2pELEtBQUksQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQztZQUNyQyxLQUFJLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQyxVQUFVLENBQUM7WUFDM0MsS0FBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDO1lBQzdDLEtBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUNqQyxLQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUM7WUFDbkMsS0FBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQ3JDLENBQUMsQ0FBQTtRQXhCQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQWRIO1FBQUMsc0JBQVUsRUFBRTs7Z0JBQUE7SUFzQ2IsZUFBQztBQUFELENBckNBLEFBcUNDLElBQUE7QUFyQ0Q7MEJBcUNDLENBQUEiLCJmaWxlIjoiY2xhc3Nlcy9zZXR0aW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XG5pbXBvcnQgXCJyZWZsZWN0LW1ldGFkYXRhXCI7XG5pbXBvcnQgKiBhcyBJTlRFUkZBQ0VTIGZyb20gXCIuLi9pbnRlcmZhY2VzXCI7XG5cbi8qKlxuICogU2V0dGluZ3MgZm9yIHNlcnZlclxuICovXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5ncyBpbXBsZW1lbnRzIElOVEVSRkFDRVMuSVNldHRpbmdzIHtcbiAgcHVibGljIHBvcnQ6IG51bWJlcjtcbiAgcHVibGljIGxvZ0NvbnNvbGU6IGJvb2xlYW47XG4gIHB1YmxpYyBsb2dDb25zb2xlTHZsOiBzdHJpbmc7XG4gIHB1YmxpYyBsb2dGaWxlOiBib29sZWFuO1xuICBwdWJsaWMgbG9nRmlsZUx2bDogc3RyaW5nO1xuICBwdWJsaWMgbG9nRmlsZW5hbWU6IHN0cmluZztcbiAgcHVibGljIGRiVXJsOiBzdHJpbmc7XG4gIHB1YmxpYyBkYlVzZXI6IHN0cmluZztcbiAgcHVibGljIGRiUGFzczogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2V0dXAocHJvY2Vzcy5lbnYuQ09ORklHKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkcyB0aGUgc2V0dGluZ3MgZnJvbSBjb25maWd1cmF0aW9uIHZhcmlhYmxlXG4gICAqL1xuICBwcml2YXRlIHNldHVwID0gKGNvbmZpZzogc3RyaW5nKSA9PiB7XG4gICAgbGV0IGNvbmZpZ3VyYXRpb246IGFueTtcbiAgICB0cnkge1xuICAgICAgY29uZmlndXJhdGlvbiA9IHJlcXVpcmUoXCIuLi8uLi9jb25maWd1cmF0aW9uL1wiICsgY29uZmlnICsgXCIuanNcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU2V0dGluZ3MgY2Fubm90IGZpbmRcIiwgY29uZmlnLCBcImNvbmZpZ3VyYXRpb24gZmlsZVwiKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cblxuICAgIHRoaXMucG9ydCA9IGNvbmZpZ3VyYXRpb24ucG9ydDtcbiAgICB0aGlzLmxvZ0NvbnNvbGUgPSBjb25maWd1cmF0aW9uLmxvZ2NvbnNvbGU7XG4gICAgdGhpcy5sb2dDb25zb2xlTHZsID0gY29uZmlndXJhdGlvbi5sb2djb25zb2xlbHZsO1xuICAgIHRoaXMubG9nRmlsZSA9IGNvbmZpZ3VyYXRpb24ubG9nZmlsZTtcbiAgICB0aGlzLmxvZ0ZpbGVMdmwgPSBjb25maWd1cmF0aW9uLmxvZ2ZpbGVsdmw7XG4gICAgdGhpcy5sb2dGaWxlbmFtZSA9IGNvbmZpZ3VyYXRpb24ubG9nZmlsZW5hbWU7XG4gICAgdGhpcy5kYlVybCA9IGNvbmZpZ3VyYXRpb24uZGJ1cmw7XG4gICAgdGhpcy5kYlVzZXIgPSBjb25maWd1cmF0aW9uLmRidXNlcjtcbiAgICB0aGlzLmRiUGFzcyA9IGNvbmZpZ3VyYXRpb24uZGJwYXNzO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
