import OrdersRepository from '../../infra/mongoose/repositories/OrdersRepository';
import { IOrder } from '../../infra/mongoose/models/Order';

import AppError from '@shared/errors/AppError';

const ordersRepository = new OrdersRepository();

interface IRequest {
  orderId: string;
  delivered: boolean;
}

class UpdateOrderDeliveredService {
  public async execute({ orderId, delivered }: IRequest): Promise<IOrder | null> {
    const order = await ordersRepository.updateDelivered({ orderId, delivered });

    if (!order)
      throw new AppError("The order doesn't exist in the database.");

    return order;
  }
}

export default UpdateOrderDeliveredService;
