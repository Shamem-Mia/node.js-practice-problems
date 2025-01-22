const express = require("express");
const urlRoute = require("./routes/url");
const {connectMongoDb} = require("./connect");
const app = express();


const PORT = 8000 ;
app.use(express.json());

 connectMongoDb('mongodb://localhost:27017/short-URL').then(() => console.log("mongobd is connected"));



 app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`The server is started at port ${PORT}`));
