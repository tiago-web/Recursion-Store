import UsersRepository from '../../infra/mongoose/repositories/UsersRepository';

import AppError from '@shared/errors/AppError';
import statusCodes from '@config/statusCodes';
import IAddress from '@shared/dtos/IAddressDTO';

const usersRepository = new UsersRepository();

class ListUserAddressesService {
  public async execute(userId: string): Promise<IAddress[] | []> {
    const user = await usersRepository.findById(userId);

    if (!user) throw new AppError('User not found', statusCodes.notFound);

    return user.shippingAddresses || [];
  }
}

export default ListUserAddressesService;
