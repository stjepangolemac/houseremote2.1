import { injectable, inject } from "inversify";
import * as INTERFACES from "../interfaces";

/**
 * Cache keeps newest db data in memory for use
 * in other classes.
 */
@injectable()
export default class Cache implements INTERFACES.ICache {
  public emitter: INTERFACES.IEventSystem;
  public model: INTERFACES.IModel;
  public cached: any[];

  constructor(
    @inject("EventSystem") eventSystem: INTERFACES.IEventSystem
  ) {
    this.emitter = eventSystem;
    this.cached = [];
  }

  public refresh = () => {
    if (this.model) {
      this.model.find()
      .then((data) => {
        let temp: any = [];
        data.forEach((one: any) => {
          let helper = {
            id: one.id,
            name: one.name,
            pin: one.pin,
            state: one.state,
            type: one.type,
            value: one.value,
          };
          temp.push(helper);
        });
        this.cached = temp;
      });
    }
  }

  public setEmitter = () => {
    this.emitter.on(this.model.modelName, this.refresh);
  }

  public setModel = (model: INTERFACES.IModel) => {
    this.model = model;
    this.setEmitter();
    this.refresh();
  }
}
