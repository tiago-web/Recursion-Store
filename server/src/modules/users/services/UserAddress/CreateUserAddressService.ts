import UsersRepository from '../../infra/mongoose/repositories/UsersRepository';
import { IUser } from '../../infra/mongoose/models/User';

import AppError from '@shared/errors/AppError';
import statusCodes from "@config/statusCodes";

interface IRequest {
  userId: string;
  address: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
  main?: boolean;
}

const usersRepository = new UsersRepository();

class CreateUserAddressService {
  public async execute({
    userId,
    address,
    country,
    state,
    city,
    postalCode,
    main,
  }: IRequest): Promise<IUser> {
    const user = await usersRepository.findById(userId);

    if (!user)
      throw new AppError('User not found', statusCodes.notFound);

    const shippingAddress = {
      address,
      country,
      state,
      city,
      postalCode,
      main,
    };

    if (!user.shippingAddresses || user.shippingAddresses.length === 0) {
      shippingAddress.main = true;
      user.shippingAddresses = [shippingAddress];
    } else {
      if (shippingAddress.main === true) {
        const oldMainShippingAddress = user.shippingAddresses.find(({ main }) => main === true);

        if (oldMainShippingAddress)
          oldMainShippingAddress.main = false;
      }

      shippingAddress.main = main ?? false;

      const samePostalCodeAddress = user.shippingAddresses.find(shippingAddress => shippingAddress.postalCode === postalCode);

      if (samePostalCodeAddress)
        throw new AppError("Postal code already registered.", statusCodes.badRequest);

      user.shippingAddresses.push(shippingAddress);
    }

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserAddressService;
