var myGamePiece;
var myObstacle;

function startGame() {
    myObstacle  = new component(100, 100, document.getElementById('secondimg'), 500, 100);
    myGamePiece = new component(80, 80, document.getElementById('firstimg'), 10, 10);      
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 600;
        this.canvas.height = 200;
        this.context = this.canvas.getContext("2d");
        document.getElementById("htmlgame").insertBefore(this.canvas, document.getElementById("htmlgame").childNodes[2]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
        alert("Congratulations! You parked the car in the garage succesfully");
    }
}

function component(width, height, img, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.drawImage(img, 0, 0, img.width, img.height, this.x, this.y, this.width, this.height);
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop+80) || (mytop > otherbottom-80) || (myright < otherleft+80) || (myleft > otherright-80)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    if (myGamePiece.crashWith(myObstacle)) {
        myGameArea.stop();
    } else {
        myGameArea.clear();
        myObstacle.update();
        myGamePiece.x += myGamePiece.speedX;
        myGamePiece.y += myGamePiece.speedY;    
        myGamePiece.update();
    }
}

function moveup() {
    myGamePiece.speedY = -4; 
}

function movedown() {
    myGamePiece.speedY = 4; 
}

function moveleft() {
    myGamePiece.speedX = -4; 
}

function moveright() {
    myGamePiece.speedX = 4; 
}

function clearmove() {
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}


//drag and drop
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  console.warn("You moved the image");
}
