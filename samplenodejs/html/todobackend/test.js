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
  title: "python",
  status: "Yes",
};

console.log("before update==", todos);
for (var i = 0; i < todos.length; i++) {
    var item = todos[i];
    if (item.serielNumber == todo.serielNumber) {
        console.log("element found => ", item);
        item.title = todo.title;
        todos[i] = item;
    }
}
console.log("after update = ", todos);

// todos.forEach((item, index) => {
//     console.log(index, item);
// })

// todos.map(item => {
//     console.log(item.status);
// })