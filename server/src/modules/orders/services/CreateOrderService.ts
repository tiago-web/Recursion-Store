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
  items: {
    color: string;
    sizeTag: string;
    quantity: number;
  }
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

      const productMatchColor = checkProductExists.items.find(item => item.color === products[i].items.color);

      if (!productMatchColor)
        throw new AppError("One of the items colors doesn't exists in the database.");

      const size = productMatchColor.size.find(size => size.sizeTag === products[i].items.sizeTag);

      if (!size)
        throw new AppError("One of the sizes doesn't exists in the database.");

      if (products[i].items.quantity > size.quantity)
        throw new AppError("The quantity exceed the number of items available in the database.");

      // update the item quantity in the database

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
