import "reflect-metadata";
import { injectable, inject } from "inversify";
import * as mongoose from "mongoose";
import * as express from "express";

import * as INTERFACES from "../interfaces";

/**
 * Controller is a handler for several HTTP methods that
 * come on it's path. It gets and sets data from it's
 * model.
 */
@injectable()
export default class Controller implements INTERFACES.IController {
  public settings: INTERFACES.ISettings;
  public logger: INTERFACES.ILogger;
  public router: express.Router;
  public model: mongoose.Model<mongoose.Document>;
  public path: string;

  constructor(
    @inject("Settings") settings: INTERFACES.ISettings,
    @inject("Logger") logger: INTERFACES.ILogger
  ) {
    this.settings = settings;
    this.logger = logger;

    this.router = express.Router();
    // this.routerNotReady();
  }

  /**
   * Set the CRUD routes.
   */
  public routerReady = () => {
    this.router.get("/", (req, res, next) => {
      this.read(req.body)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((error) => {
        this.logger.error(error);
        res.status(400).send(error);
      });
    });

    this.router.get("/:id", (req, res, next) => {
      this.readOne(req.params.id)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((error) => {
        this.logger.error(error);
        res.status(400).send(error);
      });
    });

    this.router.post("/", (req, res, next) => {
      let requestBody = req.body;
      this.create(requestBody)
      .then((data) => {
        res.sendStatus(200);
      })
      .catch((error) => {
        this.logger.error(error);
        res.status(400).send(error.toString());
      });
    });

    this.router.put("/", (req, res, next) => {
      this.update(req.body)
      .then((data) => {
        res.sendStatus(200);
      })
      .catch((error) => {
        this.logger.error(error);
        res.status(400).send(error);
      });
    });

    this.router.delete("/", (req, res, next) => {
      this.remove(req.body)
      .then((data) => {
        res.sendStatus(200);
      })
      .catch((error) => {
        this.logger.error(error);
        res.status(400).send(error);
      });
    });
  }

  /**
   * Temporary set all routes as unavailable.
   */
  public routerNotReady = () => {
    this.router.all("/*", (req, res, next) => {
      res.sendStatus(503);
    });
  }

  /**
   * Set controllers model.
   */
  public setModel = (model: mongoose.Model<mongoose.Document>) => {
    this.model = model;
    this.path = "/" + model.modelName.toLowerCase();
    this.routerReady();
  }

  public create = (data: any) => {
    return new this.model(data).save();
  }

  public read = (data: any) => {
    return this.model.find();
  }

  public readOne = (id: string) => {
    return this.model.findById(id);
  }

  public update = (data: any) => {
    let id = data.id;
    delete data.id;
    return this.model.findByIdAndUpdate(id, data);
  }

  public remove = (data: any) => {
    return this.model.findByIdAndRemove(data.id);
  }
}
