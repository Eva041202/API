import { shootConfetti } from "../java/confetti";

document.querySelectorAll(".navigation a, .navigation button, .back-button").forEach(item => {
    item.addEventListener("mouseenter", () => {
        const rect = item.getBoundingClientRect();

        shootConfetti(rect.left + rect.width / 2, rect.top);
    });
});