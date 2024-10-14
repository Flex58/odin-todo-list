import renderCreateTodo from "./renderCreateTodo";
import renderTodo from "./renderTodo";
import editProject from "./editProject";

const renderProject = (project) => {
    const projectDiv = document.createElement("div");
    const projectHeader = document.createElement("div")
    projectDiv.id = "project";
    projectHeader.id = "projectHeader"
    
    const projectName = document.createElement("h1")
    projectName.textContent = project.name;
    projectHeader.appendChild(projectName)

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

    projectHeader.appendChild(newTodoBtn)
    projectHeader.appendChild(editBtn)
    projectDiv.appendChild(projectHeader)
    document.querySelector("#content").appendChild(projectDiv)

    renderTodo(project) 
}

export default renderProject;
