import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import productValidation from '../middlewares/productValidation.middleware';

const productRouter = Router();

const productController = new ProductController();

productRouter.get('/', productController.getAllProducts);
productRouter.post('/', productValidation, productController.insertProducts);

export default productRouter;