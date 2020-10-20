import ListOrdersByUserService from '@modules/orders/services/ListOrdersByUserService';
import { Request, Response } from 'express';

const listOrdersByUser = new ListOrdersByUserService();

export default class OrdersByUserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const orders = await listOrdersByUser.execute(id);

      return res.status(201).json(orders);
    } catch (err) {

      return res.status(err.statusCode).json(err.message);
    }
  }
}
