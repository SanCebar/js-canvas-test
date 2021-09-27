// Circle Object
// Circle Object
export class Circle {
    constructor(x, y, radius, c, fill = "#f3f7f4") {
        this.x = x;
        this.y = y;
        this.dx = 7;
        this.dy = 7;
        this.radius = radius;
        this.fill = fill;
        this.c = c;

        this.draw = () => {
            if (this.c) {
                this.c.beginPath();
                this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                this.c.fillStyle = this.fill;
                this.c.fill();
                this.c.closePath();
            }
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
            this.x += -this.dx;

            this.draw();
        };

        this.moveRight = () => {
            if (this.x - this.radius > innerWidth) {
                return;
            }
            this.x += this.dx;

            this.draw();
        };

        this.moveUp = () => {
            if (this.y - this.radius < 0) {
                return;
            }
            this.y += -this.dy;

            this.draw();
        };

        this.moveDown = () => {
            if (this.y - this.radius > this.innerHeight) {
                this.y;
            }
            this.y += this.dy;

            this.draw();
        };
    }
}

export default {
    Circle
}