const express = require('express');
var bodyParser = require('body-parser');
const app = express(); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let fs = require('fs');
// console.log(__dirname);
require(__dirname + "/router")(app);
 app.listen(9998,function(res){
  console.log("server is running")
 })

