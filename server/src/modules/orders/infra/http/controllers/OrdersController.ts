import { Request, Response } from 'express';
import statusCodes from "@config/statusCodes";

import ListOrdersService from '@modules/orders/services/Orders/ListOrdersService';

const listOrders = new ListOrdersService();

class OrdersController {
  public async index(req: Request, res: Response): Promise<Response> {
    const orders = await listOrders.execute();

    return res.status(statusCodes.ok).json(orders);
  }
}

export default OrdersController;
