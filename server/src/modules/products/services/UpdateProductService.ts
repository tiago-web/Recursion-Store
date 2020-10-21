import { IProduct, IItem } from "../infra/mongoose/models/Product";
import ProductsRepository from "../infra/mongoose/repositories/ProductsRepository";

import AppError from "@shared/errors/AppError";

interface IRequest {
  productId: string;
  name?: string;
  type?: string;
  categories?: string[];
  price?: number;
  description?: string;
  items?: IItem[];
}

const productsRepository = new ProductsRepository();

// TODO
// Update the fields of the product
// Check if productId exists in the database

class UpdateProductService {
  public async execute(data: IRequest): Promise<IProduct> {
    const { productId, ...rest } = data;

    const product = await productsRepository.findById(productId);

    if (!product) {
      throw new AppError("Product doesn't exists", 404);
    }

    // TODO: Check if "rest" is working
    if (!rest) {
      throw new AppError("Update fields are missing", 400);
    }

    await productsRepository.updateById(productId, rest);

    return product;
  }
}

export default UpdateProductService;
