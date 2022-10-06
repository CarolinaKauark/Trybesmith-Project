import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces/interfaces';

export default class ProductModel {
  connection: Pool;

  constructor(connectionBD: Pool) {
    this.connection = connectionBD;
  }

  async insertProducts(product: IProduct) {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)',
      [product.name, product.amount],
    );
    return { id: insertId, ...product };
  }
}
