import activeProject from "./activeProject";
import storageAvailable from "./storageValidation";
import renderProject from "./renderProject";
import renderDefault from "./renderDefault";

const renderInitial = () => {
    if (storageAvailable("localStorage")) {
        const storage = window["localStorage"]
        if (storage.getItem("projects")) {
            const loaded = JSON.parse(storage.getItem("projects"))
            activeProject.activeProject = loaded.activeProject
            activeProject.projects = loaded.projects
            renderProject(activeProject.getActiveProject())
        }

        else {
            activeProject.setActiveProject(renderDefault())
        }
    }
}

export default renderInitial