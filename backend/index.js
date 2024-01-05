const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");

require("dotenv").config();
require("./db").connect();
app.use(express.json());
app.use(cors());
const validate = require("./validatesingup");
const signupSchema = require("./userValidation");
const UserModel = require("./model/userModel");
const bcrypt = require("bcryptjs");
const userModel = require("./model/userModel");
const tokenAuth = require("./tokenAuth");
app.post("/signup", validate(signupSchema), async (req, res) => {
  const userModel = new UserModel(req.body);
  const { email } = req.body;
  userModel.password = await bcrypt.hash(req.body.password, 10);
  const userExist = await UserModel.findOne({ email });
  if (userExist) {
    return res.status(401).send({ msg: "User already exist " });
  }
  try {
    const response = await userModel.save();
    response.password = undefined;
    return res.status(200).send({
      message: "success",
      data: response,
    });
  } catch (error) {
    const message = error.errors[0].message;
    res.status(401).send({
      msg: message,
    });
  }
});
app.post("/signin", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).send({ msg: "Email doesnot exist" });
    }
    const passwordnew = await bcrypt.compare(req.body.password, user.password);
    if (!passwordnew) {
      return res.status(401).send({ msg: "Password is incorrect" });
    }
    const tokenObject = {
      fullname: user.fullname,
      _id: user._id,
      email: user.email,
    };
    const jwtToken = jwt.sign(tokenObject, process.env.secret, {
      expiresIn: "2h",
    });
    return res.status(201).json({
      jwtToken,
      tokenObject,
    });
  } catch (error) {
    res.status(401).json({
      msg: "Something wrong in logging in",
    });
  }
});
app.get("/users", tokenAuth, async (req, res) => {
  try {
    const email = req.query.email;
    console.log(email);
    const users = await userModel.findOne({ email }, { password: 0 });
    console.log(users);
    res.status(201).json({
      data: users,
      message: "success",
    });
  } catch (error) {
    res.status(400).json({
      data: error,
    });
  }
});
app.listen(3000, () => {
  console.log("App running on port 3000");
});
