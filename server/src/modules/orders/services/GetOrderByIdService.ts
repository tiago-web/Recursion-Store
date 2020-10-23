import { IOrder } from '../infra/mongoose/models/Order';
import AppError from '@shared/errors/AppError';
import OrdersRepository from '../infra/mongoose/repositories/OrdersRepository';

const ordersRepository = new OrdersRepository();

class GetOrderByIdService {
  public async execute(id: string): Promise<IOrder | null> {
    // TODO
    // Check if the order already exists in the database ✅
    const order = ordersRepository.findById(id);

    if (order)
      throw new AppError("The order doesn't exist in the database.")

    return order;
  }
}

export default GetOrderByIdService;
