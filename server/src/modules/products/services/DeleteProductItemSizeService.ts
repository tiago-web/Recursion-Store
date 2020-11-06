import { IProduct } from "../infra/mongoose/models/Product";
import ProductsRepository from "../infra/mongoose/repositories/ProductsRepository";

import AppError from '@shared/errors/AppError';

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
      throw new AppError("Product not found", 404);

    const item = product.items.find(item => item.color === color);

    if (!item)
      throw new AppError("Item not found", 404);

    const size = item.sizes.find(size => size.sizeTag === sizeTag);

    if (!size)
      throw new AppError("Size not found", 404);

    item.sizes = item.sizes.filter(size => size.sizeTag !== sizeTag);

    await productsRepository.save(product);

    return product;
  }
}

export default DeleteProductItemSizeService;
