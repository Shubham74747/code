// var express = require('express');
// var app = express();

// app.get('/shubham', function (req, res) {
//     res.send("hello world, Shubham");
// })
// app.get('/shidhu', function (req, res) {
//     res.send("hello world, Shidhu");
// })
// app.get('/*', function (req, res) {
//     res.send("hello world, i dont know");
// })
// var server = app.listen(8082, function () {
//     var host = server.address().address;
//     var port = server.address().port;

//     console.log("Example app listening at http://%s:%s", host, port)
// })

var fs = require('fs');
var express = require("express");
var app = express();  
    
app.get("/shubham", function (req, res) {
    var filename = "json/shubham.json";
    fs.readFile(filename, 'utf-8', function (err, data) {
        console.log(data);
        res.sendFile(
          "/home/vivek/Desktop/shubham/samplenodejs/json/shubham.json"
        );
    })
});
app.get("/shidhu", function (req, res) {
  var filename = "json/sidhu.json";
  fs.readFile(filename, function (err, data) {
    res.send(data);
  });
});
app.get("/*", function (req, res) {
  res.send("hello world, i dont know");
});
var server = app.listen(8082, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});