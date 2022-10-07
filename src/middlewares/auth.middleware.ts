import { RequestHandler } from 'express';
import ErrorGenerate from '../helpers/errorGenerate';
import statusCodes from '../helpers/statusCode';
import { authenticate } from '../helpers/token';

const authorizationToken: RequestHandler = (req, _res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new ErrorGenerate('Token not found', statusCodes.UNAUTHORIZED);
  }

  try {
    const decoded = authenticate(authorization);
    req.headers.userId = decoded.id; 
    console.log(decoded);
    
    next();
  } catch (err) {
    throw new ErrorGenerate('Invalid token', statusCodes.UNAUTHORIZED);
  }
};

export default authorizationToken;