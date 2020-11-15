import { Request, Response, NextFunction } from 'express';

import AppError from '@shared/errors/AppError';

const checkIsBodyEmpty = (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;

    if (body)
        throw new AppError("The Body must be empty");

    return next();
}

export default checkIsBodyEmpty;
