import { IOrder } from '../infra/mongoose/models/Order';
import AppError from '@shared/errors/AppError';
import OrdersRepository from '../infra/mongoose/repositories/OrdersRepository';
import UsersRepository from '@modules/users/infra/mongoose/repositories/UsersRepository';

const ordersRepository = new OrdersRepository();
const usersRepository = new UsersRepository();

class ListOrdersService {
  public async execute(userId: string): Promise<IOrder[] | null> {
    const user = await usersRepository.findById(userId);

    if (!user)
      throw new AppError("The user must have the required permissions", 403);

    let orders: IOrder[];

    if (user.permission === "Admin" || user.permission === "Master"){
      orders = await ordersRepository.findAllOrders();
    } else {
      throw new AppError("The user must have the required permissions", 403);
    }

    return orders;
  }
}

export default ListOrdersService;
