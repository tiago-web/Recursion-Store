import CreateOrderService from '@modules/orders/services/CreateOrderService';
import UpdateOrderStatusService from '@modules/orders/services/UpdateOrderStatusService';
import { Request, Response } from 'express';

const createOrder = new CreateOrderService();
const updateOrderStatus = new UpdateOrderStatusService();

export default class OrderController {
  public async create(req: Request, res: Response): Promise<Response> {
    const userId = req.user.id;
    const {
      products,
      shippingAddress,
      billingAddress,
    } = req.body;

    const order = await createOrder.execute({
      userId,
      products,
      shippingAddress,
      billingAddress,
    });

    return res.status(201).json(order);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const order = await updateOrderStatus.execute({
      id,
      status: "Canceled"
    });

    return res.status(201).json(order);
  }
}
