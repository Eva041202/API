const canvas = document.getElementById("confetti");

const confetti = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

const img = new Image();
img.src = "/media/confetti.png";

export function shootConfetti(x, y) {
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: x + (Math.random() - 0.5) * 40,
            y: y,
            vx: (Math.random() - 0.5) * 4,
            vy: Math.random() * 2 + 1,
            size: 40,
            rotation: Math.random() * 360,
        });
    }
}

function animate() {
    confetti.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, index) => {
        p.x += p.vx;
        p.y -= p.vy;

        confetti.save();
        confetti.translate(p.x, p.y);
        confetti.rotate(p.rotation * Math.PI / 180);

        confetti.drawImage(img, -p.size / 2, -p.size / 2, p.size, p.size);

        confetti.restore();

        //Verwijderen als deze uit beeld is
        if (p.y < -50) {
            particles.splice(index, 1);
        }
    });

requestAnimationFrame(animate);
}

img.onload = animate;