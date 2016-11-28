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
    function Controller(settings, logger, eventSystem) {
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
                _this.create(req.body)
                    .then(function (data) {
                    res.status(200).send({ id: data._id });
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
            _this.router.put("/:id", function (req, res, next) {
                var _data = req.body;
                _data._id = req.params.id;
                _this.update(_data)
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
            _this.router.delete("/:id", function (req, res, next) {
                _this.remove(req.params)
                    .then(function (data) {
                    res.sendStatus(200);
                })
                    .catch(function (error) {
                    _this.logger.error(error);
                    res.status(400).send(error);
                });
            });
        };
        this.setModel = function (model) {
            _this.model = model;
            _this.path = "/" + model.modelName.toLowerCase();
            _this.routerReady();
        };
        this.create = function (data) {
            _this.emitter.emit(_this.model.modelName);
            return new _this.model(data).save();
        };
        this.read = function (data) {
            return _this.model.find();
        };
        this.readOne = function (id) {
            return _this.model.findById(id);
        };
        this.update = function (data) {
            _this.emitter.emit(_this.model.modelName);
            return _this.model.findOneAndUpdate({ _id: data._id }, data, {
                new: true
            });
        };
        this.remove = function (data) {
            _this.emitter.emit(_this.model.modelName);
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
        this.emitter = eventSystem;
        this.router = express.Router();
    }
    Controller = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject("Settings")),
        __param(1, inversify_1.inject("Logger")),
        __param(2, inversify_1.inject("EventSystem")), 
        __metadata('design:paramtypes', [Object, Object, Object])
    ], Controller);
    return Controller;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Controller;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL2NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLFFBQU8sa0JBQWtCLENBQUMsQ0FBQTtBQUMxQiwwQkFBbUMsV0FBVyxDQUFDLENBQUE7QUFDL0MsSUFBWSxRQUFRLFdBQU0sVUFBVSxDQUFDLENBQUE7QUFDckMsSUFBWSxPQUFPLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFFbkMsSUFBWSxVQUFVLFdBQU0sZUFBZSxDQUFDLENBQUE7QUFRNUM7SUFRRSxvQkFDc0IsUUFBOEIsRUFDaEMsTUFBMEIsRUFDckIsV0FBb0M7UUFYL0QsaUJBZ0tDO1FBeklRLGdCQUFXLEdBQUc7WUFDbkIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO2dCQUNsQyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7cUJBQ2xCLElBQUksQ0FBQyxVQUFDLElBQUk7b0JBQ1QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO29CQUNYLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN6QixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUVILEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtnQkFDckMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztxQkFDMUIsSUFBSSxD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QUFDLENBQUMsQ0FBQzt3QkFDbEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNoQixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDaEIsQ0FBQztnQkFDSCxDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztvQkFDWCxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDekIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoQixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFBO1FBbEpDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO1FBRTNCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFuQkg7UUFBQyxzQkFBVSxFQUFFO21CQVVSLGtCQUFNLENBQUMsVUFBVSxDQUFDO21CQUNsQixrQkFBTSxDQUFDLFFBQVEsQ0FBQzttQkFDaEIsa0JBQU0sQ0FBQyxhQUFhLENBQUM7O2tCQVpiO0lBaUtiLGlCQUFDO0FBQUQsQ0FoS0EsQUFnS0MsSUFBQTtBQWhLRDs0QkFnS0MsQ0FBQSIsImZpbGUiOiJjbGFzc2VzL2NvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJyZWZsZWN0LW1ldGFkYXRhXCI7XG5pbXBvcnQgeyBpbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XG5pbXBvcnQgKiBhcyBibHVlYmlyZCBmcm9tIFwiYmx1ZWJpcmRcIjtcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcblxuaW1wb3J0ICogYXMgSU5URVJGQUNFUyBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xuXG4vKipcbiAqIENvbnRyb2xsZXIgaXMgYSBoYW5kbGVyIGZvciBzZXZlcmFsIEhUVFAgbWV0aG9kcyB0aGF0XG4gKiBjb21lIG9uIGl0J3MgcGF0aC4gSXQgZ2V0cyBhbmQgc2V0cyBkYXRhIGZyb20gaXQnc1xuICogbW9kZWwuXG4gKi9cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXIgaW1wbGVtZW50cyBJTlRFUkZBQ0VTLklDb250cm9sbGVyIHtcbiAgcHVibGljIHNldHRpbmdzOiBJTlRFUkZBQ0VTLklTZXR0aW5ncztcbiAgcHVibGljIGxvZ2dlcjogSU5URVJGQUNFUy5JTG9nZ2VyO1xuICBwdWJsaWMgZW1pdHRlcjogSU5URVJGQUNFUy5JRXZlbnRTeXN0ZW07XG4gIHB1YmxpYyByb3V0ZXI6IGV4cHJlc3MuUm91dGVyO1xuICBwdWJsaWMgbW9kZWw6IElOVEVSRkFDRVMuSU1vZGVsO1xuICBwdWJsaWMgcGF0aDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoXCJTZXR0aW5nc1wiKSBzZXR0aW5nczogSU5URVJGQUNFUy5JU2V0dGluZ3MsXG4gICAgQGluamVjdChcIkxvZ2dlclwiKSBsb2dnZXI6IElOVEVSRkFDRVMuSUxvZ2dlcixcbiAgICBAaW5qZWN0KFwiRXZlbnRTeXN0ZW1cIikgZXZlbnRTeXN0ZW06IElOVEVSRkFDRVMuSUV2ZW50U3lzdGVtXG4gICkge1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgICB0aGlzLmVtaXR0ZXIgPSBldmVudFN5c3RlbTtcblxuICAgIHRoaXMucm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIENSVUQgcm91dGVzLlxuICAgKi9cbiAgcHVibGljIHJvdXRlclJlYWR5ID0gKCkgPT4ge1xuICAgIHRoaXMucm91dGVyLmdldChcIi9cIiwgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICB0aGlzLnJlYWQocmVxLmJvZHkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChkYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJvdXRlci5nZXQoXCIvOmlkXCIsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgICAgdGhpcy5yZWFkT25lKHJlcS5wYXJhbXMuaWQpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChkYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJvdXRlci5wb3N0KFwiL1wiLCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlKHJlcS5ib2R5KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoeyBpZDogZGF0YS5faWQgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yLnRvU3RyaW5nKCkpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJvdXRlci5wdXQoXCIvXCIsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGUocmVxLmJvZHkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgcmVzLnNlbmRTdGF0dXMoMjAwKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJvdXRlci5wdXQoXCIvOmlkXCIsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgICAgbGV0IF9kYXRhID0gcmVxLmJvZHk7XG4gICAgICBfZGF0YS5faWQgPSByZXEucGFyYW1zLmlkO1xuICAgICAgdGhpcy51cGRhdGUoX2RhdGEpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHJlcy5zZW5kU3RhdHVzKDIwMCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yb3V0ZXIuZGVsZXRlKFwiL1wiLCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKHJlcS5ib2R5KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcmVzLnNlbmRTdGF0dXMoMjAwKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJvdXRlci5kZWxldGUoXCIvOmlkXCIsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmUocmVxLnBhcmFtcylcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICByZXMuc2VuZFN0YXR1cygyMDApO1xuICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgY29udHJvbGxlcnMgbW9kZWwuXG4gICAqL1xuICBwdWJsaWMgc2V0TW9kZWwgPSAobW9kZWw6IElOVEVSRkFDRVMuSU1vZGVsKSA9PiB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMucGF0aCA9IFwiL1wiICsgbW9kZWwubW9kZWxOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy5yb3V0ZXJSZWFkeSgpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZSA9IChkYXRhOiBhbnkpID0+IHtcbiAgICB0aGlzLmVtaXR0ZXIuZW1pdCh0aGlzLm1vZGVsLm1vZGVsTmFtZSk7XG4gICAgcmV0dXJuIG5ldyB0aGlzLm1vZGVsKGRhdGEpLnNhdmUoKTtcbiAgfVxuXG4gIHB1YmxpYyByZWFkID0gKGRhdGE6IGFueSkgPT4ge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmQoKTtcbiAgfVxuXG4gIHB1YmxpYyByZWFkT25lID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kQnlJZChpZCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlID0gKGRhdGE6IGFueSkgPT4ge1xuICAgIHRoaXMuZW1pdHRlci5lbWl0KHRoaXMubW9kZWwubW9kZWxOYW1lKTtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kT25lQW5kVXBkYXRlKHsgX2lkOiBkYXRhLl9pZCB9LCBkYXRhLCB7XG4gICAgICBuZXc6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmUgPSAoZGF0YTogYW55KSA9PiB7XG4gICAgdGhpcy5lbWl0dGVyLmVtaXQodGhpcy5tb2RlbC5tb2RlbE5hbWUpO1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmRCeUlkQW5kUmVtb3ZlKGRhdGEuaWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIG1vZGVsIGlzIGF1dGhlbnRpY2F0aW9uIG1vZGVsIHVzZSB0aGlzIG1ldGhvZCB0b1xuICAgKiB2YWxpZGF0ZSBsb2dpbiBjcmVkZW50aWFscy5cbiAgICovXG4gIHB1YmxpYyBjaGVja0xvZ2luID0gKGRhdGE6IGFueSkgPT4ge1xuICAgIHJldHVybiBuZXcgYmx1ZWJpcmQoKFxuICAgIHJlc29sdmU6ICh2YWx1ZT86IGFueSkgPT4gdm9pZCxcbiAgICByZWplY3Q6ICh2YWx1ZT86IGFueSkgPT4gdm9pZCkgPT4ge1xuICAgICAgdGhpcy5tb2RlbC5maW5kT25lKGRhdGEpXG4gICAgICAudGhlbigodXNlcikgPT4ge1xuICAgICAgICBpZiAodXNlciA9PT0gbnVsbCkge1xuICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZSh1c2VyKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
