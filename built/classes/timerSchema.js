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
require("reflect-metadata");
var inversify_1 = require("inversify");
var mongoose = require("mongoose");
var bluebird = require("bluebird");
mongoose.Promise = bluebird;
var INTERFACES = require("../interfaces");
var TimerSchema = (function () {
    function TimerSchema(settings) {
        var _this = this;
        this.setSchema = function () {
            var schema = new mongoose.Schema({
                name: {
                    maxlength: [32, "name must not be longer than 32 characters"],
                    minlength: [4, "name must not be shorter than 4 characters"],
                    required: [true, "name is required"],
                    type: String,
                },
                device: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Device",
                    required: [true, "device is required"],
                },
                type: {
                    enum: ["daily", "periodic"],
                    required: [true, "type is required"],
                    type: String,
                },
                enabled: {
                    type: Boolean,
                    default: true,
                },
                forceOn: {
                    type: Boolean,
                    default: false,
                },
                turnedOn: {
                    type: Date,
                    default: null,
                },
                turnedOff: {
                    type: Date,
                    default: null,
                },
                days: {
                    type: String,
                    match: [/([01]){7}/, "days are not properly formatted"],
                    default: "1111111",
                },
                startTime: {
                    type: Date,
                    default: Date.now,
                },
                endTime: {
                    type: Date,
                    default: null,
                },
                duration: {
                    type: Number,
                    required: [true, "duration is required"],
                },
                restTime: {
                    type: Number,
                    required: [true, "restTime is required"],
                },
                state: {
                    type: Boolean,
                    default: false,
                },
            });
            _this.schema = schema;
        };
        this.settings = settings;
        this.name = "Timer";
        this.isAuth = false;
        this.setSchema();
    }
    TimerSchema = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject("Settings")), 
        __metadata('design:paramtypes', [Object])
    ], TimerSchema);
    return TimerSchema;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TimerSchema;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL3RpbWVyU2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFPLGtCQUFrQixDQUFDLENBQUE7QUFDMUIsMEJBQW1DLFdBQVcsQ0FBQyxDQUFBO0FBQy9DLElBQU8sUUFBUSxXQUFXLFVBQVUsQ0FBQyxDQUFDO0FBQ3RDLElBQVksUUFBUSxXQUFNLFVBQVUsQ0FBQyxDQUFBO0FBQ3JDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO0FBRTVCLElBQVksVUFBVSxXQUFNLGVBQWUsQ0FBQyxDQUFBO0FBSzVDO0lBTUUscUJBQ3NCLFFBQThCO1FBUHRELGlCQWtGQztRQS9EUyxjQUFTLEdBQUc7WUFDbEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUMvQixJQUFJLEVBQUU7b0JBQ0osU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLDRDQUE0QyxDQUFDO29CQUM3RCxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsNENBQTRDLENBQUM7b0JBQzVELFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQztvQkFDcEMsSUFBSSxFQUFFLE1BQU07aUJBQ2I7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRO29CQUNwQyxHQUFHLEVBQUUsUUFBUTtvQkFDYixRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLENBQUM7aUJBQ3ZDO2dCQUNELElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO29CQUMzQixRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUM7b0JBQ3BDLElBQUksRUFBRSxNQUFNO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxJQUFJLEVBQUUsT0FBTztvQkFDYixPQUFPLEVBQUUsSUFBSTtpQkFDZDtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsSUFBSSxFQUFFLE9BQU87b0JBQ2IsT0FBTyxFQUFFLEtBQUs7aUJBQ2Y7Z0JBQ0QsUUFBUSxFQUFFO29CQUNSLElBQUksRUFBRSxJQUFJO29CQUNWLE9BQU8sRUFBRSxJQUFJO2lCQUNkO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxJQUFJLEVBQUUsSUFBSTtvQkFDVixPQUFPLEVBQUUsSUFBSTtpQkFDZDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osSUFBSSxFQUFFLE1BQU07b0JBQ1osS0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLGlDQUFpQyxDQUFDO29CQUN2RCxPQUFPLEVBQUUsU0FBUztpQkFDbkI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULElBQUksRUFBRSxJQUFJO29CQUNWLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRztpQkFDbEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLElBQUksRUFBRSxJQUFJO29CQUNWLE9BQU8sRUFBRSxJQUFJO2lCQUNkO2dCQUNELFFBQVEsRUFBRTtvQkFDUixJQUFJLEVBQUUsTUFBTTtvQkFDWixRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsc0JBQXNCLENBQUM7aUJBQ3pDO2dCQUNELFFBQVEsRUFBRTtvQkFDUixJQUFJLEVBQUUsTUFBTTtvQkFDWixRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsc0JBQXNCLENBQUM7aUJBQ3pDO2dCQUNELEtBQUssRUFBRTtvQkFDTCxJQUFJLEVBQUUsT0FBTztvQkFDYixPQUFPLEVBQUUsS0FBSztpQkFDZjthQUNGLENBQUMsQ0FBQztZQUVILEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQTtRQXhFQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUVwQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQWZIO1FBQUMsc0JBQVUsRUFBRTttQkFRUixrQkFBTSxDQUFDLFVBQVUsQ0FBQzs7bUJBUlY7SUFtRmIsa0JBQUM7QUFBRCxDQWxGQSxBQWtGQyxJQUFBO0FBbEZEOzZCQWtGQyxDQUFBIiwiZmlsZSI6ImNsYXNzZXMvdGltZXJTY2hlbWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJyZWZsZWN0LW1ldGFkYXRhXCI7XG5pbXBvcnQgeyBpbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XG5pbXBvcnQgbW9uZ29vc2UgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XG5pbXBvcnQgKiBhcyBibHVlYmlyZCBmcm9tIFwiYmx1ZWJpcmRcIjtcbm1vbmdvb3NlLlByb21pc2UgPSBibHVlYmlyZDtcblxuaW1wb3J0ICogYXMgSU5URVJGQUNFUyBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xuLyoqXG4gKiBUaW1lclNjaGVtYSByZXByZXNlbnRzIGEgZGV2aWNlIGRhdGEgbW9kZWwgZm9yIHRoZSBNb25nb0RCXG4gKi9cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVyU2NoZW1hIGltcGxlbWVudHMgSU5URVJGQUNFUy5JU2NoZW1hIHtcbiAgcHVibGljIHNldHRpbmdzOiBJTlRFUkZBQ0VTLklTZXR0aW5ncztcbiAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgcHVibGljIHNjaGVtYTogbW9uZ29vc2UuU2NoZW1hO1xuICBwdWJsaWMgaXNBdXRoOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoXCJTZXR0aW5nc1wiKSBzZXR0aW5nczogSU5URVJGQUNFUy5JU2V0dGluZ3NcbiAgKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMubmFtZSA9IFwiVGltZXJcIjtcbiAgICB0aGlzLmlzQXV0aCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXRTY2hlbWEoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgVGltZXIgc2NoZW1hIGlzIGRlc2NyaWJlZCBoZXJlLlxuICAgKi9cbiAgcHJpdmF0ZSBzZXRTY2hlbWEgPSAoKSA9PiB7XG4gICAgbGV0IHNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgICAgbmFtZToge1xuICAgICAgICBtYXhsZW5ndGg6IFszMiwgXCJuYW1lIG11c3Qgbm90IGJlIGxvbmdlciB0aGFuIDMyIGNoYXJhY3RlcnNcIl0sXG4gICAgICAgIG1pbmxlbmd0aDogWzQsIFwibmFtZSBtdXN0IG5vdCBiZSBzaG9ydGVyIHRoYW4gNCBjaGFyYWN0ZXJzXCJdLFxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwibmFtZSBpcyByZXF1aXJlZFwiXSxcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgfSxcbiAgICAgIGRldmljZToge1xuICAgICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgICAgIHJlZjogXCJEZXZpY2VcIixcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcImRldmljZSBpcyByZXF1aXJlZFwiXSxcbiAgICAgIH0sXG4gICAgICB0eXBlOiB7XG4gICAgICAgIGVudW06IFtcImRhaWx5XCIsIFwicGVyaW9kaWNcIl0sXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJ0eXBlIGlzIHJlcXVpcmVkXCJdLFxuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuICAgICAgZW5hYmxlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGZvcmNlT246IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICB9LFxuICAgICAgdHVybmVkT246IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIH0sXG4gICAgICB0dXJuZWRPZmY6IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIH0sXG4gICAgICBkYXlzOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgbWF0Y2g6IFsvKFswMV0pezd9LywgXCJkYXlzIGFyZSBub3QgcHJvcGVybHkgZm9ybWF0dGVkXCJdLFxuICAgICAgICBkZWZhdWx0OiBcIjExMTExMTFcIixcbiAgICAgIH0sXG4gICAgICBzdGFydFRpbWU6IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgZGVmYXVsdDogRGF0ZS5ub3csXG4gICAgICB9LFxuICAgICAgZW5kVGltZToge1xuICAgICAgICB0eXBlOiBEYXRlLFxuICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgfSxcbiAgICAgIGR1cmF0aW9uOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcImR1cmF0aW9uIGlzIHJlcXVpcmVkXCJdLFxuICAgICAgfSxcbiAgICAgIHJlc3RUaW1lOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcInJlc3RUaW1lIGlzIHJlcXVpcmVkXCJdLFxuICAgICAgfSxcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hO1xuICB9XG59XG4iXX0=
