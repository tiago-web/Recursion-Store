import { IProduct, IItem } from "../infra/mongoose/models/Product";
import ProductsRepository from "../infra/mongoose/repositories/ProductsRepository";

import AppError from '@shared/errors/AppError';

interface IRequest {
  userId: string;
  productId: string;
  color: string;
  imageColor: string;
  productImages: string[];
  sizes: Array<{
    sizeTag: string;
    quantity: number;
  }>;
}

const productsRepository = new ProductsRepository();

class CreateProductService {
  public async execute({ userId, productId, color, imageColor, productImages, sizes }: IRequest): Promise<IProduct | null> {
    const product = await productsRepository.findByName(productId);

    if (!product)
      throw new AppError("Product not found");

    product.items.push({ color, imageColor, productImages, sizes });

    await productsRepository.save(product);

    return product;
  }
}

export default CreateProductService;
