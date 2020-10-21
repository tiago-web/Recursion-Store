import ICreateUserDTO from "../dtos/ICreateUserDTO";

import { IUser } from '../infra/mongoose/models/User';

export default interface IUsersRepository {
  findById(id: string): Promise<IUser | undefined>;
  create(data: ICreateUserDTO): Promise<IUser>;
}
