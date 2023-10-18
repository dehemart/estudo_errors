import { ApiError } from "./api_error"

export class BadRequestApiError extends ApiError{

  constructor(){
    super('Bad request error!', 400);
  }
}