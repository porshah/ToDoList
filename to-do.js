let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {

    for (i=0; arrayOfTodos.length; i++) {

    // capture the ol item into the variable (getElementById)
    let ToDolist = document.getElementById("todo-list");
    let todoItem =  "";
    let todoTitle = "";

    // create  text inside using the title property
    todoTitle = document.createTextNode(arrayOfTodos[i].title);

    // create new element to make LI
    todoItem = document.createElement("LI");

    // Now append the text to a new element
    todoItem.appendChild(todoTitle);

    // the append the element to the ol element
    ToDolist.appendChild(todoItem);

    }
}