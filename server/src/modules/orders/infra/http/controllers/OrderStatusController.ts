import { Request, Response } from 'express';
import statusCodes from "@config/statusCodes";

import UpdateOrderStatusService from '@modules/orders/services/Order/UpdateOrderStatusService';

const ordersStatus = new UpdateOrderStatusService();

class OrderStatusController {
  public async update(req: Request, res: Response): Promise<Response> {
    const { id: orderId } = req.params;
    const { status } = req.body;

    const order = await ordersStatus.execute({ orderId, status });

    return res.status(statusCodes.ok).json(order);
  }
}

export default OrderStatusController;
