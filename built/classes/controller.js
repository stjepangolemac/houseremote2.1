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
var express = require("express");
var INTERFACES = require("../interfaces");
var Controller = (function () {
    function Controller(settings, logger) {
        var _this = this;
        this.routerReady = function () {
            _this.router.get("/", function (req, res, next) {
                _this.read(req.body)
                    .then(function (data) {
                    res.status(200).send(data);
                })
                    .catch(function (error) {
                    _this.logger.error(error);
                    res.status(400).send(error);
                });
            });
            _this.router.get("/:id", function (req, res, next) {
                _this.readOne(req.params.id)
                    .then(function (data) {
                    res.status(200).send(data);
                })
                    .catch(function (error) {
                    _this.logger.error(error);
                    res.status(400).send(error);
                });
            });
            _this.router.post("/", function (req, res, next) {
                var requestBody = req.body;
                _this.create(requestBody)
                    .then(function (data) {
                    res.sendStatus(200);
                })
                    .catch(function (error) {
                    _this.logger.error(error);
                    res.status(400).send(error.toString());
                });
            });
            _this.router.put("/", function (req, res, next) {
                _this.update(req.body)
                    .then(function (data) {
                    res.sendStatus(200);
                })
                    .catch(function (error) {
                    _this.logger.error(error);
                    res.status(400).send(error);
                });
            });
            _this.router.delete("/", function (req, res, next) {
                _this.remove(req.body)
                    .then(function (data) {
                    res.sendStatus(200);
                })
                    .catch(function (error) {
                    _this.logger.error(error);
                    res.status(400).send(error);
                });
            });
        };
        this.routerNotReady = function () {
            _this.router.all("/*", function (req, res, next) {
                res.sendStatus(503);
            });
        };
        this.setModel = function (model) {
            _this.model = model;
            _this.path = "/" + model.modelName.toLowerCase();
            _this.routerReady();
        };
        this.create = function (data) {
            return new _this.model(data).save();
        };
        this.read = function (data) {
            return _this.model.find();
        };
        this.readOne = function (id) {
            return _this.model.findById(id);
        };
        this.update = function (data) {
            var id = data.id;
            delete data.id;
            return _this.model.findByIdAndUpdate(id, data);
        };
        this.remove = function (data) {
            return _this.model.findByIdAndRemove(data.id);
        };
        this.settings = settings;
        this.logger = logger;
        this.router = express.Router();
    }
    Controller = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject("Settings")),
        __param(1, inversify_1.inject("Logger")), 
        __metadata('design:paramtypes', [Object, Object])
    ], Controller);
    return Controller;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Controller;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL2NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDBCQUFtQyxXQUFXLENBQUMsQ0FBQTtBQUUvQyxJQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUVuQyxJQUFZLFVBQVUsV0FBTSxlQUFlLENBQUMsQ0FBQTtBQVE1QztJQU9FLG9CQUNzQixRQUE4QixFQUNoQyxNQUEwQjtRQVRoRCxpQkFzSEM7UUFqR1EsZ0JBQVcsR0FBRztZQUNuQixLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7Z0JBQ2xDLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztxQkFDbEIsSUFBSSxDQUFDLFVBQUMsSUFBSTtvQkFDVCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7b0JBQ1gsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUgsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO2dCQUNyQyxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO3FCQUMxQixJQUFJLENBQUMsVUFBQyxJQUFJO29CQUNULEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxD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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5cbmltcG9ydCAqIGFzIElOVEVSRkFDRVMgZnJvbSBcIi4uL2ludGVyZmFjZXNcIjtcblxuLyoqXG4gKiBDb250cm9sbGVyIGlzIGEgaGFuZGxlciBmb3Igc2V2ZXJhbCBIVFRQIG1ldGhvZHMgdGhhdFxuICogY29tZSBvbiBpdCdzIHBhdGguIEl0IGdldHMgYW5kIHNldHMgZGF0YSBmcm9tIGl0J3NcbiAqIG1vZGVsLlxuICovXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyIGltcGxlbWVudHMgSU5URVJGQUNFUy5JQ29udHJvbGxlciB7XG4gIHB1YmxpYyBzZXR0aW5nczogSU5URVJGQUNFUy5JU2V0dGluZ3M7XG4gIHB1YmxpYyBsb2dnZXI6IElOVEVSRkFDRVMuSUxvZ2dlcjtcbiAgcHVibGljIHJvdXRlcjogZXhwcmVzcy5Sb3V0ZXI7XG4gIHB1YmxpYyBtb2RlbDogbW9uZ29vc2UuTW9kZWw8bW9uZ29vc2UuRG9jdW1lbnQ+O1xuICBwdWJsaWMgcGF0aDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoXCJTZXR0aW5nc1wiKSBzZXR0aW5nczogSU5URVJGQUNFUy5JU2V0dGluZ3MsXG4gICAgQGluamVjdChcIkxvZ2dlclwiKSBsb2dnZXI6IElOVEVSRkFDRVMuSUxvZ2dlclxuICApIHtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG5cbiAgICB0aGlzLnJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG4gICAgLy8gdGhpcy5yb3V0ZXJOb3RSZWFkeSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgQ1JVRCByb3V0ZXMuXG4gICAqL1xuICBwdWJsaWMgcm91dGVyUmVhZHkgPSAoKSA9PiB7XG4gICAgdGhpcy5yb3V0ZXIuZ2V0KFwiL1wiLCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICAgIHRoaXMucmVhZChyZXEuYm9keSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMucm91dGVyLmdldChcIi86aWRcIiwgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICB0aGlzLnJlYWRPbmUocmVxLnBhcmFtcy5pZClcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMucm91dGVyLnBvc3QoXCIvXCIsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgICAgbGV0IHJlcXVlc3RCb2R5ID0gcmVxLmJvZHk7XG4gICAgICB0aGlzLmNyZWF0ZShyZXF1ZXN0Qm9keSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHJlcy5zZW5kU3RhdHVzKDIwMCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yLnRvU3RyaW5nKCkpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJvdXRlci5wdXQoXCIvXCIsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGUocmVxLmJvZHkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICByZXMuc2VuZFN0YXR1cygyMDApO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMucm91dGVyLmRlbGV0ZShcIi9cIiwgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZShyZXEuYm9keSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHJlcy5zZW5kU3RhdHVzKDIwMCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlbXBvcmFyeSBzZXQgYWxsIHJvdXRlcyBhcyB1bmF2YWlsYWJsZS5cbiAgICovXG4gIHB1YmxpYyByb3V0ZXJOb3RSZWFkeSA9ICgpID0+IHtcbiAgICB0aGlzLnJvdXRlci5hbGwoXCIvKlwiLCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICAgIHJlcy5zZW5kU3RhdHVzKDUwMyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGNvbnRyb2xsZXJzIG1vZGVsLlxuICAgKi9cbiAgcHVibGljIHNldE1vZGVsID0gKG1vZGVsOiBtb25nb29zZS5Nb2RlbDxtb25nb29zZS5Eb2N1bWVudD4pID0+IHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy5wYXRoID0gXCIvXCIgKyBtb2RlbC5tb2RlbE5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICB0aGlzLnJvdXRlclJlYWR5KCk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlID0gKGRhdGE6IGFueSkgPT4ge1xuICAgIHJldHVybiBuZXcgdGhpcy5tb2RlbChkYXRhKS5zYXZlKCk7XG4gIH1cblxuICBwdWJsaWMgcmVhZCA9IChkYXRhOiBhbnkpID0+IHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kKCk7XG4gIH1cblxuICBwdWJsaWMgcmVhZE9uZSA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZmluZEJ5SWQoaWQpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IHtcbiAgICBsZXQgaWQgPSBkYXRhLmlkO1xuICAgIGRlbGV0ZSBkYXRhLmlkO1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmRCeUlkQW5kVXBkYXRlKGlkLCBkYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmUgPSAoZGF0YTogYW55KSA9PiB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZmluZEJ5SWRBbmRSZW1vdmUoZGF0YS5pZCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
