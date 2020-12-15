import UsersRepository from '../../infra/mongoose/repositories/UsersRepository';
import { IUser } from '../../infra/mongoose/models/User';

const usersRepository = new UsersRepository();

interface IRequest {
  userId?: string;
}

class ListUsersService {
  public async execute({ userId }: IRequest): Promise<IUser[] | IUser | null> {
    if (userId) {
      const user = await usersRepository.findById(userId);

      return user;
    } else {
      const users = await usersRepository.findAllUsers();

      return users;
    }
  }
}

export default ListUsersService;
