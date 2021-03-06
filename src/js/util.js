/**
 * Switch mode's theme between dark and light
 * @param {Object} window 
 * @param {Object} localStorage 
 * @param {HTMLBodyElement} body 
 * @param {HTMLDivElement} switchElement 
 */
 export const handleMode = (window, localStorage, body, switchElement) => {

    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
        
    let currentTheme = localStorage.getItem("theme");
    currentTheme = "dark";
        
    if (currentTheme == "dark") {
    body.classList.toggle("dark-theme");
    } else if (currentTheme == "light") {
    body.classList.toggle("light-theme");
    }

    switchElement.addEventListener("change", () => {
    let theme;
    if (prefersDarkScheme.matches) {
        body.classList.toggle("light-theme");
        theme = body.classList.contains("light-theme")
        ? "light"
        : "dark";
    } else {
        body.classList.toggle("dark-theme");
        theme = body.classList.contains("dark-theme")
        ? "dark"
        : "light";
    }

    localStorage.setItem("theme", theme);
    });

}

/**
 * Add target and tabindex attributes for each external link
 * @param {HTMLCollection} elementsCollection 
 */
export const setAttributesLink = (elementsCollection) =>{
    elementsCollection.forEach( link => {
        link.setAttribute("target", "_blank");
        link.setAttribute("tabindex", "0");
   });
}