import jwt, { JwtPayload, Secret, SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUser } from '../interfaces/interfaces';

dotenv.config();

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

export const generateToken = (user: Omit<IUser, 'password'>) => jwt
  .sign(user, process.env.JWT_SECRET as Secret, jwtConfig as SignOptions);

export const authenticate = (token: string): JwtPayload => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET as Secret);
  return decoded as JwtPayload;
};
