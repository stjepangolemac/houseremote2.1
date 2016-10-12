import { injectable } from "inversify";
import "reflect-metadata";
import * as INTERFACES from "../interfaces";

/**
 * Settings for server
 */
@injectable()
export default class Settings implements INTERFACES.ISettings {
  public port: number;
  public logConsole: boolean;
  public logConsoleLvl: string;
  public logFile: boolean;
  public logFileLvl: string;
  public logFilename: string;
  public dbUrl: string;
  public dbUser: string;
  public dbPass: string;
  public model: string;
  public pinCount: number;

  constructor() {
    this.setup(process.env.CONFIG);
  }

  /**
   * Reads the settings from configuration variable
   */
  private setup = (config: string) => {
    let configuration: any;
    try {
      configuration = require("../../configuration/" + config + ".js");
    } catch (error) {
      console.log(error);
      throw error;
    }

    this.port = configuration.port;
    this.logConsole = configuration.logconsole;
    this.logConsoleLvl = configuration.logconsolelvl;
    this.logFile = configuration.logfile;
    this.logFileLvl = configuration.logfilelvl;
    this.logFilename = configuration.logfilename;
    this.dbUrl = configuration.dburl;
    this.dbUser = configuration.dbuser;
    this.dbPass = configuration.dbpass;
    this.model = configuration.model;
    this.pinCount = configuration.pincount;
  }
}
