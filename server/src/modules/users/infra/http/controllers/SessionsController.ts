import { Request, Response } from 'express';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

const authenticateUser = new AuthenticateUserService();

class SessionsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const { user, token } = await authenticateUser.execute({ email, password });

    user.password = "";

    return res.json({ user, token });
  }
}

export default SessionsController;
