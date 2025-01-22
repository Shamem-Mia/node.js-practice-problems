const express = require("express");

const app = express();
const path = require("path");
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

const port = 8000;

app.get("/login", (req, res) => {
  //   const html = `<h1>Hello</h1>`;
  //   res.send(html);
  req.send("login page");
  res.end();
});

app.get("/register", (req, res) => {
  req.send("register pag");
  res.end();
});

app.listen(port, () => {
  console.log(`server is run at port http://localhost:${port}`);
});
