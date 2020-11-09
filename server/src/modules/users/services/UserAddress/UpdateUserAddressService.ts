import UsersRepository from '../../infra/mongoose/repositories/UsersRepository';
import { IUser } from '../../infra/mongoose/models/User';

import AppError from '@shared/errors/AppError';
import statusCodes from "@config/statusCodes";

interface IRequest {
  userId: string;
  oldPostalCode: string;
  address?: string;
  country?: string;
  state?: string;
  city?: string;
  postalCode?: string;
  main?: boolean;
}

const usersRepository = new UsersRepository();

class UpdateUserAddressService {
  public async execute({
    userId,
    address,
    country,
    state,
    city,
    oldPostalCode,
    postalCode,
    main,
  }: IRequest): Promise<IUser> {
    const user = await usersRepository.findById(userId);

    if (!user)
      throw new AppError('User not found', statusCodes.notFound);

    if (!user.shippingAddresses)
      throw new AppError("User doesn't have registrered any address.", statusCodes.badRequest);

    if (main) {
      const oldMainShippingAddress = user.shippingAddresses.find(({ main }) => main === true);

      if (oldMainShippingAddress)
        oldMainShippingAddress.main = false;
    }

    const shippingAddressToUpdate = user.shippingAddresses.find(shippingAddress => shippingAddress.postalCode === oldPostalCode);

    if (!shippingAddressToUpdate)
      throw new AppError("Shipping Address not found.", statusCodes.notFound);

    if (postalCode) {
      const samePostalCodeAddress = user.shippingAddresses.find(shippingAddress => shippingAddress.postalCode === postalCode);

      if (samePostalCodeAddress)
        throw new AppError("Postal code already registered.", statusCodes.badRequest);
    }

    if (!address && !country && !state && !city && !postalCode && !main)
      throw new AppError('Bad Request.', statusCodes.badRequest);


    shippingAddressToUpdate.address = address ?? shippingAddressToUpdate.address;
    shippingAddressToUpdate.country = country ?? shippingAddressToUpdate.country;
    shippingAddressToUpdate.state = state ?? shippingAddressToUpdate.state;
    shippingAddressToUpdate.city = city ?? shippingAddressToUpdate.city;
    shippingAddressToUpdate.postalCode = postalCode ?? shippingAddressToUpdate.postalCode;
    shippingAddressToUpdate.main = main ?? shippingAddressToUpdate.main;

    await usersRepository.save(user);

    return user;
  }
}

export default UpdateUserAddressService;
