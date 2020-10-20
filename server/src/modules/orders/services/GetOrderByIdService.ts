import { IOrder } from '../infra/mongoose/models/Order';
import OrdersRepository from '../infra/mongoose/repositories/OrdersRepository';

class GetOrderByIdService {
  public async execute(id: string): Promise<IOrder | null> {
    const ordersRepository = new OrdersRepository();

    // TODO
    // Check if the userId exist in the databasse
    // Check if the product ids exist in the database
    // Check if the order already exists in the database
    // if exists throw new AppError
    // Else
    // create it with an id and date
    // save in the database

    const order = ordersRepository.findById(id);

    return order;
  }
}

export default GetOrderByIdService;
