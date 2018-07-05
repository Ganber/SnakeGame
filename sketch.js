var snake;
var scl = 20;
var food;
var score = 0;
var player = true;

// TODO: move back
//       finish the game

function setup() {

    var aiButton = createButton("AI");
    aiButton.mousePressed(onClickAIButton);

    var playerButton = createButton("Player");
    playerButton.mousePressed(onClickPlayerButton);

    createCanvas(600, 600);
    snake = new Snake();
    frameRate(15);

    pickLoctaion();

    var copyright = createDiv("© Eran Atia");
    copyright.style('text-align', 'right');
}

function pickLoctaion() {

    var cols = floor(width / scl);
    var rows = floor(height / scl);

    var colSelect = floor(random(cols));
    var rowSelect = floor(random(rows));

    if (colSelect === snake.y || rowSelect === snake.x){
        colSelect = floor(random(cols));
        rowSelect = floor(random(rows));
    }

    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function draw() {

    background(30);

    var str = "Score: " + score;
    textSize(20);
    fill(255);
    text(str, 10, 20);

    if (snake.eat(food)){
        score++;
        pickLoctaion();
    }

    snake.death();
    snake.update();
    snake.show();

    fill(255, 0, 50);
    rect(food.x, food.y, scl, scl);
}

function keyPressed() {
    
    if (keyCode === UP_ARROW){
        snake.direction(0, -1);
    } 
    else if (keyCode === DOWN_ARROW){
        snake.direction(0, 1);
    } 
    else if (keyCode === RIGHT_ARROW){
        snake.direction(1, 0);
    } 
    else if (keyCode === LEFT_ARROW) {
        snake.direction(-1, 0);
    }
    // restart game (SPACE key)
    else if (keyCode === 32) {
        snake.resetGame();
        loop();
    }
}

function onClickAIButton() {
    player = false;
}

function onClickPlayerButton() {
    player = true;
}