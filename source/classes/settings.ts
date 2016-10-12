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
  public cert: any;
  public key: any;

  constructor() {
    this.setup();
  }

  /**
   * Reads the settings from configuration variable
   */
  private setup = () => {
    this.port = process.env.PORT;
    this.logConsole = process.env.LOG_CONSOLE;
    this.logConsoleLvl = process.env.LOG_CONSOLE_LVL;
    this.logFile = process.env.LOG_FILE;
    this.logFileLvl = process.env.LOG_FILE_LVL;
    this.logFilename = process.env.LOG_FILENAME;
    this.dbUrl = process.env.DB_URL;
    this.dbUser = process.env.DB_USER;
    this.dbPass = process.env.DB_PASS;
    this.model = process.env.MODEL;
    this.pinCount = process.env.PIN_COUNT;
    this.cert = process.env.CERT;
    this.key = process.env.KEY;
  }
}
