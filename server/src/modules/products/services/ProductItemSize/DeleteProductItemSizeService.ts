import { IProduct } from "../../infra/mongoose/models/Product";
import ProductsRepository from "../../infra/mongoose/repositories/ProductsRepository";

import AppError from '@shared/errors/AppError';
import statusCodes from "@config/statusCodes";

interface IRequest {
  productId: string;
  color: string;
  sizeTag: string;
};

const productsRepository = new ProductsRepository();

class DeleteProductItemSizeService {
  public async execute({ productId, color, sizeTag }: IRequest): Promise<IProduct | null> {
    const product = await productsRepository.findById(productId);

    if (!product)
      throw new AppError("Product not found", statusCodes.notFound);

    const item = product.items.find(item => item.color === color);

    if (!item)
      throw new AppError("Item not found", statusCodes.notFound);

    const size = item.sizes.find(size => size.sizeTag === sizeTag);

    if (!size)
      throw new AppError("Size not found", statusCodes.notFound);

    item.sizes = item.sizes.filter(size => size.sizeTag !== sizeTag);

    await productsRepository.save(product);

    return product;
  }
}

export default DeleteProductItemSizeService;
