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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL2RldmljZVNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsUUFBTyxrQkFBa0IsQ0FBQyxDQUFBO0FBQzFCLDBCQUFtQyxXQUFXLENBQUMsQ0FBQTtBQUMvQyxJQUFPLFFBQVEsV0FBVyxVQUFVLENBQUMsQ0FBQztBQUN0QyxJQUFZLFFBQVEsV0FBTSxVQUFVLENBQUMsQ0FBQTtBQUNyQyxRQUFRLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztBQUU1QixJQUFZLFVBQVUsV0FBTSxlQUFlLENBQUMsQ0FBQTtBQUs1QztJQUtFLHNCQUNzQixRQUE4QjtRQU50RCxpQkFxREM7UUFyQ1MsY0FBUyxHQUFHO1lBQ2xCLElBQUksTUFBTSxHQUFHLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDL0IsV0FBVyxFQUFFO29CQUNYLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxvREFBb0QsQ0FBQztvQkFDdEUsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLG9EQUFvRCxDQUFDO29CQUNyRSxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUseUJBQXlCLENBQUM7b0JBQzNDLElBQUksRUFBRSxNQUFNO2lCQUNiO2dCQUNELElBQUksRUFBRTtvQkFDSixTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsNENBQTRDLENBQUM7b0JBQzdELFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSw0Q0FBNEMsQ0FBQztvQkFDNUQsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDO29CQUNwQyxJQUFJLEVBQUUsTUFBTTtpQkFDYjtnQkFDRCxHQUFHLEVBQUU7b0JBQ0gsR0FBRyxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLENBQUM7b0JBQy9CLEdBQUcsRUFBRSxDQUFDO29CQUNOLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQztvQkFDbkMsSUFBSSxFQUFFLE1BQU07aUJBQ2I7Z0JBQ0QsS0FBSyxFQUFFO29CQUNMLE9BQU8sRUFBRSxJQUFJO29CQUNiLElBQUksRUFBRSxPQUFPO2lCQUNkO2dCQUNELElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQztvQkFDcEMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDO29CQUNwQyxJQUFJLEVBQUUsTUFBTTtpQkFDYjtnQkFDRCxLQUFLLEVBQUU7b0JBQ0wsT0FBTyxFQUFFLENBQUM7b0JBQ1YsSUFBSSxFQUFFLE1BQU07aUJBQ2I7YUFDRixDQUFDLENBQUM7WUFFSCxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixDQUFDLENBQUE7UUE1Q0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFaSDtRQUFDLHNCQUFVLEVBQUU7bUJBT1Isa0JBQU0sQ0FBQyxVQUFVLENBQUM7O29CQVBWO0lBc0RiLG1CQUFDO0FBQUQsQ0FyREEsQUFxREMsSUFBQTtBQXJERDs4QkFxREMsQ0FBQSIsImZpbGUiOiJjbGFzc2VzL2RldmljZVNjaGVtYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcbmltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCBtb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcbmltcG9ydCAqIGFzIGJsdWViaXJkIGZyb20gXCJibHVlYmlyZFwiO1xubW9uZ29vc2UuUHJvbWlzZSA9IGJsdWViaXJkO1xuXG5pbXBvcnQgKiBhcyBJTlRFUkZBQ0VTIGZyb20gXCIuLi9pbnRlcmZhY2VzXCI7XG4vKipcbiAqIERldmljZVNjaGVtYSByZXByZXNlbnRzIGEgZGV2aWNlIGRhdGEgbW9kZWwgZm9yIHRoZSBNb25nb0RCXG4gKi9cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldmljZVNjaGVtYSBpbXBsZW1lbnRzIElOVEVSRkFDRVMuSVNjaGVtYSB7XG4gIHB1YmxpYyBzZXR0aW5nczogSU5URVJGQUNFUy5JU2V0dGluZ3M7XG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBzY2hlbWE6IG1vbmdvb3NlLlNjaGVtYTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAaW5qZWN0KFwiU2V0dGluZ3NcIikgc2V0dGluZ3M6IElOVEVSRkFDRVMuSVNldHRpbmdzXG4gICkge1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICB0aGlzLm5hbWUgPSBcIkRldmljZVwiO1xuICAgIHRoaXMuc2V0U2NoZW1hKCk7XG4gIH1cblxuLyoqXG4gKiBUaGUgRGV2aWNlIHNjaGVtYSBpcyBkZXNjcmliZWQgaGVyZS5cbiAqL1xuICBwcml2YXRlIHNldFNjaGVtYSA9ICgpID0+IHtcbiAgICBsZXQgc2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICBtYXhsZW5ndGg6IFsxMjgsIFwiZGVzY3JpcHRpb24gbXVzdCBub3QgYmUgbG9uZ2VyIHRoYW4gMTI4IGNoYXJhY3RlcnNcIl0sXG4gICAgICAgIG1pbmxlbmd0aDogWzE2LCBcImRlc2NyaXB0aW9uIG11c3Qgbm90IGJlIHNob3J0ZXIgdGhhbiAxNiBjaGFyYWN0ZXJzXCJdLFxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiZGVzY3JpcHRpb24gaXMgcmVxdWlyZWRcIl0sXG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIH0sXG4gICAgICBuYW1lOiB7XG4gICAgICAgIG1heGxlbmd0aDogWzMyLCBcIm5hbWUgbXVzdCBub3QgYmUgbG9uZ2VyIHRoYW4gMzIgY2hhcmFjdGVyc1wiXSxcbiAgICAgICAgbWlubGVuZ3RoOiBbNCwgXCJuYW1lIG11c3Qgbm90IGJlIHNob3J0ZXIgdGhhbiA0IGNoYXJhY3RlcnNcIl0sXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJuYW1lIGlzIHJlcXVpcmVkXCJdLFxuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuICAgICAgcGluOiB7XG4gICAgICAgIG1heDogdGhpcy5zZXR0aW5ncy5waW5Db3VudCAtIDEsXG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcInBpbiBpcyByZXF1aXJlZFwiXSxcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgfSxcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB9LFxuICAgICAgdHlwZToge1xuICAgICAgICBlbnVtOiBbXCJyZWxheVwiLCBcInNlbnNvclwiLCBcInNwZWNpYWxcIl0sXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJ0eXBlIGlzIHJlcXVpcmVkXCJdLFxuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgZGVmYXVsdDogMCxcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
