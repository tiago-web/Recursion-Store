import { Request, Response } from 'express';
import statusCodes from "@config/statusCodes";

import GetOrderService from '@modules/orders/services/Order/GetOrderService';
import CreateOrderService from '@modules/orders/services/Order/CreateOrderService';
import UpdateOrderByAdminService from '@modules/orders/services/Admin/UpdateOrderByAdminService';

const createOrder = new CreateOrderService();
const updateOrderByAdmin = new UpdateOrderByAdminService();
const getOrder = new GetOrderService();

class OrderController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.params;
    const { id: orderId } = req.params;

    const order = await getOrder.execute({ userId, orderId });

    return res.status(statusCodes.ok).json(order);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.user;
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

    return res.status(statusCodes.created).json(order);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id: adminId } = req.user;
    const { id: orderId } = req.params;

    const order = await updateOrderByAdmin.execute({
      adminId,
      orderId,
      status: "Canceled"
    });

    return res.status(statusCodes.accepted).json(order);
  }
}

export default OrderController;
