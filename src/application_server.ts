import express from "express";
import { ApplicationRouter } from "./controllers/application_route";
import { ExceptionMiddleware } from "./controllers/middlewares/exception_middleware";
import httpLog from "./controllers/middlewares/http_log";

export class ApplicationServer {
  private _server: express.Application;
  private _serverPort: number =  Number(process.env.SERVER_PORT || '3333');
  private _routes: ApplicationRouter;

  constructor() {
    this._server = express();
    this._routes = new ApplicationRouter();
  }

  public get server() {
    this._server.use(express.json());
    this._server.use(httpLog);

    this._routes.handle(this._server);

    this._server.use(new ExceptionMiddleware().handle);

    return this._server;
  }

  public get serverPort(): number {

    return this._serverPort;
  }
}