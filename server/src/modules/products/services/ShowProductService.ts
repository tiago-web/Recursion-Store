import ProductsRepository from "../infra/mongoose/repositories/ProductsRepository";
import { IProduct } from "../infra/mongoose/models/Product";

import AppError from '@shared/errors/AppError';

interface IRequest {
  productId: string;
};

const productsRepository = new ProductsRepository();

class ShowProductService {
  public async execute({ productId }: IRequest): Promise<IProduct> {
    const product = await productsRepository.findById(productId);

    if (!product)
      throw new AppError("Product not found.", 404);

    return product;
  }
};

export default ShowProductService;
