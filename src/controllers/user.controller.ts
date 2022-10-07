import { RequestHandler } from 'express';
import { nextTick } from 'process';
import statusCodes from '../helpers/statusCode';
import UserService from '../services/user.service';

export default class UserController {
  userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  insertUser: RequestHandler = async (req, res) => {
    const { body } = req;
    const token = await this.userService.insertUser(body);
    return res.status(statusCodes.CREATED).json(token);
  };

  getByNameAndPassword: RequestHandler = async (req, res, next) => {
    try {
      const { body } = req;
      const token = await this.userService.getByNameAndPassword(body);
      return res.status(statusCodes.OK).json(token);
    } catch (error) {
      next(error);
    }
  };
}