import { IProduct } from '../interfaces/interfaces';
import connection from '../models/connection';
import ProductModel from '../models/product.model';

export default class ProductService {
  productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }

  async insertProducts(product: IProduct) {
    const newProduct = await this.productModel.insertProducts(product);
    return newProduct;
  }

  async getAllProducts(): Promise<IProduct[]> {
    const allProducts = await this.productModel.getAllProducts();
    return allProducts;
  }
}