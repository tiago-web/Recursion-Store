import UsersRepository from "../infra/mongoose/repositories/UsersRepository";
import { IUser } from "../infra/mongoose/models/User";

import BCryptHashProvider from '@modules/users/providers/HashProvider/implementations/BCryptHashProvider';

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
const hashProvider = new BCryptHashProvider();

class CreateUserService {
  public async execute(
    { firstName, lastName, email, phone, password, permission }: IRequest): Promise<IUser> {
    const userExists = await usersRepository.findByEmail(email);

    if (userExists)
      throw new AppError('Email address already used.', 403);

    if (permission)
      throw new AppError('Unauthorized permission set.', 403);

    const hashedPassword = await hashProvider.generateHash(password);

    // TODO
    // Check if the user already exists in the database ✅
    // if exists throw new AppError ✅
    // hash password ✅
    // save in the database ✅

    const user = usersRepository.create({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;
