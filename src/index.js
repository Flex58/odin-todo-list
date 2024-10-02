import "./styles.css";
import Todo from "./modules/todo";

const test = new Todo("test", "this is a test", "tomorrow", "high")

console.log(test)
test.complete()
test.setNotes("this is a test again")
console.log(test.notes)
