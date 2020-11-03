import ListOrdersService from '@modules/orders/services/ListOrdersService';
import { Request, Response } from 'express';

const listOrders = new ListOrdersService();

class OrdersController {
  public async index(req: Request, res: Response): Promise<Response> {
    const userId = req.user.id;

    const orders = await listOrders.execute(userId);

    return res.status(201).json(orders);
  }
}

export default OrdersController;
