import AppError from '@shared/errors/AppError';

import IAddress from '@shared/dtos/IAddressDTO';
import { IOrder } from '../infra/mongoose/models/Order';

import OrdersRepository from '../infra/mongoose/repositories/OrdersRepository';
import ProductsRepository from '@modules/products/infra/mongoose/repositories/ProductsRepository';
import UsersRepository from '@modules/users/infra/mongoose/repositories/UsersRepository';

const usersRepository = new UsersRepository();
const ordersRepository = new OrdersRepository();
const productsRepository = new ProductsRepository();

interface IOrderProduct {
  productId: string;
  productPrice: number;
  items: Array<{
    color: string;
    sizeTag: string;
    quantity: number;
  }>;
}

interface IRequestProduct {
  productId: string;
  items: Array<{
    color: string;
    sizeTag: string;
    quantity: number;
  }>;
}

interface IRequest {
  userId: string;
  shippingPrice: number;
  products: IRequestProduct[];
  shippingAddress: IAddress;
  billingAddress: IAddress;
}

class CreateOrderService {
  public async execute({
    userId,
    products,
    shippingPrice,
    shippingAddress,
    billingAddress,
  }: IRequest): Promise<IOrder> {
    let currentProduct, currentProductPrice, stockQuantity;
    let subTotal = 0;
    let quantityOfItemsForCurrentProduct = 0;

    const orderProducts: IOrderProduct[] = [];

    for (let i = 0; i < products.length; i++) {
      quantityOfItemsForCurrentProduct = 0;
      currentProduct = await productsRepository.findById(products[i].productId);

      if (!currentProduct)
        throw new AppError("One of the products doesn't exists in the database.");

      currentProductPrice = currentProduct.price;

      orderProducts.push({
        ...products[i],
        productPrice: currentProductPrice
      });

      for (let j = 0; j < products[i].items.length; j++) {
        stockQuantity = await productsRepository.findQuantity({
          productId: products[i].productId,
          color: products[i].items[j].color,
          sizeTag: products[i].items[j].sizeTag,
        });

        if (stockQuantity === 0)
          throw new AppError(`The product '${products[i].productId}' is out of stock.`);

        if (!stockQuantity)
          throw new AppError("The product was not found.", 404);

        if (products[i].items[j].quantity > stockQuantity)
          throw new AppError(`The requested quantity is for the product '${products[i].productId}' not available in stock.`);

        await productsRepository.updateSizeQuantity({
          productId: products[i].productId,
          color: products[i].items[j].color,
          sizeTag: products[i].items[j].sizeTag,
          quantity: products[i].items[j].quantity,
        });

        quantityOfItemsForCurrentProduct += products[i].items[j].quantity;
      }

      subTotal += (currentProductPrice * quantityOfItemsForCurrentProduct);
    }

    const tax = 0.13;

    const total = (subTotal + shippingPrice) * (1 + tax);

    const order = await ordersRepository.create({
      userId,
      products: orderProducts,
      total,
      subTotal,
      shippingPrice,
      shippingAddress,
      billingAddress,
    });

    const user = await usersRepository.findById(userId);

    if (!user)
      throw new AppError("User not found.", 404);

    user.orders?.push(order);

    await usersRepository.save(user);

    return order;
  }
}

export default CreateOrderService;
