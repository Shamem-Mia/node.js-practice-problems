const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const monoDBConnect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test-1");
    console.log("MongoDb is connected");
  } catch (err) {
    console.log("MongoDb is not connected");
    console.log(err);
  }
};

// schema

const userLoginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserLogin = mongoose.model("userLogin", userLoginSchema);

app.post("/login", async (req, res) => {
  const newUser = new UserLogin({
    email: req.body.email,
    password: req.body.password,
  });
  const userData = await newUser.save();
  res.status(201).send(userData);
});

app.get("/users", async (req, res) => {
  try {
    const allUsers = await UserLogin.find({});
    const html = `
  <ul>
    ${allUsers.map((user) => `<li><h1> ${user.email} </h1></li>`).join("")}
  </ul>
  `;
    res.send(html);
  } catch (err) {
    res.status(500).send(err);
  }
});

monoDBConnect();

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
