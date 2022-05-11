let dia = 15;
let selectedColor = "DarkGreen"; //https://www.w3schools.com/colors/colors_names.asp
let t = "Select color and create! Press the spacebar to clear.";

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("my-earth");
  background(0);
}

function draw() {
  // Changes brush color
  if (mouseIsPressed) {
    if (mouseX > 0 && mouseX < 50 && mouseY > 0 && mouseY < 50) {
      //selectedColor = "DarkGreen";
      selectedColor = color(0,100,0);
    } else if (mouseX > 0 && mouseX < 50 && mouseY > 50 && mouseY < 100) {
      //selectedColor = "SeaGreen";
      selectedColor = color(46,139,87);
    } else if (mouseX > 0 && mouseX < 50 && mouseY > 100 && mouseY < 150) {
      //selectedColor = "OliveDrab";
      selectedColor = color(107,142,35);
    }
  }
  if (mouseIsPressed) {
    let amount = 15;
    let r = red(selectedColor) + random(-1, 1) * amount;
    let g = green(selectedColor) + random(-1, 1) * amount;
    let b = blue(selectedColor) + random(-1, 1) * amount;
    
    push();
    translate(pmouseX, pmouseY);
    rotate(frameCount * 0.3); // ***
    scale(random(0.5, 1.5)); // ***
    noStroke();
    fill(r, g, b);
    ellipse(0, 0, dia * 0.8, dia);
    pop();
  }

  // Erasing effect
  if (keyIsPressed && key == " ") {
    background(0);
  }

  // Changes the brush size depending on location in canvas
  if (mouseX < 50) {
    dia = 15;
  } else if (mouseX < 100) {
    dia = 20;
  } else if (mouseX < 150) {
    dia = 30;
  } else if (mouseX < 200) {
    dia = 50;
  } else if (mouseX < 250) {
    dia = 60;
  } else if (mouseX < 300) {
    dia = 50;
  } else if (mouseX < 350) {
    dia = 40;
  } else if (mouseX < 400) {
    dia = 30;
  } else if (mouseX < 450) {
    dia = 20;
  } else if (mouseX < 500) {
    dia = 15;
  }

  // To show where to click and choose color
  stroke("Snow");
  fill("DarkGreen");
  rect(0, 0, 50, 50);

  fill("SeaGreen");
  rect(0, 50, 50, 50);

  fill("OliveDrab");
  rect(0, 100, 50, 50);

  stroke(0, 0, 0);
  fill("Snow");

  // Instructions
  text(t, 150, 10, 300, 80);
}
