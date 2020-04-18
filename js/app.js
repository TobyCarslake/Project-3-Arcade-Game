// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 1;
    this.y = 50;
    //this.position = (this.x, this.y);
    //this.speed(15);    
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};
//test commit
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {
    this.sprite = 'images/char-boy.png';
    this.position = (this.x, this.y);
    this.x = 200;
    this.y = 370;
};
Player.prototype.update = function (dt){
};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(dt){
    console.log(dt);
    if(dt == 'left')
    this.x -= 100;
    if (dt == 'right')
    this.x += 100;
    if (dt == 'up')
    this.y -= 80;
    if (dt == 'down')
    this.y += 80;
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy()];
var player = new Player();
// TC add in collision function
//axis aligned bounding box mdn for collisions when not not colliding and when not coliding
// size of players bugs sized to 
// move up x pixels to keep the player sprite in the box

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
    console.log(e.keyCode);
    
});
// enum type to player object set to alive or dead
//let eKeyCode = player.handleInput(allowedKeys[e.keyCode]);
