import "reflect-metadata";
import { injectable, inject } from "inversify";
import mongoose = require("mongoose");
import * as bluebird from "bluebird";
mongoose.Promise = bluebird;

import * as INTERFACES from "../interfaces";
/**
 * TimerSchema represents a device data model for the MongoDB
 */
@injectable()
export default class TimerSchema implements INTERFACES.ISchema {
  public settings: INTERFACES.ISettings;
  public name: string;
  public schema: mongoose.Schema;
  public isAuth: boolean;

  constructor(
    @inject("Settings") settings: INTERFACES.ISettings
  ) {
    this.settings = settings;
    this.name = "Timer";
    this.isAuth = false;

    this.setSchema();
  }

  /**
   * The Timer schema is described here.
   */
  private setSchema = () => {
    let schema = new mongoose.Schema({
      name: {
        maxlength: [32, "name must not be longer than 32 characters"],
        minlength: [4, "name must not be shorter than 4 characters"],
        required: [true, "name is required"],
        type: String,
      },
      device: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Device",
        required: [true, "device is required"],
      },
      type: {
        enum: ["daily", "periodic"],
        required: [true, "type is required"],
        type: String,
      },
      enabled: {
        type: Boolean,
        default: true,
      },
      forceOn: {
        type: Boolean,
        default: false,
      },
      turnedOn: {
        type: Date,
        default: null,
      },
      turnedOff: {
        type: Date,
        default: null,
      },
      days: {
        type: String,
        match: [/([01]){7}/, "days are not properly formatted"],
        default: "1111111",
      },
      startTime: {
        type: Date,
        default: Date.now,
      },
      endTime: {
        type: Date,
        default: null,
      },
      duration: {
        type: Number,
        required: [true, "duration is required"],
      },
      restTime: {
        type: Number,
        required: [true, "restTime is required"],
      },
      state: {
        type: Boolean,
        default: false,
      },
    });

    this.schema = schema;
  }
}
