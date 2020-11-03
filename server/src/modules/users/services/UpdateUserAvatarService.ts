import UsersRepository from '../infra/mongoose/repositories/UsersRepository';
import { IUser } from '../infra/mongoose/models/User';
import DiskStorageProvider from '@shared/container/providers/StorageProvider/implementations/DiskStorageProvider';
import AppError from '@shared/errors/AppError';

interface IRequest {
  userId: string;
  avatarFileName: string;
}

const usersRepository = new UsersRepository();
const storageProvider = new DiskStorageProvider();

class UpdateUserAvatarService {
  public async execute({ userId, avatarFileName }: IRequest): Promise<IUser> {
    const user = await usersRepository.findById(userId);

    if (!user)
      throw new AppError('User not found', 404);

    if (user.avatar)
      await storageProvider.deleteFile(user.avatar);

    const fileName = await storageProvider.saveFile(avatarFileName);

    user.avatar = fileName;

    await usersRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
