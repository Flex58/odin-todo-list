class Todo {
    constructor (title, description, dueDate, priority, notes, task) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.tasks = [task]
    }
    
    completeStatus = false;

    complete() {
       return this.completeStatus = true;
    }

    setTitle(title) {
        return this.title = title;
    }

    setDescription(description) {
        return this.description = description;
    }

    setDueDate(dueDate) {
        return this.dueDate = dueDate;
    }

    setNotes(note) {
        return this.notes = note;
    }

    setPriority(priority) {
        return this.priority = priority;
    }

    setTask(task) {
        return this.tasks.push(task);
    }

    removeTask(i) {
        return this.tasks.splice(i, 1)
    }
}

export default Todo;