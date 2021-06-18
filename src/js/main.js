import _ from 'lodash';
import {ctx, Particle} from './particle.js';

let particlesTab;

// Initialize all particles
const init = () => {

    particlesTab = [];

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

// Set animation for particles
const animation = () => {
    requestAnimationFrame(animation);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    
    for(let i = 0; i < particlesTab.length; i++){
        particlesTab[i].update();
    }
}

init();
animation()

// Lauch iniatialization and animation for resize's event
const resize = () => {
    init();
    animation();
}

let doIt;
window.addEventListener('resize', () => {
    clearTimeout(doIt);
    doIt = setTimeout(resize, 100);
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
})