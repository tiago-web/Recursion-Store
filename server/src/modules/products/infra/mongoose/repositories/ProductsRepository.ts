import Product, { IItem, IProduct } from '../models/Product';

import ICreateProductDTO from '@modules/products/dtos/ICreateProductDTO';
import IUpdateSizeQuantityDTO from '@modules/products/dtos/IUpdateSizeQuantityDTO';
import IFindQuantityDTO from '@modules/products/dtos/IFindQuantityDTO';
import IFindByFilters from '@modules/products/dtos/IFindByFilters';
import itemRouter from '../../http/routes/items.routes';

class ProductsRepository {
  public async findByName(productName: string): Promise<IProduct | null> {
    const product = await Product.findOne({ name: productName });

    return product;
  }

  public async findAll(): Promise<IProduct[]> {
    const products = await Product.find({});

    return products;
  }

  public async findQuantity({
    productId,
    color,
    sizeTag,
  }: IFindQuantityDTO): Promise<number | null> {
    const product = await this.findById(productId);

    if (!product) return null;

    if (!product.items) return null;

    const item = product.items.find(item => item.color === color);

    if (!item) return null;

    const matchedSize = item.sizes.find(size => size.sizeTag === sizeTag);

    if (!matchedSize) return null;

    const quantity = matchedSize.quantity;

    return quantity;
  }

  public async updateSizeQuantity({
    productId,
    color,
    sizeTag,
    quantity,
    operator,
  }: IUpdateSizeQuantityDTO): Promise<IProduct | null> {
    const product = await this.findById(productId);

    if (!product) return null;

    if (!product.items) return null;

    const item = product.items.find(item => item.color === color);

    if (!item) return null;

    const sizeToUpdate = item.sizes.find(size => size.sizeTag === sizeTag);

    if (!sizeToUpdate) return null;

    const newQuantity =
      operator === 'add'
        ? sizeToUpdate.quantity + quantity
        : sizeToUpdate.quantity - quantity;

    sizeToUpdate.quantity = newQuantity;

    await this.save(product);

    return product;
  }

  public async findById(id: string): Promise<IProduct | null> {
    const product = await Product.findById(id).populate('reviews');

    return product;
  }

  public async findByFilters({
    categories,
    sizes,
  }: IFindByFilters): Promise<IProduct[] | null> {
    if (categories && sizes)
      return await Product.find({
        $and: [
          { 'items.sizes': { $elemMatch: { sizeTag: { $in: sizes } } } },
          { categories: { $all: categories } },
        ],
      });

    if (sizes)
      return await Product.find({
        'items.sizes': { $elemMatch: { sizeTag: { $in: sizes } } },
      });

    if (categories)
      return await Product.find({
        categories: { $all: categories },
      });

    return null;
  }

  public async create(
    productData: ICreateProductDTO,
  ): Promise<IProduct | null> {
    const product = new Product(productData);

    await product.save();

    return product;
  }

  public async save(product: IProduct): Promise<IProduct> {
    await product.save();

    return product;
  }

  public async markModified(product: IProduct): Promise<void> {
    await product.markModified('reviews');
  }

  public async updateItem(
    productId: string,
    oldColor: string,
    item: IItem,
  ): Promise<IProduct | null> {
    const productUp = await Product.updateOne(
      { _id: productId, 'items.color': oldColor },
      {
        $set: {
          'items.$.color': item.color,
          'items.$.imageColor': item.imageColor,
          'items.$.sizes': item.sizes,
          'items.$.productImages': item.productImages,
        },
      },
    );

    const product = await Product.findById(productId).populate('reviews');

    return product;
  }
}

export default ProductsRepository;
