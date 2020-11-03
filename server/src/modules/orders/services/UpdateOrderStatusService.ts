import AppError from '@shared/errors/AppError';
import { IOrder } from '../infra/mongoose/models/Order';
import OrdersRepository from '../infra/mongoose/repositories/OrdersRepository';

const ordersRepository = new OrdersRepository();

interface IRequest {
  orderId: string;
  status: string;
}

class UpdateOrderStatusService {
  public async execute({ orderId, status }: IRequest): Promise<IOrder | null> {
    const order = await ordersRepository.updateStatus({ orderId, status });

    if (!order)
      throw new AppError("The order doesn't exist in the database.");

    return order;
  }
}

export default UpdateOrderStatusService;
