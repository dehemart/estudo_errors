import { Request, Response, NextFunction } from "express";
import { ApiError } from "../../common/exceptions/api_error"

export class ExceptionMiddleware{
  handle = ( error: ApiError , req: Request, res: Response, next: NextFunction ) => {
    const statusCode = error.statusCode ?? 500;
    const message = error.statusCode ? error.message : 'Internal server error';


    return res.status(statusCode).json(
      {
        status: statusCode,
        message: message
      }
    );
  }
}

module.exports = { ErrorMiddleware: ExceptionMiddleware };