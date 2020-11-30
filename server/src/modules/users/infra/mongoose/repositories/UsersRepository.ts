import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import User, { IUser } from '../models/User';

import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

export default class UsersRepository implements IUsersRepository {
  public async findById(id: string): Promise<IUser | null> {
    const user = await User.findById(id);

    return user;
  }

  public async findByEmail(email: string): Promise<IUser | null> {
    const user = await User.findOne({ email }).select(
      '+password firstName lastName phone email avatarUrl _id',
    );

    return user;
  }

  public async create(userData: ICreateUserDTO): Promise<IUser> {
    const user = new User(userData);

    await user.save();

    return user;
  }

  public async save(user: IUser): Promise<IUser> {
    await user.save();

    return user;
  }
}
