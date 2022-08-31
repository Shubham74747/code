var express = require('express')
var cors = require('cors')
var bodyParser = require("body-parser");
const { insertData } = require('./db-config');

var app = express()

app.use(cors())


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res, next) {
  res.json({msg: 'Hello world!'})
})

app.post("/", function (req, res, next) {
  insertData(req.body);
  res.json({ msg: "post api" });
});

app.listen(8080, function () {
  console.log('CORS-enabled web server listening on port 8080')
})