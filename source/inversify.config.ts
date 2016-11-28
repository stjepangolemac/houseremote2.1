import * as INTERFACES from "./interfaces";

/**
 * Import all classes here
 */
import Settings from "./classes/settings";
import Logger from "./classes/logger";
import EventSystem from "./classes/eventSystem";
import DeviceSchema from "./classes/deviceSchema";
import UserSchema from "./classes/userSchema";
import DataManager from "./classes/dataManager";
import Controller from "./classes/controller";
import ControllerManager from "./classes/controllerManager";
import HTTPSServer from "./classes/httpsServer";
import TokenManager from "./classes/tokenManager";
// import Cache from "./classes/cache";
// import DeviceManager from "./classes/deviceManager";
// import PinControl from "./classes/pinControl";

import { Kernel } from "inversify";

/**
 * Bind all classes to their string identifiers.
 */
let kernel = new Kernel();
kernel.bind<INTERFACES.ISettings>("Settings").to(Settings).inSingletonScope();
kernel.bind<INTERFACES.ILogger>("Logger").to(Logger).inSingletonScope();
kernel.bind<INTERFACES.IEventSystem>("EventSystem").to(EventSystem)
.inSingletonScope();
kernel.bind<INTERFACES.ISchema>("Schemas").to(DeviceSchema);
kernel.bind<INTERFACES.ISchema>("Schemas").to(UserSchema);
kernel.bind<INTERFACES.IDataManager>("DataManager").to(DataManager)
.inSingletonScope();

/* kernel.bind<() => INTERFACES.ICache>("Factory<Cache>")
.toFactory<INTERFACES.ICache>((context) => {
    return () => {
        return context.kernel.get<INTERFACES.ICache>("Cache");
    };
});
kernel.bind<INTERFACES.ICache>("Cache").to(Cache); */

/* kernel.bind<INTERFACES.IDeviceManager>("DeviceManager").to(DeviceManager)
.inSingletonScope(); */

kernel.bind<() => INTERFACES.IController>("Factory<Controller>")
.toFactory<INTERFACES.IController>((context) => {
    return () => {
        return context.kernel.get<INTERFACES.IController>("Controller");
    };
});
kernel.bind<INTERFACES.IController>("Controller").to(Controller);

kernel.bind<INTERFACES.ITokenManager>("TokenManager").to(TokenManager)
.inSingletonScope();
kernel.bind<INTERFACES.IControllerManager>("ControllerManager")
.to(ControllerManager).inSingletonScope();
kernel.bind<INTERFACES.IHTTPSServer>("HTTPSServer").to(HTTPSServer)
.inSingletonScope();

export default kernel;
