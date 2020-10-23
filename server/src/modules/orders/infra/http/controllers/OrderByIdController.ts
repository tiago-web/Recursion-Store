import GetOrderByIdService from '@modules/orders/services/GetOrderByIdService';
import { Request, Response } from 'express';

const getOrderById = new GetOrderByIdService();

export default class OrdersByIdController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { orderId } = req.params;

    const order = await getOrderById.execute(orderId);

    return res.status(201).json(order);
  }
}
