import renderProject from "./renderProject";
import createProject from "./createProject";
import Task from "./task";

const renderDefault = () => {
    const defaultProject = createProject("Example Project")

    defaultProject.createTodo("Example Todo", "This is your description", "today", "High Priority", "Examples Notes", new Task("Example Task"))

    renderProject(defaultProject)
    return defaultProject;
}

export default renderDefault;

