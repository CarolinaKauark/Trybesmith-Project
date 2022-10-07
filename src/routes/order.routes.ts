import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import authorizationToken from '../middlewares/auth.middleware';
import orderValidation from '../middlewares/orderValidation.middleware';

const orderRouter = Router();

const orderController = new OrderController();

orderRouter.get('/', orderController.getAllOrders);
orderRouter.post('/', authorizationToken, orderValidation, orderController.insertOrders);

export default orderRouter;