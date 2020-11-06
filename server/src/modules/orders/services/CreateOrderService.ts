import AppError from '@shared/errors/AppError';

import IAddress from '@shared/dtos/IAddressDTO';
import { IOrder } from '../infra/mongoose/models/Order';

import OrdersRepository from '../infra/mongoose/repositories/OrdersRepository';
import ProductsRepository from '@modules/products/infra/mongoose/repositories/ProductsRepository';
import UsersRepository from '@modules/users/infra/mongoose/repositories/UsersRepository';

const usersRepository = new UsersRepository();
const ordersRepository = new OrdersRepository();
const productsRepository = new ProductsRepository();

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
  products: IRequestProduct[];
  shippingAddress: IAddress;
  billingAddress: IAddress;
}

class CreateOrderService {
  public async execute({
    userId,
    products,
    shippingAddress,
    billingAddress,
  }: IRequest): Promise<IOrder> {
    let checkProductExists;

    for (let i = 0; i < products.length; i++) {
      checkProductExists = await productsRepository.findById(products[i].productId);

      if (!checkProductExists)
        throw new AppError("One of the products doesn't exists in the database.");
    }

    let stockQuantity;

    for (let i = 0; i < products.length; i++) {
      for (let j = 0; j < products[i].items.length; j++) {
        stockQuantity = await productsRepository.findQuantity({
          productId: products[i].productId,
          color: products[i].items[j].color,
          sizeTag: products[i].items[j].sizeTag,
        });

        if (stockQuantity === 0)
          throw new AppError("The product is out of stock.")

        if (!stockQuantity)
          throw new AppError("The product was not found.", 404);

        if (products[i].items[j].quantity > stockQuantity)
          throw new AppError("The requested quantity is not available in stock.")

        await productsRepository.updateSizeQuantity({
          productId: products[i].productId,
          color: products[i].items[j].color,
          sizeTag: products[i].items[j].sizeTag,
          quantity: products[i].items[j].quantity,
        })
      }
    }

    const order = await ordersRepository.create({
      userId,
      products,
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
