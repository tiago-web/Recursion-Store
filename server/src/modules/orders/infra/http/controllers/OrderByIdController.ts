import GetOrderByIdService from '@modules/orders/services/GetOrderByIdService';
import { Request, Response } from 'express';

const orderById = new GetOrderByIdService();

export default class OrdersByIdController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const order = await orderById.execute(id);

      return res.status(201).json(order);
    } catch (err) {

      return res.status(err.statusCode).json(err.message);
    }
  }
}
