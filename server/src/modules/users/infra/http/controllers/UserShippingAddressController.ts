import { Request, Response } from 'express';
import statusCodes from '@config/statusCodes';

import CreateUserAddressService from '@modules/users/services/UserAddress/CreateUserAddressService';
import UpdateUserAddressService from '@modules/users/services/UserAddress/UpdateUserAddressService';
import DeleteUserAddressService from '@modules/users/services/UserAddress/DeleteUserAddressService';
import GetUserAddressByPostalCodeService from '@modules/users/services/UserAddress/GetUserAddressByPostalCodeService';

const createUserAddress = new CreateUserAddressService();
const updateUserAddress = new UpdateUserAddressService();
const deleteUserAddress = new DeleteUserAddressService();
const getUserAddressByPostalCode = new GetUserAddressByPostalCodeService();

class UserShippingAddressController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.user;
    const { postalCode } = req.params;

    const shippingAddress = await getUserAddressByPostalCode.execute({
      userId,
      postalCode,
    });

    return res.status(statusCodes.ok).json(shippingAddress);
  }

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

    return res.status(statusCodes.ok).json(user);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.user;
    const {
      address,
      country,
      state,
      city,
      postalCode,
      oldPostalCode,
      main,
    } = req.body;

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

    return res.status(statusCodes.ok).json(user);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.user;
    const { postalCode } = req.body;

    const user = await deleteUserAddress.execute({
      userId,
      postalCode,
    });

    return res.status(statusCodes.ok).json(user);
  }
}

export default UserShippingAddressController;
