import express from "express";
import { BadRequestApiError } from "../common/exceptions/bad_request_api_error";
import {Logger} from "../util/logger";

export class ApplicationRouter{

  public handle = (router: express.Router) => {

    router.get('/', (_, res) => {
      res.status(200).json({message: 'hello world!'});
    });

    router.all('*', (req, res) => {
      throw new BadRequestApiError();
    });
  }
}

