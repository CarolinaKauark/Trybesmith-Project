import { Router } from 'express';
import UserController from '../controllers/user.controller';

const userRouter = Router();

const userController = new UserController();

userRouter.post('/', userController.insertUser);

export default userRouter;