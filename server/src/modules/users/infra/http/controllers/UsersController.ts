import { Request, Response } from 'express';

import CreateUserService from '../../../services/CreateUserService';

const createUser = new CreateUserService();

export default class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { firstName, lastName, email, phone, password } = req.body;

    const user = await createUser.execute({
      firstName,
      lastName,
      email,
      phone,
      password
    });

    user.password = "";

    return res.json(user);
  }
}
