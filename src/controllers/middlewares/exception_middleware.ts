import { Request, Response, NextFunction } from "express";
import { ApiError } from "../../common/exceptions/api_error"

export class ExceptionMiddleware{
  private internalServerErrorStatusCode: number;
  private internalServerErrorMessage: string;

  constructor(){
    this.internalServerErrorStatusCode = 500;
    this.internalServerErrorMessage =  'Internal server error';
  }

  handle = ( error: ApiError , req: Request, res: Response, next: NextFunction ) => {
    const statusCode = error.statusCode ?? this.internalServerErrorStatusCode;
    const message = error.statusCode ? error.message :this.internalServerErrorMessage;


    res.status(statusCode).json(
      {
        status: statusCode,
        message: message
      }
    );
  }
}
