
/**
 * Skyla Trousdale
 * Free Composition
 */


let shapeMode;
let minSize;
let w;
let h; 
let spacing; 
let size; 
let centerX; 
let centerY; 

function setup() {
    w = 400;
    h = 400;
    createCanvas(w, h);
    noStroke();
    shapeMode = 0;
    minSize = 10
}

function draw() {
  background(random(245, 255));

  spacing = map(mouseX, 0, width, 30, 100); 
  size = map(mouseY, 0, height, 5, spacing * 0.9); 

  size = max(size, minSize); 

  for (let y = 0; y < height; y += spacing) {
    for (let x = 0; x < width; x += spacing) {
      centerX = x + spacing / 2;

      centerY = y + spacing / 2;

      // make shapes 
      if ((x + y) % (spacing * 2) === 0) {
        drawShape(centerX, centerY, size, shapeMode);
      } else {
        drawShape(centerX, centerY, size, (shapeMode + 1) % 2);
      }
    }
  }
}

function mousePressed() {
  shapeMode = (shapeMode + 1) % 2;
}

// call shapes
function drawShape(x, y, size, mode) {
  let grey = random(20, 80); 
  fill(grey);

  if (mode === 0) {
    ellipse(x, y, size);
  } else {
    rectMode(CENTER);
    rect(x, y, size, size);
  }
}
