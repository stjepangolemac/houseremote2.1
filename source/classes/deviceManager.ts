import { injectable, inject } from "inversify";
import * as INTERFACES from "../interfaces";

/**
 * DeviceManager manages the devices and timers and tells
 * PinControl when and how to trigger them.
 */
@injectable()
export default class DeviceManager implements INTERFACES.IDeviceManager {
  public settings: INTERFACES.ISettings;
  public logger: INTERFACES.ILogger;
  public dataManager: INTERFACES.IDataManager;
  public cacheFactory: INTERFACES.ICacheFactory;
  public deviceCache: INTERFACES.ICache;
  public timerCache: INTERFACES.ICache;
  public pinControl: INTERFACES.IPinControl;
  public pins: number[];

  constructor(
    @inject("Settings") settings: INTERFACES.ISettings,
    @inject("Logger") logger: INTERFACES.ILogger,
    @inject("DataManager") dataManager: INTERFACES.IDataManager,
    @inject("Factory<Cache>") cacheFactory: INTERFACES.ICacheFactory
  ) {
    this.dataManager = dataManager;
    this.cacheFactory = cacheFactory;

    this.deviceCache = this.cacheFactory();
    this.deviceCache.setModel(this.getModel("Device"));
    this.timerCache = this.cacheFactory();
    this.timerCache.setModel(this.getModel("Timer"));

    this.pins = [];
  }

  public loop = () => {
    // For each timer first check day, then time.
    /*
    this.timerCache.timers.forEach((timer) => {
      let now = new Date();
      let shouldBeOn = false;
      shouldBeOn = shouldBeOn; // just for gulp

      if (timer.days.charAt(now.getDay()) === "1") {
        shouldBeOn = shouldBeOn;
      }

      if (timer.startTime && timer.endTime) {
        // Timer is daily
        shouldBeOn = shouldBeOn;
      }
    });

    setTimeout(this.loop, 1000);
    */
  }

  public getModel = (name: string) => {
    return this.dataManager.models.filter((model) => {
      return model.modelName === name;
    })[0];
  }
}
