import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces/interfaces';

export default class UserModel {
  connection: Pool;
    
  constructor(connectionBD: Pool) {
    this.connection = connectionBD;
  }
    
  async insertUser(user: IUser) {
    await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)',
      [user.username, user.classe, user.level, user.password],
    );
  }
}