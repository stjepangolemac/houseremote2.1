/**
 *  import { Kernel } from "inversify";
    import TYPES from "./interfaces/";
    import { Ninja, Katana, Shuriken } from "./classes";

    var kernel = new Kernel();
    kernel.bind<Warrior>(TYPES.Warrior).to(Ninja);
    kernel.bind<Weapon>(TYPES.Weapon).to(Katana);
    kernel.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

    export default kernel;
 */
import * as INTERFACES from "./interfaces";

/**
 * Import all classes here
 */
import Settings from "./classes/settings";
import Logger from "./classes/logger";

import { Kernel } from "inversify";

let kernel = new Kernel();
kernel.bind<INTERFACES.ISettings>("Settings").to(Settings);
kernel.bind<INTERFACES.ILogger>("Logger").to(Logger);

kernel.get<INTERFACES.ILogger>("Logger");
// console.log(logger.settings.logConsoleLvl);
export default kernel;
