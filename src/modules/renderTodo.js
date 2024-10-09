import editTodo from "./editTodo"
import removeTodoPopup from "./removeTodoPopup"

const renderTodo = (project) => {
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


        for (let j in project.todoList[i].tasks) {
            const taskInput = document.createElement("input")
            const taskLabel = document.createElement("label")
            taskInput.id = "task"
            taskLabel.for =" task"
            taskInput.type = "checkbox"
            taskLabel.textContent = project.todoList[i].tasks[j].name
            console.log(project.todoList[i].tasks[j].completionStatus)
            if (project.todoList[i].tasks[j].completionStatus) {
                taskInput.checked = true
            }
            else {
                taskInput.checked = false
            }
            card.appendChild(taskLabel)
            card.appendChild(taskInput)
        }

        card.appendChild(removeBtn)
        card.appendChild(editBtn)
        document.querySelector("#project").appendChild(card)

    }
}

export default renderTodo