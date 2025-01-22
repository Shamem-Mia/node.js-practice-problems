require("dotenv").config();
const express = require("express");
const mongoose = require("mongose");
const app = express();

const ejs = require("ejs");
var bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));

const loginMiddlewar = (req, res, next) => {};

// mongodb connection

mongoose
  .connect(" mongodb://127.0.0.1:27017/youtube-user-1")
  .then(() => console.log("mongodb connected"))
  .catch((err) => {
    console.log("mongodb is not connected ");
  });

// schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: false,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
});

const User = mongoose.model("user", userSchema);

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  res.send(`email : ${email} ; password: ${password}`);
});

app.get("/register", (req, res) => {
  res.send("register page");
});

// app.get("/login", (req, res) => {
//   res.send("login page");
// });

app.post("/", (req, res) => {
  res.send("post request on login");
});

app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});
