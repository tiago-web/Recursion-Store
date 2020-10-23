import CreateOrderService from '@modules/orders/services/CreateOrderService';
import { Request, Response } from 'express';

const createOrder = new CreateOrderService();

export default class OrderController {
  public async create(req: Request, res: Response): Promise<Response> {
    const userId = req.user.id;
    const {
      status,
      products,
      shippingAddress,
      billingAddress,
    } = req.body;

    const order = await createOrder.execute({
      userId,
      status,
      products,
      shippingAddress,
      billingAddress,
    });

    return res.status(201).json(order);
  }
}
