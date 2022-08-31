// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//     var filename = req.url.replace('/', '');
//     if (filename == 'shubham' || filename == 'sidhu') {
//         fs.readFile('json/' + filename + '.json', function (err, data) {
//             res.writeHead(200, { 'content-type': 'application/json' });
//             res.write(data);
//             res.end();
//         })
//     } else {
//         res.write("file not found")
//         res.end();
//     }
// }).listen(8082);

// const express = require('express');
// const app = express();
// const fs = require('fs');

// app.get('/*', function (req, res) {
//     var filename = req.url.replace("/", "");
//     if (filename == 'shubham' || filename == 'sidhu') {
//         fs.readFile('json/' + filename + '.json', function (err, data) {
//         res.writeHead(200, { 'content-type': 'application/json' });
//         res.write(data);
//         res.send();
//     })
//     } else {
//         res.write("file not found");
//         res.send();
//     }
// })

// app.listen(8085, function () {
//     console.log("server started at ", 8085);
// })


const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", function (req, res) {
    const filename = req.query.fileName;
    fs.readFile("json/" + filename + ".json", function (err, data) {
        if (err) {
            res.send("File not found");
        }
        res.writeHead(200, { "content-type": "application/json" });
        res.write(data);
        res.send();
    });
});

app.listen(8085, function () {
  console.log("server started at ", 8085);
});