/*HAVENT DECIDED DO WE NEED THIS import { injectable } from "inversify";
import mongoose = require("mongoose");
import * as bluebird from "bluebird";
mongoose.Promise = bluebird;

import * as INTERFACES from "../interfaces";
/**
 * TriggerSchema represents a trigger data model for the MongoDB
 *
@injectable()
export default class TriggerSchema implements INTERFACES.ISchema {
  name: string;
  schema: mongoose.Schema;

  constructor() {
    this.name = "Trigger";
    this.schema = this.setSchema();
  }

/**
 * The trigger schema is described here.
 *
  private setSchema = () => {
    return new mongoose.Schema({
      /**
       * Time unit is milisecond.
       *
      duration: {
        default: 300,
        max: 1000,
        min: 0,
        type: Number,
      },
      name: {
        maxlength: [32, "name must not be longer than 32 characters"],
        minlength: [4, "name must not be shorter than 4 characters"],
        required: [true, "name is required"],
        type: String,
      },
      relay: {
        ref: "Device",
        type: mongoose.Schema.Types.ObjectId,
      },
    });
  }
}*/
