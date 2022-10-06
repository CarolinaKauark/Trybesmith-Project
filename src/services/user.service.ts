import UserModel from '../models/user.model';
import connection from '../models/connection';
import { IToken, IUser } from '../interfaces/interfaces';
import generateToken from '../helpers/token';

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
