const http = require('http');

const server = http.createServer((req, res) => {
    const { headers, method, url } = req;
    console.log(method);
    if (method == 'GET') {
        res.write("this is get world");
        res.statusCode = 200;
        res.end();
    } else if (method == "POST") {
        res.write("this is post world");
        res.end();
    } else {
      res.write("hello  world");
      res.end();
    }
});

server.listen(3000, 'localhost', () => {
    console.log("server is running on port ", 3000);
});