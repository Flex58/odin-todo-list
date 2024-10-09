import renderCreateTodo from "./renderCreateTodo";
import clearScreen from "./clearScreen";
import removeTodoPopup from "./removeTodoPopup";
import editTodo from "./editTodo";

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
        const removeBtn = document.createElement("button")
        const editBtn = document.createElement("button")

        title.textContent = project.todoList[i].title;
        description.textContent = project.todoList[i].description;
        dueDate.textContent = project.todoList[i].dueDate;
        priority.textContent = project.todoList[i].priority;
        notes.textContent = project.todoList[i].notes;
        removeBtn.textContent = "Delete";
        editBtn.textContent = "Edit";
        
        removeBtn.addEventListener("click", () => {
            removeTodoPopup(card.id)
        })

        editBtn.addEventListener("click", () => {
            editTodo(card.id)
        })

        card.appendChild(title)
        card.appendChild(description)
        card.appendChild(dueDate)
        card.appendChild(priority)
        card.appendChild(notes)
        card.appendChild(removeBtn)
        card.appendChild(editBtn)
        projectDiv.appendChild(card)

    }
    document.querySelector("#content").appendChild(projectDiv)
}

export default renderProject;
