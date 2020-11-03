import UpdateOrderShippingAddressService from '@modules/orders/services/UpdateOrderShippingAddressService';
import { Request, Response } from 'express';

const UpdateOrderShippingAddress = new UpdateOrderShippingAddressService();

export default class OrderShippingAddressController {
  public async update(req: Request, res: Response): Promise<Response> {
    const { id: orderId } = req.params;
    const { shippingAddress } = req.body;

    const order = await UpdateOrderShippingAddress.execute({ orderId, shippingAddress });

    return res.status(201).json(order);
  }
}
