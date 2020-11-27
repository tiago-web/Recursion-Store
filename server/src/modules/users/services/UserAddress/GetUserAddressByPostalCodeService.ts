import UsersRepository from '../../infra/mongoose/repositories/UsersRepository';

import AppError from '@shared/errors/AppError';
import statusCodes from '@config/statusCodes';
import IAddress from '@shared/dtos/IAddressDTO';

interface IRequest {
  userId: string;
  postalCode: string;
}

const usersRepository = new UsersRepository();

class GetUserAddressByPostalCodeService {
  public async execute({ userId, postalCode }: IRequest): Promise<IAddress> {
    const user = await usersRepository.findById(userId);

    if (!user) throw new AppError('User not found', statusCodes.notFound);

    if (!user.shippingAddresses)
      throw new AppError('User does not have shipping addresses');

    const shippingAddressRequested = user.shippingAddresses.find(
      shippingAddress => shippingAddress.postalCode === postalCode,
    );

    if (!shippingAddressRequested)
      throw new AppError('Shipping address not found', statusCodes.notFound);

    return shippingAddressRequested;
  }
}

export default GetUserAddressByPostalCodeService;
