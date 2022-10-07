import { NextFunction, Request, Response } from 'express';
import ErrorGenerate from '../helpers/errorGenerate';
import statusCodes from '../helpers/statusCode';

const loginMid = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  if (!username) throw new ErrorGenerate('"username" is required', statusCodes.BAD_REQUEST);
  if (!password) throw new ErrorGenerate('"password" is required', statusCodes.BAD_REQUEST);

  next();
};

export default loginMid;