import ListOrdersByUserService from '@modules/orders/services/ListOrdersByUserService';
import { Request, Response } from 'express';

const listOrdersByUser = new ListOrdersByUserService();

export default class OrdersByUserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const userId = req.user.id;

    const orders = await listOrdersByUser.execute(userId);

    return res.status(201).json(orders);
  }
}
