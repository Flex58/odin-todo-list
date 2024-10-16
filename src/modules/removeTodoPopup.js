import renderProject from "./renderProject";
import clearScreen from "./clearScreen";
import activeProject from "./activeProject";
import loadProject from "./loadProject";

const removeTodoPopup = (nameFunction, type, id, loadDest) => {
    const content = document.querySelector("#content")
    
    const dialog = document.createElement("dialog")
    dialog.open = "true";

    const warningText = document.createElement("p")
    warningText.textContent = `Are you sure you want to delete ${nameFunction}?`

    const yesBtn = document.createElement("button")
    yesBtn.textContent = "Yes"

    const noBtn = document.createElement("button")
    noBtn.textContent = "No"

    yesBtn.addEventListener("click", () => {
        dialog.open = "false"
        
        if (type == "todo"){
            activeProject.getActiveProject().removeTodo(id)
            clearScreen()
            renderProject(activeProject.getActiveProject())
        }
        else if (type == "project") {
            activeProject.removeProject(activeProject.projects.indexOf(id))
            clearScreen()
            loadProject(activeProject.projects)
        }
    })

    noBtn.addEventListener("click", () => {
        dialog.open = "false"
        clearScreen()
        if (loadDest == "active"){
            renderProject(activeProject.getActiveProject())
        }
        else if (loadDest == "load") {
            loadProject(activeProject.projects)
        }
    })


    dialog.appendChild(warningText)
    dialog.appendChild(yesBtn)
    dialog.appendChild(noBtn)
    content.appendChild(dialog)
}

export default removeTodoPopup