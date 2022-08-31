var http = require('http');

// create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello shubham!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080index.js


// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(`
// // //   <!DOCTYPE html>
// // // <html>
// // //     <body>
// // //         <h1>This is heading 1</h1>
// // //         <h2>This is heading 2</h2>
// // //         <h3>This is heading 3</h3>
// // //         <h4>This is heading 4</h4>
// // //         <h5>This is heading 5</h5>
// // //         <h6>This is heading 6</h6>
// // //     </body>
//            </html>
//   `);
//   res.end();
// }).listen(8080);

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(`
//   <!DOCTYPE html>
//     <html>
//         <body>
//             <h1 style="color:red;"> love</h1>
//             <p style="color:black;">love means pyar</p>
//         </body>
//   </html>
//   `);
//   res.end();
// }).listen(8080);


http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('hello world ' + req.url.replace('/',''));
  res.end();
}).listen(8084);

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(`
//   <!DOCTYPE html>
//     <html>
//     <body>
//         <h1>My First Heading</h1>
//         <p>My first paragraph.</p>
//         <a href "https://www.google.com"> Google</a>
//         <br />
//         <b> bold </b>
//         <br />
//         <i> italic </i>
//         <br/>
//         <u> underline </u>
//         <big> this is big </big>
//         <hr>
//         <small> this is small </small>
//         <br/>
//         <p>h<sub>2</sub>o</p>
//         <br/>
//         <p>3<sup>2</sup>=9</p>
//         <pre> shubham                         is a boy</pre>
//       </body>
//   </html>
//   `);
//   res.end();
// }).listen(8080);

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(req.url);
//   res.end();
// }).listen(8080);

// var url = require('url');


// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello Shubham!');
//   res.end();
// }).listen(8080);


// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(req.url);
//   res.end();
// }).listen(8082);

// var http = require('http');     //give ?year = anyyesr & month = any month
// var url = require('url');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8080);



// var http = require('http');   //give colour background,heading and paragraph
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(`
//   <!DOCTYPE html>
//   <html>
//     <head>
//         <style>
//         body {background-color: powderblue;}
//         h1   {color: blue;}
//         p    {color: red;}
//         </style>
//     </head>
//     <body>
//         <h1>This is a heading</h1>
//         <p>This is a paragraph.</p>
//     </body>
//   </html>`);
//   res.end();
// }).listen(8080);

