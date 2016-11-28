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
var UserSchema = (function () {
    function UserSchema(settings) {
        var _this = this;
        this.setSchema = function () {
            var schema = new mongoose.Schema({
                password: {
                    maxlength: [128, "password must not be longer than 32 characters"],
                    minlength: [8, "password must not be shorter than 8 characters"],
                    required: [true, "password is required"],
                    type: String,
                },
                permissions: [{
                        maxlength: [16, "permission must not be longer than 16 characters"],
                        minlength: [4, "permission must not be shorter than 4 characters"],
                        type: String,
                    }],
                username: {
                    maxlength: [32, "username must not be longer than 32 characters"],
                    minlength: [4, "username must not be shorter than 4 characters"],
                    required: [true, "username is required"],
                    type: String,
                },
            });
            _this.schema = schema;
        };
        this.settings = settings;
        this.name = "User";
        this.isAuth = true;
        this.setSchema();
    }
    UserSchema = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject("Settings")), 
        __metadata('design:paramtypes', [Object])
    ], UserSchema);
    return UserSchema;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserSchema;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL3VzZXJTY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLFFBQU8sa0JBQWtCLENBQUMsQ0FBQTtBQUMxQiwwQkFBbUMsV0FBVyxDQUFDLENBQUE7QUFDL0MsSUFBTyxRQUFRLFdBQVcsVUFBVSxDQUFDLENBQUM7QUFDdEMsSUFBWSxRQUFRLFdBQU0sVUFBVSxDQUFDLENBQUE7QUFDckMsUUFBUSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7QUFFNUIsSUFBWSxVQUFVLFdBQU0sZUFBZSxDQUFDLENBQUE7QUFNNUM7SUFNRSxvQkFDc0IsUUFBOEI7UUFQdEQsaUJBMENDO1FBdkJTLGNBQVMsR0FBRztZQUNsQixJQUFJLE1BQU0sR0FBRyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQy9CLFFBQVEsRUFBRTtvQkFDUixTQUFTLEVBQUUsQ0FBQyxHQUFHLEVBQUUsZ0RBQWdELENBQUM7b0JBQ2xFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxnREFBZ0QsQ0FBQztvQkFDaEUsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLHNCQUFzQixDQUFDO29CQUN4QyxJQUFJLEVBQUUsTUFBTTtpQkFDYjtnQkFDRCxXQUFXLEVBQUUsQ0FBQzt3QkFDWixTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0RBQWtELENBQUM7d0JBQ25FLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxrREFBa0QsQ0FBQzt3QkFDbEUsSUFBSSxFQUFFLE1BQU07cUJBQ2IsQ0FBQztnQkFDRixRQUFRLEVBQUU7b0JBQ1IsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLGdEQUFnRCxDQUFDO29CQUNqRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsZ0RBQWdELENBQUM7b0JBQ2hFLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxzQkFBc0IsQ0FBQztvQkFDeEMsSUFBSSxFQUFFLE1BQU07aUJBQ2I7YUFDRixDQUFDLENBQUM7WUFFSCxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixDQUFDLENBQUE7UUFoQ0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFbkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFmSDtRQUFDLHNCQUFVLEVBQUU7bUJBUVIsa0JBQU0sQ0FBQyxVQUFVLENBQUM7O2tCQVJWO0lBMkNiLGlCQUFDO0FBQUQsQ0ExQ0EsQUEwQ0MsSUFBQTtBQTFDRDs0QkEwQ0MsQ0FBQSIsImZpbGUiOiJjbGFzc2VzL3VzZXJTY2hlbWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJyZWZsZWN0LW1ldGFkYXRhXCI7XG5pbXBvcnQgeyBpbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XG5pbXBvcnQgbW9uZ29vc2UgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XG5pbXBvcnQgKiBhcyBibHVlYmlyZCBmcm9tIFwiYmx1ZWJpcmRcIjtcbm1vbmdvb3NlLlByb21pc2UgPSBibHVlYmlyZDtcblxuaW1wb3J0ICogYXMgSU5URVJGQUNFUyBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xuLyoqXG4gKiBVc2VyU2NoZW1hIHJlcHJlc2VudHMgYSB1c2VyIGRhdGEgbW9kZWwgZm9yIHRoZSBNb25nb0RCXG4gKiB3aGljaCB3aWxsIGJlIHVzZWQgZm9yIGF1dGhlbnRpY2F0aW9uLlxuICovXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyU2NoZW1hIGltcGxlbWVudHMgSU5URVJGQUNFUy5JU2NoZW1hIHtcbiAgcHVibGljIHNldHRpbmdzOiBJTlRFUkZBQ0VTLklTZXR0aW5ncztcbiAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgcHVibGljIHNjaGVtYTogbW9uZ29vc2UuU2NoZW1hO1xuICBwdWJsaWMgaXNBdXRoOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoXCJTZXR0aW5nc1wiKSBzZXR0aW5nczogSU5URVJGQUNFUy5JU2V0dGluZ3NcbiAgKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMubmFtZSA9IFwiVXNlclwiO1xuICAgIHRoaXMuaXNBdXRoID0gdHJ1ZTtcblxuICAgIHRoaXMuc2V0U2NoZW1hKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIERldmljZSBzY2hlbWEgaXMgZGVzY3JpYmVkIGhlcmUuXG4gICAqL1xuICBwcml2YXRlIHNldFNjaGVtYSA9ICgpID0+IHtcbiAgICBsZXQgc2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgICBwYXNzd29yZDoge1xuICAgICAgICBtYXhsZW5ndGg6IFsxMjgsIFwicGFzc3dvcmQgbXVzdCBub3QgYmUgbG9uZ2VyIHRoYW4gMzIgY2hhcmFjdGVyc1wiXSxcbiAgICAgICAgbWlubGVuZ3RoOiBbOCwgXCJwYXNzd29yZCBtdXN0IG5vdCBiZSBzaG9ydGVyIHRoYW4gOCBjaGFyYWN0ZXJzXCJdLFxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwicGFzc3dvcmQgaXMgcmVxdWlyZWRcIl0sXG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIH0sXG4gICAgICBwZXJtaXNzaW9uczogW3tcbiAgICAgICAgbWF4bGVuZ3RoOiBbMTYsIFwicGVybWlzc2lvbiBtdXN0IG5vdCBiZSBsb25nZXIgdGhhbiAxNiBjaGFyYWN0ZXJzXCJdLFxuICAgICAgICBtaW5sZW5ndGg6IFs0LCBcInBlcm1pc3Npb24gbXVzdCBub3QgYmUgc2hvcnRlciB0aGFuIDQgY2hhcmFjdGVyc1wiXSxcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgfV0sXG4gICAgICB1c2VybmFtZToge1xuICAgICAgICBtYXhsZW5ndGg6IFszMiwgXCJ1c2VybmFtZSBtdXN0IG5vdCBiZSBsb25nZXIgdGhhbiAzMiBjaGFyYWN0ZXJzXCJdLFxuICAgICAgICBtaW5sZW5ndGg6IFs0LCBcInVzZXJuYW1lIG11c3Qgbm90IGJlIHNob3J0ZXIgdGhhbiA0IGNoYXJhY3RlcnNcIl0sXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJ1c2VybmFtZSBpcyByZXF1aXJlZFwiXSxcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hO1xuICB9XG59XG4iXX0=
