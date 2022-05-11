let increment = 0;

function setup() {
  let canvas = createCanvas(700, 700);
  canvas.parent("my-fire");
  background("Black");
  rectMode(CENTER);
  angleMode(DEGREES);

  angle = 0;
  angleVel = 60.3; // ***
}

function draw() {
  x = increment * 0.1;
  y = 0;
  w = increment;
  h = 30;
  angle = angleVel * increment; //angle += angleVel;

  fill(0, 0, 0)
  ellipse(5,5)

  if (mouseIsPressed) {
    increment++;

    push();
    blendMode(ADD);
    translate(100, 600);
    rotate(angle);
    //stroke("OrangeRed");
    stroke(150, 50, 5);
    noFill();
    rect(x, y, w, h);
    pop();

    push();
    blendMode(ADD);
    translate(350, 350);
    rotate(angle * 3.5);
    stroke(255, 50, 5);
    //stroke("orange");
    noFill();
    rect(x, y, w, h);
    pop();

    push();
    blendMode(ADD);
    translate(575, 600);
    rotate(angle);
    stroke(150, 50, 5);
    //stroke("FireBrick");
    noFill();
    rect(x, y, w, h);
    pop();

    push();
    blendMode(ADD);
    translate(100, 100);
    rotate(angle);
    stroke(150, 50, 5);
    //stroke("FireBrick");
    noFill();
    rect(x, y, w, h);
    pop();

    push();
    blendMode(ADD);
    translate(575, 100);
    rotate(angle);
    stroke(150, 50, 5);
    //stroke("FireBrick");
    noFill();
    rect(x, y, w, h);
    pop();
  }
}
