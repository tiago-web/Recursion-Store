import { Request, Response } from 'express';

import UpdateProductItemService from "@modules/products/services/UpdateProductItemService";


const updateProductItem = new UpdateProductItemService();


class ProductItemController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.body;
    const { id: productId } = req.params;
    const { color, imageColor, productImages, sizes } = req.body;

    const product = await updateProductItem.execute({
      userId,
      productId,
      color,
      imageColor,
      productImages,
      sizes
    });

    return res.status(201).json(product);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.user;
    const { id: productId } = req.params;
    const { name, type, categories, price, description } = req.body;

    const product = await updateProduct.execute({
      userId,
      productId,
      name,
      type,
      categories,
      price,
      description,
    });

    return res.status(202).json(product);
  }

  public async index(req: Request, res: Response): Promise<Response> {
    const { id: productId } = req.params;

    const product = await showProduct.execute({ productId });

    return res.status(200).json(product);
  }
}

export default ProductItemController;
