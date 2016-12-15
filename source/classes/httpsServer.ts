import "reflect-metadata";
import { injectable, inject } from "inversify";
import * as https from "https";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as INTERFACES from "../interfaces";
import * as rpio from "rpio";

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
  public deviceManager: INTERFACES.IDeviceManager;
  public app: express.Express;
  public rpio: any;

  private options: Object;

  constructor(
    @inject("Settings") settings: INTERFACES.ISettings,
    @inject("Logger") logger: INTERFACES.ILogger,
    @inject("ControllerManager")
      controllerManager: INTERFACES.IControllerManager
    // @inject("DeviceManager") deviceManager: INTERFACES.IDeviceManager
  ) {
    this.settings = settings;
    this. logger = logger;
    this.controllerManager = controllerManager;
    // this.deviceManager = deviceManager;
    this.rpio = rpio;

    this.options = {
      cert: this.settings.cert,
      key: this.settings.key,
    };

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
    this.app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");
      res.header("Access-Control-Allow-Methods",
        "POST, GET, PUT, DELETE, OPTIONS");
      next();
    });
    this.app.use(function (req, res, next) {
      if (req.method === "OPTIONS") {
        res.status(200).send();
      } else {
        next();
      }
    });
    this.app.use("/pin/:pin/:mode", (req, res, next) => {
      let pin = req.params.pin;
      this.rpio.open(pin, this.rpio.OUTPUT, this.rpio.LOW);

      if (req.params.mode == "low") {
        this.rpio.write(12, this.rpio.LOW);  
      } else if (req.params.mode == "high") {
        this.rpio.write(12, this.rpio.HIGH);
      }
    });
    this.app.use(this.controllerManager.router);
  }
}
