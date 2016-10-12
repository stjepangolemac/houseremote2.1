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
                console.log(error);
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
            _this.model = configuration.model;
            _this.pinCount = configuration.pincount;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL3NldHRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwwQkFBMkIsV0FBVyxDQUFDLENBQUE7QUFDdkMsUUFBTyxrQkFBa0IsQ0FBQyxDQUFBO0FBTzFCO0lBYUU7UUFiRixpQkF5Q0M7UUFyQlMsVUFBSyxHQUFHLFVBQUMsTUFBYztZQUM3QixJQUFJLGFBQWtCLENBQUM7WUFDdkIsSUFBSSxDQUFDO2dCQUNILGFBQWEsR0FBRyxPQUFPLENBQUMsc0JBQXNCLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ25FLENBQUU7WUFBQSxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sS0FBSyxDQUFDO1lBQ2QsQ0FBQztZQUVELEtBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQztZQUMvQixLQUFJLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQyxVQUFVLENBQUM7WUFDM0MsS0FBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDO1lBQ2pELEtBQUksQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQztZQUNyQyxLQUFJLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQyxVQUFVLENBQUM7WUFDM0MsS0FBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDO1lBQzdDLEtBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUNqQyxLQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUM7WUFDbkMsS0FBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDO1lBQ25DLEtBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUNqQyxLQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDekMsQ0FBQyxDQUFBO1FBMUJDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBaEJIO1FBQUMsc0JBQVUsRUFBRTs7Z0JBQUE7SUEwQ2IsZUFBQztBQUFELENBekNBLEFBeUNDLElBQUE7QUF6Q0Q7MEJBeUNDLENBQUEiLCJmaWxlIjoiY2xhc3Nlcy9zZXR0aW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XG5pbXBvcnQgXCJyZWZsZWN0LW1ldGFkYXRhXCI7XG5pbXBvcnQgKiBhcyBJTlRFUkZBQ0VTIGZyb20gXCIuLi9pbnRlcmZhY2VzXCI7XG5cbi8qKlxuICogU2V0dGluZ3MgZm9yIHNlcnZlclxuICovXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5ncyBpbXBsZW1lbnRzIElOVEVSRkFDRVMuSVNldHRpbmdzIHtcbiAgcHVibGljIHBvcnQ6IG51bWJlcjtcbiAgcHVibGljIGxvZ0NvbnNvbGU6IGJvb2xlYW47XG4gIHB1YmxpYyBsb2dDb25zb2xlTHZsOiBzdHJpbmc7XG4gIHB1YmxpYyBsb2dGaWxlOiBib29sZWFuO1xuICBwdWJsaWMgbG9nRmlsZUx2bDogc3RyaW5nO1xuICBwdWJsaWMgbG9nRmlsZW5hbWU6IHN0cmluZztcbiAgcHVibGljIGRiVXJsOiBzdHJpbmc7XG4gIHB1YmxpYyBkYlVzZXI6IHN0cmluZztcbiAgcHVibGljIGRiUGFzczogc3RyaW5nO1xuICBwdWJsaWMgbW9kZWw6IHN0cmluZztcbiAgcHVibGljIHBpbkNvdW50OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zZXR1cChwcm9jZXNzLmVudi5DT05GSUcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBzZXR0aW5ncyBmcm9tIGNvbmZpZ3VyYXRpb24gdmFyaWFibGVcbiAgICovXG4gIHByaXZhdGUgc2V0dXAgPSAoY29uZmlnOiBzdHJpbmcpID0+IHtcbiAgICBsZXQgY29uZmlndXJhdGlvbjogYW55O1xuICAgIHRyeSB7XG4gICAgICBjb25maWd1cmF0aW9uID0gcmVxdWlyZShcIi4uLy4uL2NvbmZpZ3VyYXRpb24vXCIgKyBjb25maWcgKyBcIi5qc1wiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuXG4gICAgdGhpcy5wb3J0ID0gY29uZmlndXJhdGlvbi5wb3J0O1xuICAgIHRoaXMubG9nQ29uc29sZSA9IGNvbmZpZ3VyYXRpb24ubG9nY29uc29sZTtcbiAgICB0aGlzLmxvZ0NvbnNvbGVMdmwgPSBjb25maWd1cmF0aW9uLmxvZ2NvbnNvbGVsdmw7XG4gICAgdGhpcy5sb2dGaWxlID0gY29uZmlndXJhdGlvbi5sb2dmaWxlO1xuICAgIHRoaXMubG9nRmlsZUx2bCA9IGNvbmZpZ3VyYXRpb24ubG9nZmlsZWx2bDtcbiAgICB0aGlzLmxvZ0ZpbGVuYW1lID0gY29uZmlndXJhdGlvbi5sb2dmaWxlbmFtZTtcbiAgICB0aGlzLmRiVXJsID0gY29uZmlndXJhdGlvbi5kYnVybDtcbiAgICB0aGlzLmRiVXNlciA9IGNvbmZpZ3VyYXRpb24uZGJ1c2VyO1xuICAgIHRoaXMuZGJQYXNzID0gY29uZmlndXJhdGlvbi5kYnBhc3M7XG4gICAgdGhpcy5tb2RlbCA9IGNvbmZpZ3VyYXRpb24ubW9kZWw7XG4gICAgdGhpcy5waW5Db3VudCA9IGNvbmZpZ3VyYXRpb24ucGluY291bnQ7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
