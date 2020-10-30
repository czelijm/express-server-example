//jshint esversion:6
const express = require("express");

const app = express();

app.get("/",function(req, res){
  // console.log(request);
  res.send("<h1>Hello there</h1>");
});

app.get("/contact",function(req, res){
  // console.log(request);
  res.send("contact me at : czelijm");
});

app.get("/about",function(req, res){
  // console.log(request);
  res.send("Hi! I'm Marek and I love chocolate!");
});

app.get("/hobbies",function(req, res){
  // console.log(request);
  res.send("<ul><li>Web development</li><li>sport</li><li>image proccesing</li></ul>");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
