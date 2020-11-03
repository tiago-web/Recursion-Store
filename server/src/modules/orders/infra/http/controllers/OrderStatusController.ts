import UpdateOrderStatusService from '@modules/orders/services/UpdateOrderStatusService';
import { Request, Response } from 'express';

const ordersStatus = new UpdateOrderStatusService();

class OrderStatusController {
  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { status } = req.body;

    const order = await ordersStatus.execute({ id, status });

    return res.status(201).json(order);
  }
}

export default OrderStatusController;
