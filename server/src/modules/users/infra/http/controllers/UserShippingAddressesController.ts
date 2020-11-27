import { Request, Response } from 'express';
import statusCodes from '@config/statusCodes';

import ListUserAddressesService from '@modules/users/services/UserAddress/ListUserAddressesService';

const listUserAddresses = new ListUserAddressesService();

class UserShippingAddressesController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.user;

    const shippingAddresses = await listUserAddresses.execute(userId);

    return res.status(statusCodes.ok).json(shippingAddresses);
  }
}

export default UserShippingAddressesController;
