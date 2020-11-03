import AppError from '@shared/errors/AppError';

import { IOrder } from '../infra/mongoose/models/Order';
import OrdersRepository from '../infra/mongoose/repositories/OrdersRepository';

const ordersRepository = new OrdersRepository();

class ListOrdersByUserService {
  public async execute(userId: string): Promise<IOrder[] | null> {
    const orders = await ordersRepository.findAllByUserId(userId);

    return orders;
  }
}

export default ListOrdersByUserService;
