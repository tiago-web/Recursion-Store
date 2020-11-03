import UsersRepository from '../infra/mongoose/repositories/UsersRepository';
import { IUser } from '../infra/mongoose/models/User';
import AppError from '@shared/errors/AppError';

interface IRequest {

}

const usersRepository = new UsersRepository();

class UpdateUserAvatarService {
  public async execute({ }: IRequest): Promise<IUser> {

    return user;
  }
}

export default UpdateUserAvatarService;
