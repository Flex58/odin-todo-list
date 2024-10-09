import renderProject from "./renderProject";
import clearScreen from "./clearScreen";
import activeProject from "./activeProject";

const removeTodoPopup = (id) => {
    const content = document.querySelector("#content")
    
    const dialog = document.createElement("dialog")
    dialog.open = "true";

    const warningText = document.createElement("p")
    warningText.textContent = `Are you sure you want to delete ${activeProject.getActiveProject().todoList[id].title}?`

    const yesBtn = document.createElement("button")
    yesBtn.textContent = "Yes"

    const noBtn = document.createElement("button")
    noBtn.textContent = "No"

    yesBtn.addEventListener("click", () => {
        activeProject.getActiveProject().removeTodo(id)
        dialog.open = "false"
        clearScreen()
        renderProject(activeProject.getActiveProject())
    })

    noBtn.addEventListener("click", () => {
        dialog.open = "false"
        clearScreen()
        renderProject(activeProject.getActiveProject())
    })


    dialog.appendChild(warningText)
    dialog.appendChild(yesBtn)
    dialog.appendChild(noBtn)
    content.appendChild(dialog)
}

export default removeTodoPopup