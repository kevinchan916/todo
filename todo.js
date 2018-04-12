console.log("Hello TODO");
var todoList = [];

console.log(todoList);
function addToList(message) {
   return todoList.push(message);
}

function deleteIndexFromList(index) {
    todoList = todoList.slice(index, index + 1);
}

function printAllToDo() {
    todoList.forEach(printMessage);
}

function printMessage(message) {
    console.log(message);
}