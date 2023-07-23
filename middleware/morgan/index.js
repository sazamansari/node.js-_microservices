// import morgan from "morgan";
const morgan = require("morgan");

// import logger from "../../common/logger";
const logger = require("../../common/logger");

logger.stream = {
  write: (message) =>
    logger.info(message.substring(0, message.lastIndexOf("\n"))),
};

module.exports = morgan(
  ":method :url :status :response-time ms - :res[content-length]",
  { stream: logger.stream },
);
