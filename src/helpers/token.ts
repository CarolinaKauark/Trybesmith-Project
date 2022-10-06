import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUser } from '../interfaces/interfaces';

dotenv.config();

const generateToken = async (user: Omit<IUser, 'password'>) => jwt
  .sign(user, process.env.JWT_SECRET as Secret);

export default generateToken;