let bubbles = [];
function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent("my-water");

  for (let i = 0; i < 200; i++) {
    //bubbles[i] = new Bubble(random(width), 600);
    bubbles.push( new Bubble(random(width), 600) );
  }
}

function draw() {
  background(3, 4, 23, 50);
  
  if (mouseIsPressed) {
    bubbles.push( new Bubble(random(width), 600) );  
  }
  
  for (let i = 0; i < bubbles.length; i++) {
    let b = bubbles[i];
    b.move();
    b.display();
  }
}

class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xSpd = 0; //random(-3, 3);
    this.ySpd = random(-1, -0.5);
    this.dia = random(0, 30);
    this.r = random(255);
    this.g = random(20);
    this.b = random(125);
    this.freq = random(0.01, 0.05); // ***
    this.amp = 0.3;
  }
  move() {
    this.xSpd = sin(frameCount*this.freq) * this.amp;
    this.x += this.xSpd;
    this.y += this.ySpd;
  }

  display() {
    stroke(0, this.g, this.b);
    fill(0, 0, this.b);
    circle(this.x, this.y, this.dia);
  }
}
