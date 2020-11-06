import { IProduct, IItem } from "../infra/mongoose/models/Product";
import ProductsRepository from "../infra/mongoose/repositories/ProductsRepository";

import AppError from "@shared/errors/AppError";
import UsersRepository from "@modules/users/infra/mongoose/repositories/UsersRepository";

interface IRequest {
  productId: string;
  userId: string;
  name?: string;
  type?: string;
  categories?: string[];
  price?: number;
  description?: string;
  items?: IItem[];
  discountPercentage?: number;
}

const productsRepository = new ProductsRepository();
const usersRepository = new UsersRepository();

// TODO
// Update the fields of the product
// Check if productId exists in the database

class UpdateProductService {
  public async execute({
    productId,
    userId,
    name,
    type,
    categories,
    price,
    description,
    items,
    discountPercentage
  }: IRequest): Promise<IProduct> {
    const user = await usersRepository.findById(userId);

    if (!user)
      throw new AppError("User doesn't exists", 404);


    if (user.permission === "Admin" || user.permission === "Master") {
      let product = await productsRepository.findById(productId);

      if (!product)
        throw new AppError("Product doesn't exists", 404);

      product.name = name ?? product.name;
      product.type = type ?? product.type;
      product.categories = categories ?? product.categories;
      product.price = price ?? product.price;
      product.description = description ?? product.description;
      product.items = items ?? product.items;
      product.discountPercentage = discountPercentage ?? product.discountPercentage;

      await productsRepository.save(product);

      return product;
    } else {
      throw new AppError("User must have Admin Permission or higher", 403);
    }
  }
}

export default UpdateProductService;
