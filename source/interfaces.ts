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
}

export interface IServer {
  logger: ILogger;
  settings: ISettings;
  controllers: IController[];
  app: express.Express;
}

export interface IController {
    name: string;
    router: express.Router;
    logger: ILogger;
    model: mongoose.Model<mongoose.Document>;
}

export interface ILogger extends winston.LoggerInstance {
  settings: ISettings;
}

export interface ISchema {
  name: string;
  schema: mongoose.Schema;
}

export interface IDataManager {
  settings: ISettings;
  logger: ILogger;
}