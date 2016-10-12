import { injectable, inject } from "inversify";
import mongoose = require("mongoose");
import * as bluebird from "bluebird";
mongoose.Promise = bluebird;

import * as INTERFACES from "../interfaces";
/**
 * DeviceSchema represents a device data model for the MongoDB
 */
@injectable()
export default class DeviceSchema implements INTERFACES.ISchema {
  public settings: INTERFACES.ISettings;
  public name: string;
  public schema: mongoose.Schema;

  constructor(
    @inject("Settings") settings: INTERFACES.ISettings
  ) {
    this.settings = settings;
    this.name = "Device";
    this.setSchema();
  }

/**
 * The Device schema is described here.
 */
  private setSchema = () => {
    let schema = new mongoose.Schema({
      description: {
        maxlength: [128, "description must not be longer than 128 characters"],
        minlength: [16, "description must not be shorter than 16 characters"],
        required: [true, "description is required"],
        type: String,
      },
      name: {
        maxlength: [32, "name must not be longer than 32 characters"],
        minlength: [4, "name must not be shorter than 4 characters"],
        required: [true, "name is required"],
        type: String,
      },
      pin: {
        max: this.settings.pinCount - 1,
        min: 0,
        required: [true, "pin is required"],
        type: Number,
      },
      state: {
        default: true,
        type: Boolean,
      },
      type: {
        enum: ["relay", "sensor", "special"],
        required: [true, "type is required"],
        type: String,
      },
      value: {
        default: 0,
        type: Number,
      },
    });

    this.schema = schema;
  }
}
