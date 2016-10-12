import "reflect-metadata";
import { injectable, inject } from "inversify";
import * as fs from "fs";
import * as https from "https";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as INTERFACES from "../interfaces";

/**
 * HTTPSServer instantiates the Express app and routes CRUD
 * traffic to ControllerManager after the request has been
 * authenticated with TokenManager.
 */
@injectable()
export default class HTTPSServer implements INTERFACES.IHTTPSServer {
  public server: https.Server;
  public settings: INTERFACES.ISettings;
  public logger: INTERFACES.ILogger;
  public controllerManager: INTERFACES.IControllerManager;
  public app: express.Express;

  private options: Object;

  constructor(
    @inject("Settings") settings: INTERFACES.ISettings,
    @inject("Logger") logger: INTERFACES.ILogger,
    @inject("ControllerManager")
      controllerManager: INTERFACES.IControllerManager
  ) {
    this.settings = settings;
    this. logger = logger;
    this.controllerManager = controllerManager;

    this.options = {
      cert: this.settings.cert,
      key: this.settings.key,
    }

    this.app = express();
    this.setupAll();
  }

  public setupAll = () => {
    this.setupApp();
    this.startHTTPS();
  }

  public startHTTPS = () => {
    this.server = https.createServer(this.options, this.app);
    this.server.listen(this.settings.port);
    this.logger.info("Server started on port", this.settings.port);
  }

  public setupApp = () => {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use("/api", this.controllerManager.router);
  }
}
