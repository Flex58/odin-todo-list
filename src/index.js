import "./styles.css";
import renderCreateProject from "./modules/renderCreateProject";
import activeProject from "./modules/activeProject";
import loadProject from "./modules/loadProject";
import saveToStorage from "./modules/saveToStorage";
import renderInitial from "./modules/renderInitial";


const createBtn = document.querySelector("#newProject")
const loadBtn = document.querySelector("#loadProject")
const saveBtn = document.querySelector("#saveProject")
const active = activeProject
renderInitial();
console.log(activeProject.projects[0].name)


createBtn.addEventListener("click", () => {
    renderCreateProject();
})

loadBtn.addEventListener("click", () => {
    loadProject(active.projects);
})


saveBtn.addEventListener("click", () => {
    saveToStorage();
})







