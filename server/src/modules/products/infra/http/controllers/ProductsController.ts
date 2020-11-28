import { Request, Response } from 'express';
import statusCodes from '@config/statusCodes';

import ListProductsService from '@modules/products/services/Products/ListProductsService';

const listProducts = new ListProductsService();

class ProductsController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { categories, sizes } = req.query as any;

    const products = await listProducts.execute({ categories, sizes });

    return res.status(statusCodes.ok).json(products);
  }
}

export default ProductsController;
