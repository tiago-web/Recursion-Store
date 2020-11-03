import AppError from '@shared/errors/AppError';

import { IOrder } from '../infra/mongoose/models/Order';
import OrdersRepository from '../infra/mongoose/repositories/OrdersRepository';
import UsersRepository from '@modules/users/infra/mongoose/repositories/UsersRepository';

const ordersRepository = new OrdersRepository();
const usersRepository = new UsersRepository();

class ListOrdersByUserService {
  public async execute(userId: string): Promise<IOrder[] | null> {
    const user = await usersRepository.findById(userId);

    if (!user)
      throw new AppError("The user must have the required permissions", 403);

    const orders = await ordersRepository.findAllByUserId(userId);

    return orders;
  }
}

export default ListOrdersByUserService;
