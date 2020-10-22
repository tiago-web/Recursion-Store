import IUsersRepository from '../repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';

interface User {
  name: string;
  email: string;
  password: string;
}

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  constructor(
    private usersRepository: IUsersRepository,
  ) { }

  public async execute({ name, email, password }: IRequest): Promise<User> {
    const userExists = await this.usersRepository.findByEmail(email);

    if (userExists)
      throw new AppError('Email address already used.', 403);

    // TODO
    // Check if the user already exists in the database
    // if exists throw new AppError
    // Else
    // hash password
    // save in the database

    const user = {
      name,
      email,
      password,
    };

    return user;
  }
}

export default CreateUserService;
