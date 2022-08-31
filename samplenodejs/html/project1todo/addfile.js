// var http = require("http");
// var fs = require("fs");
// http
//   .createServer(function (req, res) {
//     var filename = req.url.replace("/", "");
//     if (filename == "firstpage" || filename == "secondpage" || filename =="thirdpage") {
//       fs.readFile(filename + ".html", function (err, data) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         res.end();
//       });
//     } else {
//       res.write("file not found");
//       res.end();
//     }
//   })
//   .listen(8083);


var http = require("http");
var fs = require("fs");
http
  .createServer(function (req, res) {
    var filename = req.url.replace("/", "");
    if (filename == "firstpage" || filename == "secondpage" || filename == "thirdpage") {
      fs.readFile(filename + ".html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else {
      res.write("File Not Found");
      res.end();
    }
  })
  .listen(8085);