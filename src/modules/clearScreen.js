const clearScreen = () => {
    const content = document.querySelector("#content");
    while (content.hasChildNodes()) {
        content.removeChild(content.firstChild)
    }
}
export default clearScreen;