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
var mongoose = require("mongoose");
var bluebird = require("bluebird");
mongoose.Promise = bluebird;
var INTERFACES = require("../interfaces");
var DeviceSchema = (function () {
    function DeviceSchema(settings) {
        var _this = this;
        this.setSchema = function () {
            var schema = new mongoose.Schema({
                description: {
                    maxlength: [128, "description must not be longer than 128 characters"],
                    minlength: [16, "description must not be shorter than 16 characters"],
                    required: [true, "description is required"],
                    type: String,
                },
                name: {
                    maxlength: [32, "name must not be longer than 32 characters"],
                    minlength: [4, "name must not be shorter than 4 characters"],
                    required: [true, "name is required"],
                    type: String,
                },
                pin: {
                    max: _this.settings.pinCount - 1,
                    min: 0,
                    required: [true, "pin is required"],
                    type: Number,
                },
                state: {
                    default: true,
                    type: Boolean,
                },
                type: {
                    enum: ["relay", "sensor", "special"],
                    required: [true, "type is required"],
                    type: String,
                },
                value: {
                    default: 0,
                    type: Number,
                },
            });
            _this.schema = schema;
        };
        this.settings = settings;
        this.name = "Device";
        this.setSchema();
    }
    DeviceSchema = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject("Settings")), 
        __metadata('design:paramtypes', [Object])
    ], DeviceSchema);
    return DeviceSchema;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DeviceSchema;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL2RldmljZVNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsMEJBQW1DLFdBQVcsQ0FBQyxDQUFBO0FBQy9DLElBQU8sUUFBUSxXQUFXLFVBQVUsQ0FBQyxDQUFDO0FBQ3RDLElBQVksUUFBUSxXQUFNLFVBQVUsQ0FBQyxDQUFBO0FBQ3JDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO0FBRTVCLElBQVksVUFBVSxXQUFNLGVBQWUsQ0FBQyxDQUFBO0FBSzVDO0lBS0Usc0JBQ3NCLFFBQThCO1FBTnRELGlCQXFEQztRQXJDUyxjQUFTLEdBQUc7WUFDbEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUMvQixXQUFXLEVBQUU7b0JBQ1gsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLG9EQUFvRCxDQUFDO29CQUN0RSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsb0RBQW9ELENBQUM7b0JBQ3JFLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSx5QkFBeUIsQ0FBQztvQkFDM0MsSUFBSSxFQUFFLE1BQU07aUJBQ2I7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSw0Q0FBNEMsQ0FBQztvQkFDN0QsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLDRDQUE0QyxDQUFDO29CQUM1RCxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUM7b0JBQ3BDLElBQUksRUFBRSxNQUFNO2lCQUNiO2dCQUNELEdBQUcsRUFBRTtvQkFDSCxHQUFHLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQztvQkFDL0IsR0FBRyxFQUFFLENBQUM7b0JBQ04sUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDO29CQUNuQyxJQUFJLEVBQUUsTUFBTTtpQkFDYjtnQkFDRCxLQUFLLEVBQUU7b0JBQ0wsT0FBTyxFQUFFLElBQUk7b0JBQ2IsSUFBSSxFQUFFLE9BQU87aUJBQ2Q7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDO29CQUNwQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUM7b0JBQ3BDLElBQUksRUFBRSxNQUFNO2lCQUNiO2dCQUNELEtBQUssRUFBRTtvQkFDTCxPQUFPLEVBQUUsQ0FBQztvQkFDVixJQUFJLEVBQUUsTUFBTTtpQkFDYjthQUNGLENBQUMsQ0FBQztZQUVILEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQTtRQTVDQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQVpIO1FBQUMsc0JBQVUsRUFBRTttQkFPUixrQkFBTSxDQUFDLFVBQVUsQ0FBQzs7b0JBUFY7SUFzRGIsbUJBQUM7QUFBRCxDQXJEQSxBQXFEQyxJQUFBO0FBckREOzhCQXFEQyxDQUFBIiwiZmlsZSI6ImNsYXNzZXMvZGV2aWNlU2NoZW1hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0IG1vbmdvb3NlID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xuaW1wb3J0ICogYXMgYmx1ZWJpcmQgZnJvbSBcImJsdWViaXJkXCI7XG5tb25nb29zZS5Qcm9taXNlID0gYmx1ZWJpcmQ7XG5cbmltcG9ydCAqIGFzIElOVEVSRkFDRVMgZnJvbSBcIi4uL2ludGVyZmFjZXNcIjtcbi8qKlxuICogRGV2aWNlU2NoZW1hIHJlcHJlc2VudHMgYSBkZXZpY2UgZGF0YSBtb2RlbCBmb3IgdGhlIE1vbmdvREJcbiAqL1xuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV2aWNlU2NoZW1hIGltcGxlbWVudHMgSU5URVJGQUNFUy5JU2NoZW1hIHtcbiAgcHVibGljIHNldHRpbmdzOiBJTlRFUkZBQ0VTLklTZXR0aW5ncztcbiAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgcHVibGljIHNjaGVtYTogbW9uZ29vc2UuU2NoZW1hO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoXCJTZXR0aW5nc1wiKSBzZXR0aW5nczogSU5URVJGQUNFUy5JU2V0dGluZ3NcbiAgKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMubmFtZSA9IFwiRGV2aWNlXCI7XG4gICAgdGhpcy5zZXRTY2hlbWEoKTtcbiAgfVxuXG4vKipcbiAqIFRoZSBEZXZpY2Ugc2NoZW1hIGlzIGRlc2NyaWJlZCBoZXJlLlxuICovXG4gIHByaXZhdGUgc2V0U2NoZW1hID0gKCkgPT4ge1xuICAgIGxldCBzY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgIG1heGxlbmd0aDogWzEyOCwgXCJkZXNjcmlwdGlvbiBtdXN0IG5vdCBiZSBsb25nZXIgdGhhbiAxMjggY2hhcmFjdGVyc1wiXSxcbiAgICAgICAgbWlubGVuZ3RoOiBbMTYsIFwiZGVzY3JpcHRpb24gbXVzdCBub3QgYmUgc2hvcnRlciB0aGFuIDE2IGNoYXJhY3RlcnNcIl0sXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJkZXNjcmlwdGlvbiBpcyByZXF1aXJlZFwiXSxcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgfSxcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgbWF4bGVuZ3RoOiBbMzIsIFwibmFtZSBtdXN0IG5vdCBiZSBsb25nZXIgdGhhbiAzMiBjaGFyYWN0ZXJzXCJdLFxuICAgICAgICBtaW5sZW5ndGg6IFs0LCBcIm5hbWUgbXVzdCBub3QgYmUgc2hvcnRlciB0aGFuIDQgY2hhcmFjdGVyc1wiXSxcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIm5hbWUgaXMgcmVxdWlyZWRcIl0sXG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIH0sXG4gICAgICBwaW46IHtcbiAgICAgICAgbWF4OiB0aGlzLnNldHRpbmdzLnBpbkNvdW50IC0gMSxcbiAgICAgICAgbWluOiAwLFxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwicGluIGlzIHJlcXVpcmVkXCJdLFxuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB9LFxuICAgICAgc3RhdGU6IHtcbiAgICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIH0sXG4gICAgICB0eXBlOiB7XG4gICAgICAgIGVudW06IFtcInJlbGF5XCIsIFwic2Vuc29yXCIsIFwic3BlY2lhbFwiXSxcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcInR5cGUgaXMgcmVxdWlyZWRcIl0sXG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIH0sXG4gICAgICB2YWx1ZToge1xuICAgICAgICBkZWZhdWx0OiAwLFxuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
