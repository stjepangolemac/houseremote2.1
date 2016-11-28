import { injectable, inject} from "inversify";
import * as events from "events";
import * as INTERFACES from "../interfaces";

/**
 * EventSystem serves as a communication system for subscribed classes.
 */
@injectable()
export default class EventSystem implements INTERFACES.IEventSystem {
  public settings: INTERFACES.ISettings;
  public logger: INTERFACES.ILogger;
  public emitter: events.EventEmitter;

  constructor(
    @inject("Settings") settings: INTERFACES.ISettings,
    @inject("Logger") logger: INTERFACES.ILogger
  ) {
    this.settings = settings;
    this.logger = logger;
    this.emitter = new events.EventEmitter();
  }

  /**
   * Used to subscribe to an event.
   */
  public on = (eventName: string | symbol, cb: Function) => {
    this.emitter.on(eventName, cb);
  }

  /**
   * Used to emit a new event.
   */
  public emit = (eventName: string, ...args: any[]) => {
    return this.emitter.emit(eventName, args);
  }
}
