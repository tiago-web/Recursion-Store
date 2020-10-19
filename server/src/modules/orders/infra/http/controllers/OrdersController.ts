import { Request, Response } from 'express';

import CreateOrderService from '@modules/orders/services/CreateOrderService';

const createOrder = new CreateOrderService();

export default class OrdersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const {
      userId,
      status,
      delivered,
      products,
      shippingAddress,
      billingAddress,
    } = req.body;

    try {
      const order = await createOrder.execute({
        userId,
        status,
        delivered,
        products,
        shippingAddress,
        billingAddress,
      });

      return res.status(201).json(order);
    } catch (err) {
      return res.status(err.statusCode).json(err.message);
    }
  }
}
