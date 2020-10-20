import IUpdateOrderDeliveredDTO from '../dtos/IUpdateOrderDeliveredDTO';
import { IOrder } from '../infra/mongoose/models/Order';
import OrdersRepository from '../infra/mongoose/repositories/OrdersRepository';

class UpdateOrderDeliveredService {
  public async execute({ id, delivered }: IUpdateOrderDeliveredDTO): Promise<IOrder | null> {
    const ordersRepository = new OrdersRepository();

    // TODO
    // Check if the userId exist in the databasse
    // Check if the product ids exist in the database
    // Check if the order already exists in the database
    // if exists throw new AppError
    // Else
    // create it with an id and date
    // save in the database

    const order = ordersRepository.updateDelivered({ id, delivered });

    return order;
  }
}

export default UpdateOrderDeliveredService;
