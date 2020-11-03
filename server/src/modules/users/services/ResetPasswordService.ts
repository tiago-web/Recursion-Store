import { addHours, isAfter } from 'date-fns';

import AppError from '@shared/errors/AppError';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import UserTokenRepository from '../infra/mongoose/repositories/UserTokenRepository';
import UsersRepository from '../infra/mongoose/repositories/UsersRepository';
import BCryptHashProvider from '../providers/HashProvider/implementations/BCryptHashProvider';

interface IRequest {
  token: string;
  password: string;
}

const userTokenRepository = new UserTokenRepository();
const usersRepository = new UsersRepository();
const hashProvider = new BCryptHashProvider();

export default class ResetPasswordService {
  public async execute({ token, password }: IRequest): Promise<void> {
    const userToken = await userTokenRepository.findByToken(token);

    if (!userToken) {
      throw new AppError('User token does not exist');
    }

    const user = await usersRepository.findById(userToken.userId);

    if (!user) {
      throw new AppError('User does not exist')
    }

    const tokenCreatedAt = userToken.createdAt;
    const compareDate = addHours(tokenCreatedAt, 2);

    if (isAfter(Date.now(), compareDate)) {
      throw new AppError('Token expired');
    }

    user.password = await hashProvider.generateHash(password);

    await usersRepository.save(user);

  }
}
