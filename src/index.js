import "./styles.css";
import Project from "./modules/project";
import renderProject from "./modules/renderProject"
import createProject from "./modules/createProject";
import renderDefault from "./modules/renderDefault";
import clearScreen from "./modules/clearScreen";

const createBtn = document.querySelector("#newProject")

const defaultProject = renderDefault();

let activeProject = defaultProject;





