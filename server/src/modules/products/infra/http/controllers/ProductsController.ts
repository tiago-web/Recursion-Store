import { Request, Response } from 'express';

import ListProductsService from "@modules/products/services/ListProductsService";

const listProducts = new ListProductsService();

class ProductsController {
  public async index(req: Request, res: Response): Promise<Response> {
    const products = await listProducts.execute();

    return res.status(200).json(products);
  }
}

export default ProductsController;
