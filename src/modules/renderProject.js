import renderCreateTodo from "./renderCreateTodo";

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
    
    for (let i in project.todoList) {
        
        const card = document.createElement("div")
        card.className = "card"
        card.id = i
        const title = document.createElement("h2");
        const description = document.createElement("p");
        const dueDate = document.createElement("div")
        const priority = document.createElement("div")
        const notes = document.createElement("div")

        title.textContent = project.todoList[i].title;
        description.textContent = project.todoList[i].description;
        dueDate.textContent = project.todoList[i].dueDate;
        priority.textContent = project.todoList[i].priority;
        notes.textContent = project.todoList[i].notes;
        

        card.appendChild(title)
        card.appendChild(description)
        card.appendChild(dueDate)
        card.appendChild(priority)
        card.appendChild(notes)
        projectDiv.appendChild(card)

    }
    document.querySelector("#content").appendChild(projectDiv)
}

export default renderProject;
