import { Request, Response } from 'express';
import statusCodes from "@config/statusCodes";

import UpdateOrderByAdminService from '@modules/orders/services/Admin/UpdateOrderByAdminService';

const updateOrderByAdmin = new UpdateOrderByAdminService();

class AdminOrderController {
  public async update(req: Request, res: Response): Promise<Response> {
    const { id: adminId } = req.user;
    const { id: orderId } = req.params;
    const {
      products,
      delivered,
      status,
      shippingPrice,
      shippingAddress,
      billingAddress,
    } = req.body;

    const order = await updateOrderByAdmin.execute({
      adminId,
      orderId,
      products,
      delivered,
      status,
      shippingPrice,
      shippingAddress,
      billingAddress,
    });

    return res.status(statusCodes.ok).json(order);
  }
}

export default AdminOrderController;
