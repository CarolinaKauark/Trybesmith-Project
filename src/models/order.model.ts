import { Pool } from 'mysql2/promise';
import { IOrder } from '../interfaces/interfaces';

export default class OrderModel {
  connection: Pool;
    
  constructor(connectionBD: Pool) {
    this.connection = connectionBD;
  }

  async getAllOrders(): Promise<IOrder []> {
    const [allOrders] = await this.connection.execute(
      `SELECT od.id as "id", od.userId, JSON_ARRAYAGG(pd.id) as "productsIds"
      FROM Trybesmith.Orders AS od
      INNER JOIN Trybesmith.Products AS pd on pd.orderId = od.id
      GROUP BY od.id;`,
    );

    return allOrders as IOrder[];
  }
}