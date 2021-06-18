import Particle from "./particle.js";

let particlesTab = [];

const circle1 = new Particle(300, 300, 50, 50, 100, "red");
circle1.draw();

const init = () => {
    for(let i = 0; i < 100; i++){
        let size = Math.random() + 0.01 * 20;
        let x = Math.random() * (window.innerWidth - size * 2);
        let y = Math.random() * (window.innerHeight - size * 2);
        let directionX = (Math.random() * 0.4) - 0.2;
        let directionY = (Math.random() * 0.4) - 0.2;
        let color = "white";

        particlesTab.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

init();
console.log(particlesTab)