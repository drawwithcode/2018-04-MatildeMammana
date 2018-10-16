function preload() {
  // put preload code here
}

var balloons = [];
var img;
var img2;
var img3;
var img4;
var t = 0;




function setup() {

  createCanvas(windowWidth, windowHeight);

  img = loadImage("balloon.png");
  img2 = loadImage("cloud.png");
  img3 = loadImage("cloud2.png");
  img4 = loadImage("cloud3.png");


  var balloonNumber = 5;

  for (var i = 0; i < balloonNumber; i++) {
    var myBalloon = new Balloon(random(0, width), random(0, height), 10);

    myBalloon.speed = random(1, 12)
    balloons.push(myBalloon);
  }
}

function mousePressed() {

  for (var j = 0; j < balloons.length; j++) {
    if (balloons[j].clicked()) {
      balloons.splice(j, 1);
      t = t + 1;
    }
  }
}

function draw() {
  background(66, 165, 245);
  image(img2, 50, 70);
  image(img2, 1000, 300);
  image(img3, 500, 100);
  image(img4, 50, 400);





  for (var j = 0; j < balloons.length; j++) {
    balloons[j].move();
    balloons[j].display();
  }

  if (t < 5) {
    fill('white');
    textSize(25);
    text('Click to pop the balloons', 50, 50);
  } else {
    fill('red')
    textSize(50)
    textAlign(CENTER)
    text('You win!', width / 2, height / 2);
  }
}


function Balloon(_x, _y) {
  this.x = _x
  this.y = _y
  this.speed = 20;


  var yDir = 1;
  var xDir = 1;

  this.display = function() {
    image(img, this.x, this.y)
  }

  this.move = function() {
    this.x += this.speed * xDir;
    this.y += this.speed * yDir;

    if (this.y > height || this.y < 0) {
      yDir = yDir * -1;
    }
    if (this.x > width || this.x < 0) {
      xDir = xDir * -1;
    }
  }

  this.clicked = function() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < 150) {
      return true;
    } else {
      return false;
    }
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
