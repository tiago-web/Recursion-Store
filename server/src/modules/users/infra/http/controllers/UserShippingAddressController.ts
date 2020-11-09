import { Request, Response } from 'express';
import statusCodes from "@config/statusCodes";

import CreateUserAddressService from '@modules/users/services/UserAddress/CreateUserAddressService';
import UpdateUserAddressService from '@modules/users/services/UserAddress/UpdateUserAddressService';
import DeleteUserAddressService from '@modules/users/services/UserAddress/DeleteUserAddressService';

const createUserAddress = new CreateUserAddressService();
const updateUserAddress = new UpdateUserAddressService();
const deleteUserAddress = new DeleteUserAddressService();

class UserShippingAdressesController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.user;
    const { address, country, state, city, postalCode, main } = req.body;


    const user = await createUserAddress.execute({
      userId,
      address,
      country,
      state,
      city,
      postalCode,
      main,
    });

    user.password = '';

    return res.status(statusCodes.ok).json(user);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.user;
    const { address, country, state, city, postalCode, oldPostalCode, main } = req.body;

    const user = await updateUserAddress.execute({
      userId,
      address,
      country,
      state,
      city,
      postalCode,
      oldPostalCode,
      main,
    });

    user.password = '';

    return res.status(statusCodes.ok).json(user);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.user;
    const { postalCode } = req.body;

    const user = await deleteUserAddress.execute({
      userId,
      postalCode,
    });

    user.password = '';

    return res.status(statusCodes.ok).json(user);
  }
}

export default UserShippingAdressesController;
