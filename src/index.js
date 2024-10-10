import "./styles.css";
import Project from "./modules/project";
import renderProject from "./modules/renderProject"
import createProject from "./modules/createProject";
import renderDefault from "./modules/renderDefault";
import clearScreen from "./modules/clearScreen";
import renderCreateProject from "./modules/renderCreateProject";
import activeProject from "./modules/activeProject";
import loadProject from "./modules/loadProject";
import saveToStorage from "./modules/saveToStorage";
import renderInitial from "./modules/renderInitial";


const createBtn = document.querySelector("#newProject")
const loadBtn = document.querySelector("#loadProject")
const active = activeProject
renderInitial();


createBtn.addEventListener("click", () => {
    renderCreateProject();
})

loadBtn.addEventListener("click", () => {
    loadProject(active.projects);
})


const saveBtn = document.querySelector("#saveProject")

saveBtn.addEventListener("click", () => {
    saveToStorage();
})







