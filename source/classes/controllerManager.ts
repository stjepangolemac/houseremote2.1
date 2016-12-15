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
  public authController: INTERFACES.IController;

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
    this.setRequestValidation();
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
      this.router.use("/api" + controller.path, controller.router);
    });

    this.authController = this.controllers.find((controller) => {
      return controller.model.isAuth;
    });

    if (this.authController) {
      this.makeAuth();
    }
  }

  public makeAuth = () => {
    this.router.post("/login", (req, res, next) => {
      console.log(JSON.stringify(req.body));
      this.authController.checkLogin(req.body)
      .then((user) => {
        if (user === null) {
          res.sendStatus(404);
        } else {
          let payload = {
            id: user.id,
            permissions: user.permissions,
          };
          this.tokenManager.signToken(payload)
            .then((token) => {
              res.status(200).send({token});
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

    this.router.post("/register", (req, res, next) => {
      this.authController.create(req.body)
      .then((data: any) => {
        res.sendStatus(200);
      })
      .catch((error: any) => {
        this.logger.error(error);
        res.status(400).send(error.toString());
      });
    });
  }

  public setRequestValidation = () => {
    this.router.use("/:pageCalled", (req, res, next) => {
      if (req.get("Authorization")) {
        let token = req.get("Authorization").split(" ")[1];
        this.tokenManager.validateToken(token)
        .then((decoded) => {
          res.set("AuthorizedUser", decoded.id);
          next();
        })
        .catch((error) => {
          res.sendStatus(401);
        });
      } else {
        if (req.params.pageCalled === "login") {
          next();
        } else {
          res.sendStatus(401);
        }
      }
    });
  }
}
