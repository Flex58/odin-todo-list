import renderCreateTodo from "./renderCreateTodo";
import renderTodo from "./renderTodo";
import editProject from "./editProject";
import removeTodoPopup from "./removeTodoPopup";

const renderProject = (project) => {
    const projectDiv = document.createElement("div");
    const projectHeader = document.createElement("div")
    const projectNameDiv = document.createElement("div")
    projectDiv.id = "project";
    projectHeader.id = "projectHeader"
    projectNameDiv.id = "projectNameDiv"
    
    const projectName = document.createElement("h1")
    projectName.textContent = project.name;
    projectNameDiv.appendChild(projectName)

    const projectRemoveBtn = document.createElement("button")
    projectRemoveBtn.textContent = "Delete Project"
    projectRemoveBtn.addEventListener("click", () => {
        removeTodoPopup(project.name,
                        "project",
                        project,
                        "active")
        
    })
    projectNameDiv.appendChild(projectRemoveBtn)

    const editBtn = document.createElement("button")
    editBtn.textContent = "Edit Project"
    editBtn.addEventListener("click", () => {
        editProject(project);
    })

    const newTodoBtn = document.createElement("button")
    newTodoBtn.textContent = "New Todo"
    newTodoBtn.addEventListener("click", () => {
        renderCreateTodo();
    })

    projectHeader.appendChild(projectNameDiv)
    projectHeader.appendChild(newTodoBtn)
    projectHeader.appendChild(editBtn)
    projectDiv.appendChild(projectHeader)
    document.querySelector("#content").appendChild(projectDiv)

    renderTodo(project) 
}

export default renderProject;
