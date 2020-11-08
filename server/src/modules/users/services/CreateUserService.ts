import UsersRepository from "../infra/mongoose/repositories/UsersRepository";
import { IUser } from "../infra/mongoose/models/User";
import statusCodes from "@config/statusCodes";

import BCryptHashProvider from '@modules/users/providers/HashProvider/implementations/BCryptHashProvider';

import AppError from '@shared/errors/AppError';

interface IRequest {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  permission?: string;
}

const usersRepository = new UsersRepository();
const hashProvider = new BCryptHashProvider();

class CreateUserService {
  public async execute({
    firstName,
    lastName,
    phone,
    email,
    password,
    permission
  }: IRequest): Promise<IUser> {
    const userExists = await usersRepository.findByEmail(email);

    if (userExists)
      throw new AppError('Email address already used.', statusCodes.forbidden);

    if (permission)
      throw new AppError('Unauthorized permission set.', statusCodes.forbidden);

    const hashedPassword = await hashProvider.generateHash(password);

    const user = usersRepository.create({
      firstName,
      lastName,
      phone,
      email,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;
