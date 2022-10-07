import UserModel from '../models/user.model';
import connection from '../models/connection';
import { ILogin, IToken, IUser } from '../interfaces/interfaces';
import generateToken from '../helpers/token';
import ErrorGenerate from '../helpers/errorGenerate';
import statusCodes from '../helpers/statusCode';

export default class UserService {
  userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  async insertUser(user: IUser): Promise<IToken> {
    const { username, classe, level } = user;
    await this.userModel.insertUser(user);
    const token = generateToken({ username, classe, level });
    return { token };
  }

  async getByNameAndPassword(userLogin: ILogin) {
    const user = await this.userModel.getByNameAndPassword(userLogin);
    console.log(user);
    
    if (!user) {      
      throw new ErrorGenerate('Username or password invalid', statusCodes.UNAUTHORIZED);
    }

    const { username, classe, level } = user;
    
    const token: string = generateToken({ username, classe, level });
    return { token };
  }
}
