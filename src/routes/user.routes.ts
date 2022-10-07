import { Router } from 'express';
import UserController from '../controllers/user.controller';
import userValidation from '../middlewares/userValidation.middleware';

const userRouter = Router();

const userController = new UserController();

userRouter.post('/', userValidation, userController.insertUser);

export default userRouter;