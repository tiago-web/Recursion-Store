import OrdersRepository from '../../infra/mongoose/repositories/OrdersRepository';
import UsersRepository from '@modules/users/infra/mongoose/repositories/UsersRepository';
import { IOrder } from '../../infra/mongoose/models/Order';

import AppError from '@shared/errors/AppError';
import statusCodes from "@config/statusCodes";

const ordersRepository = new OrdersRepository();
const usersRepository = new UsersRepository();

interface IRequest {
  userId: string;
  orderId: string;
}

class GetOrderService {
  public async execute({ userId, orderId }: IRequest): Promise<IOrder> {
    const user = await usersRepository.findById(userId);

    if (!user)
      throw new AppError("User not found.", statusCodes.notFound);

    const order = await ordersRepository.findById(orderId);

    if (!order)
      throw new AppError("Order not found.", statusCodes.notFound);

    if (user.permission === "Master" || user.permission === "Admin" || String(order.userId._id) === userId) {
      return order;
    } else {
      throw new AppError("The user doesn't have access to this order.", statusCodes.forbidden);
    }
  }
}

export default GetOrderService;
