class Todo {
    constructor (title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
    completeStatus = false;

    complete() {
       return this.completeStatus = true;
    }

    setNotes(note) {
        return this.notes = note;
    }

    setPriority(priority) {
        return this.priority = priority;
    }
}

export default Todo;