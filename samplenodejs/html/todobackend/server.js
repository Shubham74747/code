const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const todos = [
  {
    serielNumber: 1,
    title: "learn javascript",
    status: "Yes",
  },
  {
    serielNumber: 2,
    title: "learn nodejs",
    status: "No",
  },
];

app.get('/', (req, res) => {
    res.send(todos);
})

app.post("/", (req, res) => {
    const todo = req.body.data;
    todos.push(todo);
    res.send(todos);
});

app.put("/", (req, res) => {
    // find object in array and update it
    const todos = [
      {
        serielNumber: 1,
        title: "learn javascript",
        status: "Yes",
      },
      {
        serielNumber: 2,
        title: "learn nodejs",
        status: "No",
      },
    ];
    const todo = {
        serielNumber: 1,
        title: "learn javascript more",
        status: "Yes",
    };

    const result = [
      {
        serielNumber: 1,
        title: "learn javascript more",
        status: "Yes",
      },
      {
        serielNumber: 2,
        title: "learn nodejs",
        status: "No",
      },
    ];
    res.send(result);
});

app.listen(3000, "localhost", () => {
  console.log("server is running on port ", 3000);
});