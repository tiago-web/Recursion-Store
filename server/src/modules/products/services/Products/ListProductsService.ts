import ProductsRepository from '../../infra/mongoose/repositories/ProductsRepository';
import { IProduct } from '../../infra/mongoose/models/Product';

import AppError from '@shared/errors/AppError';
import statusCode from '@config/statusCodes';
import capitalizeWords from '@utils/capitalizeWords';

const productsRepository = new ProductsRepository();

interface IRequest {
  categories?: string;
  sizes?: string;
}

class ListProductService {
  public async execute({ categories, sizes }: IRequest): Promise<IProduct[]> {
    let parsedCategories, parsedSizes, products;

    if (categories || sizes) {
      if (categories) {
        parsedCategories = categories
          .split(',')
          .map(category => capitalizeWords(category.trim()));
      }
      if (sizes) {
        parsedSizes = sizes
          .split(',')
          .map(size => size.trim().toLocaleUpperCase());
      }

      products = await productsRepository.findByFilters({
        categories: parsedCategories,
        sizes: parsedSizes,
      });

      if (!products) throw new AppError('Bad Request', statusCode.badRequest);
    } else {
      products = await productsRepository.findAll();
    }

    return products;
  }
}

export default ListProductService;
