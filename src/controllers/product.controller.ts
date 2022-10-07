import { RequestHandler } from 'express';
import statusCodes from '../helpers/statusCode';
import ProductService from '../services/product.service';

export default class ProductController {
  productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  insertProducts: RequestHandler = async (req, res) => {
    const { body } = req;
    const newProduct = await this.productService.insertProducts(body);
    return res.status(statusCodes.CREATED).json(newProduct);
  };

  getAllProducts: RequestHandler = async (_req, res) => {
    const allProducts = await this.productService.getAllProducts();
    return res.status(statusCodes.OK).json(allProducts);
  };
}