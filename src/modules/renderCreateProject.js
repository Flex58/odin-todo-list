import createProject from "./createProject"
import renderProject from "./renderProject"
import clearScreen from "./clearScreen"
import activeProject from "./activeProject"

const renderCreateProject = () => {
    const active  = activeProject;
    const content = document.querySelector("#content")
    const dialog = document.createElement("dialog")
    dialog.open = "true";
    const form = document.createElement("form")
    form.id = "createProjectForm"
    const nameLabel = document.createElement("label")
    nameLabel.for = "name"
    nameLabel.textContent = "Project Name"
    const nameInput = document.createElement("input")
    nameInput.id = "name"

    const submit = document.createElement("button")
    submit.type = "submit"

    form.addEventListener("submit", (e) => {
        const project = createProject(nameInput.value);
        console.log("test")
        dialog.open = "false"
        active.setActiveProject(project)
        clearScreen()
        renderProject(project)
        e.preventDefault()
    })
    
    form.appendChild(nameLabel);
    form.appendChild(nameInput)
    form.appendChild(submit)
    dialog.appendChild(form)
    content.appendChild(dialog)
}

export default renderCreateProject;