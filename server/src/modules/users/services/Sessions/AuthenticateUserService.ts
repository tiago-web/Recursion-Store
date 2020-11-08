import { sign } from 'jsonwebtoken';
import statusCodes from "@config/statusCodes";
import authConfig from '@config/auth';

import UsersRepository from '../../infra/mongoose/repositories/UsersRepository';
import BCryptHashProvider from '../../providers/HashProvider/implementations/BCryptHashProvider';

import { IUser } from '../../infra/mongoose/models/User';
import AppError from '@shared/errors/AppError'

const usersRepository = new UsersRepository();
const hashProvider = new BCryptHashProvider();

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: IUser;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await usersRepository.findByEmail(email);

    if (!user)
      throw new AppError('Incorrect email/password combination.', statusCodes.unAuthorized)

    const passwordMatched = await hashProvider.compareHash(password, user.password);

    if (!passwordMatched)
      throw new AppError('Incorrect email/password combination.', statusCodes.unAuthorized)

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return { token, user };

  }

}

export default AuthenticateUserService;
