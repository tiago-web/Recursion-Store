import { IProduct } from "../../infra/mongoose/models/Product";
import ProductsRepository from "../../infra/mongoose/repositories/ProductsRepository";
import DiskStorageProvider from "@shared/container/providers/StorageProvider/implementations/DiskStorageProvider";

import AppError from '@shared/errors/AppError';
import statusCodes from "@config/statusCodes";

interface IRequest {
  productId: string;
  color: string;
  imageColor: string;
  productImages: Array<{
    image: string;
    imageUrl: string;
  }>;
  sizes: Array<{
    sizeTag: string;
    quantity: number;
  }>;
};

const productsRepository = new ProductsRepository();
const storageProvider = new DiskStorageProvider();

class CreateProductService {
  public async execute({ productId, color, imageColor, productImages, sizes }: IRequest): Promise<IProduct | null> {
    const product = await productsRepository.findById(productId);

    if (!product)
      throw new AppError("Product not found", statusCodes.notFound);

    if (product.items) {
      const itemWithSameColor = product.items.find(item => item.color === color)

      if (itemWithSameColor)
        throw new AppError("An item with the same name already exists for this product", statusCodes.badRequest);
    }

    for (let i = 0; i < productImages.length; i++)
      await storageProvider.saveFile(productImages[i].image);

    const newProductItem = { color, imageColor, productImages, sizes };

    if (!product.items)
      product.items = [newProductItem];
    else
      product.items.push(newProductItem);

    await productsRepository.save(product);

    return product;
  }
};

export default CreateProductService;
