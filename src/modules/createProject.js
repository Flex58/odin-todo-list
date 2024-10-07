import Project from "./project"

const createProject = (name) => {
    return new Project(name);
}

export default createProject;