/**
 * Created by XINCONAN on 2016/6/10.
 */
var express = require("express");
var path = require("path");
var app = express();
var server = require("http").Server(app);

require('./index')(app);
server.listen(1992,function(){
  console.log("App is started..");
})