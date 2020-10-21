import { IProduct, IItem } from "../infra/mongoose/models/Product";
import ProductsRepository from "../infra/mongoose/repositories/ProductsRepository";

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
  public async execute({ name, type, categories, price, description, items }: IRequest): Promise<IProduct> {

    // TODO
    // Check if the product already exists in the database
    // if exists throw new AppError
    // Else
    // create it with an id and date
    // save in the database

    const product = productsRepository.create({
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
