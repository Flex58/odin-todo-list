import storageAvailable from "./storageValidation";
import activeProject from "./activeProject";

const saveToStorage = () => {
    if (storageAvailable("localStorage")) {
        const storage = window["localStorage"]
        storage.setItem("projects", JSON.stringify(activeProject))
    }
}

export default saveToStorage;