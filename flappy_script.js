// Canvas Variables
const canvas = document.getElementById('game_canvas');
const context = canvas.getContext('2d');
var scores = document.getElementById("score");

// var muteIcon = new Image();
// muteIcon.src = "unmute.png";

var counter = 0;
canvas.width = 600;
canvas.height = 400;

var song;
let spacePressed = false;
let frame = 0;
let score = 0;
let game_speed = 6;


onStart();


// Score "timer" //
setInterval(function() {
    counter++;
    scores.innerHTML = "Score: " + counter;
}, 50);

var tracker = 1;

function change_icon() {
    var image = document.getElementById('sound_option');

    if (tracker == 0) {
        song.play();
        image.src = "images/unmute.png";
        tracker = 1;
    } else {
        image.src = "images/mute.png";
        tracker = 0;
        song.pause();
    }
}

function onStart() {
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
    frame++;


    requestAnimationFrame(animate);
}


// Buttons to play //
window.addEventListener('keydown', function(e) {
    if (e.key === 'w' || e.key === 'W' || e.key === '\'' || e.keyCode == 38) spacePressed = true;
});
window.addEventListener('keyup', function(e) {
    if (e.key === 'w' || e.key === 'W' || e.key === '\'' || e.keyCode == 38) spacePressed = false;
});