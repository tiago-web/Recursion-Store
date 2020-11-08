import { Request, Response } from 'express';
import statusCodes from "@config/statusCodes";

import CreateProductItemService from "@modules/products/services/ProductItem/CreateProductItemService";
import UpdateProductItemService from "@modules/products/services/ProductItem/UpdateProductItemService";
import DeleteProductItemService from "@modules/products/services/ProductItem/DeleteProductItemService";

const createProductItem = new CreateProductItemService();
const updateProductItem = new UpdateProductItemService();
const deleteProductItem = new DeleteProductItemService();

class ProductItemController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { id: productId } = req.params;
    const { color, imageColor, productImages, sizes } = req.body;

    const product = await createProductItem.execute({
      productId,
      color,
      imageColor,
      productImages,
      sizes
    });

    return res.status(statusCodes.created).json(product);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id: productId } = req.params;
    const { color, oldColor, imageColor, productImages } = req.body;

    const product = await updateProductItem.execute({
      productId,
      color,
      oldColor,
      imageColor,
      productImages
    });

    return res.status(statusCodes.ok).json(product);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id: productId } = req.params;
    const { color } = req.body;

    const product = await deleteProductItem.execute({
      productId,
      color
    });

    return res.status(statusCodes.accepted).json(product);
  }
}

export default ProductItemController;
