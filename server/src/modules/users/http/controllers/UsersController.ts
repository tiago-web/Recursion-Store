import { Request, Response } from 'express';

import CreateUserService from '../../services/CreateUserService';

const createUser = new CreateUserService();

export default class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;
    const user = await createUser.execute({
      name,
      email,
      password,
    });

    return res.json(user);
  }
}
