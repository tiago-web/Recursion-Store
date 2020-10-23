import UsersRepository from "../infra/mongoose/repositories/UsersRepository";
import { IUser } from "../infra/mongoose/models/User";

import IAddressDTO from '@shared/dtos/IAddressDTO';
import AppError from '@shared/errors/AppError';

interface IRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  permission?: string;
}

const usersRepository = new UsersRepository();

class CreateUserService {
  public async execute(
    { firstName, lastName, email, phone, password, permission }: IRequest): Promise<IUser> {
    const userExists = await usersRepository.findByEmail(email);

    if (userExists)
      throw new AppError('Email address already used.', 403);

    if (permission)
      throw new AppError('Unauthorized permission set.', 403);

    // TODO
    // Check if the user already exists in the database ✅
    // if exists throw new AppError ✅
    // hash password
    // save in the database

    const user = usersRepository.create({
      firstName,
      lastName,
      email,
      phone,
      password
    });

    return user;
  }
}

export default CreateUserService;
