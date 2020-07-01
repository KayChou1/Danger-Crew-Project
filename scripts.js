// get access to the canvas, specfically the "context"
//import * as  url from "./Assets/8BitKirby"ls

let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext("2d");
let img = new Image();
img.src = "./Assets/8BitKirby.png"
 
// define a enemy char
let enemy1 = {name:"enemy1",Height: 30,Width: 30,X: 770,Y:  370,}
let enemy2 = {name:"enemy2",Height: 30,Width: 30,X: 0,Y:  0,}
let enemy3 = {name:"enemy3",Height: 30,Width: 30,X: 0,Y:  370,}
let enemy4 = {name:"enemy4",Height: 30,Width: 30,X: 770,Y:  0,}

let eneimies = [enemy1, enemy2, enemy3, enemy4];

// define a char
let char = {name:"char",Height: 30, Width: 30, X: canvas.width/2 , Y: canvas.height/2, moveRight: true, moveLeft: true, moveUp: true, moveDown: true};

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
    ctx.drawImage(img, char.X,char.Y, char.Width,char.Height);
    //ctx.rect(char.X, char.Y, char.Height, char.Width);
    //ctx.fillStyle = '#88D7FF';
    //ctx.fill();
    ctx.closePath();

}

// create our character
function drawAllEnemy(){ 
    for (let i = 0; i < eneimies.length; i++) {
        let enemy = eneimies[i];
        enemy.img = new Image();
        enemy.img.src = "./Assets/mushroom.png";
         ctx.beginPath();
        //ctx.rect(enemy['X'], enemy['Y'], enemy['Height'], enemy['Width']);
        ctx.drawImage(enemy.img, enemy['X'], enemy['Y'], enemy['Height'], enemy['Width']);
        //ctx.fillStyle = 'black';
        //ctx.fill();
        ctx.closePath();
    }
}


//delclare function
// iterate over enemys
//log their borders (top right bottom left)
function battle(){
 for (let i = 0; i < eneimies.length; i++) {
    let enemy = eneimies[i];

    let enemyLeft = enemy['X'] 
    let enemyBottom =  enemy['Y'] + enemy["Height"]
    let enemyRight = enemy['X'] + enemy["Width"]
    let enemyTop = enemy['Y']

    let charRight = char.X + char.Width;
    let charLeft = char.X;
    let charBottom = char.Y + char.Height;
    let charTop = char.Y;

   
    
    if(charRight === enemyLeft && charBottom === enemyBottom){
        char.moveRight = false;
            console.log('contact')
    }  else if (charLeft === enemyRight && charBottom === enemyBottom){
        char.moveLeft = false;
            console.log('contact')
    }   else if(charTop === enemyBottom && charLeft === enemyLeft ){
        char.moveUp = false;
            console.log('contact')
    }    else if ( charBottom === enemyTop && charLeft === enemyLeft ){
        char.moveDown = false;
            console.log('contact')
    }; 

    char.Y == enemy.Y - enemy.height &&
    char.X + char.width >= enemy.X &&
    char.X <= enemy.width + enemy.X





    // if(charRight === enemyLeft && charBottom === enemyBottom){
    //     char.moveRight = false;
    //         console.log('contact')
    // }  else if (charLeft === enemyRight && charBottom === enemyBottom){
    //     char.moveLeft = false;
    //         console.log('contact')
    // }   else if(charTop === enemyBottom && charLeft === enemyLeft ){
    //     char.moveUp = false;
    //         console.log('contact')
    // }    else if ( charBottom === enemyTop && charLeft === enemyLeft ){
    //     char.moveDown = false;
    //         console.log('contact')
    // }; 







    //check if our char right === left, char left === right, char top === bottom, charbottom === top

 } 

}

function movement(){
  
    if(char.moveRight === true && ( rightPressed && (char.X < canvas.width - char.Width))){
        char.X += 10;
    } else if (char.moveLeft === true && (leftPressed && (char.X > 0))){
        char.X -= 10;
    } else if(char.moveUp === true && (upPressed && (char.Y > 0))){
        char.Y -= 10;
    } else if (char.moveDown === true && (downPressed && (char.Y < canvas.height - char.Height))){
        char.Y += 10;
    } 
    char.moveRight = true;
    char.moveLeft = true;
    char.moveUp = true;
    char.moveDown = true;
}




// create a function which will run every frame of the game, this is where we will call other functions 
function drawAll(){
     // Since stuff on the cavas is changing, we need to clear the canvus and re-draw the canvas every frame
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // re-draw our character & sprites
    battle();
    drawChar();
    drawAllEnemy();
    movement();
    // check for impact
     // if we press an arrow key and the char is within the canvas dimensions, move apropriately
   
}
  
// calling a JavaScript library function which recalls another function every number of ms
setInterval(drawAll, 30);
console.log(ctx);


