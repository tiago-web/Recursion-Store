import { IOrder } from '../infra/mongoose/models/Order';
import OrdersRepository from '../infra/mongoose/repositories/OrdersRepository';

const ordersRepository = new OrdersRepository();

interface IRequest {
  userId: string;
}

class ListOrdersByUserService {
  public async execute({ userId }: IRequest): Promise<IOrder[] | null> {
    const orders = await ordersRepository.findAllByUserId(userId);

    return orders;
  }
}

export default ListOrdersByUserService;
