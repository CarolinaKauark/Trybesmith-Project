import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';
import UserModel from '../models/user.model';
import connection from '../models/connection';
import { IToken, IUser } from '../interfaces/interfaces';

dotenv.config();

const generateToken = async (user: Omit<IUser, 'password'>) => jwt
  .sign(user, process.env.JWT_SECRET as Secret);

export default class UserService {
  userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  async insertUser(user: IUser): Promise<IToken> {
    const { username, classe, level } = user;
    await this.userModel.insertUser(user);
    const token = await generateToken({ username, classe, level });
    return { token };
  }
}
