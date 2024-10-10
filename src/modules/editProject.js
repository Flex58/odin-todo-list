import clearScreen from "./clearScreen"
import renderProject from "./renderProject"
import saveToStorage from "./saveToStorage"

const editProject = (project) => {

    const projectDiv = document.querySelector("#project")

    projectDiv.removeChild(projectDiv.firstChild)

    const form = document.createElement("form")

    const nameInput = document.createElement("input")
    nameInput.value = project.name

    const submit = document.createElement("button")
    submit.type = "submit"
    submit.textContent = "Finish"

    form.addEventListener("submit", (e) => {
        project.setName(nameInput.value)
        clearScreen()
        renderProject(project)
        e.preventDefault()
        saveToStorage();
    })

    form.appendChild(nameInput)
    form.appendChild(submit)
    projectDiv.appendChild(form)
    projectDiv.insertBefore(form, projectDiv.firstChild)
}

export default editProject