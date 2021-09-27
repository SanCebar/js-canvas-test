import Shapes, {Circle} from './shapes.js';


// Initial Setup
const canvas = document.querySelector("canvas");
console.log("Connected to collision.js")
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Variables
let mouse = {
    x: innerWidth/2,
    y: innerHeight/2
};

// Event Listeners
document.addEventListener("keypress", (e) => {
    newCircle(e);
});

document.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

document.addEventListener("resize", () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
})

// Util Functions
const newCircle = (e) => {
    if (e.code == "Enter") {
        let radius = 30;
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let fill = "#f3f7f4";
        let circle = new Circle(x, y, radius, c, fill);
        circle.draw();
    }
};

function getDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1; 

    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

// Implementation
let circle1;
let circle2;
function init() {
    circle1 = new Circle(300, 300, 100, c);
    circle2 = new Circle(undefined, undefined, 30, c, "red");
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    
    circle1.draw();
    circle2.x = mouse.x;
    circle2.y = mouse.y;
    circle2.update();

    // if distance between two points is less than combined value of both circles radii trigger event
    if(getDistance(circle1.x, circle1.y, circle2.x, circle2.y) < circle1.radius + circle2.radius) {
        circle1.fill = "black"
    } else {
        circle1.fill = "#fff"
    }

    // console.log(getDistance(circle1.x, circle1.y, circle2.x, circle2.y));
}

// Run the program
init();
animate();
