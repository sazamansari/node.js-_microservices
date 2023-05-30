import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import compression from "compression";

import httpLogger from "./middleware/morgan";
import logger from "./common/logger";
import connectDB from "./config/db";
import routes from "./routes";

const app = express();

app.use(httpLogger);

app.use(compression({ filter: shouldCompress }));

const shouldCompress = (req, res) => {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }

  // fallback to standard filter function
  return compression.filter(req, res)
}

dotenv.config();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: true }));

app.use(cors());

app.get("/", (req, res) => res.send("API RUNNING"));

routes(app);

const PORT = process.env.SERVER_PORT || 3009;

//Error handler 
function errorHandler(err, req, res) {

// Log the error to the console
console.log(err);

// Send a 500 error response to the client
res.status(500).send("An error occurred");}

app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT ${PORT}`);
  logger.info("SERVER STARTED");
});
