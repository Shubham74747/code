// READ A FILE::
// var http = require('http');
// var fs = require('fs');

// http
//     .createServer(function (req, res) {
//       fs.readFile("html/index.html", function (error, data) {
//       res.writeHead(200,{'Content-Type':'text/html'})
//       res.write(data);
//       return res.end();
//     });
// })
//     .listen(8081);

// CREATE A FILE:: APEND METHOD;
// var fs = require('fs');
// fs.appendFile("mynewfile.txt", "Hello morreeeee", function (err) {
//     if (err) throw err;
//     console.log("saved")
// });

// CREATE A FILE:: OPEN METHOD;
// var fs = require("fs");
// fs.open("mynewfile.txt", "r", function (err,file) {
//     if (err) throw err;
//     console.log("saved", file);
// });


// CREATE A FILE:: WRITE METHOD;
// var fs = require("fs");
// fs.writeFile("mynewfile3.txt", "Hello newwww", function (err) {
//   if (err) throw err;
//   console.log("saved");
// });

//UPDATE A FILE:: APPEND METHOD;
// var fs = require("fs");
// fs.writeFile("mynewfile.txt", "This my text", function (err) {
//   if (err) throw err;
//   console.log("updated");
// });

//UPDATE A FILE:: WRITE METHOD;
// var fs = require("fs");
// fs.writeFile("mynewfile3.txt", "This my text", function (err) {
//   if (err) throw err;
//   console.log("updated");
// });

//delete file::
// var fs = require("fs");
// fs.unlink("mynewfile2.txt", function (err) {
//   if (err) throw err;
//   console.log("file deleted");
// });

//RENAME METHOD::
// var fs = require("fs");
// fs.rename("mynewfile.txt", "file.text", function (err) {
//   if (err) throw err;
//   console.log(" filerenamed");
// });

// var url = require("url");
// var adr = "http://localhost:8081/default.htm?year=2017&month=february";
// var q = url.parse(adr, true);
// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);
// var qdata = q.query;
// console.log(qdata.month);


 



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

// var http = require("http");
// var uc = require("upper-case");
// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write(uc.upperCase("Hello World!"));
//     res.end();
//   })
//     .listen(8082);


// var events = require("events");
// var eventEmitter = new events.EventEmitter();
// var myEventHandler = function () {
//   console.log("I hear a scream!");
// };
// eventEmitter.on("scream", myEventHandler);
// eventEmitter.emit("scream");



