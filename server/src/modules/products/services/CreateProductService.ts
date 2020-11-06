import { IProduct, IItem } from "../infra/mongoose/models/Product";
import ProductsRepository from "../infra/mongoose/repositories/ProductsRepository";

import AppError from '@shared/errors/AppError';

interface IRequest {
  name: string;
  type: string;
  categories: string[];
  price: number;
  description: string;
  items: IItem[];
}

const productsRepository = new ProductsRepository();

class CreateProductService {
  public async execute({ name, type, categories, price, description, items }: IRequest): Promise<IProduct | null> {
    const checkProductExists = await productsRepository.findByName(name);

    if (checkProductExists)
      throw new AppError("Product name already exists in the database");

    const product = await productsRepository.create({
      name,
      type,
      categories,
      price,
      description,
      items
    });

    return product;
  }
}

export default CreateProductService;
