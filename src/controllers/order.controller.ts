import { Request, Response } from 'express';
import OrderService from '../services/order.service';

export default class OrderController {
  orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  getAllOrders = async (_req: Request, res: Response) => {
    const allOrders = await this.orderService.getAllOrders();
    return res.status(200).json(allOrders);
  };
}