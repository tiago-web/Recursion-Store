import UsersRepository from '../infra/mongoose/repositories/UsersRepository';
import { IUser } from '../infra/mongoose/models/User';
import AppError from '@shared/errors/AppError';

interface IRequest {
  masterUserId: string;
  userId: string;
  permission: 'Admin' | 'User';
}

const usersRepository = new UsersRepository();

class UpdateUserPermissionService {
  public async execute({ masterUserId, userId, permission }: IRequest): Promise<IUser> {
    const masterUser = await usersRepository.findById(masterUserId);

    if (!masterUser) {
      throw new AppError('Master user not found.');
    }

    if (masterUser.permission !== 'Master') {
      throw new AppError('Master user must have master permission.', 403);
    }

    const user = await usersRepository.findById(userId);

    if (!user) {
      throw new AppError('User not found.');
    }

    user.permission = permission;

    await usersRepository.save(user);

    return user;
  }
}

export default UpdateUserPermissionService;
