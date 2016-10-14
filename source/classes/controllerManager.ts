import "reflect-metadata";
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
  public tokenManager: INTERFACES.ITokenManager;
  public controllerFactory: () => INTERFACES.IController;
  public controllers: INTERFACES.IController[];

  constructor(
    @inject("Settings") settings: INTERFACES.ISettings,
    @inject("Logger") logger: INTERFACES.ILogger,
    @inject("DataManager") dataManager: INTERFACES.IDataManager,
    @inject("TokenManager") tokenManager: INTERFACES.ITokenManager,
    @inject("Factory<Controller>") controllerFactory:
      INTERFACES.IControllerFactory
  ) {
    this.settings = settings;
    this.logger = logger;
    this.dataManager = dataManager;
    this.tokenManager = tokenManager;
    this.controllerFactory = controllerFactory;

    this.router = express.Router();
    this.controllers = [];
    this.initializeControllers();
  }

  /**
   * Assign models to controllers and set CRUD and /login routes.
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

    let authController = this.controllers.find((controller) => {
      return controller.model.isAuth;
    });

    this.router.post("/login", (req, res, next) => {
      authController.checkLogin(req.body)
      .then((user) => {
        if (user === null) {
          res.sendStatus(404);
        } else {
          // SIGN TOKEN
          // GIVE ME TOKEN
          let payload = {
            id: user.id,
            permissions: user.permissions,
          };
          this.tokenManager.signToken(payload)
          .then((token) => {
            res.status(200).send(token);
          })
          .catch((error) => {
            res.sendStatus(500);
          });
        }
      })
      .catch((error) => {
        this.logger.error(error);
        res.sendStatus(500);
      });
    });
  }
}
