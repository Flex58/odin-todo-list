import clearScreen from "./clearScreen"
import activeProject from "./activeProject"
import renderProject from "./renderProject"
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
        loadBtn.className = "loadBtns"
        loadBtn.textContent = "Load"

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
        card.appendChild(loadBtn)
        content.appendChild(card)
    }

    const buttons = document.querySelectorAll(".loadBtns")

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            activeProject.setActiveProject(projects[e.target.parentElement.id])
            clearScreen()
            renderProject(activeProject.getActiveProject())
        }) 
    })
    
}

export default loadProject