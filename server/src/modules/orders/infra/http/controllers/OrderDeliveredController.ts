import UpdateOrderDeliveredService from '@modules/orders/services/UpdateOrderDeliveredService';
import { Request, Response } from 'express';

const orderDelivered = new UpdateOrderDeliveredService();

export default class OrderDeliveredController {
  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { delivered } = req.body;

    try {
      const order = await orderDelivered.execute({ id, delivered });

      return res.status(201).json(order);
    } catch (err) {

      return res.status(err.statusCode).json(err.message);
    }
  }
}
