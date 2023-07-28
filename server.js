// import express from "express";
const express = require("express");

// import dotenv from "dotenv";
const dotenv = require("dotenv");

// import cors from "cors";
const cors = require("cors");

// import compression from "compression";
const compression = require("compression");

// import httpLogger from "./middleware/morgan";
const httpLogger = require("./middleware/morgan");

// import logger from "./common/logger";
const logger = require("./common/logger");

// import connectDB from "./config/db";
const connectDB = require("./config/db");

// import routes from "./routes";
const routes = require("./routes");

const app = express();

dotenv.config();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: true }));
app.use(cors());
app.use(httpLogger);

const shouldCompress = (req, res) => {
  if (req.headers["x-no-compression"]) {
    // don't compress responses with this request header
    return false;
  }

  // fallback to standard filter function
  return compression.filter(req, res);
};

app.use(compression({ filter: shouldCompress }));

// Define Routes
routes(app);

app.get("/", (req, res) => res.send("API RUNNING"));

const PORT = process.env.SERVER_PORT || 3009;

// Error handler
function errorHandler(err, req, res, next) {
  // Log the error to the console
  console.log(err);

  // Send a 500 error response to the client
  res.status(500).send("An error occurred");
}

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT ${PORT}`);
  logger.info("SERVER STARTED");
});
