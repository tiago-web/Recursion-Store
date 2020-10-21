import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User, { IUser } from '../models/User';

export default class ProductsRepository {
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

  public async create({
    firstName,
    lastName,
    email,
    phone,
    password,
  }: ICreateUserDTO): Promise<IUser | null> {
    const user = new User({
      firstName,
      lastName,
      email,
      phone,
      password,
    });

    await user.save();

    return user;
  }
}
