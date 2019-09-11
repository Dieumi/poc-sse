"use strict";
// lib/app.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./routes");
const path = require('path');
class App {
    constructor() {
        this.routePrv = new routes_1.Routes();
        this.app = express();
        //use cors middleware
        this.config();
        this.routePrv.routes(this.app);
    }
    config() {
        this.app.use(express.static(path.join(__dirname, "client")));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map