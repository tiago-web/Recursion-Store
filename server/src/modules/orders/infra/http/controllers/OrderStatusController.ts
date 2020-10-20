import UpdateOrderStatusService from '@modules/orders/services/UpdateOrderStatusService';
import { Request, Response } from 'express';

const ordersStatus = new UpdateOrderStatusService();

export default class OrderStatusController {
  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { status } = req.body;

    try {
      const order = await ordersStatus.execute({ id, status });

      return res.status(201).json(order);
    } catch (err) {

      return res.status(err.statusCode).json(err.message);
    }
  }
}