import express from "express";
import { ApplicationServer } from "./application_server";


const app = new ApplicationServer();
const server = app.server;

server.listen(
  app.serverPort,
  () => console.log(`Server running at ${app.serverPort} port...`)
);