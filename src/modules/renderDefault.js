import renderProject from "./renderProject";
import createProject from "./createProject";

const renderDefault = () => {
    const defaultProject = createProject("Example Project")

    defaultProject.createTodo("Example Todo", "This is your description", "today", "High Priority", "Examples Notes")

    renderProject(defaultProject)
}

export default renderDefault;

