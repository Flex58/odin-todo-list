import Task from "./task"
import clearScreen from "./clearScreen"
import renderProject from "./renderProject"
const addTask = (id, project) => {
    const form = document.createElement("form")
    form.id = "editTaskForm"
    const taskInput = document.createElement("input")

    const submit = document.createElement("button")
    submit.type = "submit"
    submit.textContent = "Submit"

    form.addEventListener("submit", (e) => {
        project.todoList[id].setTask(new Task(taskInput.value))
        clearScreen()
        renderProject(project)
        e.preventDefault()
    })

    form.appendChild(taskInput)
    form.appendChild(submit)
    document.getElementById(id).childNodes[0].appendChild(form)
}

export default addTask