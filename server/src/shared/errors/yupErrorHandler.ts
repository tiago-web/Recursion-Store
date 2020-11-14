import { ErrorRequestHandler } from "express";

interface ValidationErrors {
  [key: string]: string[];
}

const yupErrorHandler: ErrorRequestHandler = (error, request, response, next) => {
  let errors: ValidationErrors = {};

  error.inner.forEach(err => {
    errors[err.path] = err.errors;
  });

  return response.status(400).json({ message: "Validation fails", errors })
}

export default yupErrorHandler;
