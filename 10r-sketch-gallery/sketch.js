let page = 0;
let freq;
//for last page
let colors = ["#b3ffcd", "#e5c9ff", "#b3d6ff", "#ffd4c4", "#fff7c4", "#c9fffa"];
let buttons = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#a9aaeb");
  colorMode(HSB);
  textAlign(CENTER);

  //for last page
  /*
  for (let i = 0; i < colors.length; i++) {
    let x = random(width);
    let y = random(height);
    let dia = random(50, 100);
    let clr = colors[i];
    buttons.push(new Button(x, y, dia, clr));
  }
  */
  
  for (let i = 0; i < 30; i++) {
    let x = random(width);
    let y = random(height);
    let dia = random(50, 100);
    
    let randomIndex = floor(random(colors.length));
    let clr = colors[randomIndex];
    buttons.push(new Button(x, y, dia, clr));
  }
}

function draw() {
  if (page == 0) {
    drawPage0();
  } else if (page == 1) {
    drawPage1();
  } else if (page == 2) {
    drawPage2();
  } else if (page == 3) {
    drawPage3();
  }
}

function mousePressed() {
  // change the page
  page = page + 1;

  if (page > 3) {
    page = 3;
  }

  // based on the new page, you draw background once!
  if (page == 0) {
    //
  } else if (page == 1) {
    background("#a9aaeb");
  }
}

function drawPage0() {
  background("#fdffbf");
  fill("#a9aaeb");
  textFont("PlayfairDisplay");
  textSize(20);
  text(
    "feelings come and go like clouds in a windy sky",
    width / 2,
    height / 2
  );
  text("conscious breathing is my anchor", width / 2, height / 2 + 25);
  text(" - Thich Nhat Hanh", width / 2, height / 2 + 50);
  text(
    "click mouse to try each experience when ready",
    width / 2,
    height / 2 + 300
  );
}

function drawPage1() {
  freq = frameCount * 0.01;
  let dia = map(sin(freq), -1, 1, 0, 600);

  freq = frameCount * 0.02;
  let hue = map(sin(freq), -1, 1, 225, 90);

  noFill();
  strokeWeight(20);
  stroke(hue, 25, 100);
  circle(width / 2, height / 2, dia);

  noStroke();
  fill("#fdffbf");
  textFont("PlayfairDisplay");
  textSize(20);
  text("inhale as the circle expands", width / 2, height / 2 - 325);
  text("exhale as the circle contracts", width / 2, height / 2 + 325);
}

function drawPage2() {
  background("#b3ffcd");
  fill("#ffb8c5");
  textFont("PlayfairDisplay");
  textSize(20);
  text(
    "in these next moments release the urge to control",
    width / 2,
    height / 2
  );
  text("interact, experience, and stay grounded", width / 2, height / 2 + 25);
  text(
    "click mouse to try next experience when ready",
    width / 2,
    height / 2 + 300
  );
}

function drawPage3() {
  colorMode(RGB);
  background(255, 184, 197, 15);
  // background("#ffb0be");
  fill("#fffff");
  textFont("PlayfairDisplay");
  textSize(20);
  text("stay present", width / 2, height / 2);

  // update & display the objects
  for (let i = 0; i < buttons.length; i++) {
    let b = buttons[i]; // each object
    b.move();
    b.checkMouse();
    b.checkEdges();
    b.display();
  }
}

class Button {
  constructor(x, y, rad, clr) {
    this.x = x;
    this.y = y;
    this.xSpd = random(-0.5, 0.5);
    this.ySpd = random(-0.5, 0.5);
    this.rad = rad;
    this.color = clr;
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  checkMouse() {
    let distance = dist(this.x, this.y, mouseX, mouseY);
    if (distance < this.rad) {
      if (mouseIsPressed) {
        this.xSpd = random(-1.5, 1.5);
        this.ySpd = random(-1.5, 1.5);
      }
    } 
  }
  checkEdges() {
    if (this.x < 0 - this.rad) {
      this.x = width + this.rad;
    } else if (this.x > width + this.rad) {
      this.x = 0 - this.rad;
    }
    if (this.y < 0 - this.rad) {
      this.y = height + this.rad;
    } else if (this.y > height + this.rad) {
      this.y = 0 - this.rad;
    }
  }
  display() {
    push();
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.rad * 2);
    pop();
  }
}
