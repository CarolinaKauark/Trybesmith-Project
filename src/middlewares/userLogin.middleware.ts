import { NextFunction, Request, Response } from 'express';
import ErrorGenerate from '../helpers/errorGenerate';
import schemaLogin from '../helpers/schemaLogin';
import statusCodes from '../helpers/statusCode';

const userLoginMid = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const { error } = schemaLogin.validate(body);
  if (error) {
    console.log(error);
    
    throw new ErrorGenerate(error.message, statusCodes.BAD_REQUEST);
  }
  console.log(error);
  
  next();
};

export default userLoginMid;