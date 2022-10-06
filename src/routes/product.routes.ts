import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const productRouter = Router();

const productController = new ProductController();

productRouter.post('/', productController.insertProducts);
productRouter.get('/', productController.getAllProducts);

export default productRouter;