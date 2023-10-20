import morgan, { StreamOptions } from "morgan";
import {Logger} from "../../util/logger";

const stream: StreamOptions = {
  write: (message) => Logger.http(message),
};

const skip = () => {
  const env = process.env.NODE_ENV || "development";
  return env !== "development";
};

const httpLog = morgan(
  ":method :url status: :status content-length: :res[content-length] - response-time: :response-time ms",
  { stream, skip }
);

export default httpLog;