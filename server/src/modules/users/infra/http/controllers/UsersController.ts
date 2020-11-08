import { Request, Response } from 'express';
import statusCodes from "@config/statusCodes";

import CreateUserService from '../../../services/CreateUserService';

const createUser = new CreateUserService();

class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { firstName, lastName, email, phone, password } = req.body;

    const user = await createUser.execute({
      firstName,
      lastName,
      email,
      phone,
      password
    });

    user.password = '';

    return res.status(statusCodes.created).json(user);
  }
}

export default UserController;

