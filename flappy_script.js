// Canvas Variables
const canvas = document.getElementById('game_canvas');
const context = canvas.getContext('2d');
var scores = document.getElementById("score");
var countDown = document.getElementById('countdown');
var song = document.getElementById('blazerrail');
var readySetGo = document.getElementById('readySetGo');
var image = document.getElementById('sound_option');

var counter = 0;
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let frame = 0;
let score = 0;
let game_speed = 5;
let cooldown = parseInt(countDown.innerHTML);
let letsGo = 0;
let tracker = 1;

onCreate();

function onCreate() {

    playSong();

    let x = setInterval(function() {
            if (cooldown > 1)
                countDown.innerHTML = --cooldown + "";
            else if (cooldown == 1) {
                countDown.innerHTML = "Go!!!";
                cooldown--;
            } else {
                countDown.innerHTML = "";
                clearInterval(x);
                onStart();
            }
        },
        1300);
}


function playSong() {
    readySetGo.play();
}


function onStart() {

    // Score "timer" //
    setInterval(function() {

        counter++;
        scores.innerHTML = "Score: " + counter;
    }, 50);

    if (song == null)
        song = new Audio("sounds/blazerrail.wav");
    song.play();

    animate();
}

// Animation Controller // 
function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    my_player.update();
    my_player.draw();

    obstaclesHandler();
    frame += parseInt(1 + (Math.random() * 3));

    context.drawImage(image, canvas.width - 40, canvas.height - 30, 40, 30);

    image.addEventListener("click", function() {
        if (tracker == 0) {
            song.play();
            image.src = "images/unmute.png";
            tracker = 1;
        } else {
            image.src = "images/mute.png";
            tracker = 0;
            song.pause();
        }

    });

    requestAnimationFrame(animate);
}


// Buttons to play //
window.addEventListener('keydown', function(e) {
    if (e.key === 'w' || e.key === 'W' || e.key === '\'' || e.keyCode == 38) spacePressed = true;
});
window.addEventListener('keyup', function(e) {
    if (e.key === 'w' || e.key === 'W' || e.key === '\'' || e.keyCode == 38) spacePressed = false;
});