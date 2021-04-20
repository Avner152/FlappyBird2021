const obstaclesArray = [];
var pipeup = new Image();
pipeup.src = "images/pipeup.png";

var pipedown = new Image();
pipedown.src = "images/pipedown.png";

var coins = document.getElementById('coins');


var obstacleheight = 300;

class Obstacle {
    constructor() {
        this.top = parseInt((Math.random() * canvas.height / 5) + 90);
        this.bottom = parseInt((Math.random() * 50) + 90);
        this.x = canvas.width;
        this.width = 20;
    }

    draw() {
        // bottom up ->
        context.drawImage(pipeup, this.x, canvas.height - this.top, 50, this.top);
        // Top down ->
        context.drawImage(pipedown, this.x, 0, 50, this.bottom);

    }

    update() {
        this.x -= game_speed;
        this.draw();
    }
}

function obstaclesHandler() {

    if (frame % 70 === 0) {
        obstaclesArray.unshift(new Obstacle);
    }
    for (let i = 0; i < obstaclesArray.length; i++) {
        obstaclesArray[i].update();

        if ((obstaclesArray[i].x >= b_player.x + 60 && obstaclesArray[i].x <= b_player.x + 100) &&
            (obstaclesArray[i].bottom >= my_player.y ||
                (canvas.height - obstaclesArray[i].top - 20) <= my_player.y)) {

            alert("Game Over");
            obstaclesArray[i].x -= 50;
            location.href = "index.html";

        } else if (b_player.x == obstaclesArray[i].x - 100) {
            coins.play();
        }
    }

    if (obstaclesArray.length > 20) {
        obstaclesArray.pop(obstaclesArray[0]);
    }
}