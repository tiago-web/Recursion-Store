import { Request, Response } from 'express';
import statusCodes from "@config/statusCodes";

import UpdateOrderShippingAddressService from '@modules/orders/services/Order/UpdateOrderShippingAddressService';

const UpdateOrderShippingAddress = new UpdateOrderShippingAddressService();

class OrderShippingAddressController {
  public async update(req: Request, res: Response): Promise<Response> {
    const { id: orderId } = req.params;
    const { shippingAddress } = req.body;

    const order = await UpdateOrderShippingAddress.execute({ orderId, shippingAddress });

    return res.status(statusCodes.ok).json(order);
  }
}

export default OrderShippingAddressController;