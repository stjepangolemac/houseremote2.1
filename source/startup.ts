import dotenv = require("dotenv");
import * as INTERFACES from "./interfaces";

/**
 * Load environment variables.
 */
dotenv.config({ path: "./configuration/.env." + process.env.CONFIG });
console.log(process.env.KEY);

/**
 * Loads the inversify kernel
 */
import kernel from "./inversify.config";

kernel.get<INTERFACES.IHTTPSServer>("HTTPSServer");
