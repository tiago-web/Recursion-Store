import { Request, Response } from 'express';

import CreateProductItemSizeService from "@modules/products/services/CreateProductItemSizeService";
import UpdateProductItemSizeService from "@modules/products/services/UpdateProductItemSizeService";
import DeleteProductItemSizeService from "@modules/products/services/DeleteProductItemSizeService";

const createProductItemSize = new CreateProductItemSizeService();
const updateProductItemSize = new UpdateProductItemSizeService();
const deleteProductItemSize = new DeleteProductItemSizeService();

class ProductItemSizeController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { id: productId } = req.params;
    const { color, sizeTag, quantity } = req.body;

    const product = await createProductItemSize.execute({
      productId,
      color,
      sizeTag,
      quantity
    });

    return res.status(201).json(product);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id: productId } = req.params;
    const { color, sizeTag, quantity } = req.body;

    const product = await updateProductItemSize.execute({
      productId,
      color,
      sizeTag,
      quantity
    });

    return res.status(202).json(product);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id: productId } = req.params;
    const { color, sizeTag } = req.body;

    const product = await deleteProductItemSize.execute({
      productId,
      color,
      sizeTag
    });

    return res.status(202).json(product);
  }
}

export default ProductItemSizeController;
