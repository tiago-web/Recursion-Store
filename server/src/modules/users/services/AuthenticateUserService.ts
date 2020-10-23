import { IUser } from "../infra/mongoose/models/User";
import UserRepository from "../infra/mongoose/repositories/UsersRepository";

const userRepository = new UserRepository();

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
    const user = await
  }

}

export default AuthenticateUserService;
