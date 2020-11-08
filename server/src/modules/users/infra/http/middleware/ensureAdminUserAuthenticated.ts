import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '@config/auth';
import statusCodes from "@config/statusCodes";

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
    throw new AppError('JWT token is missing', statusCodes.unAuthorized);
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
      throw new AppError("User not found", statusCodes.notFound);

    if (user.permission === "Admin" || user.permission === "Master")
      return next();
    else
      throw new AppError('Invalid Permission', statusCodes.forbidden);
  } catch (err) {
    if (err instanceof AppError)
      throw new AppError(err.message, err.statusCode);
    throw new AppError('Invalid JWT token', statusCodes.unAuthorized);
  }
}

export default ensureAdminUserAuthenticated;
