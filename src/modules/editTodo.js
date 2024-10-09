import activeProject from "./activeProject";
import clearScreen from "./clearScreen";
import renderProject from "./renderProject";

const editTodo = (id) => {
    const active = activeProject.getActiveProject().todoList[id]
    const card = document.getElementById(id)
    while (card.hasChildNodes()){
        card.removeChild(card.firstChild)
    }

    const form = document.createElement("form")
    form.id = "editTodoForm"
    
    const titleLabel = document.createElement("label")
    titleLabel.for = "title"
    titleLabel.textContent = "Title"
    const titleInput = document.createElement("input")
    titleInput.id = "title"
    titleInput.required = "true"
    titleInput.value = active.title

    const descriptionLabel = document.createElement("label")
    descriptionLabel.for = "description"
    descriptionLabel.textContent = "Description"
    const descriptionInput = document.createElement("input")
    descriptionInput.id = "description"
    descriptionInput.value = active.description

    const dueDateLabel = document.createElement("label")
    dueDateLabel.for = "dueDate"
    dueDateLabel.textContent = "Due Date"
    const dueDateInput = document.createElement("input")
    dueDateInput.type = "date"
    dueDateInput.id = "dueDate"
    dueDateInput.value = active.dueDate

    const priorityLabel = document.createElement("label")
    priorityLabel.for = "priority"
    priorityLabel.textContent = "Priority"
    const priorityInput = document.createElement("select")
    priorityInput.form_id  = "createTodoForm"
    priorityInput.id = "priority"
    const priorityOption1 = document.createElement("option")
    priorityOption1.value = "Priority"
    priorityOption1.textContent = "Priority"
    priorityOption1.disabled = "True"
    const priorityOption2 = document.createElement("option")
    priorityOption2.value = "High"
    priorityOption2.textContent = "High"
    const priorityOption3 = document.createElement("option")
    priorityOption3.value = "Mid"
    priorityOption3.textContent = "Mid"
    const priorityOption4 = document.createElement("option")
    priorityOption4.value = "Low"
    priorityOption4.textContent = "Low"
    priorityInput.appendChild(priorityOption1)
    priorityInput.appendChild(priorityOption2)
    priorityInput.appendChild(priorityOption3)
    priorityInput.appendChild(priorityOption4)
    if (priorityOption4.textContent == active.priority) {
        priorityOption4.selected = "true"
    }
    else if (priorityOption2.textContent == active.priority) {
        priorityOption2.selected = "true"
    }
    else if (priorityOption3.textContent == active.priority) {
        priorityOption3.selected = "true"
    }

    const notesLabel = document.createElement("label")
    notesLabel.for = "notes"
    notesLabel.textContent = "Notes"
    const notesInput = document.createElement("textarea")
    notesInput.id = "notes"
    notesInput.value = active.notes 

    const submit = document.createElement("button")
    submit.type = "submit"
    submit.textContent = "Finish Edit"

    form.addEventListener("submit", (e) => {
        active.setTitle(titleInput.value)
        active.setDescription(descriptionInput.value)
        active.setDueDate(dueDateInput.value)
        active.setPriority(priorityInput.value)
        active.setNotes(notesInput.value)
        clearScreen()
        renderProject(activeProject.getActiveProject())
        e.preventDefault()
    })

    form.appendChild(titleLabel)
    form.appendChild(titleInput)
    form.appendChild(descriptionLabel)
    form.appendChild(descriptionInput)
    form.appendChild(dueDateLabel)
    form.appendChild(dueDateInput)
    form.appendChild(priorityLabel)
    form.appendChild(priorityInput)
    form.appendChild(notesLabel)
    form.appendChild(notesInput)
    form.appendChild(submit)
    card.appendChild(form)
}

export default editTodo