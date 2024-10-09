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
}

export default Todo;