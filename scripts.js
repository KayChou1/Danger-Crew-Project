// get access to the canvas, specfically the "context"
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext("2d")

// define a enemy char
let enemy1 = {Height: 10,Width: 10,X: 790,Y:  390,}
let enemy2 = {Height: 10,Width: 10,X: 0,Y:  0,}
let enemy3 = {Height: 10,Width: 10,X: 0,Y:  390,}
let enemy4 = {Height: 10,Width: 10,X: 790,Y:  0,}

let eneimies = [enemy1, enemy2, enemy3, enemy4];

// define a char
let charHeight = 10;
let charWidth = 10;
let charX = canvas.width/2;
let charY = canvas.height/2;
// declare that buttons ARENT being pressed yet
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
// add event listeners which look for key presses
document.addEventListener('keydown', keyDownHandler)
document.addEventListener('keyup', keyUpHandler)
// define functions to handle key up & down


function keyDownHandler(e){
 if (e.key == 'Right' || e.key == "ArrowRight"){
     rightPressed = true;
 } else if(e.key == "Left" || e.key == "ArrowLeft"){
    leftPressed = true;
} else if(e.key == "Up" || e.key == "ArrowUp"){
   upPressed = true;
} else if(e.key == "Down" || e.key == "ArrowDown"){
        downPressed = true;
}
}  


function keyUpHandler(e){
    if (e.key == 'Right' || e.key == "ArrowRight"){
        rightPressed = false;
    } else if(e.key == 'Left' || e.key == "ArrowLeft"){
       leftPressed = false;
    }  else if(e.key == "Up" || e.key == "ArrowUp"){
        upPressed = false;
   } else if(e.key == "Down" || e.key == "ArrowDown"){
       downPressed = false;
   }
   
   }

// create our character
function drawChar(){ 
    ctx.beginPath();
    ctx.rect(charX, charY, charHeight, charWidth);
    ctx.fillStyle = '#88D7FF';
    ctx.fill();
    ctx.closePath();

}

// create our character
function drawEnemy(){ 
    for (let i = 0; i < eneimies.length; i++) {
        let enemy = eneimies[i];
          ctx.beginPath();
        ctx.rect(enemy['X'], enemy['Y'], enemy['Height'], enemy['Width']);
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.closePath();
    }
  

}


// create our character
function drawEnemy1(){ 
    ctx.beginPath();
    ctx.rect(enemy2.X, enemy2.Y, enemy2.Height, enemy2.Width);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();

}

function thing(){

}

// create a function which will run every frame of the game, this is where we will call other functions 
function drawAll(){
     // Since stuff on the cavas is changing, we need to clear the canvus and re-draw the canvas every frame
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // re-draw our character & sprites
    thing();
    drawChar();
    drawEnemy();
    drawEnemy1();
    // check for impact
     // if we press an arrow key and the char is within the canvas dimensions, move apropriately
    if(rightPressed){
        charX += 10;
    } else if (leftPressed){
        charX -= 10;
    } else if(upPressed){
        charY -= 10;
    } else if (downPressed){
        charY += 10;
    } 
}


// calling a JavaScript library function which recalls another function every number of ms
setInterval(drawAll, 30);
console.log(ctx);
