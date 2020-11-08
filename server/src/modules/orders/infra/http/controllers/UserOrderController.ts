import { Request, Response } from 'express';
import statusCodes from "@config/statusCodes";

import UpdateOrderByUserService from '@modules/orders/services/User/UpdateOrderByUserService';

const updateOrderByUser = new UpdateOrderByUserService();

class UserOrderController {
  public async update(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.user;
    const { id: orderId } = req.params;
    const {
      products,
      shippingAddress,
      billingAddress,
    } = req.body;

    const order = await updateOrderByUser.execute({
      userId,
      orderId,
      products,
      shippingAddress,
      billingAddress,
    });

    return res.status(statusCodes.ok).json(order);
  }
}

export default UserOrderController;
