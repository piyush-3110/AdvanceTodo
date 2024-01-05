const jwt = require("jsonwebtoken");

const tokenAuth = (req, res, next) => {
  const auth = req.headers["authorization"];

  if (!auth || !auth.startsWith("Bearer ")) {
    res.status(401).json({
      msg: "Authentication token empty",
    });
  }
  try {
    const token = req.headers["authorization"].split(" ")[1];
    const jwttoken = jwt.verify(token, process.env.secret);

    return next();
  } catch (error) {
    res.status(401).json({
      msg: "Authentication token doesnot exist",
    });
  }
};
module.exports = tokenAuth;
