import dotenv = require("dotenv");
import * as INTERFACES from "./interfaces";

/**
 * Load environment variables.
 */
if(process.env.CONFIG !== "heroku") {
  dotenv.config({ path: "./configuration/.env." + process.env.CONFIG });
}

/**
 * Loads the inversify kernel
 */
import kernel from "./inversify.config";

kernel.get<INTERFACES.IHTTPSServer>("HTTPSServer");
