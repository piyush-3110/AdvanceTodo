const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
require("dotenv").config();
require("./db").connect();
app.use(express.json());
const validate = require("./validatesingup");
const signupSchema = require("./userValidation");
const UserModel = require("./model/userModel");
const bcrypt = require("bcryptjs");
app.post("/signin", (req, res) => {
  res.send({
    msg: "success",
  });
});
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
app.listen(3000);
