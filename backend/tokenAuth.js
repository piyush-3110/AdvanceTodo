const jwt = require("jsonwebtoken");

const tokenAuth = (req, res, next) => {
  const auth = req.headers["authorization"];

  if (!auth) {
    res.status(401).json({
      msg: "Authentication token empty",
    });
  }
  try {
    const jwttoken = jwt.verify(
      req.headers["authorization"],
      process.env.secret
    );

    return next();
  } catch (error) {
    res.status(401).json({
      msg: "Authentication token doesnot exist",
    });
  }
};
module.exports = tokenAuth;
