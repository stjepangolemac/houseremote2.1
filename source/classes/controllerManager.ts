import { injectable, inject } from "inversify";
import * as express from "express";
import * as INTERFACES from "../interfaces";

/**
 * ControllerManager instantiates controllers, assigns models, and
 * defines routes for them.
 */
@injectable()
export default class ControllerManager
implements INTERFACES.IControllerManager {
  public settings: INTERFACES.ISettings;
  public logger: INTERFACES.ILogger;
  public router: express.Router;
  public dataManager: INTERFACES.IDataManager;
  public controllerFactory: () => INTERFACES.IController;
  public controllers: INTERFACES.IController[];

  constructor(
    @inject("Settings") settings: INTERFACES.ISettings,
    @inject("Logger") logger: INTERFACES.ILogger,
    @inject("DataManager") dataManager: INTERFACES.IDataManager,
    @inject("Factory<Controller>") controllerFactory:
      () => INTERFACES.IController
  ) {
    this.settings = settings;
    this.logger = logger;
    this.dataManager = dataManager;
    this.controllerFactory = controllerFactory;

    this.router = express.Router();
    this.controllers = [];
    this.initializeControllers();
  }

  /**
   * Assign models to controllers and set them up.
   */
  public initializeControllers = () => {
    this.dataManager.models.forEach((model) => {
      let controller = this.controllerFactory();
      controller.setModel(model);
      this.controllers.push(controller);
    });

    this.controllers.forEach((controller) => {
      this.router.use(controller.path, controller.router);
    });
  }
}
