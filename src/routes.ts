import {Request, Response} from "express";
import { UserController } from "./controllers/userController";


export class Routes {    
    public userController : UserController = new UserController()

    public routes(app): void {  
        app.route('/user')   
        // POST endpoint
        .post(this.userController.addNewContact)
    }
}