import ICreateProductDTO from '@modules/products/dtos/ICreateProductDTO';
import Product, { IProduct } from '../models/Product';

export default class ProductsRepository {
  // public async findById(id: string): Promise<IOrder | null> {
  //   const order = await Order.findById(id);

  //   return order;
  // }

  public async create({
    name,
    type,
    categories,
    price,
    description,
    items
  }: ICreateProductDTO): Promise<IProduct> {
    const product = new Product({
      name,
      type,
      categories,
      price,
      description,
      items
    });

    await product.save();

    return product;
  }
}
