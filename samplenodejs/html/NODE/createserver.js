// var http = require('http');
// var url = require('url')

// http.createServer(function (req, res) {
//     res.writeHead(200, {"Content-Type": "text/html" });
//     res.write("Hello World");
//     res.end();
// }).listen(8090);

var fs = require("fs");
http
  .createServer(function (req, res) {
    var filename = req.url.replace("/", "");
    if (filename == "shubham" || filename == "sidhu") {
      fs.readFile("json/" + filename + ".json", function (err, data) {
        res.writeHead(200, { "content-type": "application/json" });
        res.write(data);
        res.end();
      });
    } else {
      res.write("file not found");
      res.end();
    }
  })
  .listen(8081);
