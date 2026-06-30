// Bronnen: Vragen + uitleg: chatgpt
const button = document.querySelector(".theme-toggle");

button?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});