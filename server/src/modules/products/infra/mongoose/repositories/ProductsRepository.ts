import Product, { IProduct } from '../models/Product';

import ICreateProductDTO from '@modules/products/dtos/ICreateProductDTO';
import IUpdateSizeQuantityDTO from '@modules/products/dtos/IUpdateSizeQuantityDTO';
import IFindQuantityDTO from '@modules/products/dtos/IFindQuantityDTO';

class ProductsRepository {
  public async findByName(productName: string): Promise<IProduct | null> {
    const product = await Product.findOne({ name: productName });

    return product;
  }

  public async findAll(): Promise<IProduct[]> {
    const products = await Product.find({});

    return products;
  }

  public async findQuantity({ productId, color, sizeTag }: IFindQuantityDTO): Promise<number | null> {
    const product = await this.findById(productId);

    if (!product)
      return null;

    const item = product.items.find(item => item.color === color);

    if (!item)
      return null;

    const matchedSize = item.sizes.find(size => size.sizeTag === sizeTag);

    if (!matchedSize)
      return null;

    const quantity = matchedSize.quantity;

    return quantity;
  }

  public async updateSizeQuantity({ productId, color, sizeTag, quantity }: IUpdateSizeQuantityDTO): Promise<IProduct | null> {
    const product = await this.findById(productId);

    if (!product)
      return null;

    const item = product.items.find(item => item.color === color);

    if (!item)
      return null;

    const sizeToUpdate = item.sizes.find(size => size.sizeTag === sizeTag);

    if (!sizeToUpdate)
      return null;

    sizeToUpdate.quantity = sizeToUpdate.quantity - quantity;

    await this.save(product);

    return product;
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

  public async save(product: IProduct): Promise<IProduct> {
    await product.save();

    return product;
  }
}

export default ProductsRepository;
