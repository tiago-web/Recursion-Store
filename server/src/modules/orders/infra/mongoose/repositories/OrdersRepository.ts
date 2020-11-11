import Order, { IOrder } from '../models/Order';
import UsersRepository from '@modules/users/infra/mongoose/repositories/UsersRepository';

import ICreateOrderDTO from '@modules/orders/dtos/ICreateOrderDTO';
import User from '@modules/users/infra/mongoose/models/User';

const usersRepository = new UsersRepository();

class OrdersRepository {
  public async findAllOrders(): Promise<IOrder[]> {
    const orders = await Order.find({}).sort({ createdAt: 1 });

    // for (let i = 0; i < orders.length; i++)
    //   await orders[i].populate("userId").execPopulate();

    return orders;
  }

  public async findById(id: string): Promise<IOrder | null> {
    const order = await Order.findById(id).populate("products").populate('userId');

    if (order)
      order.userId.password = "";

    return order;
  }

  public async findAllByUserId(userId: string): Promise<IOrder[] | null> {
    // const user = await User.findById(userId);

    const user = await usersRepository.findById(userId);

    if (!user)
      return null;

    const orders = await Order.find({ userId: user });

    for (let i = 0; i < orders.length; i++)
      await orders[i].populate("products").populate("userId").execPopulate();

    return orders;
  }

  public async create({
    userId,
    products,
    total,
    subTotal,
    shippingPrice,
    shippingAddress,
    billingAddress,
  }: ICreateOrderDTO): Promise<IOrder> {
    const order = new Order({
      userId,
      products,
      total,
      subTotal,
      shippingPrice,
      shippingAddress,
      billingAddress,
    });

    await order.save();

    return order;
  }

  public async save(order: IOrder): Promise<IOrder> {
    await order.save();

    return order;
  }
}

export default OrdersRepository;
