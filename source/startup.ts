import * as INTERFACES from "./interfaces";

/**
 * Loads the inversify kernel
 */
import kernel from "./inversify.config";

kernel.get<INTERFACES.IHTTPSServer>("HTTPSServer");
