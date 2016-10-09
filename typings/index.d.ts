/// <reference path="globals/bluebird/index.d.ts" />
/// <reference path="globals/express-serve-static-core/index.d.ts" />
/// <reference path="globals/express/index.d.ts" />
/// <reference path="globals/inversify/index.d.ts" />
/// <reference path="globals/mime/index.d.ts" />
/// <reference path="globals/mongodb/index.d.ts" />
/// <reference path="globals/mongoose/index.d.ts" />
/// <reference path="globals/node/index.d.ts" />
/// <reference path="globals/serve-static/index.d.ts" />
/// <reference path="globals/winston/index.d.ts" />

import * as Bluebird from "bluebird";
   declare module "mongoose" {
     type Promise<T> = Bluebird<T>;
   }