import { IProduct } from "../../infra/mongoose/models/Product";
import ProductsRepository from "../../infra/mongoose/repositories/ProductsRepository";

import AppError from "@shared/errors/AppError";
import statusCodes from "@config/statusCodes";

interface IRequest {
  productId: string;
  oldColor: string;
  color?: string;
  imageColor?: string;
  productImages?: string[];
};

const productsRepository = new ProductsRepository();

class UpdateProductItemService {
  public async execute({
    productId,
    oldColor,
    color,
    imageColor,
    productImages,
  }: IRequest): Promise<IProduct> {
    let product = await productsRepository.findById(productId);

    if (!product)
      throw new AppError("Product doesn't exists", statusCodes.notFound);

    const item = product.items.find(item => item.color === oldColor);

    if (!item)
      throw new AppError("Item doesn't exists", statusCodes.notFound);

    if (!color && !imageColor && !productImages)
      throw new AppError('Bad Request.')

    item.color = color ?? item.color;
    item.imageColor = imageColor ?? item.imageColor;
    item.productImages = productImages ?? item.productImages;

    await productsRepository.save(product);

    return product;
  }
}

export default UpdateProductItemService;
