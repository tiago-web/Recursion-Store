import UsersRepository from '../../infra/mongoose/repositories/UsersRepository';
import { IUser } from '../../infra/mongoose/models/User';

const usersRepository = new UsersRepository();

class ListUsersService {
  public async execute(): Promise<IUser[] | null> {
    const orders = await usersRepository.findAllUsers();

    return orders;
  }
}

export default ListUsersService;
