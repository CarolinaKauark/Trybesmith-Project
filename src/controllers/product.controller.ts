import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  insertProducts = async (req: Request, res: Response) => {
    const { body } = req;
    const newProduct = await this.productService.insertProducts(body);
    return res.status(201).json(newProduct);
  };

  getAllProducts = async (_req: Request, res: Response) => {
    const allProducts = await this.productService.getAllProducts();
    return res.status(200).json(allProducts);
  };
}