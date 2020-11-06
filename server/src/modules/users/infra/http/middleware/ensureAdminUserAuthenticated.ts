import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '@config/auth';

import AppError from '@shared/errors/AppError';
import UsersRepository from '../../mongoose/repositories/UsersRepository';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

const userRepository = new UsersRepository();

const ensureAdminUserAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub } = decoded as ITokenPayload;

    req.user = {
      id: sub,
    };

    const user = await userRepository.findById(sub);

    if (!user)
      throw new AppError("User not found", 404);

    if (user.permission === "Admin" || user.permission === "Master")
      return next();
    else
      throw new AppError('Invalid Permission', 403);
  } catch (err) {
    if (err instanceof AppError)
      throw new AppError(err.message, err.statusCode);
    throw new AppError('Invalid JWT token', 401);
  }
}

export default ensureAdminUserAuthenticated;
