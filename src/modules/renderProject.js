import renderCreateTodo from "./renderCreateTodo";
import renderTodo from "./renderTodo";
import editProject from "./editProject";

const renderProject = (project) => {
    const projectDiv = document.createElement("div");
    projectDiv.id = "project";
    
    const projectName = document.createElement("h1")
    projectName.textContent = project.name;
    projectDiv.appendChild(projectName)

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

    projectDiv.appendChild(newTodoBtn)
    projectDiv.appendChild(editBtn)
    document.querySelector("#content").appendChild(projectDiv)

    renderTodo(project) 
}

export default renderProject;
