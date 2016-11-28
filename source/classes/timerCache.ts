import { injectable, inject } from "inversify";
import * as INTERFACES from "../interfaces";

/**
 * TimerCache keeps newest devices data in memory for use
 * in other classes.
 */
@injectable()
export default class TimerCache implements INTERFACES.ITimerCache {
  public emitter: INTERFACES.IEventSystem;
  public dataManager: INTERFACES.IDataManager;
  public timers: INTERFACES.ITimer[];
  public timerModel: INTERFACES.IModel;

  constructor(
    @inject("EventSystem") eventSystem: INTERFACES.IEventSystem,
    @inject("DataManager") dataManager: INTERFACES.IDataManager
  ) {
    this.emitter = eventSystem;
    this.dataManager = dataManager;
    this.timers = [];

    // this.findTimerModel();
    // this.emitter.on(this.timerModel.modelName, this.refresh);
    // this.refresh();
  }

  public refresh = () => {
    this.timerModel.find()
    .then((timers) => {
      this.timers = [];
      timers.forEach((timer: any) => {
        let helper: INTERFACES.ITimer;
        helper.days = timer.days;
        helper.device = timer.device;
        helper.duration = timer.duration;
        helper.enabled = timer.enabled;
        helper.endTime = timer.endTime;
        helper.forceOn = timer.forceOn;
        helper.name = timer.name;
        helper.restTime = timer.restTime;
        helper.startTime = timer.startTime;
        helper.state = timer.state;
        helper.turnedOff = timer.turnedOff;
        helper.turnedOn = timer.turnedOn;
        helper.type = timer.type;

        this.timers.push(helper);
      });
    });
  }

  public findTimerModel = () => {
    this.timerModel = this.dataManager.models.filter((model) => {
      console.log(model.modelName);
      return model.modelName === "Timer";
    })[0];
  }
}
