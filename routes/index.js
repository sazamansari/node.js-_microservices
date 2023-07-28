const express = require("express");
const CONSTANTS = require("../constants/index.js");
const signup = require("../controllers/auth/user.signup.js");
const signin = require("../controllers/auth/user.signin.js");

const userMiddleware = (req, res, next) => {
  // Your middleware logic here
  // ...
  next();
};

const routes = (app) => {
  app.use(`${CONSTANTS.API_URI}/user`, userMiddleware);

  app.post(`${CONSTANTS.API_URI}/user/signup`, signup);
  app.post(`${CONSTANTS.API_URI}/user/signin`, signin);
};

module.exports = routes;
