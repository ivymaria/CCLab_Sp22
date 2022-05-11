let increment = 0;

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent("my-fire");
  background("Black");
  rectMode(CENTER);
  angleMode(DEGREES);

  angle = 0;
  angleVel = 60.5; // ***
}

function draw() {
  x = increment * 0.1;
  y = 0;
  w = increment;
  h = 30;
  angle = angleVel * increment; //angle += angleVel;

  if (mouseIsPressed) {
    increment++;

    push();
    blendMode(ADD);
    translate(100, 400);
    rotate(angle);
    //stroke("OrangeRed");
    stroke(150, 50, 5);
    noFill();
    rect(x, y, w, h);
    pop();

    push();
    blendMode(ADD);
    translate(250, 250);
    rotate(angle * 3.5);
    stroke(255, 50, 5);
    //stroke("orange");
    noFill();
    rect(x, y, w, h);
    pop();

    push();
    blendMode(ADD);
    translate(375, 400);
    rotate(angle * 1.5);
    stroke(150, 50, 5);
    //stroke("FireBrick");
    noFill();
    rect(x, y, w, h);
    pop();

    push();
    blendMode(ADD);
    translate(100, 100);
    rotate(angle * 1.5);
    stroke(150, 50, 5);
    //stroke("FireBrick");
    noFill();
    rect(x, y, w, h);
    pop();

    push();
    blendMode(ADD);
    translate(375, 100);
    rotate(angle * 1.5);
    stroke(150, 50, 5);
    //stroke("FireBrick");
    noFill();
    rect(x, y, w, h);
    pop();
  }
}
