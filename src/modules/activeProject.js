function activeProjectObj() {
    this.activeProject;
    this.projects = [];
    
    this.setActiveProject = (newActive) => {
        if (!this.projects.includes(newActive)){
            this.projects.push(newActive) 
        }
        return this.activeProject = newActive;
    }

    this.getActiveProject = () => {
        return this.activeProject;
    }
};

const activeProject = new activeProjectObj()
export default activeProject;