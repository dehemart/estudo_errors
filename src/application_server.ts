import express from "express";
import { ApplicationRouter } from "./controllers/application_route";
import { ExceptionMiddleware } from "./controllers/middlewares/exception_middleware";

export class ApplicationServer {
  private _server: express.Application;
  private _serverPort: number =  Number(process.env.SERVER_PORT || '3333');
  private _routes: ApplicationRouter;

  constructor() {
    this._server = express();
    this._routes = new ApplicationRouter();
  }

  public get server(): express.Application {
    this._server.use(express.json())

    this._routes.handle(this._server);

    this._server.use(new ExceptionMiddleware().handle);

    return this._server;
  }

  public get serverPort(): number {

    return this._serverPort;
  }
}