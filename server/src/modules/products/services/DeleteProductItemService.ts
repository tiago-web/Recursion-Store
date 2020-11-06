import { IProduct } from "../infra/mongoose/models/Product";
import ProductsRepository from "../infra/mongoose/repositories/ProductsRepository";

import AppError from '@shared/errors/AppError';

interface IRequest {
  productId: string;
  color: string;
};

const productsRepository = new ProductsRepository();

class DeleteProductItemService {
  public async execute({ productId, color }: IRequest): Promise<IProduct | null> {
    const product = await productsRepository.findById(productId);

    if (!product)
      throw new AppError("Product not found", 404);

    const item = product.items.find(item => item.color === color);

    if (!item)
      throw new AppError("Item not found", 404);

    product.items = product.items.filter(item => item.color !== color);

    await productsRepository.save(product);

    return product;
  }
};

export default DeleteProductItemService;
