import { Request, Response } from 'express';
import statusCodes from "@config/statusCodes";

import CreateProductService from "@modules/products/services/Product/CreateProductService";
import UpdateProductService from "@modules/products/services/Product/UpdateProductService";
import ShowProductService from "@modules/products/services/Product/ShowProductService";

const createProduct = new CreateProductService();
const updateProduct = new UpdateProductService();
const showProduct = new ShowProductService();

class ProductController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { id: adminId } = req.user;
    const { name, type, categories, price, description } = req.body;

    const product = await createProduct.execute({
      adminId,
      name,
      type,
      categories,
      price,
      description
    });

    return res.status(statusCodes.created).json(product);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id: productId } = req.params;
    const { name, type, categories, price, description } = req.body;

    const product = await updateProduct.execute({
      productId,
      name,
      type,
      categories,
      price,
      description,
    });

    return res.status(statusCodes.ok).json(product);
  }

  public async index(req: Request, res: Response): Promise<Response> {
    const { id: productId } = req.params;

    const product = await showProduct.execute({ productId });

    return res.status(statusCodes.ok).json(product);
  }
}

export default ProductController;
