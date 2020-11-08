import statusCodes from "@config/statusCodes";

class Error {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode = statusCodes.badRequest) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default Error;
