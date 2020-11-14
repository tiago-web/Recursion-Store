import { ErrorRequestHandler } from "express";
import { ValidationError } from "yup";
import statusCodes from "@config/statusCodes";

import AppError from './AppError';
import yupErrorHandler from "./yupErrorHandler";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  if (err instanceof ValidationError) {
    yupErrorHandler(err, req, res, next);
  }

  console.log(err);

  return res.status(statusCodes.internalError).json({
    status: 'error',
    message: 'Internal server error',
  });
};

export default errorHandler;
