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
var bluebird = require("bluebird");
var jwt = require("jsonwebtoken");
var INTERFACES = require("../interfaces");
var TokenManager = (function () {
    function TokenManager(settings, logger) {
        var _this = this;
        this.signToken = function (payload) {
            return new bluebird(function (resolve, reject) {
                jwt.sign(payload, _this.settings.key, _this.options, function (error, token) {
                    if (error) {
                        _this.logger.error(error.message);
                        reject(error);
                    }
                    else {
                        resolve(token);
                    }
                });
            });
        };
        this.validateToken = function (token) {
            return new bluebird(function (resolve, reject) {
                jwt.verify(token, _this.settings.key, _this.options, function (err, decoded) {
                    if (err) {
                        _this.logger.error(err.message);
                        reject(err);
                    }
                    else {
                        resolve(decoded);
                    }
                });
            });
        };
        this.settings = settings;
        this.logger = logger;
        this.options = {
            audience: "houseremote.ddns.net",
            issuer: "houseremote.ddns.net",
        };
    }
    TokenManager = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject("Settings")),
        __param(1, inversify_1.inject("Logger")), 
        __metadata('design:paramtypes', [Object, Object])
    ], TokenManager);
    return TokenManager;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TokenManager;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL3Rva2VuTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsMEJBQW1DLFdBQVcsQ0FBQyxDQUFBO0FBQy9DLElBQVksUUFBUSxXQUFNLFVBQVUsQ0FBQyxDQUFBO0FBQ3JDLElBQVksR0FBRyxXQUFNLGNBQWMsQ0FBQyxDQUFBO0FBQ3BDLElBQVksVUFBVSxXQUFNLGVBQWUsQ0FBQyxDQUFBO0FBTzVDO0lBTUUsc0JBQ3NCLFFBQThCLEVBQ2hDLE1BQTBCO1FBUmhELGlCQXNEQztRQWhDUSxjQUFTLEdBQUcsVUFBQyxPQUFZO1lBQzlCLE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxVQUNwQixPQUE4QixFQUM5QixNQUE2QjtnQkFDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsS0FBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQUssRUFBRSxLQUFLO29CQUM5RCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUNWLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDakMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNoQixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDakIsQ0FBQztnQkFDSCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFBO1FBS00sa0JBQWEsR0FBRyxVQUFDLEtBQWE7WUFDbkMsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLFVBQ3BCLE9BQThCLEVBQzlCLE1BQTZCO2dCQUMzQixHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFJLENBQUMsT0FBTyxFQUFFLFVBQUMsR0FBRyxFQUFFLE9BQU87b0JBQzlELEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ1IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUMvQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2QsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ25CLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQTtRQTNDQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxNQUFNLEVBQUUsc0JBQXNCO1NBQy9CLENBQUM7SUFDSixDQUFDO0lBbEJIO1FBQUMsc0JBQVUsRUFBRTttQkFRUixrQkFBTSxDQUFDLFVBQVUsQ0FBQzttQkFDbEIsa0JBQU0sQ0FBQyxRQUFRLENBQUM7O29CQVRSO0lBdURiLG1CQUFDO0FBQUQsQ0F0REEsQUFzREMsSUFBQTtBQXRERDs4QkFzREMsQ0FBQSIsImZpbGUiOiJjbGFzc2VzL3Rva2VuTWFuYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCAqIGFzIGJsdWViaXJkIGZyb20gXCJibHVlYmlyZFwiO1xuaW1wb3J0ICogYXMgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcbmltcG9ydCAqIGFzIElOVEVSRkFDRVMgZnJvbSBcIi4uL2ludGVyZmFjZXNcIjtcblxuLyoqXG4gKiBUb2tlbk1hbmFnZXIgc2lnbnMgYW5kIHZhbGlkYXRlcyB0b2tlbnMsIGFuZCBhdXRoZW50aWNhdGVzXG4gKiByZXF1ZXN0cyBiZWZvcmUgcGFzc2luZ3MgdGhlbSB0byBDb250cm9sbGVyTWFuYWdlci5cbiAqL1xuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9rZW5NYW5hZ2VyIGltcGxlbWVudHMgSU5URVJGQUNFUy5JVG9rZW5NYW5hZ2VyIHtcbiAgcHVibGljIHNldHRpbmdzOiBJTlRFUkZBQ0VTLklTZXR0aW5ncztcbiAgcHVibGljIGxvZ2dlcjogSU5URVJGQUNFUy5JTG9nZ2VyO1xuXG4gIHByaXZhdGUgb3B0aW9uczogT2JqZWN0O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoXCJTZXR0aW5nc1wiKSBzZXR0aW5nczogSU5URVJGQUNFUy5JU2V0dGluZ3MsXG4gICAgQGluamVjdChcIkxvZ2dlclwiKSBsb2dnZXI6IElOVEVSRkFDRVMuSUxvZ2dlclxuICApIHtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBhdWRpZW5jZTogXCJob3VzZXJlbW90ZS5kZG5zLm5ldFwiLFxuICAgICAgaXNzdWVyOiBcImhvdXNlcmVtb3RlLmRkbnMubmV0XCIsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUYWtlcyBwYXlsb2FkIGFuZCBzaWducyBhIHRva2VuLlxuICAgKi9cbiAgcHVibGljIHNpZ25Ub2tlbiA9IChwYXlsb2FkOiBhbnkpID0+IHtcbiAgICByZXR1cm4gbmV3IGJsdWViaXJkKChcbiAgICByZXNvbHZlOiAodmFsdWU/OiBhbnkpID0+IHZvaWQsXG4gICAgcmVqZWN0OiAodmFsdWU/OiBhbnkpID0+IHZvaWQpID0+IHtcbiAgICAgIGp3dC5zaWduKHBheWxvYWQsIHRoaXMuc2V0dGluZ3Mua2V5LCB0aGlzLm9wdGlvbnMsIChlcnJvciwgdG9rZW4pID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHRva2VuKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGFrZXMgdG9rZW4gYW5kIHJldHVybnMgcGF5bG9hZCBpZiBpdCBpcyB2YWxpZC5cbiAgICovXG4gIHB1YmxpYyB2YWxpZGF0ZVRva2VuID0gKHRva2VuOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gbmV3IGJsdWViaXJkKChcbiAgICByZXNvbHZlOiAodmFsdWU/OiBhbnkpID0+IHZvaWQsXG4gICAgcmVqZWN0OiAodmFsdWU/OiBhbnkpID0+IHZvaWQpID0+IHtcbiAgICAgIGp3dC52ZXJpZnkodG9rZW4sIHRoaXMuc2V0dGluZ3Mua2V5LCB0aGlzLm9wdGlvbnMsIChlcnIsIGRlY29kZWQpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGRlY29kZWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
