import Product, { IProduct } from '../models/Product';

import ICreateProductDTO from '@modules/products/dtos/ICreateProductDTO';
import IUpdateProductDTO from '@modules/products/dtos/IUpdateProductDTO';

class ProductsRepository {
  public async findAll(): Promise<IProduct[]> {
    const products = await Product.find({});

    return products;
  }

  public async findById(id: string): Promise<IProduct | null> {
    const product = await Product.findById(id).populate("reviews");

    return product;
  }

  public async create(productData: ICreateProductDTO): Promise<IProduct | null> {
    const product = new Product(productData);

    await product.save();

    return product;
  }

  public async updateById(id: string, data: IUpdateProductDTO): Promise<IProduct | null> {
    const product = await Product.findByIdAndUpdate(id, { data }, { new: true });

    return product;
  }

  public async save(product: IProduct): Promise<IProduct> {
    await product.save();

    return product;
  }
}

export default ProductsRepository;
