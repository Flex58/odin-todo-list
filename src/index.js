import "./styles.css";
import Project from "./modules/project";

const test = new Project()

test.createTodo("test")

console.log(test.todoList)
test.createTodo("test2")
console.log(test.todoList)
test.todoList[0].setNotes("test")
console.log(test.todoList[0])
