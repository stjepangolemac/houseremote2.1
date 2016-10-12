import "reflect-metadata";
import { injectable, inject, multiInject } from "inversify";
import mongoose = require("mongoose");
import * as bluebird from "bluebird";
mongoose.Promise = bluebird;

import * as INTERFACES from "../interfaces";
/**
 * DataManager does the work of connecting to one or several databases,
 * generates models from given schemas and provides the models for
 * other classes to use.
 */
@injectable()
export default class DataManager implements INTERFACES.IDataManager {
  public settings: INTERFACES.ISettings;
  public logger: INTERFACES.ILogger;
  public models: mongoose.Model<mongoose.Document>[];
  public schemas: INTERFACES.ISchema[];

  private connections: mongoose.Connection[];

  constructor(
    @inject("Settings") settings: INTERFACES.ISettings,
    @inject("Logger") logger: INTERFACES.ILogger,
    @multiInject("Schemas") schemas: INTERFACES.ISchema[]
  ) {
    this.settings = settings;
    this.logger = logger;
    this.schemas = schemas;

    this.connections = [];
    this.models = [];

    this.generateModels();
    this.setConnectionStateChange();
  }

  /**
   * Define connection state change behaviours.
   */
  private setConnectionStateChange = () => {
    this.connections.forEach((connection) => {
      connection.on("connected", () => {
        this.logger.info("DB connection established");
      });
      connection.on("error", (error: mongoose.Error) => {
        this.logger.error(error.message);
      });
      connection.on("disconnected", () => {
        this.logger.warn("DB connection lost");
      });
    });
  }

  /**
   * This will generate models according to given schemas and settings.
   */
  private generateModels = () => {
    this.schemas.forEach((schema, index) => {
      this.connections.push(
        mongoose.createConnection(
          "mongodb://" + this.settings.dbUser +
          ":" + this.settings.dbPass +
          "@" + this.settings.dbUrl
        )
      );

      this.models.push(
        this.connections[index].model(
          this.schemas[index].name, this.schemas[index].schema
        )
      );
    });
  }
}
