import UsersRepository from '../../infra/mongoose/repositories/UsersRepository';
import { IUser } from '../../infra/mongoose/models/User';
import BCryptHashProvider from '../../providers/HashProvider/implementations/BCryptHashProvider';

import AppError from '@shared/errors/AppError';
import statusCodes from "@config/statusCodes";

interface IRequest {
  userId: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  oldPassword?: string;
  password?: string;
}

const usersRepository = new UsersRepository();
const hashProvider = new BCryptHashProvider();

class UpdateUserProfileService {
  public async execute({
    userId,
    firstName,
    lastName,
    phone,
    email,
    oldPassword,
    password,
  }: IRequest): Promise<IUser> {
    const user = await usersRepository.findById(userId);

    if (!user)
      throw new AppError('User not found', statusCodes.notFound);

    const userWithUpdatedEmail = await usersRepository.findByEmail(email);

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id)
      throw new AppError('Email already in use');

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.phone = phone;

    if (password && !oldPassword)
      throw new AppError('Old password is required to set a new one');

    if (password && oldPassword) {
      const checkOldPassword = await hashProvider.compareHash(
        oldPassword,
        user.password,
      );

      if (!checkOldPassword)
        throw new AppError('Old password does not match');

      user.password = await hashProvider.generateHash(password);
    }

    await usersRepository.save(user);

    return user;
  }
}

export default UpdateUserProfileService;
