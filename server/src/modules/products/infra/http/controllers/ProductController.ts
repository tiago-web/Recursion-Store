import { Request, Response } from 'express';

import CreateProductService from "@modules/products/services/CreateProductService";
import UpdateProductService from "@modules/products/services/UpdateProductService";

const createProduct = new CreateProductService();
const updateProduct = new UpdateProductService();

export default class ProductController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, type, categories, price, description, items } = req.body;

    try {
      const product = await createProduct.execute({
        name,
        type,
        categories,
        price,
        description,
        items
      });

      return res.status(201).json(product);
    } catch (err) {
      return res.status(err.statusCode).json(err.message);
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { product_id: productId } = req.params;
    const { name, type, categories, price, description, items } = req.body;


    try {
      const product = await updateProduct.execute({
        productId,
        name,
        type,
        categories,
        price,
        description,
        items
      });

      return res.status(201).json(product);
    } catch (err) {
      return res.status(err.statusCode).json(err.message);
    }
  }

  public async index(req: Request, res: Response): Promise<Response> {

  }
}
