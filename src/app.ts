// lib/app.ts

import * as express from "express";

import * as bodyParser from "body-parser";
import { Routes } from "./routes";
const path = require('path')
class App {

  public app: express.Application;
  public routePrv: Routes = new Routes();
  constructor() {
      this.app = express();
     
      
      //use cors middleware
      this.config();
      this.routePrv.routes(this.app);
     
  }

  private config(): void{
      this.app.use(express.static(path.join(__dirname, "client")));
      this.app.use(bodyParser.json());
      this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;