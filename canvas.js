const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

// Rectangle
// c.fillStyle = "#9193a5";
// c.fillRect(20, 20, 200, 100);
// c.fillStyle = "#bd4456";
// c.fillRect(80, 200, 250, 100);

// // Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "#f3f7f4"; // strokeStyle for changing color
// c.stroke();

// // Arc or Circle
// c.beginPath(); // use beginPath so strokes don't connect
// c.arc(300, 300, 30, Math.PI / 6, (Math.PI * 11) / 6, true);
// // c.strokeStyle = "#9a2a2a"
// c.stroke();

// // create multiple shapes with a loop
// for (let i = 0; i < 5; i++) {
//   c.beginPath(); // use beginPath so strokes don't connect
//   c.arc(300, 300, 30 + 10 * i, Math.PI / 6, (Math.PI * 11) / 6, false);
//   c.strokeStyle = "#9193a5";
//   c.stroke();
// }

// randomly generate circles
// for (let i = 0; i < 9; i++) {
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;

//   c.beginPath(); // use beginPath so strokes don't connect
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = "#f3f7f4";
//   c.stroke();
// }

// animate a circle
// let x = Math.random() * innerWidth;
// let y = Math.random() * innerHeight;
// let dx = 5; // horizontal velocity
// let dy = 5;
// let radius = 30;
// function animate() {
//   requestAnimationFrame(animate);
//   //clear entire window
//   c.clearRect(0, 0, innerWidth, innerHeight);

//   c.beginPath();
//   c.arc(x, y, radius, 0, Math.PI * 2, false);
//   c.strokeStyle = "#f3f7f4";
//   c.stroke();

//   if (x + radius > innerWidth || x - radius < 0) {
//       dx = -dx;
//   }
//   if (y + radius > innerHeight || y - radius < 0) {
//       dy = -dy;
//   }

//   // move circle
//   x += dx;
//   y += dy;
// };

// animate();

// animate multiple circles
// Create a JS object
// note the capital letter for the title
function Circle(x, y, radius, dx, dy) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = () => {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "#f3f7f4";
    c.stroke();
  };

  this.update = () => {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };

  this.moveLeft = () => {
      if (this.x - this.radius < 0) {
          return;
      }
      this.x += -this.dx

      this.draw();
  }

  this.moveRight = () => {
      if (this.x - this.radius > innerWidth) {
          return;
      }
      this.x += this.dx

      this.draw();
  }

  this.moveUp = () => {
      if (this.y - this.radius < 0) {
          return;
      }
      this.y += -this.dy

      this.draw();
  }

  this.moveDown = () => {
      if (this.y - this.radius > this.innerHeight) {
          this.y;
      }
      this.y += this.dy

      this.draw();
  }
}

// animate multiple cicles at once

let circleArr = [];
for (let i = 0; i < 100; i++) {
  let radius = 30;
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  let y = Math.random() * (innerHeight - radius * 2) + radius;
  let dx = Math.random() - 0.5;
  let dy = Math.random() - 0.5;
  circleArr.push(new Circle(x, y, radius, dx, dy));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circleArr.length; i++) {
    circleArr[i].update();
  }
}

animate(); 

/* 
let circle = new Circle(40, 40, 30, 8, 8);
circle.draw();
function animateWithKeydown(e) {
    // codes: "ArrowDown" "ArrowLeft" "ArrowRight" "Arrowup"
    if (e.code == "ArrowLeft") { 
        c.clearRect(0, 0, innerWidth, innerHeight);
        circle.moveLeft();
    }
    if (e.code == "ArrowRight") { 
        c.clearRect(0, 0, innerWidth, innerHeight);
        circle.moveRight();
    }
    if (e.code == "ArrowUp") { 
        c.clearRect(0, 0, innerWidth, innerHeight);
        circle.moveUp();
    }
    if (e.code == "ArrowDown") { 
        c.clearRect(0, 0, innerWidth, innerHeight);
        circle.moveDown();
    }
}
document.addEventListener("keydown", animateWithKeydown);
 */