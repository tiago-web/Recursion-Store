import { Request, Response } from 'express';
import statusCodes from '@config/statusCodes';
import * as Yup from 'yup';

import CreateProductItemService from '@modules/products/services/ProductItem/CreateProductItemService';
import UpdateProductItemService from '@modules/products/services/ProductItem/UpdateProductItemService';
import DeleteProductItemService from '@modules/products/services/ProductItem/DeleteProductItemService';

const createProductItem = new CreateProductItemService();
const updateProductItem = new UpdateProductItemService();
const deleteProductItem = new DeleteProductItemService();

class ProductItemController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { id: productId } = req.params;
    const { color, imageColor } = req.body;
    let { sizes } = req.body;

    sizes = JSON.parse(sizes);

    const requestImages = req.files as Express.Multer.File[];

    const productImages = requestImages.map(image => {
      return {
        image: image.filename,
        imageUrl: `${req.protocol}://${req.get('host')}/files/${
          image.filename
        }`,
      };
    });

    const data = {
      color,
      imageColor,
      sizes,
      productImages,
    };

    const schema = Yup.object().shape({
      color: Yup.string().required(),
      imageColor: Yup.string().required(),
      sizes: Yup.array(
        Yup.object().shape({
          sizeTag: Yup.string().required(),
          quantity: Yup.number().required(),
        }),
      ),
      productImages: Yup.array(
        Yup.object().shape({
          image: Yup.string().required(),
          imageUrl: Yup.string().required(),
        }),
      ).max(4),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const product = await createProductItem.execute({
      productId,
      color,
      imageColor,
      productImages,
      sizes,
    });

    return res.status(statusCodes.created).json(product);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id: productId } = req.params;
    const { color, oldColor, imageColor } = req.body;
    let { sizes } = req.body;

    sizes = JSON.parse(sizes);

    const requestImages = req.files as Express.Multer.File[];

    const productImages = requestImages.map(image => {
      return {
        image: image.filename,
        imageUrl: `${req.protocol}://${req.get('host')}/files/${
          image.filename
        }`,
      };
    });

    const data = {
      oldColor,
      color,
      imageColor,
      sizes,
      productImages,
    };

    const schema = Yup.object().shape({
      oldColor: Yup.string().required(),
      color: Yup.string(),
      imageColor: Yup.string(),
      sizes: Yup.array(
        Yup.object().shape({
          sizeTag: Yup.string().required(),
          quantity: Yup.number().required(),
        }),
      ),
      productImages: Yup.array(
        Yup.object().shape({
          image: Yup.string().required(),
          imageUrl: Yup.string().required(),
        }),
      ).max(4),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const product = await updateProductItem.execute({
      productId,
      color,
      oldColor,
      imageColor,
      productImages,
      sizes,
    });

    return res.status(statusCodes.ok).json(product);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id: productId } = req.params;
    const { color } = req.body;

    const product = await deleteProductItem.execute({
      productId,
      color,
    });

    return res.status(statusCodes.accepted).json(product);
  }
}

export default ProductItemController;
