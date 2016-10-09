import { injectable, inject } from "inversify";
import "reflect-metadata";
import * as INTERFACES from "../interfaces";
import * as winston from "winston";

/**
 * Asynchronous server logger
 */
@injectable()
export default class Logger
  extends winston.Logger implements INTERFACES.ILogger {
  public settings: INTERFACES.ISettings;

  constructor(
    @inject("Settings") settings: INTERFACES.ISettings
  ) {
      super();
      this.settings = settings;
      this.setLogger();
  }

  /**
   * Sets logging outputs based on settings
   */
  private setLogger() {
    if (this.settings.logConsole) {
      this.add(winston.transports.Console,
        {
          level: this.settings.logConsoleLvl,
        }
      );
    }

    if (this.settings.logFile) {
      this.add(winston.transports.File,
        {
          filename: this.settings.logFilename,
          level: this.settings.logFileLvl,
        }
      );
    }
  }
}
