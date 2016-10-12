import * as https from "https";
import * as express from "express";
import * as mongoose from "mongoose";
import * as winston from "winston";

export interface ISettings {
  port: number;
  logConsole: boolean;
  logConsoleLvl: string;
  logFile: boolean;
  logFileLvl: string;
  logFilename: string;
  dbUrl: string;
  dbUser: string;
  dbPass: string;
  model: string;
  pinCount: number;
  cert: any;
  key: any;
}

export interface IServer {
  logger: ILogger;
  settings: ISettings;
  controllers: IController[];
  app: express.Express;
}

export interface ILogger extends winston.LoggerInstance {
  settings: ISettings;
}

export interface ISchema {
  settings: ISettings;
  name: string;
  schema: mongoose.Schema;
}

export interface IDataManager {
  settings: ISettings;
  logger: ILogger;
  models: mongoose.Model<mongoose.Document>[];
  schemas: ISchema[];
}

export interface IController {
  settings: ISettings;
  logger: ILogger;
  path: string;
  router: express.Router;
  model: mongoose.Model<mongoose.Document>;

  setModel: (model: mongoose.Model<mongoose.Document>) => void;
}

export interface IControllerManager {
  settings: ISettings;
  logger: ILogger;
  router: express.Router;
  dataManager: IDataManager;
  controllerFactory: () => IController;
  controllers: IController[];
}

export interface IHTTPSServer {
  server: https.Server;
  settings: ISettings;
  logger: ILogger;
  app: express.Express;
  controllerManager: IControllerManager;
}
