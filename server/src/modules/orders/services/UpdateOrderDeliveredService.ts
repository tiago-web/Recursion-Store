import IUpdateOrderDeliveredDTO from '../dtos/IUpdateOrderDeliveredDTO';
import AppError from '@shared/errors/AppError';
import { IOrder } from '../infra/mongoose/models/Order';
import OrdersRepository from '../infra/mongoose/repositories/OrdersRepository';

const ordersRepository = new OrdersRepository();

class UpdateOrderDeliveredService {
  public async execute({ id, delivered }: IUpdateOrderDeliveredDTO): Promise<IOrder | null> {
    const order = await ordersRepository.updateDelivered({ id, delivered });

    if (order)
      throw new AppError("The order doesn't exist in the database.");

    return order;
  }
}

export default UpdateOrderDeliveredService;
