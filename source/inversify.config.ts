import * as INTERFACES from "./interfaces";

/**
 * Import all classes here
 */
import Settings from "./classes/settings";
import Logger from "./classes/logger";
import DeviceSchema from "./classes/deviceSchema";
import UserSchema from "./classes/userSchema";
import DataManager from "./classes/dataManager";
import Controller from "./classes/controller";
import ControllerManager from "./classes/controllerManager";
import HTTPSServer from "./classes/httpsServer";
import TokenManager from "./classes/tokenManager";

import { Kernel } from "inversify";

/**
 * Bind all classes to their string identifiers
 */
let kernel = new Kernel();
kernel.bind<INTERFACES.ISettings>("Settings").to(Settings);
kernel.bind<INTERFACES.ILogger>("Logger").to(Logger);
kernel.bind<INTERFACES.ISchema>("Schemas").to(DeviceSchema);
kernel.bind<INTERFACES.ISchema>("Schemas").to(UserSchema);
kernel.bind<INTERFACES.IDataManager>("DataManager").to(DataManager);
kernel.bind<INTERFACES.IController>("Controller").to(Controller);
kernel.bind<() => INTERFACES.IController>("Factory<Controller>")
.toFactory<INTERFACES.IController>((context) => {
    return () => {
        return context.kernel.get<INTERFACES.IController>("Controller");
    };
});
kernel.bind<INTERFACES.ITokenManager>("TokenManager").to(TokenManager);
kernel.bind<INTERFACES.IControllerManager>("ControllerManager")
.to(ControllerManager);
kernel.bind<INTERFACES.IHTTPSServer>("HTTPSServer").to(HTTPSServer);

export default kernel;
