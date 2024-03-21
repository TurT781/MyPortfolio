let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Reviens 😞";
})
window.addEventListener('focus', () => {
    document.title = docTitle;
})