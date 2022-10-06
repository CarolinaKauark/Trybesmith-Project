import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  insertUser = async (req: Request, res: Response) => {
    const { body } = req;
    const token = await this.userService.insertUser(body);
    return res.status(201).json(token);
  };
}