class Task{
    constructor(name, completionStatus = false) {
        this.name = name
        this.completionStatus = completionStatus;
    }

    switchCompletionStatus() {
        this.completionStatus == true ? false:true
    }

    setName(name) {
        return this.name = name;
    }
}

export default Task