import { IProduct } from "../../infra/mongoose/models/Product";
import ProductsRepository from "../../infra/mongoose/repositories/ProductsRepository";

import AppError from "@shared/errors/AppError";
import statusCodes from "@config/statusCodes";

interface IRequest {
  productId: string;
  name?: string;
  type?: string;
  categories?: string[];
  price?: number;
  description?: string;
  discountPercentage?: number;
};

const productsRepository = new ProductsRepository();

class UpdateProductService {
  public async execute({
    productId,
    name,
    type,
    categories,
    price,
    description,
    discountPercentage
  }: IRequest): Promise<IProduct> {
    let product = await productsRepository.findById(productId);

    if (!product)
      throw new AppError("Product doesn't exists", statusCodes.notFound);

    if (!name && !type && !categories && !price && !description && !discountPercentage)
      throw new AppError('Bad Request.')

    product.name = name ?? product.name;
    product.type = type ?? product.type;
    product.categories = categories ?? product.categories;
    product.price = price ?? product.price;
    product.description = description ?? product.description;
    product.discountPercentage = discountPercentage ?? product.discountPercentage;

    await productsRepository.save(product);

    return product;
  }
}

export default UpdateProductService;
