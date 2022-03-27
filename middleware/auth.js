const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({
      message: "User Unauthorised",
    });
  }

  try {
    const decoded = jwt.verify(token, config.get("jwtSecretKey"));

    req.user = decoded.user;
    next();
  } catch (e) {
    return res.status(401).json({
      message: "Server Error",
    });
  }
};
