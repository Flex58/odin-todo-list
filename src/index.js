import "./styles.css";
import Project from "./modules/project";
import renderProject from "./modules/renderProject"
import createProject from "./modules/createProject";
import renderDefault from "./modules/renderDefault";
import clearScreen from "./modules/clearScreen";
import renderCreateProject from "./modules/renderCreateProject";
import activeProject from "./modules/activeProject";
import loadProject from "./modules/loadProject";


const createBtn = document.querySelector("#newProject")
const loadBtn = document.querySelector("#loadProject")
const active = activeProject
active.setActiveProject(renderDefault())


createBtn.addEventListener("click", () => {
    renderCreateProject();
})

loadBtn.addEventListener("click", () => {
    loadProject(active.projects);
})


const saveBtn = document.createElement("button")
saveBtn.textContent = "Save"
document.querySelector("#content").append(saveBtn)

saveBtn.addEventListener("click", () => {
    const storage = window["localStorage"]
    storage.setItem("test", JSON.stringify(activeProject))
    console.log(storage.getItem("test"))
})







