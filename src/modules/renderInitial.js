import activeProject from "./activeProject";
import storageAvailable from "./storageValidation";
import loadProject from "./loadProject";
import renderDefault from "./renderDefault";

const renderInitial = () => {
    if (storageAvailable("localStorage")) {
        const storage = window["localStorage"]
        if (storage.getItem("projects")) {
            const loaded = JSON.parse(storage.getItem("projects"))
            activeProject.activeProject = loaded.activeProject
            activeProject.projects = loaded.projects
            loadProject(activeProject.projects)
        }

        else {
            activeProject.setActiveProject(renderDefault())
        }
    }
}

export default renderInitial