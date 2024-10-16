class Task{
    constructor(name, completionStatus = false) {
        this.name = name
        this.completionStatus = completionStatus;
    }

    switchCompletionStatus() {
        return this.completionStatus = this.completionStatus ? false:true
    }

    setName(name) {
        return this.name = name;
    }
}

export default Task