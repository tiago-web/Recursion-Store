import ProductsRepository from "../infra/mongoose/repositories/ProductsRepository";
import { IProduct } from "../infra/mongoose/models/Product";

const productsRepository = new ProductsRepository();

class ListProductService {
  public async execute(): Promise<IProduct[]> {
    const products = await productsRepository.findAll();

    return products;
  }
};

export default ListProductService;
