import clearScreen from "./clearScreen"
import activeProject from "./activeProject"
import renderProject from "./renderProject"
import removeTodoPopup from "./removeTodoPopup"
const loadProject = (projects) => {
    const content = document.querySelector("#content")
    clearScreen()

    for (let i in projects) {
        const card = document.createElement("div")
        card.className = "card"
        card.id = i;
        const projectName = document.createElement("h2")
        projectName.textContent = projects[i].name 

        const loadBtn = document.createElement("button")
        loadBtn.className = "loadBtn"
        loadBtn.textContent = "Load"

        const deleteBtn = document.createElement("button")
        deleteBtn.className = "deleteBtn"
        deleteBtn.textContent = "Delete Project"

        const todoTitleArr = []
        for (let j in projects[i].todoList) {
            todoTitleArr.push(document.createElement("h4")) 
            todoTitleArr[j].textContent = projects[i].todoList[j].title
        }

        const todoDueDate = []
        for (let j in projects[i].todoList) {
            todoDueDate.push(document.createElement("p")) 
            todoDueDate[j].textContent = projects[i].todoList[j].dueDate
        }

        card.appendChild(projectName)
        for (let j in projects[i].todoList) {
            card.appendChild(todoTitleArr[j])
            card.appendChild(todoDueDate[j])
        }

        loadBtn.addEventListener("click", () => {
            activeProject.setActiveProject(projects[i])
            clearScreen()
            renderProject(activeProject.getActiveProject())
        }) 

        deleteBtn.addEventListener("click", () => {
            removeTodoPopup(projects[i].name,
                            "project",
                            projects[i],
                            "load")
        })

        card.appendChild(loadBtn)
        card.appendChild(deleteBtn)
        content.appendChild(card)
    }
    
}

export default loadProject