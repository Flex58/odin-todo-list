import Todo from "./todo";

class Project {
    constructor(name) {
        this.name = name
    }
    todoList = []

    createTodo(titles, description, dueDate, priority, notes,task) {
        const todo = new Todo(titles, description, dueDate, priority, notes, task)

        this.todoList.push(todo)
    }

    removeTodo(i) {
        this.todoList.splice(i, 1)
    }

    setName(name) {
        return this.name = name;
    }

    getName() {
        return this.name;
    }
}

export default Project;