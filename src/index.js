import "./styles.css";
import Project from "./modules/project";
import renderProject from "./modules/renderProject"
import createProject from "./modules/createProject";
import renderDefault from "./modules/renderDefault";
import clearScreen from "./modules/clearScreen";
import renderCreateProject from "./modules/renderCreateProject";
import activeProject from "./modules/activeProject";

const createBtn = document.querySelector("#newProject")
const active = activeProject
active.setActiveProject(renderDefault())

createBtn.addEventListener("click", () => {
    renderCreateProject();
})







