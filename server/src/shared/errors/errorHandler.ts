import { ErrorRequestHandler } from "express";
import { ValidationError } from "yup";
import statusCodes from "@config/statusCodes";

import AppError from './AppError';
import yupErrorHandler from "./yupErrorHandler";

import fs from 'fs';
import path from 'path';
import uploadConfig from '@config/upload';

const errorHandler: ErrorRequestHandler = async (err, req, res, next) => {
  const docList = await fs.promises.readdir(uploadConfig.tmpFolder);

  if (docList.length > 1) {

    for (let i = 0; i < docList.length; i++) {
      if (docList[i] === 'uploads') continue;

      const filePath = path.resolve(uploadConfig.tmpFolder, docList[i]);

      try {
        await fs.promises.stat(filePath);
      } catch {
        return;
      }

      await fs.promises.unlink(filePath);

    }
  }

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
