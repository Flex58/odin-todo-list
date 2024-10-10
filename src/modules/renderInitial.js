import activeProject from "./activeProject";
import storageAvailable from "./storageValidation";
import loadProject from "./loadProject";
import renderDefault from "./renderDefault";
import Project from "./project";
import Task from "./task";

const renderInitial = () => {
    if (storageAvailable("localStorage")) {
        const storage = window["localStorage"]
        if (storage.getItem("projects")) {
            const loaded = JSON.parse(storage.getItem("projects"))
            for (let i in loaded.projects) {
                activeProject.projects.push(new Project("temp"))
                activeProject.projects[i].name = loaded.projects[i].name

                for (let j in loaded.projects[i].todoList) {
                    activeProject.projects[i].createTodo("temp", "temp", "temp", "temp", "temp", new Task("temp"))
                    activeProject.projects[i].todoList[j].title = loaded.projects[i].todoList[j].title
                    activeProject.projects[i].todoList[j].description = loaded.projects[i].todoList[j].description
                    activeProject.projects[i].todoList[j].dueDate = loaded.projects[i].todoList[j].dueDate
                    activeProject.projects[i].todoList[j].priority = loaded.projects[i].todoList[j].priority
                    activeProject.projects[i].todoList[j].notes = loaded.projects[i].todoList[j].notes

                    for (let k in loaded.projects[i].todoList[j].tasks) {
                        activeProject.projects[i].todoList[j].tasks.push(new Task("temp"))
                        activeProject.projects[i].todoList[j].tasks[k].name = loaded.projects[i].todoList[j].tasks[k].name
                        activeProject.projects[i].todoList[j].tasks[k].completionStatus = loaded.projects[i].todoList[j].tasks[k].completionStatus
                    }
                } 
            }
            loadProject(activeProject.projects)
        }

        else {
            activeProject.setActiveProject(renderDefault())
        }
    }
}

export default renderInitial