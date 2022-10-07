import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { ILogin, IUser } from '../interfaces/interfaces';

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

  async getByNameAndPassword(userLogin: ILogin) {
    const [[user]] = await this.connection.execute<RowDataPacket[]>(
      `SELECT * FROM Trybesmith.Users 
      WHERE username = ? AND password = ?`,
      [userLogin.username, userLogin.password],
    );

    return user;
  }
}