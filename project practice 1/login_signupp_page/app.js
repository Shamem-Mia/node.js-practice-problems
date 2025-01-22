const express = require("express");
const mongose = require("mongose");
const path = require("path");
const bcrypt = require("bcrypt");
const ejs = require("ejs");
const { type } = require("os");

const app = express();
PORT = 6000;
app.set("view engine", "ejs");

app.use("/", (req, res) => {
  res.render("login");
});

app.use("/signup", (req, res) => {
  res.render("signup");
});

// connection with mongodb

mongoose
  .connect("mongodb://127.0.0.1:27017/userLogin-app-1")
  .then(async () => {
    await console.log("Mongodb connected");
  })
  .catch(async (err) => {
    await console.log(err);
  });

const loginSchema = new mongoose.Schema({
  email: {
    type: string,
    required: true,
    unique: true,
  },
  password: {
    type: string,
    required: true,
  },
});

const collection = new mongoose.model("user", loginSchema);

app.listen(PORT, () => {
  console.log(`server is running successflly on port ${PORT}`);
});
