import { IProduct } from "../../infra/mongoose/models/Product";
import ProductsRepository from "../../infra/mongoose/repositories/ProductsRepository";

import AppError from '@shared/errors/AppError';

interface IRequest {
  adminId: string;
  name: string;
  type: string;
  categories: string[];
  price: number;
  description: string;
};

const productsRepository = new ProductsRepository();

class CreateProductService {
  public async execute({ adminId, name, type, categories, price, description }: IRequest): Promise<IProduct | null> {
    const checkProductExists = await productsRepository.findByName(name);

    if (checkProductExists)
      throw new AppError("Product name already exists in the database");

    const product = await productsRepository.create({
      createdBy: adminId,
      name,
      type,
      categories,
      price,
      description
    });

    return product;
  }
};

export default CreateProductService;
