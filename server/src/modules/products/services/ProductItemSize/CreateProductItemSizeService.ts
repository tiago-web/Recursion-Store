import { IProduct } from "../../infra/mongoose/models/Product";
import ProductsRepository from "../../infra/mongoose/repositories/ProductsRepository";

import AppError from '@shared/errors/AppError';
import statusCodes from "@config/statusCodes";

interface IRequest {
  productId: string;
  color: string;
  sizeTag: string;
  quantity: number;
};

const productsRepository = new ProductsRepository();

class CreateProductItemSizeService {
  public async execute({ productId, color, sizeTag, quantity }: IRequest): Promise<IProduct | null> {
    const product = await productsRepository.findById(productId);

    if (!product)
      throw new AppError("Product not found", statusCodes.notFound);

    const item = product.items.find(item => item.color === color);

    if (!item)
      throw new AppError("Item color not found", statusCodes.notFound);

    const checkSizeAlreadyExists = item.sizes.find(size => size.sizeTag === sizeTag);

    if (checkSizeAlreadyExists)
      throw new AppError("Item sizeTag already exists");

    item.sizes.push({ sizeTag, quantity });

    await productsRepository.save(product);

    return product;
  }
};

export default CreateProductItemSizeService;
