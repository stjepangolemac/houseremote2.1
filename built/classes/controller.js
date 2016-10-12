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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL2NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLFFBQU8sa0JBQWtCLENBQUMsQ0FBQTtBQUMxQiwwQkFBbUMsV0FBVyxDQUFDLENBQUE7QUFFL0MsSUFBWSxPQUFPLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFFbkMsSUFBWSxVQUFVLFdBQU0sZUFBZSxDQUFDLENBQUE7QUFRNUM7SUFPRSxvQkFDc0IsUUFBOEIsRUFDaEMsTUFBMEI7UUFUaEQsaUJBc0hDO1FBakdRLGdCQUFXLEdBQUc7WUFDbkIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO2dCQUNsQyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7cUJBQ2xCLElBQUksQ0FBQyxVQUFDLElBQUk7b0JBQ1QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO29CQUNYLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN6QixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUVILEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtnQkFDckMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztxQkFDMUIsSUFBSSxDQUFDLFVBQUMsSUFBSTtvQkFDVCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FB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IiwiZmlsZSI6ImNsYXNzZXMvY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcbmltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuXG5pbXBvcnQgKiBhcyBJTlRFUkZBQ0VTIGZyb20gXCIuLi9pbnRlcmZhY2VzXCI7XG5cbi8qKlxuICogQ29udHJvbGxlciBpcyBhIGhhbmRsZXIgZm9yIHNldmVyYWwgSFRUUCBtZXRob2RzIHRoYXRcbiAqIGNvbWUgb24gaXQncyBwYXRoLiBJdCBnZXRzIGFuZCBzZXRzIGRhdGEgZnJvbSBpdCdzXG4gKiBtb2RlbC5cbiAqL1xuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciBpbXBsZW1lbnRzIElOVEVSRkFDRVMuSUNvbnRyb2xsZXIge1xuICBwdWJsaWMgc2V0dGluZ3M6IElOVEVSRkFDRVMuSVNldHRpbmdzO1xuICBwdWJsaWMgbG9nZ2VyOiBJTlRFUkZBQ0VTLklMb2dnZXI7XG4gIHB1YmxpYyByb3V0ZXI6IGV4cHJlc3MuUm91dGVyO1xuICBwdWJsaWMgbW9kZWw6IG1vbmdvb3NlLk1vZGVsPG1vbmdvb3NlLkRvY3VtZW50PjtcbiAgcHVibGljIHBhdGg6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAaW5qZWN0KFwiU2V0dGluZ3NcIikgc2V0dGluZ3M6IElOVEVSRkFDRVMuSVNldHRpbmdzLFxuICAgIEBpbmplY3QoXCJMb2dnZXJcIikgbG9nZ2VyOiBJTlRFUkZBQ0VTLklMb2dnZXJcbiAgKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuXG4gICAgdGhpcy5yb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuICAgIC8vIHRoaXMucm91dGVyTm90UmVhZHkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIENSVUQgcm91dGVzLlxuICAgKi9cbiAgcHVibGljIHJvdXRlclJlYWR5ID0gKCkgPT4ge1xuICAgIHRoaXMucm91dGVyLmdldChcIi9cIiwgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICB0aGlzLnJlYWQocmVxLmJvZHkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChkYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJvdXRlci5nZXQoXCIvOmlkXCIsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgICAgdGhpcy5yZWFkT25lKHJlcS5wYXJhbXMuaWQpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChkYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJvdXRlci5wb3N0KFwiL1wiLCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICAgIGxldCByZXF1ZXN0Qm9keSA9IHJlcS5ib2R5O1xuICAgICAgdGhpcy5jcmVhdGUocmVxdWVzdEJvZHkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICByZXMuc2VuZFN0YXR1cygyMDApO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvci50b1N0cmluZygpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yb3V0ZXIucHV0KFwiL1wiLCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlKHJlcS5ib2R5KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcmVzLnNlbmRTdGF0dXMoMjAwKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJvdXRlci5kZWxldGUoXCIvXCIsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmUocmVxLmJvZHkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICByZXMuc2VuZFN0YXR1cygyMDApO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZW1wb3Jhcnkgc2V0IGFsbCByb3V0ZXMgYXMgdW5hdmFpbGFibGUuXG4gICAqL1xuICBwdWJsaWMgcm91dGVyTm90UmVhZHkgPSAoKSA9PiB7XG4gICAgdGhpcy5yb3V0ZXIuYWxsKFwiLypcIiwgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICByZXMuc2VuZFN0YXR1cyg1MDMpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjb250cm9sbGVycyBtb2RlbC5cbiAgICovXG4gIHB1YmxpYyBzZXRNb2RlbCA9IChtb2RlbDogbW9uZ29vc2UuTW9kZWw8bW9uZ29vc2UuRG9jdW1lbnQ+KSA9PiB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMucGF0aCA9IFwiL1wiICsgbW9kZWwubW9kZWxOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy5yb3V0ZXJSZWFkeSgpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZSA9IChkYXRhOiBhbnkpID0+IHtcbiAgICByZXR1cm4gbmV3IHRoaXMubW9kZWwoZGF0YSkuc2F2ZSgpO1xuICB9XG5cbiAgcHVibGljIHJlYWQgPSAoZGF0YTogYW55KSA9PiB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZmluZCgpO1xuICB9XG5cbiAgcHVibGljIHJlYWRPbmUgPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmRCeUlkKGlkKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUgPSAoZGF0YTogYW55KSA9PiB7XG4gICAgbGV0IGlkID0gZGF0YS5pZDtcbiAgICBkZWxldGUgZGF0YS5pZDtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kQnlJZEFuZFVwZGF0ZShpZCwgZGF0YSk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlID0gKGRhdGE6IGFueSkgPT4ge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmRCeUlkQW5kUmVtb3ZlKGRhdGEuaWQpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
