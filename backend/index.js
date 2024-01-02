const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
require("dotenv").config();
require("./db").connect();
app.use(express.json());

app.post("/signin", (req, res) => {
  res.send({
    msg: "success",
  });
});
app.post("/signup", (req, res) => {});
