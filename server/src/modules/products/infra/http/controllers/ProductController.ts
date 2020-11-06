import { Request, Response } from 'express';

import CreateProductService from "@modules/products/services/CreateProductService";
import UpdateProductService from "@modules/products/services/UpdateProductService";
import ShowProductService from "@modules/products/services/ShowProductService";

const createProduct = new CreateProductService();
const updateProduct = new UpdateProductService();
const showProduct = new ShowProductService();

class ProductController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, type, categories, price, description, items } = req.body;

    const product = await createProduct.execute({
      name,
      type,
      categories,
      price,
      description,
      items
    });

    return res.status(201).json(product);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.user;
    const { id: productId } = req.params;
    const { name, type, categories, price, description, items } = req.body;

    const product = await updateProduct.execute({
      userId,
      productId,
      name,
      type,
      categories,
      price,
      description,
      items
    });

    return res.status(202).json(product);
  }

  public async index(req: Request, res: Response): Promise<Response> {
    const { id: productId } = req.params;

    const product = await showProduct.execute({ productId });

    return res.status(200).json(product);
  }
}

export default ProductController;
