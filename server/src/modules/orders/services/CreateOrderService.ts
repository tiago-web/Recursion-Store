import OrdersRepository from '../infra/mongoose/repositories/OrdersRepository';

import IAddress from '@shared/dtos/IAddressDTO';
import { IOrder } from '../infra/mongoose/models/Order';

interface IRequest {
  userId: string;
  status: string;
  delivered: boolean;
  products: string[];
  shippingAddress: IAddress;
  billingAddress: IAddress;
}

class CreateOrderService {
  public async execute({
    userId,
    status,
    delivered,
    products,
    shippingAddress,
    billingAddress,
  }: IRequest): Promise<IOrder> {
    const ordersRepository = new OrdersRepository();

    // TODO
    // Check if the userId exist in the databasse
    // Check if the product ids exist in the database
    // Check if the order already exists in the database
    // if exists throw new AppError
    // Else
    // create it with an id and date
    // save in the database

    const order = ordersRepository.create({
      userId,
      status,
      delivered,
      products,
      shippingAddress,
      billingAddress,
    });

    return order;
  }
}

export default CreateOrderService;
