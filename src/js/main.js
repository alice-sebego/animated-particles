//import * as particle from "./particle.js";

const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerheight;
let particlesTab;

class Particle{

    constructor(x, y, directionX, directionY, size, color){
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update(){
        if(this.x + this.size > canvas.width || this.x - this.size < 0){
            this.directionX = -this.directionX;
        }
        if(this.y + this.size > canvas.height || this.y - this.size < 0){
            this.directionY = -this.directionY;
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw()
    }
    
}

const circle1 = new Particle(300, 300, 50, 50, 100, "red");
circle1.draw();

function init(){

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

function animation(){
    requestAnimationFrame(animation);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    
    for(let i = 0; i < particlesTab.length; i++){
        particlesTab[i].update();
    }
}


init();
animation()
console.log(particlesTab)

function resize(){
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