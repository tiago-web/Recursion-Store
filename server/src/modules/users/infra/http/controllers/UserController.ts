import { Request, Response } from 'express';
import statusCodes from '@config/statusCodes';

import CreateUserService from '@modules/users/services/User/CreateUserService';
import ListUsersService from '@modules/users/services/User/ListUsersService';

const createUser = new CreateUserService();
const listUsers = new ListUsersService();

class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { firstName, lastName, email, phone, password } = req.body;

    const user = await createUser.execute({
      firstName,
      lastName,
      email,
      phone,
      password,
    });

    user.password = '';

    return res.status(statusCodes.created).json(user);
  }

  public async index(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.params;

    const users = await listUsers.execute({ userId });

    return res.status(statusCodes.ok).json(users);
  }
}

export default UserController;
