let colors = ["PeachPuff", "Khaki", "Gold", "Orange", "Tomato"];

let bodyColor;
let eyesColor;
let detailColor;
let detailColor2;

function setup() {
  createCanvas(600, 600);
  //background("#2F9599");
  //textAlign(CENTER, BOTTOM)

  randomIndex = floor(random(colors.length));
  bodyColor = colors[randomIndex];
  detailColor = colors[randomIndex];
  detailColor2 = colors[4];
  eyesColor = "Black";
}

function draw() {
  background("#2F9599");
  text("Click mouse to changle color", 225, 575);
  let randomIndex = floor(random(colors.length));
  if (mouseIsPressed) {
    randomIndex = floor(random(colors.length));

    bodyColor = colors[randomIndex];
    detailColor = colors[randomIndex];
  }
  push();
  drawCreature(mouseX, mouseY);
  pop();

  drawClouds(50, 75);
  drawClouds(400, -20);
  drawClouds(50, 275);
  drawClouds(-375, 175);
}

function drawCreature(x, y) {
  translate(x, y);
  drawFace(0, 0);
  drawEyes(-40, -30);
  drawDetail(0, 0);
  drawDetail2(0, 0);
}

function drawFace(x, y) {
  push();
  translate(x, y);

  fill(bodyColor);
  noStroke();
  ellipse(0, 0, 175, 175);
  stroke(0);
  strokeWeight(5);
  arc(0, 25.2, 70, 50, 2 * PI, PI);
  fill("lightPink");
  noStroke();
  ellipse(-50, 0, 20, 10);
  ellipse(+50, 0, 20, 10);
  pop();
}

function drawEyes(x, y) {
  push();
  translate(x, y);

  fill(eyesColor);
  ellipse(0, 0, 20, 25);
  ellipse(+78, 0, 20, 25);
  fill(255);
  ellipse(3, -4, 5, 10);
  ellipse(+81, -4, 5, 10);
  pop();
}

function drawDetail(x, y) {
  fill(detailColor);
  push();
  translate(x, y);
  noStroke();
  fill(detailColor);
  ellipse(-135, 0, 145, 20);
  ellipse(+135, 0, 145, 20);
  ellipse(0, -135, 20, 145);
  ellipse(0, +135, 20, 145);
  pop();
}

function drawDetail2(x, y) {
  fill(detailColor2);
  push();
  translate(x, y);
  noStroke();
  fill(detailColor2);
  push();
  rotate(PI / 3.5);
  ellipse(-165, 20, 164, 20);
  pop();
  push();
  rotate(PI / -3.5);
  ellipse(+165, 20, 164, 20);
  pop();
  push();
  rotate(PI / -3.5);
  ellipse(-165, -10, 164, 20);
  pop();
  push();
  rotate(PI / 3.5);
  ellipse(+165, -10, 164, 20);
  pop();
  pop();
}

function drawClouds(x, y) {
  translate(x, y);
  push();
  noStroke();
  fill("Lavender");
  rect(-10, -10, 80, 43);
  ellipse(-10, 15, 35, 35);
  ellipse(10, 0, 45, 45);
  ellipse(50, 0, 60, 60);
  ellipse(70, 12, 40, 40);
  pop();
}
