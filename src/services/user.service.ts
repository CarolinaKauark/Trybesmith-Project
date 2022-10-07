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
    const token = await generateToken({ username, classe, level });
    return { token };
  }

  async getByNameAndPassword(userLogin: ILogin) {
    const user = await this.userModel.getByNameAndPassword(userLogin);
    console.log(user);
    
    if (!user) {
      console.log('aqui', user);
      
      throw new ErrorGenerate('Username or password invalid', statusCodes.UNAUTHORIZED);
    }
    
    const token: string = generateToken(user as IUser);
    return { token };
  }
}
