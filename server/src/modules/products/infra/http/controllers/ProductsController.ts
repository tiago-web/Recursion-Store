import { Request, Response } from 'express';

import CreateProductService from "@modules/products/services/CreateProductService";

const createProduct = new CreateProductService();

export default class ProductsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, type, categories, price, description } = req.body;

    const product = createProduct.execute({
      name,
      type,
      categories,
      price,
      description
    });

    return res.status(201).json(product);
  }
}
