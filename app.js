let arrayOfTodos = [
  {
    userId: 14,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 20,
    id: 2,
    title: "delectus aut autem",
    completed: false,
  },
];

const fetchTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => (arrayOfTodos = json));
};

fetchTodos();

const logTodos = () => {
  console.log(arrayOfTodos);
};

const populateTodos = (todos = arrayOfTodos) => {
  clearTodos();
  //get ol tag to insert list items
  const ol = document.getElementById("todo-list");

  for (let index = 0; index < todos.length; index++) {
    //create a new div element
    const li = document.createElement("li");
    //get title from object
    const title = todos[index].title;
    //put title in the li element
    const listItemText = document.createTextNode(title);
    // add text node to the new list element
    li.appendChild(listItemText);
    //append list item
    ol.appendChild(li);
    //
  }
};

const clearTodos = () => {
  arrayOfTodos = [];
  const ol = document.getElementById("todo-list");
  console.log(ol);
  ol.innerHTML = "";
};

const populateByUser = () => {
  const userId = document.getElementById("userid").value;
  const filteredTodos = arrayOfTodos.filter((item) => item.userId == userId);

  populateTodos(filteredTodos);
};
