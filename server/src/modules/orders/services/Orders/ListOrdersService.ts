import OrdersRepository from '../../infra/mongoose/repositories/OrdersRepository';
import { IOrder } from '../../infra/mongoose/models/Order';

const ordersRepository = new OrdersRepository();

class ListOrdersService {
  public async execute(): Promise<IOrder[] | null> {
    const orders = await ordersRepository.findAllOrders();

    return orders;
  }
}

export default ListOrdersService;
