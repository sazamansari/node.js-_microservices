// import CONSTANTS from "../constants/index.js";
const CONSTANTS = require("../constants/index.js");

// import UserRoutes from "../modules/user/user.routes";
// const UserRoutes = require("../modules/user/user.routes");

const routes = (app) => {
  app.use(`${CONSTANTS.API_URI}/user`, CONSTANTS);

  // console.log(app , "::dddddddddd")
};
module.exports = routes;
// Define Routes
