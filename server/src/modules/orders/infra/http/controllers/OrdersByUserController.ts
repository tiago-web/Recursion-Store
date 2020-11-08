import { Request, Response } from 'express';
import statusCodes from "@config/statusCodes";

import ListOrdersByUserService from '@modules/orders/services/Orders/ListOrdersByUserService';

const listOrdersByUser = new ListOrdersByUserService();

class OrdersByUserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.user;

    const orders = await listOrdersByUser.execute({ userId });

    return res.status(statusCodes.ok).json(orders);
  }
}

export default OrdersByUserController;
