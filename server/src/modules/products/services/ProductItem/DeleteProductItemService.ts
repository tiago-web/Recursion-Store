import { IProduct } from '../../infra/mongoose/models/Product';
import ProductsRepository from '../../infra/mongoose/repositories/ProductsRepository';

import AppError from '@shared/errors/AppError';
import statusCodes from '@config/statusCodes';
import DiskStorageProvider from '@shared/container/providers/StorageProvider/implementations/DiskStorageProvider';

interface IRequest {
  productId: string;
  color: string;
}

const productsRepository = new ProductsRepository();
const storageProvider = new DiskStorageProvider();

class DeleteProductItemService {
  public async execute({
    productId,
    color,
  }: IRequest): Promise<IProduct | null> {
    const product = await productsRepository.findById(productId);

    if (!product) throw new AppError('Product not found', statusCodes.notFound);

    const item = product.items?.find(item => item.color === color);

    if (!item) throw new AppError('Item not found', statusCodes.notFound);

    console.log(item);

    if (item.productImages)
      for (let i = 0; i < item.productImages.length; i++)
        await storageProvider.deleteFile(item.productImages[i].image);

    product.items = product.items?.filter(item => item.color !== color);

    console.log(product.items);

    await productsRepository.save(product);

    return product;
  }
}

export default DeleteProductItemService;
