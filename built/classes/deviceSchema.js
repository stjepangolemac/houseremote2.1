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
        this.isAuth = false;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL2RldmljZVNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsUUFBTyxrQkFBa0IsQ0FBQyxDQUFBO0FBQzFCLDBCQUFtQyxXQUFXLENBQUMsQ0FBQTtBQUMvQyxJQUFPLFFBQVEsV0FBVyxVQUFVLENBQUMsQ0FBQztBQUN0QyxJQUFZLFFBQVEsV0FBTSxVQUFVLENBQUMsQ0FBQTtBQUNyQyxRQUFRLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztBQUU1QixJQUFZLFVBQVUsV0FBTSxlQUFlLENBQUMsQ0FBQTtBQUs1QztJQU1FLHNCQUNzQixRQUE4QjtRQVB0RCxpQkF3REM7UUFyQ1MsY0FBUyxHQUFHO1lBQ2xCLElBQUksTUFBTSxHQUFHLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDL0IsV0FBVyxFQUFFO29CQUNYLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxvREFBb0QsQ0FBQztvQkFDdEUsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLG9EQUFvRCxDQUFDO29CQUNyRSxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUseUJBQXlCLENBQUM7b0JBQzNDLElBQUksRUFBRSxNQUFNO2lCQUNiO2dCQUNELElBQUksRUFBRTtvQkFDSixTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsNENBQTRDLENBQUM7b0JBQzdELFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSw0Q0FBNEMsQ0FBQztvQkFDNUQsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDO29CQUNwQyxJQUFJLEVBQUUsTUFBTTtpQkFDYjtnQkFDRCxHQUFHLEVBQUU7b0JBQ0gsR0FBRyxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLENBQUM7b0JBQy9CLEdBQUcsRUFBRSxDQUFDO29CQUNOLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQztvQkFDbkMsSUFBSSxFQUFFLE1BQU07aUJBQ2I7Z0JBQ0QsS0FBSyxFQUFFO29CQUNMLE9BQU8sRUFBRSxJQUFJO29CQUNiLElBQUksRUFBRSxPQUFPO2lCQUNkO2dCQUNELElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQztvQkFDcEMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDO29CQUNwQyxJQUFJLEVBQUUsTUFBTTtpQkFDYjtnQkFDRCxLQUFLLEVBQUU7b0JBQ0wsT0FBTyxFQUFFLENBQUM7b0JBQ1YsSUFBSSxFQUFFLE1BQU07aUJBQ2I7YUFDRixDQUFDLENBQUM7WUFFSCxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixDQUFDLENBQUE7UUE5Q0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFcEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFmSDtRQUFDLHNCQUFVLEVBQUU7bUJBUVIsa0JBQU0sQ0FBQyxVQUFVLENBQUM7O29CQVJWO0lBeURiLG1CQUFDO0FBQUQsQ0F4REEsQUF3REMsSUFBQTtBQXhERDs4QkF3REMsQ0FBQSIsImZpbGUiOiJjbGFzc2VzL2RldmljZVNjaGVtYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcbmltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCBtb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcbmltcG9ydCAqIGFzIGJsdWViaXJkIGZyb20gXCJibHVlYmlyZFwiO1xubW9uZ29vc2UuUHJvbWlzZSA9IGJsdWViaXJkO1xuXG5pbXBvcnQgKiBhcyBJTlRFUkZBQ0VTIGZyb20gXCIuLi9pbnRlcmZhY2VzXCI7XG4vKipcbiAqIERldmljZVNjaGVtYSByZXByZXNlbnRzIGEgZGV2aWNlIGRhdGEgbW9kZWwgZm9yIHRoZSBNb25nb0RCXG4gKi9cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldmljZVNjaGVtYSBpbXBsZW1lbnRzIElOVEVSRkFDRVMuSVNjaGVtYSB7XG4gIHB1YmxpYyBzZXR0aW5nczogSU5URVJGQUNFUy5JU2V0dGluZ3M7XG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBzY2hlbWE6IG1vbmdvb3NlLlNjaGVtYTtcbiAgcHVibGljIGlzQXV0aDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAaW5qZWN0KFwiU2V0dGluZ3NcIikgc2V0dGluZ3M6IElOVEVSRkFDRVMuSVNldHRpbmdzXG4gICkge1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICB0aGlzLm5hbWUgPSBcIkRldmljZVwiO1xuICAgIHRoaXMuaXNBdXRoID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldFNjaGVtYSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBEZXZpY2Ugc2NoZW1hIGlzIGRlc2NyaWJlZCBoZXJlLlxuICAgKi9cbiAgcHJpdmF0ZSBzZXRTY2hlbWEgPSAoKSA9PiB7XG4gICAgbGV0IHNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgbWF4bGVuZ3RoOiBbMTI4LCBcImRlc2NyaXB0aW9uIG11c3Qgbm90IGJlIGxvbmdlciB0aGFuIDEyOCBjaGFyYWN0ZXJzXCJdLFxuICAgICAgICBtaW5sZW5ndGg6IFsxNiwgXCJkZXNjcmlwdGlvbiBtdXN0IG5vdCBiZSBzaG9ydGVyIHRoYW4gMTYgY2hhcmFjdGVyc1wiXSxcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcImRlc2NyaXB0aW9uIGlzIHJlcXVpcmVkXCJdLFxuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuICAgICAgbmFtZToge1xuICAgICAgICBtYXhsZW5ndGg6IFszMiwgXCJuYW1lIG11c3Qgbm90IGJlIGxvbmdlciB0aGFuIDMyIGNoYXJhY3RlcnNcIl0sXG4gICAgICAgIG1pbmxlbmd0aDogWzQsIFwibmFtZSBtdXN0IG5vdCBiZSBzaG9ydGVyIHRoYW4gNCBjaGFyYWN0ZXJzXCJdLFxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwibmFtZSBpcyByZXF1aXJlZFwiXSxcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgfSxcbiAgICAgIHBpbjoge1xuICAgICAgICBtYXg6IHRoaXMuc2V0dGluZ3MucGluQ291bnQgLSAxLFxuICAgICAgICBtaW46IDAsXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJwaW4gaXMgcmVxdWlyZWRcIl0sXG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIH0sXG4gICAgICBzdGF0ZToge1xuICAgICAgICBkZWZhdWx0OiB0cnVlLFxuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgfSxcbiAgICAgIHR5cGU6IHtcbiAgICAgICAgZW51bTogW1wicmVsYXlcIiwgXCJzZW5zb3JcIiwgXCJzcGVjaWFsXCJdLFxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwidHlwZSBpcyByZXF1aXJlZFwiXSxcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgfSxcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIGRlZmF1bHQ6IDAsXG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
