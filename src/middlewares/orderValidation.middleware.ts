import { NextFunction, Request, Response } from 'express';
import ErrorGenerate from '../helpers/errorGenerate';
import { orderSchema } from '../helpers/schema';

import statusCodes from '../helpers/statusCode';

const orderValidation = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const { error } = orderSchema.validate(body);
  if (error) {    
    if (error.message.includes('least 1 items')) {
      throw new ErrorGenerate(
        error.message.replace('must contain at least 1 items', 'must include only numbers'), 
        statusCodes.UNPROCESSABLE_ENTITY,
      );
    }
    
    throw new ErrorGenerate(
      error.message, 
      error.message
        .includes('required') 
        ? statusCodes.BAD_REQUEST : statusCodes.UNPROCESSABLE_ENTITY,
    );
  }
  console.log(error);
  
  next();
};

export default orderValidation;