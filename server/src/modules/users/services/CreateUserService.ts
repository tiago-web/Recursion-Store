import UsersRepository from "../infra/mongoose/repositories/UsersRepository";
import { IUser } from "../infra/mongoose/models/User";

import AppError from '@shared/errors/AppError';

interface IRequest {
  firsName: string;
}

const usersRepository = new UsersRepository();

class CreateUserService {
  public async execute({ firstName, email }: IRequest): Promise<IUser> {
    const userExists = await usersRepository.findByEmail(email);

    if (userExists)
      throw new AppError('Email address already used.', 403);

    // TODO
    // Check if the user already exists in the database
    // if exists throw new AppError
    // Else
    // hash password
    // save in the database

    const user = usersRepository.create({
      firstName,
    });

    return user;
  }
}

export default CreateUserService;
