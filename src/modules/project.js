import Todo from "./todo";

class Project {
    constructor() {}
    todoList = []

    createTodo(titles, description, dueDate, priority, notes) {
        const todo = new Todo(titles, description, dueDate, priority, notes)

        this.todoList.push(todo)
    }

    removeTodo(i) {
        this.todoList.splice(i, 1)
    }
}

export default Project;