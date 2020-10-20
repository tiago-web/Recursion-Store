import ICreateProductDTO from '@modules/products/dtos/ICreateProductDTO';
import IUpdateProductDTO from '@modules/products/dtos/IUpdateProductDTO';
import Product, { IProduct } from '../models/Product';

export default class ProductsRepository {
  public async findById(id: string): Promise<IProduct | null> {
    const product = await Product.findById(id).populate("reviews");

    return product;
  }

  public async create({
    name,
    type,
    categories,
    price,
    description,
    items
  }: ICreateProductDTO): Promise<IProduct | null> {
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

  public async updateById(id: string, data: IUpdateProductDTO): Promise<IProduct | null> {
    const product = await Product.findByIdAndUpdate(id, { data }, { new: true });

    return product;
  }
}
