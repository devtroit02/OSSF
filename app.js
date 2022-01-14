
const formidable = require("formidable");
const fs = require('fs')
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _= require("lodash");
const multer = require('multer');
const path = require('path');
const app = express();
const bcrypt = require('bcrypt');
const session = require('express-session');
const { ppid } = require('process')
const { result } = require('lodash')
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));




app.get("/", function (req, res) {
  res.render("home");
  
});


app.get("/blog", function (req,res){
  res.render("blog");
    
});

app.get("/post_01", function (req,res){
  res.render("post_01");
});










let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);