import UsersRepository from "../infra/mongoose/repositories/UsersRepository";
import { IUser } from "../infra/mongoose/models/User";

import AppError from '@shared/errors/AppError';

interface IRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  shippingAddresses: {
    address: string;
    country: string;
    province: string;
    city: string;
    main?: boolean;
  };
}

const usersRepository = new UsersRepository();

class CreateUserService {
  public async execute({ firstName, lastName, email, phone, password, shippingAddresses: { address, country, province, city, main }, }: IRequest): Promise<IUser> {
    const userExists = await usersRepository.findByEmail(email);

    if (userExists)
      throw new AppError('Email address already used.', 403);

    // TODO
    // Check if the user already exists in the database ✅
    // if exists throw new AppError ✅
    // hash password
    // save in the database

    const userShippingAddress = {
      address,
      country,
      province,
      city,
      main,
    }

    const user = usersRepository.create({
      firstName,
      lastName,
      email,
      phone,
      password,
      shippingAddresses: [userShippingAddress],
    });

    return user;
  }
}

export default CreateUserService;
