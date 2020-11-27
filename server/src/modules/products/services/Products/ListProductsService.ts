import ProductsRepository from '../../infra/mongoose/repositories/ProductsRepository';
import { IProduct } from '../../infra/mongoose/models/Product';

import capitalizeWords from '@utils/capitalizeWords';

const productsRepository = new ProductsRepository();

interface IRequest {
  categories?: string;
}

class ListProductService {
  public async execute({ categories }: IRequest): Promise<IProduct[]> {
    let parsedCategories, products;

    if (categories) {
      parsedCategories = categories
        .split(',')
        .map(category => capitalizeWords(category.trim()));

      products = await productsRepository.findByCategories(parsedCategories);
    } else {
      products = await productsRepository.findAll();
    }

    return products;
  }
}

export default ListProductService;
