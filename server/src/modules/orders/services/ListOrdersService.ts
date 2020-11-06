import { IOrder } from '../infra/mongoose/models/Order';
import OrdersRepository from '../infra/mongoose/repositories/OrdersRepository';

const ordersRepository = new OrdersRepository();

class ListOrdersService {
  public async execute(): Promise<IOrder[] | null> {
    const orders = await ordersRepository.findAllOrders();

    return orders;
  }
}

export default ListOrdersService;
