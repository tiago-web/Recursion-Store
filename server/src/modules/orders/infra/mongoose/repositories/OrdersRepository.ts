import ICreateOrderDTO from '@modules/orders/dtos/ICreateOrderDTO';
import IUpdateOrderDeliveredDTO from '@modules/orders/dtos/IUpdateOrderDeliveredDTO';
import IUpdateOrderStatusDTO from '@modules/orders/dtos/IUpdateOrderStatusDTO';
import Order, { IOrder } from '../models/Order';

export default class OrdersRepository {
  public async findById(id: string): Promise<IOrder | null> {
    const order = await Order.findById(id);

    return order;
  }

  public async findAllByUserId(id: string): Promise<IOrder[] | null> {
    const orders = await Order.find({ 'userId._id': id });
    // const orders2 = await Order.find().where('userId._id').equals(id);

    return orders;
  }

  public async create({
    userId,
    status,
    delivered,
    products,
    shippingAddress,
    billingAddress,
  }: ICreateOrderDTO): Promise<IOrder> {
    const order = new Order({
      userId,
      status,
      delivered,
      products,
      shippingAddress,
      billingAddress,
    });

    await order.save();

    return order;
  }

  public async updateStatus({
    id,
    status,
  }: IUpdateOrderStatusDTO): Promise<IOrder | null> {
    const order = await Order.findByIdAndUpdate(id, { status });
    return order;
  }

  public async updateDelivered({
    id,
    delivered,
  }: IUpdateOrderDeliveredDTO): Promise<IOrder | null> {
    const order = await Order.findByIdAndUpdate(id, { delivered });
    return order;
  }
}
