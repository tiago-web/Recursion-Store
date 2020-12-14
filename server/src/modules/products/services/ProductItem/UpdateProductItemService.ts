import { IProduct } from '../../infra/mongoose/models/Product';
import ProductsRepository from '../../infra/mongoose/repositories/ProductsRepository';
import DiskStorageProvider from '@shared/container/providers/StorageProvider/implementations/DiskStorageProvider';

import AppError from '@shared/errors/AppError';
import statusCodes from '@config/statusCodes';

interface IRequest {
  productId: string;
  oldColor: string;
  color?: string;
  imageColor?: string;
  productImages?: Array<{
    image: string;
    imageUrl: string;
  }>;
  sizes: Array<{
    sizeTag: string;
    quantity: number;
  }>;
}

const productsRepository = new ProductsRepository();
const storageProvider = new DiskStorageProvider();

class UpdateProductItemService {
  public async execute({
    productId,
    oldColor,
    color,
    imageColor,
    productImages,
    sizes,
  }: IRequest): Promise<IProduct> {
    let product = await productsRepository.findById(productId);

    if (!product)
      throw new AppError("Product doesn't exists", statusCodes.notFound);

    if (!product.items)
      throw new AppError("Product doesn't contain items", statusCodes.notFound);

    const item = product.items.find(item => item.color === oldColor);

    if (!item) throw new AppError("Item doesn't exists", statusCodes.notFound);

    if (!color && !imageColor && !productImages)
      throw new AppError('Bad Request.');

    if (productImages) {
      for (let i = 0; i < item.productImages.length; i++)
        await storageProvider.deleteFile(item.productImages[i].image);

      for (let i = 0; i < productImages.length; i++)
        await storageProvider.saveFile(productImages[i].image);

      item.productImages = productImages;
    }

    item.color = color ?? item.color;
    item.imageColor = imageColor ?? item.imageColor;
    item.sizes = sizes ?? item.sizes;

    //await productsRepository.save(product);

    const updatedProduct = await productsRepository.updateItem(
      productId,
      oldColor,
      item,
    );

    return updatedProduct as IProduct;
  }
}

export default UpdateProductItemService;
