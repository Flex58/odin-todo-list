import activeProject from "./activeProject";
import renderProject from "./renderProject";
import clearScreen from "./clearScreen";

const renderCreateTodo = () => {
    const content = document.querySelector("#content")
    
    const dialog = document.createElement("dialog")
    dialog.open = "true";
    
    const form = document.createElement("form")
    form.id = "createTodoForm"
    
    const titleLabel = document.createElement("label")
    titleLabel.for = "title"
    titleLabel.textContent = "Title"
    const titleInput = document.createElement("input")
    titleInput.id = "title"
    titleInput.required = "true"

    const descriptionLabel = document.createElement("label")
    descriptionLabel.for = "description"
    descriptionLabel.textContent = "Description"
    const descriptionInput = document.createElement("input")
    descriptionInput.id = "description"

    const dueDateLabel = document.createElement("label")
    dueDateLabel.for = "dueDate"
    dueDateLabel.textContent = "Due Date"
    const dueDateInput = document.createElement("input")
    dueDateInput.type = "date"
    dueDateInput.id = "dueDate"

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

    const notesLabel = document.createElement("label")
    notesLabel.for = "notes"
    notesLabel.textContent = "Notes"
    const notesInput = document.createElement("textarea")
    notesInput.id = "notes"

    const submit = document.createElement("button")
    submit.type = "submit"
    submit.textContent = "Create Todo"

    form.addEventListener("submit", (e) => {
        dialog.open = "false"
        clearScreen()
        activeProject.getActiveProject().createTodo(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value, notesInput.value);
        renderProject(activeProject.getActiveProject())
        e.preventDefault();
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
    dialog.appendChild(form)
    content.appendChild(dialog)
}

export default renderCreateTodo