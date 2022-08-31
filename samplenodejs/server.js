// var express = require('express');
// var app = express();

// app.get('/shubham', function (req, res) {
//     res.send('Hello World, Shubham');
// })
// app.get('/sidhu', function (req, res) {
//     res.send('Hello World, Sidhu');
// })
// app.get('/*', function (req, res) {
//     res.send('Hello World, I dont know you');
// })
// var server = app.listen(8081, function () {
//     var host = server.address().address;
//     var port = server.address().port;

//     console.log("Example app listening at http://%s:%s", host, port)
// })

// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//         var filename = req.url.replace('/', '');
//         if (filename == 'shubham' || filename == 'sidhu') {
//             fs.readFile('json/' + filename + '.json', function (err, data) {
//                 res.writeHead(200, { 'Content-Type': 'application/json' });
//                 res.write(data);
//                 res.end();
//             })
//         } else {
//             res.write("File Not Found")
//             res.end();
//         }
//     }).listen(8080);

const express = require('express');
const fs = require('fs');
const app = express();

app.listen(8081, () =>{
     console.log('listing on port 8081');
        })

app.get('/shubham', (req, res) => {
    req.send('shubham.json')
})

app.get('/sidhu',(req, res) =>{
    req.send('sidhu.json')
})





app.get('/shubham', function (req, res) {
    fs.readFile('json/shubham.json', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(data);
        res.end();
                })
        res.json(data);
    })
})

app.get('/v2/shubham', function (req, res) {

    res.json(shubham);

})
app.get('/sidhu', function (req, res) {
    fs.readFile('json/sidhu.json', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(data);
        res.end();
        res.send('sidhu.json');
    })
})
app.get('/v2/sidhu', function (req, res) {
    res.json(sidhu);

})

app.get('/*', function (req, res) {
    res.send('Hello World, I dont know you');
})
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})