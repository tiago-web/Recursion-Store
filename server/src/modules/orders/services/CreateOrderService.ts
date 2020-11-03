import OrdersRepository from '../infra/mongoose/repositories/OrdersRepository';
import AppError from '@shared/errors/AppError';

import IAddress from '@shared/dtos/IAddressDTO';
import { IOrder } from '../infra/mongoose/models/Order';
import ProductsRepository from '@modules/products/infra/mongoose/repositories/ProductsRepository';

interface IRequest {
  userId: string;
  products: string[];
  shippingAddress: IAddress;
  billingAddress: IAddress;
}

const ordersRepository = new OrdersRepository();
const productsRepository = new ProductsRepository();

class CreateOrderService {
  public async execute({
    userId,
    products,
    shippingAddress,
    billingAddress,
  }: IRequest): Promise<IOrder> {
    let checkProductExists;
    for (let i = 0; i < products.length; i++) {
      checkProductExists = await productsRepository.findById(products[i]);

      if (!checkProductExists)
        throw new AppError("One product doesn't exists in the database.");
    }

    const order = await ordersRepository.create({
      userId,
      products,
      shippingAddress,
      billingAddress,
    });

    return order;
  }
}

export default CreateOrderService;
