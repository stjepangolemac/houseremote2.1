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
var bluebird = require("bluebird");
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
        this.checkLogin = function (data) {
            return new bluebird(function (resolve, reject) {
                _this.model.findOne(data)
                    .then(function (user) {
                    if (user === null) {
                        resolve(null);
                    }
                    else {
                        resolve(user);
                    }
                })
                    .catch(function (error) {
                    _this.logger.error(error);
                    reject(error);
                });
            });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL2NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLFFBQU8sa0JBQWtCLENBQUMsQ0FBQTtBQUMxQiwwQkFBbUMsV0FBVyxDQUFDLENBQUE7QUFDL0MsSUFBWSxRQUFRLFdBQU0sVUFBVSxDQUFDLENBQUE7QUFDckMsSUFBWSxPQUFPLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFFbkMsSUFBWSxVQUFVLFdBQU0sZUFBZSxDQUFDLENBQUE7QUFRNUM7SUFPRSxvQkFDc0IsUUFBOEIsRUFDaEMsTUFBMEI7UUFUaEQsaUJBNklDO1FBeEhRLGdCQUFXLEdBQUc7WUFDbkIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO2dCQUNsQyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7cUJBQ2xCLElBQUksQ0FBQyxVQUFDLElBQUk7b0JBQ1QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO29CQUNYLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN6QixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUVILEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtnQkFDckMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztxQkFDMUIsSUFBSSxDQUFDLFVBQUMsSUFB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QUFDO29CQUNoQixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDaEIsQ0FBQztnQkFDSCxDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztvQkFDWCxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDekIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoQixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFBO1FBaklDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBRXJCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBRWpDLENBQUM7SUFqQkg7UUFBQyxzQkFBVSxFQUFFO21CQVNSLGtCQUFNLENBQUMsVUFBVSxDQUFDO21CQUNsQixrQkFBTSxDQUFDLFFBQVEsQ0FBQzs7a0JBVlI7SUE4SWIsaUJBQUM7QUFBRCxDQTdJQSxBQTZJQyxJQUFBO0FBN0lEOzRCQTZJQyxDQUFBIiwiZmlsZSI6ImNsYXNzZXMvY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcbmltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCAqIGFzIGJsdWViaXJkIGZyb20gXCJibHVlYmlyZFwiO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuXG5pbXBvcnQgKiBhcyBJTlRFUkZBQ0VTIGZyb20gXCIuLi9pbnRlcmZhY2VzXCI7XG5cbi8qKlxuICogQ29udHJvbGxlciBpcyBhIGhhbmRsZXIgZm9yIHNldmVyYWwgSFRUUCBtZXRob2RzIHRoYXRcbiAqIGNvbWUgb24gaXQncyBwYXRoLiBJdCBnZXRzIGFuZCBzZXRzIGRhdGEgZnJvbSBpdCdzXG4gKiBtb2RlbC5cbiAqL1xuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciBpbXBsZW1lbnRzIElOVEVSRkFDRVMuSUNvbnRyb2xsZXIge1xuICBwdWJsaWMgc2V0dGluZ3M6IElOVEVSRkFDRVMuSVNldHRpbmdzO1xuICBwdWJsaWMgbG9nZ2VyOiBJTlRFUkZBQ0VTLklMb2dnZXI7XG4gIHB1YmxpYyByb3V0ZXI6IGV4cHJlc3MuUm91dGVyO1xuICBwdWJsaWMgbW9kZWw6IElOVEVSRkFDRVMuSU1vZGVsO1xuICBwdWJsaWMgcGF0aDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoXCJTZXR0aW5nc1wiKSBzZXR0aW5nczogSU5URVJGQUNFUy5JU2V0dGluZ3MsXG4gICAgQGluamVjdChcIkxvZ2dlclwiKSBsb2dnZXI6IElOVEVSRkFDRVMuSUxvZ2dlclxuICApIHtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG5cbiAgICB0aGlzLnJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG4gICAgLy8gdGhpcy5yb3V0ZXJOb3RSZWFkeSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgQ1JVRCByb3V0ZXMuXG4gICAqL1xuICBwdWJsaWMgcm91dGVyUmVhZHkgPSAoKSA9PiB7XG4gICAgdGhpcy5yb3V0ZXIuZ2V0KFwiL1wiLCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICAgIHRoaXMucmVhZChyZXEuYm9keSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMucm91dGVyLmdldChcIi86aWRcIiwgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICB0aGlzLnJlYWRPbmUocmVxLnBhcmFtcy5pZClcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMucm91dGVyLnBvc3QoXCIvXCIsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgICAgbGV0IHJlcXVlc3RCb2R5ID0gcmVxLmJvZHk7XG4gICAgICB0aGlzLmNyZWF0ZShyZXF1ZXN0Qm9keSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHJlcy5zZW5kU3RhdHVzKDIwMCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yLnRvU3RyaW5nKCkpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJvdXRlci5wdXQoXCIvXCIsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGUocmVxLmJvZHkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICByZXMuc2VuZFN0YXR1cygyMDApO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMucm91dGVyLmRlbGV0ZShcIi9cIiwgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZShyZXEuYm9keSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHJlcy5zZW5kU3RhdHVzKDIwMCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlbXBvcmFyeSBzZXQgYWxsIHJvdXRlcyBhcyB1bmF2YWlsYWJsZS5cbiAgICovXG4gIHB1YmxpYyByb3V0ZXJOb3RSZWFkeSA9ICgpID0+IHtcbiAgICB0aGlzLnJvdXRlci5hbGwoXCIvKlwiLCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICAgIHJlcy5zZW5kU3RhdHVzKDUwMyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGNvbnRyb2xsZXJzIG1vZGVsLlxuICAgKi9cbiAgcHVibGljIHNldE1vZGVsID0gKG1vZGVsOiBJTlRFUkZBQ0VTLklNb2RlbCkgPT4ge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLnBhdGggPSBcIi9cIiArIG1vZGVsLm1vZGVsTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIHRoaXMucm91dGVyUmVhZHkoKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUgPSAoZGF0YTogYW55KSA9PiB7XG4gICAgcmV0dXJuIG5ldyB0aGlzLm1vZGVsKGRhdGEpLnNhdmUoKTtcbiAgfVxuXG4gIHB1YmxpYyByZWFkID0gKGRhdGE6IGFueSkgPT4ge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmQoKTtcbiAgfVxuXG4gIHB1YmxpYyByZWFkT25lID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kQnlJZChpZCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlID0gKGRhdGE6IGFueSkgPT4ge1xuICAgIGxldCBpZCA9IGRhdGEuaWQ7XG4gICAgZGVsZXRlIGRhdGEuaWQ7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZmluZEJ5SWRBbmRVcGRhdGUoaWQsIGRhdGEpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZSA9IChkYXRhOiBhbnkpID0+IHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kQnlJZEFuZFJlbW92ZShkYXRhLmlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiBtb2RlbCBpcyBhdXRoZW50aWNhdGlvbiBtb2RlbCB1c2UgdGhpcyBtZXRob2QgdG9cbiAgICogdmFsaWRhdGUgbG9naW4gY3JlZGVudGlhbHMuXG4gICAqL1xuICBwdWJsaWMgY2hlY2tMb2dpbiA9IChkYXRhOiBhbnkpID0+IHtcbiAgICByZXR1cm4gbmV3IGJsdWViaXJkKChcbiAgICByZXNvbHZlOiAodmFsdWU/OiBhbnkpID0+IHZvaWQsXG4gICAgcmVqZWN0OiAodmFsdWU/OiBhbnkpID0+IHZvaWQpID0+IHtcbiAgICAgIHRoaXMubW9kZWwuZmluZE9uZShkYXRhKVxuICAgICAgLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgICAgaWYgKHVzZXIgPT09IG51bGwpIHtcbiAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUodXNlcik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
