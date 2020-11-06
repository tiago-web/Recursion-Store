import ListOrdersService from '@modules/orders/services/ListOrdersService';
import { Request, Response } from 'express';

const listOrders = new ListOrdersService();

class OrdersController {
  public async index(req: Request, res: Response): Promise<Response> {
    const orders = await listOrders.execute();

    return res.status(201).json(orders);
  }
}

export default OrdersController;
