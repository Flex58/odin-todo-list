import renderCreateTodo from "./renderCreateTodo";
import renderTodo from "./renderTodo";

const renderProject = (project) => {
    const projectDiv = document.createElement("div");
    projectDiv.id = "project";
    
    const projectName = document.createElement("h1")
    projectName.textContent = project.name;
    projectDiv.appendChild(projectName)

    const newTodoBtn = document.createElement("button")
    newTodoBtn.textContent = "New Todo"
    newTodoBtn.addEventListener("click", () => {
        renderCreateTodo();
    })

    projectDiv.appendChild(newTodoBtn)
    document.querySelector("#content").appendChild(projectDiv)

    renderTodo(project) 
}

export default renderProject;
