import IUpdateOrderStatusDTO from '../dtos/IUpdateOrderStatusDTO';
import AppError from '@shared/errors/AppError';
import { IOrder } from '../infra/mongoose/models/Order';
import OrdersRepository from '../infra/mongoose/repositories/OrdersRepository';

const ordersRepository = new OrdersRepository();

class UpdateOrderStatusService {
  public async execute({ id, status }: IUpdateOrderStatusDTO): Promise<IOrder | null> {
    const order = await ordersRepository.updateStatus({ id, status });

    if (!order)
      throw new AppError("The order doesn't exist in the database.");

    return order;
  }
}

export default UpdateOrderStatusService;
