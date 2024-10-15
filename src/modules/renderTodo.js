import editTodo from "./editTodo"
import removeTodoPopup from "./removeTodoPopup"
import addTaskFunction from "./addTask"

const renderTodo = (project) => {
    const cardContainer = document.createElement("div")
    cardContainer.id = "card-container"
    for (let i in project.todoList) {
        
        const card = document.createElement("div")
        card.className = "card"
        card.id = i
        const cardContent = document.createElement("div")
        cardContainer.className = "cardContent"
        const title = document.createElement("h2");
        const description = document.createElement("p");
        const dueDate = document.createElement("div")
        const priority = document.createElement("div")
        const notes = document.createElement("div")
        const addTask = document.createElement("button")
        const removeBtn = document.createElement("button")
        const editBtn = document.createElement("button")

        title.textContent = project.todoList[i].title;
        description.textContent = project.todoList[i].description;
        dueDate.textContent = project.todoList[i].dueDate;
        priority.textContent = project.todoList[i].priority;
        notes.textContent = project.todoList[i].notes;
        
        addTask.textContent = "Add Task";
        removeBtn.textContent = "Delete";
        editBtn.textContent = "Edit";
        
        addTask.addEventListener("click", () => {
            addTaskFunction(card.id, project)
        })

        removeBtn.addEventListener("click", () => {
            removeTodoPopup(card.id)
        })

        editBtn.addEventListener("click", () => {
            editTodo(card.id)
        })

        cardContent.appendChild(title)
        cardContent.appendChild(description)
        cardContent.appendChild(dueDate)
        cardContent.appendChild(priority)
        cardContent.appendChild(notes)


        for (let j in project.todoList[i].tasks) {
            const taskContainer = document.createElement("div")
            taskContainer.className = "taskContainer"
            const taskInput = document.createElement("input")
            const taskLabel = document.createElement("label")
            taskInput.id = "task" + "T" + i + "N" + j;
            taskLabel.setAttribute("for", "task" + "T" + i + "N" + j) 
            taskInput.type = "checkbox"
            taskLabel.textContent = project.todoList[i].tasks[j].name
            if (project.todoList[i].tasks[j].completionStatus) {
                taskInput.checked = true
            }
            else {
                taskInput.checked = false
            }
            taskContainer.appendChild(taskLabel)
            taskContainer.appendChild(taskInput)
            cardContent.appendChild(taskContainer)
        }

        card.appendChild(cardContent)
        card.appendChild(addTask)
        card.appendChild(removeBtn)
        card.appendChild(editBtn)
        cardContainer.appendChild(card)

    }
    document.querySelector("#project").appendChild(cardContainer)
}

export default renderTodo