import UsersRepository from '../../infra/mongoose/repositories/UsersRepository';
import { IUser } from '../../infra/mongoose/models/User';

import AppError from '@shared/errors/AppError';
import statusCodes from "@config/statusCodes";

interface IRequest {
  userId: string;
  postalCode: string;
}

const usersRepository = new UsersRepository();

class CreateUserAddressService {
  public async execute({
    userId,
    postalCode,
  }: IRequest): Promise<IUser> {
    const user = await usersRepository.findById(userId);

    if (!user)
      throw new AppError('User not found', statusCodes.notFound);

    if (!user.shippingAddresses)
      throw new AppError('User doesn\'t have any shipping address.', statusCodes.notFound);

    const shippingAddressToDelete = user.shippingAddresses.find(shippingAddress => shippingAddress.postalCode === postalCode);

    if (!shippingAddressToDelete)
      throw new AppError('Shipping address not found', statusCodes.notFound);

    const newShippingAddresses = user.shippingAddresses.filter(shippingAddress => shippingAddress.postalCode !== postalCode);

    if (shippingAddressToDelete.main === true && newShippingAddresses.length > 0)
      newShippingAddresses[0].main = true;

    user.shippingAddresses = newShippingAddresses;

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserAddressService;
