/*
import { injectable, inject } from "inversify";
import rpio = require("rpio");
import * as INTERFACES from "../interfaces";

/**
 * PinControl controls the pins.
 *//*
@injectable()
export default class PinControl implements INTERFACES.IPinControl {
  constructor() {}

  public openOutputs = (pins: number[]) => {
    pins.forEach((pin) => {
      rpio.open(pin, rpio.INPUT, rpio.LOW);
    });
  }

  public write = (pin: number) => {

    return false;
  }
}
*/
