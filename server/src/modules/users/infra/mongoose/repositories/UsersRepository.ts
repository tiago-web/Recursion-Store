import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User, { IUser } from '../models/User';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';

export default class ProductsRepository implements IUsersRepository {
  public async findById(id: string): Promise<IUser | null> {
    const user = await User.findById(id);

    return user;
  }

  public async findByEmail(email: string): Promise<IUser | null> {
    const user = await User.findOne({
      where: { email },
    });

    return user;
  }

  public async create(userData: ICreateUserDTO): Promise<IUser> {
    const user = new User(userData);

    await user.save();

    return user;
  }
}
