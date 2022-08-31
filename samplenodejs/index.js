var http = require('http');
var fs = require('fs');
// http.createServer(function (req, res) {
//     fs.readFile('html/index.html', function (err, data) {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data);
//         res.end();
//     })
// }).listen(8080);

// http.createServer(function (req, res) {
//     var filename = req.url.replace('/', '');
//     if (filename == 'shubham' || filename == 'sidhu') {
//         fs.readFile('json/' + filename + '.json', function (err, data) {
//             res.writeHead(200, { 'Content-Type': 'application/json' });
//             res.write(data);
//             res.end();
//         })
//     } else {
//         res.write("File Not Found")
//         res.end();
//     }
// }).listen(8080);
