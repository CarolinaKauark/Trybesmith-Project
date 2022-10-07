import { NextFunction, Request, Response } from 'express';
import ErrorGenerate from '../helpers/errorGenerate';
import { productSchema } from '../helpers/schema';

import statusCodes from '../helpers/statusCode';

const productValidation = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const { error } = productSchema.validate(body);
  if (error) {    
    throw new ErrorGenerate(
      error.message, 
      error.message
        .includes('required') ? statusCodes.BAD_REQUEST : statusCodes.UNPROCESSABLE_ENTITY,
    );
  }
  
  next();
};

export default productValidation;