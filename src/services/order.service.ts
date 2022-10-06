import { IOrder } from '../interfaces/interfaces';
import connection from '../models/connection';
import OrderModel from '../models/order.model';

export default class OrderService {
  orderModel: OrderModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
  }

  async getAllOrders(): Promise<IOrder[]> {
    const allOrders = await this.orderModel.getAllOrders();
    return allOrders;
  }
}