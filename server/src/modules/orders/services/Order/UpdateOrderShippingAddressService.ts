import OrdersRepository from '../../infra/mongoose/repositories/OrdersRepository';
import { IOrder } from '../../infra/mongoose/models/Order';

import IAddress from '@shared/dtos/IAddressDTO';

import AppError from '@shared/errors/AppError';

const ordersRepository = new OrdersRepository();

interface IRequest {
  orderId: string;
  shippingAddress: IAddress;
}

class UpdateOrderShippingAddressService {
  public async execute({ orderId, shippingAddress }: IRequest): Promise<IOrder> {
    const order = await ordersRepository.findById(orderId);

    if (!order)
      throw new AppError('The order doesn\'t exist in the database.')

    if (order.status !== "In-Process")
      throw new AppError('This order cannot be changed anymore.');

    if (!shippingAddress)
      throw new AppError('The new shipping address must be provided.');

    order.shippingAddress = shippingAddress;

    await ordersRepository.save(order);

    return order;
  }
}

export default UpdateOrderShippingAddressService;
