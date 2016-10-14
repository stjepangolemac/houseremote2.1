import { injectable, inject } from "inversify";
import * as bluebird from "bluebird";
import * as jwt from "jsonwebtoken";
import * as INTERFACES from "../interfaces";

/**
 * TokenManager signs and validates tokens, and authenticates
 * requests before passings them to ControllerManager.
 */
@injectable()
export default class TokenManager implements INTERFACES.ITokenManager {
  public settings: INTERFACES.ISettings;
  public logger: INTERFACES.ILogger;

  private options: Object;

  constructor(
    @inject("Settings") settings: INTERFACES.ISettings,
    @inject("Logger") logger: INTERFACES.ILogger
  ) {
    this.settings = settings;
    this.logger = logger;

    this.options = {
      audience: "houseremote.ddns.net",
      issuer: "houseremote.ddns.net",
    };
  }

  /**
   * Takes payload and signs a token.
   */
  public signToken = (payload: any) => {
    return new bluebird((
    resolve: (value?: any) => void,
    reject: (value?: any) => void) => {
      jwt.sign(payload, this.settings.key, this.options, (error, token) => {
        if (error) {
          this.logger.error(error.message);
          reject(error);
        } else {
          resolve(token);
        }
      });
    });
  }

  /**
   * Takes token and returns payload if it is valid.
   */
  public validateToken = (token: string) => {
    return new bluebird((
    resolve: (value?: any) => void,
    reject: (value?: any) => void) => {
      jwt.verify(token, this.settings.key, this.options, (err, decoded) => {
        if (err) {
          this.logger.error(err.message);
          reject(err);
        } else {
          resolve(decoded);
        }
      });
    });
  }
}
