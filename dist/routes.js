"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("./controllers/userController");
class Routes {
    constructor() {
        this.userController = new userController_1.UserController();
    }
    routes(app) {
        app.route('/user')
            // POST endpoint
            .post(this.userController.addNewContact);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map