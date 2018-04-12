console.log("Hello TODO");
var todoList= new Map();

console.log(todoList);
function addToList(message) {
    var uuid = new Date().getUTCMilliseconds();
    todoList.set(uuid ,message);
    return uuid;
}

function getToDo(key)
{
    return todoList.get(key);
}

function deleteKeyFromList(key) {
   return todoList.delete(key);
}

function printAllToDo() {
    todoList.forEach(printMessage);
}

function editToDoAtIndex(index, message)
{
    todoList[index] = message;
}

function printMessage(message) {
    console.log(message);
}

