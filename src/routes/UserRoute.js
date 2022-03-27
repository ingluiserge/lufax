import { Router } from "express";
import UserController from "../controllers/UserController.js";
import ValidateCreateUser from "../middewlare/ValidationUser.js";

const userRouter = Router();

userRouter.post('/', ValidateCreateUser, UserController.addUsers);

userRouter.post('/login', UserController.login);

export default userRouter;
