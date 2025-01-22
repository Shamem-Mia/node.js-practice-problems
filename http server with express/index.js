const http = require("http");
const express = require("express");


const app = express();

app.get('/', (req,res) => {
    return res.send("Welcome to Homepage");
});

app.get('/about', (req,res) => {
    return res.send("This is Shamem");
})
 
app.get('/search', (req,res) => {
    return res.send("This is the output of your search");
})
    
    
     
        
const myServer = http.createServer(app);
myServer.listen(8000, () => console.log("server started"));