import { IProduct } from "../../infra/mongoose/models/Product";
import ProductsRepository from "../../infra/mongoose/repositories/ProductsRepository";

import AppError from '@shared/errors/AppError';
import statusCodes from "@config/statusCodes";

interface IRequest {
  productId: string;
  color: string;
  imageColor: string;
  productImages: string[];
  sizes: Array<{
    sizeTag: string;
    quantity: number;
  }>;
};

const productsRepository = new ProductsRepository();

class CreateProductService {
  public async execute({ productId, color, imageColor, productImages, sizes }: IRequest): Promise<IProduct | null> {
    const product = await productsRepository.findById(productId);

    if (!product)
      throw new AppError("Product not found", statusCodes.notFound);

    product.items.push({ color, imageColor, productImages, sizes });

    await productsRepository.save(product);

    return product;
  }
};

export default CreateProductService;
