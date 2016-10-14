import "reflect-metadata";
import { injectable, inject } from "inversify";
import mongoose = require("mongoose");
import * as bluebird from "bluebird";
mongoose.Promise = bluebird;

import * as INTERFACES from "../interfaces";
/**
 * UserSchema represents a user data model for the MongoDB
 * which will be used for authentication.
 */
@injectable()
export default class UserSchema implements INTERFACES.ISchema {
  public settings: INTERFACES.ISettings;
  public name: string;
  public schema: mongoose.Schema;
  public isAuth: boolean;

  constructor(
    @inject("Settings") settings: INTERFACES.ISettings
  ) {
    this.settings = settings;
    this.name = "User";
    this.isAuth = true;

    this.setSchema();
  }

  /**
   * The Device schema is described here.
   */
  private setSchema = () => {
    let schema = new mongoose.Schema({
      password: {
        maxlength: [128, "password must not be longer than 32 characters"],
        minlength: [8, "password must not be shorter than 8 characters"],
        required: [true, "password is required"],
        type: String,
      },
      permissions: [{
        maxlength: [16, "permission must not be longer than 16 characters"],
        minlength: [4, "permission must not be longer than 4 characters"],
        type: String,
      }],
      username: {
        maxlength: [32, "username must not be longer than 32 characters"],
        minlength: [4, "username must not be shorter than 4 characters"],
        required: [true, "username is required"],
        type: String,
      },
    });

    this.schema = schema;
  }
}
