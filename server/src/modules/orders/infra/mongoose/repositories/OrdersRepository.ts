import Order, { IOrder } from '../models/Order';

import ICreateOrderDTO from '@modules/orders/dtos/ICreateOrderDTO';
import { IUser } from '@modules/users/infra/mongoose/models/User';

class OrdersRepository {
  public async findAllOrders(): Promise<IOrder[]> {
    const orders = await Order.find({}).sort({ createdAt: 1 });

    // for (let i = 0; i < orders.length; i++)
    //   await orders[i].populate("userId").execPopulate();

    return orders;
  }

  public async findById(id: string): Promise<IOrder | null> {
    const order = await Order.findById(id)
      .populate('products')
      .populate('userId');

    return order;
  }

  public async findAllByUser(user: IUser): Promise<IOrder[] | null> {
    const orders = await Order.find({ userId: user })
      .populate({
        path: 'userId',
        model: 'User',
        select: 'firstName lastName phone',
      })
      .populate({
        path: 'products.productId',
        model: 'Product',
        select: 'name items.productImages',
      });

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
