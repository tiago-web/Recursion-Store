interface User {
  name: string;
  type: string;
  categories: string;
  price: string;
  description: string;
}

interface IRequest {
  name: string;
  type: string;
  categories: string;
  price: string;
  description: string;
}

class CreateProductService {
  public async execute({ name, type, categories, price, description }: IRequest): Promise<User> {
    // TODO
    // Check if the product already exists in the database
    // if exists throw new AppError
    // Else
    // create it with an id and date
    // save in the database

    const product = {
      name,
      type,
      categories,
      price,
      description
    };

    return product;
  }
}

export default CreateProductService;
