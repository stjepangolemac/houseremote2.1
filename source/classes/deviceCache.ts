import { injectable, inject } from "inversify";
import * as INTERFACES from "../interfaces";

/**
 * DeviceCache keeps newest devices data in memory for use
 * in other classes.
 */
@injectable()
export default class DeviceCache implements INTERFACES.IDeviceCache {
  public emitter: INTERFACES.IEventSystem;
  public dataManager: INTERFACES.IDataManager;
  public devices: INTERFACES.IDevice[];
  public deviceModel: INTERFACES.IModel;

  constructor(
    @inject("EventSystem") eventSystem: INTERFACES.IEventSystem,
    @inject("DataManager") dataManager: INTERFACES.IDataManager
  ) {
    this.emitter = eventSystem;
    this.dataManager = dataManager;
    this.devices = [];

    this.findDeviceModel();
    this.emitter.on(this.deviceModel.modelName, this.refresh);
    this.refresh();
  }

  public refresh = () => {
    console.log("Refreshing device cache");
    this.deviceModel.find()
    .then((devices) => {
      this.devices = [];
      devices.forEach((device: any) => {
        let helper = {
          id: device.id,
          name: device.name,
          pin: device.pin,
          state: device.state,
          type: device.type,
          value: device.value,
        };
        this.devices.push(helper);
      });
    });
  }

  public findDeviceModel = () => {
    this.deviceModel = this.dataManager.models.filter((model) => {
      return model.modelName === "Device";
    })[0];
  }
}
