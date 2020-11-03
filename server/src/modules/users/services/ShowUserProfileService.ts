import UsersRepository from '../infra/mongoose/repositories/UsersRepository';
import { IUser } from '../infra/mongoose/models/User';

import AppError from '@shared/errors/AppError';

interface IRequest {
  userId: string;
}

const usersRepository = new UsersRepository();

class ShowUserProfileService {
  public async execute({ userId }: IRequest): Promise<IUser> {
    const user = await usersRepository.findById(userId);

    if (!user) {
      throw new AppError('User not found.', 404);
    }

    return user;
  }
}

export default ShowUserProfileService;
