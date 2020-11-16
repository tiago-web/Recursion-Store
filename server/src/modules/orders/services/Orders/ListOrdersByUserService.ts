import statusCodes from "@config/statusCodes";
import AppError from '@shared/errors/AppError';

import UsersRepository from '@modules/users/infra/mongoose/repositories/UsersRepository';
import OrdersRepository from '../../infra/mongoose/repositories/OrdersRepository';
import { IOrder } from '../../infra/mongoose/models/Order';

const usersRepository = new UsersRepository();
const ordersRepository = new OrdersRepository();

interface IRequest {
  userId: string;
}

class ListOrdersByUserService {
  public async execute({ userId }: IRequest): Promise<IOrder[] | null> {
    const user = await usersRepository.findById(userId);

    if (!user)
      throw new AppError('User not found.', statusCodes.notFound);

    const orders = await ordersRepository.findAllByUser(user);

    return orders;
  }
}

export default ListOrdersByUserService;
