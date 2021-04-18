// tryout
var b_player = new Image();
b_player.src = "images/player.png";


class Player {
    constructor() {
        this.x = 50;
        this.y = 200;
        this.y_velocity = 0;
        this.width = 60;
        this.height = 30;
        this.weight = 1;
    }

    update() {
        if (this.y > canvas.height - this.height) {
            this.y = canvas.height - this.height;
            this.y_velocity = 0;
        } else {
            this.y_velocity += this.weight;
            this.y_velocity *= 0.9;
            this.y += this.y_velocity;
        }

        if (this.y < 0) {
            this.y = 0;
            this.y_velocity = 0
        }

        if (spacePressed) this.flap();
    }

    draw() {
        context.drawImage(b_player, this.x, this.y, this.width, this.height);

    }


    flap() {
        this.y_velocity -= 2;
    }
}
const my_player = new Player();