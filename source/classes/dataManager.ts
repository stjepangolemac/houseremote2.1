import { injectable, inject } from "inversify";
import mongoose = require("mongoose");
import * as bluebird from "bluebird";
mongoose.Promise = bluebird;

import * as INTERFACES from "../interfaces";
/**
 * DataManager does the work of connecting to one or several databases
 * and provides the models for other classes to use
 */
@injectable()
export default class DataManager implements INTERFACES.IDataManager {
  public settings: INTERFACES.ISettings;
  public logger: INTERFACES.ILogger;

  constructor(
    @inject("Settings") settings: INTERFACES.ISettings,
    @inject("Logger") logger: INTERFACES.ILogger,
    @inject("Schemas") schemas: INTERFACES.ISchema
  ) {
    
  }
}