function activeProjectObj() {
    this.activeProject;

    this.setActiveProject = (newActive) => {
        return this.activeProject = newActive;        
    }

    this.getActiveProject = () => {
        return this.activeProject;
    }

};

const activeProject = new activeProjectObj()
export default activeProject;