import { IProduct } from "../infra/mongoose/models/Product";
import ProductsRepository from "../infra/mongoose/repositories/ProductsRepository";

import AppError from "@shared/errors/AppError";

interface IRequest {
  productId: string;
  oldColor: string;
  color?: string;
  imageColor?: string;
  productImages?: string[];
}

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
      throw new AppError("Product doesn't exists", 404);


    const item = product.items.find(item => item.color === oldColor);

    if (!item)
      throw new AppError("Item doesn't exists", 404);

    item.color = color ?? item.color;
    item.imageColor = imageColor ?? item.imageColor;
    item.productImages = productImages ?? item.productImages;

    await productsRepository.save(product);

    return product;

  }
}

export default UpdateProductItemService;
