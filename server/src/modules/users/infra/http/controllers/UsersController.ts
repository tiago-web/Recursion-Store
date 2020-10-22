import { Request, Response } from 'express';

import CreateUserService from '../../../services/CreateUserService';

const createUser = new CreateUserService();

export default class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { firstName, lastName, email, phone, password, shippingAddresses: { address, country, province, city, main } } = req.body;

    const user = await createUser.execute({
      firstName,
      lastName,
      email,
      phone,
      password,
      shippingAddresses: {
        address,
        country,
        province,
        city,
        main
      }
    });

    return res.json(user);
  }
}
