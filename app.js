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

const logTodos = () => {
  console.log(arrayOfTodos);
};

const populateTodos = () => {
  //get ol tag to insert list items
  const ol = document.getElementById("todo-list");

  for (let index = 0; index < arrayOfTodos.length; index++) {
    //create a new div element
    const li = document.createElement("li");
    //get title from object
    const title = arrayOfTodos[index].title;
    //put title in the li element
    const listItemText = document.createTextNode(title);
    // add text node to the new list element
    li.appendChild(listItemText);
    //append list item
    document.body.insertBefore(li, ol);
    //
  }
};
