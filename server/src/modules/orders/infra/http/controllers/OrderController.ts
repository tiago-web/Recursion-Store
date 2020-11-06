import GetOrderByIdService from '@modules/orders/services/GetOrderByIdService';
import CreateOrderService from '@modules/orders/services/CreateOrderService';
import UpdateOrderStatusService from '@modules/orders/services/UpdateOrderStatusService';
import { Request, Response } from 'express';

const createOrder = new CreateOrderService();
const updateOrderStatus = new UpdateOrderStatusService();
const getOrderById = new GetOrderByIdService();

class OrderController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { orderId } = req.params;

    const order = await getOrderById.execute({ orderId });

    return res.status(201).json(order);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const userId = req.user.id;
    const {
      products,
      shippingPrice,
      shippingAddress,
      billingAddress,
    } = req.body;

    const order = await createOrder.execute({
      userId,
      products,
      shippingPrice,
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
