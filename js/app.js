
// Enemies our player must avoid
var Enemy = function(sprite,x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.speed = speed;
     
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
//checks bug is inside window if it is, it sets its position to = its speed * dt. If not draws bug back where it started
Enemy.prototype.update = function(dt) {
    if (this.x <= 500)
    this.x = this.x + this.speed * dt;
    if (this.x > 500)
    this.x = -100;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;
};

//block {} if statement to execute more than one statement!!!!
//collison alert - calls respawn function
function ouch() {
    alert("You were squashed by a bug!");
    respawn();
}

// respawns player back to middle bottom tile - this is called from functions: ouch, win condition,
function respawn() {
    player.y = 400;
    player.x = 200;
}

//collision function and updater of bugs and player positions. If collison = true calls ouch function.
//Uses calculate hypotenuse https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
Player.prototype.update = function (dt){
    for (let eachBug of allEnemies) {
        let distanceX = this.x - eachBug.x - 15; //player x position - 
        let distanceY = this.y - eachBug.y - 20;
        let distanceTot = Math.sqrt (distanceX * distanceX + distanceY * distanceY);
        console.log(distanceX, distanceY, distanceTot);
        // checks distance between player and each bug if collision calls ouch function after 1ms. Timer function runs so that canvas can update the player position and then call the ouch function.
        if (distanceTot < 60) {
            setTimeout(function(){
                ouch();
            }, 1);
        }
    }
    //win condtion - runs when the player reaches the river tile at y = -15. Timer function lets the player sprite get redrawn before the alert is triggered.
    if (this.y < -14) {
        setTimeout(function(){
            alert("You won, good job. Click OK to restart.");
            respawn();
            }, 1); 
    }
   
    //checks where location of player is, if outside of box calls respawn function to reset player back to start position
    if (this.x < 0 || this.x > 400 || this.y > 400){
        respawn();
    }
};
//draws player on canvas
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
};

// takes keypress codes and sets player x and y position to be redrawn based on which key has been pressed
Player.prototype.handleInput = function(dt){
     
        if(dt == 'left')
        this.x -= 100;
        if (dt == 'right')
        this.x += 100;
        if (dt == 'up')
        this.y -= 83;
        if (dt == 'down')
        this.y += 83;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy('images/enemy-bug.png',1, 70, 32), new Enemy('images/enemy-bug.png',1, 70, 70), new Enemy('images/enemy-bug.png',-99, 150, 28), new Enemy('images/enemy-bug.png',1, 220, 56), new Enemy('images/enemy-bug.png',1, 220, 130)];
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});