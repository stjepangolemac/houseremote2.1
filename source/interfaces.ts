import * as https from "https";
import * as express from "express";
import * as mongoose from "mongoose";
import * as winston from "winston";
import * as bluebird from "bluebird";
import * as events from "events";

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
  isAuth: boolean;
}

export interface IModel extends mongoose.Model<mongoose.Document> {
  isAuth?: boolean;
}

export interface IDataManager {
  settings: ISettings;
  logger: ILogger;
  models: IModel[];
  schemas: ISchema[];
}

export interface IController {
  settings: ISettings;
  logger: ILogger;
  emitter: IEventSystem;
  path: string;
  router: express.Router;
  model: IModel;
  setModel: (model: IModel) => void;
  checkLogin: (data: any) => bluebird<any>;
  create: (data: any) => any;
  read: (data: any) => any;
  readOne: (id: string) => any;
  update: (data: any) => any;
  remove: (data: any) => any;
}

export interface IControllerFactory {
  (): IController;
}

export interface IControllerManager {
  settings: ISettings;
  logger: ILogger;
  router: express.Router;
  dataManager: IDataManager;
  tokenManager: ITokenManager;
  controllerFactory: () => IController;
  controllers: IController[];
  authController: IController;
}

export interface IHTTPSServer {
  server: https.Server;
  settings: ISettings;
  logger: ILogger;
  app: express.Express;
  controllerManager: IControllerManager;
  deviceManager: IDeviceManager;
  rpio: any;
  spawn: any;
}

export interface ITokenManager {
  settings: ISettings;
  logger: ILogger;
  signToken: (payload: any) => bluebird<any>;
  validateToken: (token: string) => bluebird<any>;
}

export interface IDevice {
  id: string;
  name: string;
  pin: number;
  type: string;
  state: boolean;
  value: number;
}

export interface ITimer {
  name: string;
  device: string;
  type: string;
  enabled: boolean;
  forceOn: boolean;
  turnedOn: Date;
  turnedOff: Date;
  days: string;
  startTime: Date;
  endTime: Date;
  duration: number;
  restTime: number;
  state: boolean;
}

export interface IDeviceCache {
  emitter: IEventSystem;
  dataManager: IDataManager;
  devices: IDevice[];
  refresh: () => void;
}

export interface ITimerCache {
  emitter: IEventSystem;
  dataManager: IDataManager;
  timers: ITimer[];
  refresh: () => void;
}

export interface ICache {
  emitter: IEventSystem;
  model: IModel;
  cached: any[];
  setModel: (model: IModel) => void;
  refresh: () => void;
}

export interface ICacheFactory {
  (): ICache;
}

export interface IPinControl {
  openOutputs: (pins: number[]) => void;
  write: (pin: number) => boolean;
}

export interface IDeviceManager {
  settings: ISettings;
  logger: ILogger;
  dataManager: IDataManager;
  deviceCache: ICache;
  timerCache: ICache;
  pinControl: IPinControl;
}

export interface IEventSystem {
  settings: ISettings;
  logger: ILogger;
  emitter: events.EventEmitter;
  on: (eventName: string | symbol, cb: Function) => void;
  emit: (eventName: string, ...args: any[]) => boolean;
}
