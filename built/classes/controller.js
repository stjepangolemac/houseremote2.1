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
            _this.router.delete("/:id", function (req, res, next) {
                _this.remove(req.params.id)
                    .then(function (data) {
                    console.log(data);
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
            var id = data.id;
            delete data.id;
            return _this.model.findByIdAndUpdate(id, data);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jbGFzc2VzL2NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLFFBQU8sa0JBQWtCLENBQUMsQ0FBQTtBQUMxQiwwQkFBbUMsV0FBVyxDQUFDLENBQUE7QUFDL0MsSUFBWSxRQUFRLFdBQU0sVUFBVSxDQUFDLENBQUE7QUFDckMsSUFBWSxPQUFPLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFFbkMsSUFBWSxVQUFVLFdBQU0sZUFBZSxDQUFDLENBQUE7QUFRNUM7SUFRRSxvQkFDc0IsUUFBOEIsRUFDaEMsTUFBMEIsRUFDckIsV0FBb0M7UUFYL0QsaUJBcUpDO1FBOUhRLGdCQUFXLEdBQUc7WUFDbkIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO2dCQUNsQyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7cUJBQ2xCLElBQUksQ0FBQyxVQUFDLElBQUk7b0JBQ1QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO29CQUNYLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN6QixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUVILEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtnQkFDckMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztxQkFDMUIsSUFBSSxDQUFDLFVBQUMsSUFBSTtvQkFDVCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7b0JBQ1gsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUgsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO2dCQUNuQyxJQUFJLFdBQVcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUMzQixLQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztxQkFDdkIsSUFBSSxDQUFDLFVBQUMsSUFBSTtvQkFDVCxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QixDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztvQkFDWCxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDekIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBQ3pDLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7Z0JBQ2xDLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztxQkFDcEIsSUFBSSxDQUFDLFVBQUMsSUFBSTtvQkFDVCxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QixDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztvQkFDWCxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDekIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7Z0JBQ3JDLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztxQkFDcEIsSUFBSSxDQUFDLFVBQUMsSUFBSTtvQkFDVCxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QixDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztvQkFDWCxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDekIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7Z0JBQ3hDLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7cUJBQ3ZCLElBQUksQ0FBQyxVQUFDLElBQUk7b0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEIsQ0FBQyxDQUFDO3FCQUNDLEtBQUssQ0FBQyxVQUFDLEtBQUs7b0JBQ2IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFBO1FBS00sYUFBUSxHQUFHLFVBQUMsS0FBd0I7WUFDekMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsS0FBSSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNoRCxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFBO1FBRU0sV0FBTSxHQUFHLFVBQUMsSUFBUztZQUN4QixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sQ0FBQyxJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckMsQ0FBQyxDQUFBO1FBRU0sU0FBSSxHQUFHLFVBQUMsSUFBUztZQUN0QixNQUFNLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUE7UUFFTSxZQUFPLEdBQUcsVUFBQyxFQUFVO1lBQzFCLE1BQU0sQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUE7UUFFTSxXQUFNLEdBQUcsVUFBQyxJQUFTO1lBQ3hCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDeEMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNqQixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDZixNQUFNLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFBO1FBRU0sV0FBTSxHQUFHLFVBQUMsSUFBUztZQUN4QixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUE7UUFNTSxlQUFVLEdBQUcsVUFBQyxJQUFTO1lBQzVCLE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxVQUNwQixPQUE4QixFQUM5QixNQUE2QjtnQkFDM0IsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO3FCQUN2QixJQUFJLENBQUMsVUFBQyxJQUFJO29CQUNULEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2hCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNoQixDQUFDO2dCQUNILENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO29CQUNYLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN6QixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUE7UUF2SUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7UUFFM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQW5CSDtRQUFDLHNCQUFVLEVBQUU7bUJBVVIsa0JBQU0sQ0FBQyxVQUFVLENBQUM7bUJBQ2xCLGtCQUFNLENBQUMsUUFBUSxDQUFDO21CQUNoQixrQkFBTSxDQUFDLGFBQWEsQ0FBQzs7a0JBWmI7SUFzSmIsaUJBQUM7QUFBRCxDQXJKQSxBQXFKQyxJQUFBO0FBckpEOzRCQXFKQyxDQUFBIiwiZmlsZSI6ImNsYXNzZXMvY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcbmltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCAqIGFzIGJsdWViaXJkIGZyb20gXCJibHVlYmlyZFwiO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuXG5pbXBvcnQgKiBhcyBJTlRFUkZBQ0VTIGZyb20gXCIuLi9pbnRlcmZhY2VzXCI7XG5cbi8qKlxuICogQ29udHJvbGxlciBpcyBhIGhhbmRsZXIgZm9yIHNldmVyYWwgSFRUUCBtZXRob2RzIHRoYXRcbiAqIGNvbWUgb24gaXQncyBwYXRoLiBJdCBnZXRzIGFuZCBzZXRzIGRhdGEgZnJvbSBpdCdzXG4gKiBtb2RlbC5cbiAqL1xuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciBpbXBsZW1lbnRzIElOVEVSRkFDRVMuSUNvbnRyb2xsZXIge1xuICBwdWJsaWMgc2V0dGluZ3M6IElOVEVSRkFDRVMuSVNldHRpbmdzO1xuICBwdWJsaWMgbG9nZ2VyOiBJTlRFUkZBQ0VTLklMb2dnZXI7XG4gIHB1YmxpYyBlbWl0dGVyOiBJTlRFUkZBQ0VTLklFdmVudFN5c3RlbTtcbiAgcHVibGljIHJvdXRlcjogZXhwcmVzcy5Sb3V0ZXI7XG4gIHB1YmxpYyBtb2RlbDogSU5URVJGQUNFUy5JTW9kZWw7XG4gIHB1YmxpYyBwYXRoOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQGluamVjdChcIlNldHRpbmdzXCIpIHNldHRpbmdzOiBJTlRFUkZBQ0VTLklTZXR0aW5ncyxcbiAgICBAaW5qZWN0KFwiTG9nZ2VyXCIpIGxvZ2dlcjogSU5URVJGQUNFUy5JTG9nZ2VyLFxuICAgIEBpbmplY3QoXCJFdmVudFN5c3RlbVwiKSBldmVudFN5c3RlbTogSU5URVJGQUNFUy5JRXZlbnRTeXN0ZW1cbiAgKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuICAgIHRoaXMuZW1pdHRlciA9IGV2ZW50U3lzdGVtO1xuXG4gICAgdGhpcy5yb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgQ1JVRCByb3V0ZXMuXG4gICAqL1xuICBwdWJsaWMgcm91dGVyUmVhZHkgPSAoKSA9PiB7XG4gICAgdGhpcy5yb3V0ZXIuZ2V0KFwiL1wiLCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICAgIHRoaXMucmVhZChyZXEuYm9keSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMucm91dGVyLmdldChcIi86aWRcIiwgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICB0aGlzLnJlYWRPbmUocmVxLnBhcmFtcy5pZClcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMucm91dGVyLnBvc3QoXCIvXCIsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgICAgbGV0IHJlcXVlc3RCb2R5ID0gcmVxLmJvZHk7XG4gICAgICB0aGlzLmNyZWF0ZShyZXF1ZXN0Qm9keSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHJlcy5zZW5kU3RhdHVzKDIwMCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yLnRvU3RyaW5nKCkpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJvdXRlci5wdXQoXCIvXCIsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGUocmVxLmJvZHkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICByZXMuc2VuZFN0YXR1cygyMDApO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMucm91dGVyLmRlbGV0ZShcIi9cIiwgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZShyZXEuYm9keSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHJlcy5zZW5kU3RhdHVzKDIwMCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yb3V0ZXIuZGVsZXRlKFwiLzppZFwiLCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKHJlcS5wYXJhbXMuaWQpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgcmVzLnNlbmRTdGF0dXMoMjAwKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGNvbnRyb2xsZXJzIG1vZGVsLlxuICAgKi9cbiAgcHVibGljIHNldE1vZGVsID0gKG1vZGVsOiBJTlRFUkZBQ0VTLklNb2RlbCkgPT4ge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLnBhdGggPSBcIi9cIiArIG1vZGVsLm1vZGVsTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIHRoaXMucm91dGVyUmVhZHkoKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUgPSAoZGF0YTogYW55KSA9PiB7XG4gICAgdGhpcy5lbWl0dGVyLmVtaXQodGhpcy5tb2RlbC5tb2RlbE5hbWUpO1xuICAgIHJldHVybiBuZXcgdGhpcy5tb2RlbChkYXRhKS5zYXZlKCk7XG4gIH1cblxuICBwdWJsaWMgcmVhZCA9IChkYXRhOiBhbnkpID0+IHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kKCk7XG4gIH1cblxuICBwdWJsaWMgcmVhZE9uZSA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZmluZEJ5SWQoaWQpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IHtcbiAgICB0aGlzLmVtaXR0ZXIuZW1pdCh0aGlzLm1vZGVsLm1vZGVsTmFtZSk7XG4gICAgbGV0IGlkID0gZGF0YS5pZDtcbiAgICBkZWxldGUgZGF0YS5pZDtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kQnlJZEFuZFVwZGF0ZShpZCwgZGF0YSk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlID0gKGRhdGE6IGFueSkgPT4ge1xuICAgIHRoaXMuZW1pdHRlci5lbWl0KHRoaXMubW9kZWwubW9kZWxOYW1lKTtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kQnlJZEFuZFJlbW92ZShkYXRhLmlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiBtb2RlbCBpcyBhdXRoZW50aWNhdGlvbiBtb2RlbCB1c2UgdGhpcyBtZXRob2QgdG9cbiAgICogdmFsaWRhdGUgbG9naW4gY3JlZGVudGlhbHMuXG4gICAqL1xuICBwdWJsaWMgY2hlY2tMb2dpbiA9IChkYXRhOiBhbnkpID0+IHtcbiAgICByZXR1cm4gbmV3IGJsdWViaXJkKChcbiAgICByZXNvbHZlOiAodmFsdWU/OiBhbnkpID0+IHZvaWQsXG4gICAgcmVqZWN0OiAodmFsdWU/OiBhbnkpID0+IHZvaWQpID0+IHtcbiAgICAgIHRoaXMubW9kZWwuZmluZE9uZShkYXRhKVxuICAgICAgLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgICAgaWYgKHVzZXIgPT09IG51bGwpIHtcbiAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUodXNlcik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=
