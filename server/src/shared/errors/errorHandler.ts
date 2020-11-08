import { ErrorRequestHandler } from "express";
import statusCodes from "@config/statusCodes";

import AppError from './AppError';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);

  return res.status(statusCodes.internalError).json({
    status: 'error',
    message: 'Internal server error',
  });
};

export default errorHandler;
