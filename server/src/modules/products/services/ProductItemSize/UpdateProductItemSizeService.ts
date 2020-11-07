import { IProduct } from "../../infra/mongoose/models/Product";
import ProductsRepository from "../../infra/mongoose/repositories/ProductsRepository";

import AppError from "@shared/errors/AppError";

interface IRequest {
  productId: string;
  color: string;
  oldSizeTag: string;
  sizeTag?: string;
  quantity?: number;
};

const productsRepository = new ProductsRepository();

class UpdateProductItemSizeService {
  public async execute({
    productId,
    color,
    oldSizeTag,
    sizeTag,
    quantity
  }: IRequest): Promise<IProduct> {
    let product = await productsRepository.findById(productId);

    if (!product)
      throw new AppError("Product doesn't exists", 404);

    const item = product.items.find(item => item.color === color);

    if (!item)
      throw new AppError("Item doesn't exists", 404);

    const size = item.sizes.find(size => size.sizeTag === oldSizeTag);

    if (!size)
      throw new AppError("Size doesn't exists", 404);

    if (!sizeTag && !quantity)
      throw new AppError("Bad Request.")

    size.sizeTag = sizeTag ?? size.sizeTag;
    size.quantity = quantity ?? size.quantity;

    await productsRepository.save(product);

    return product;
  }
}

export default UpdateProductItemSizeService;
