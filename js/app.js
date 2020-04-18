//TODO remove console.log from Player.prototype.handleInput
//TODO set up win condition function
//

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
//checks bug is inside window if it is it sets its position to = its speed * dt. If not draws bug back where it started
Enemy.prototype.update = function(dt) {
    if (this.x <= 500)
    this.x = this.x + this.speed * dt;
    if (this.x > 500)
    this.x = -100; 

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
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
//checks where location of player is if outside of box resets back to start position
Player.prototype.update = function (dt){

if (this.y < -14) {
    console.log('win' + this.y);
    //main();
}
    for (let enemy of allEnemies) {
        let distanceX = this.x - enemy.x - 15;
        let distanceY = this.y - enemy.y - 20;
        let distanceTot = Math.sqrt (distanceX * distanceX + distanceY * distanceY);
            
        if (distanceTot < 60) {
            
            console.log('hit');
        }
    }
    
    
   

    if (this.x < 0 || this.x > 400 || this.y < -15 || this.y > 400){
        this.y = 400;
        this.x = 200;
    }
};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(dt){
     
        if(dt == 'left')
        this.x -= 100;
        if (dt == 'right')
        this.x += 100;
        if (dt == 'up')
        this.y -= 83;
        if (dt == 'down')
        this.y += 83;
        console.log(this.x, this.y);
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy('images/enemy-bug.png',1, 70, 32), new Enemy('images/enemy-bug.png',1, 70, 70), new Enemy('images/enemy-bug.png',-99, 150, 28), new Enemy('images/enemy-bug.png',1, 220, 56), new Enemy('images/enemy-bug.png',1, 220, 130)];
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
    
    
});