import express from "express";
import { BadRequestApiError } from "../common/exceptions/bad_request_api_error";

export class ApplicationRouter{

  public handle = (router: express.Router) => {

    router.get('/', (_, res) => {
      return res.status(200).json({message: 'hello world!'});
    });

    router.get('*', (req, res) => {
      throw new BadRequestApiError();
    });
  }
}

