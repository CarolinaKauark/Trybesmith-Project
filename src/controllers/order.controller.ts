import { RequestHandler } from 'express';
import statusCodes from '../helpers/statusCode';
import OrderService from '../services/order.service';

export default class OrderController {
  orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  getAllOrders: RequestHandler = async (_req, res) => {
    const allOrders = await this.orderService.getAllOrders();
    return res.status(statusCodes.OK).json(allOrders);
  };
}