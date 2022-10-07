import { Router } from 'express';
import UserController from '../controllers/user.controller';
// import loginMid from '../middlewares/loginMid';
import userLoginMid from '../middlewares/userLogin.middleware';

const loginRouter = Router();

const userController = new UserController();

loginRouter.post('/', userLoginMid, userController.getByNameAndPassword);

export default loginRouter;