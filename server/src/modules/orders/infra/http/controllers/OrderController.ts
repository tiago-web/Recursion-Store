import CreateOrderService from '@modules/orders/services/CreateOrderService';
import UpdateOrderStatusService from '@modules/orders/services/UpdateOrderStatusService';
import { Request, Response } from 'express';

const createOrder = new CreateOrderService();
const updateOrderStatus = new UpdateOrderStatusService();

class OrderController {
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
    const { id: orderId } = req.params;

    const order = await updateOrderStatus.execute({
      orderId,
      status: "Canceled"
    });

    return res.status(202).json(order);
  }
}

export default OrderController;
