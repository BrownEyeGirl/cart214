/**
 
 * 
 * 
 */

"use strict";

/**
*/
let h; 
let w; 

let col = {
    r: 255, 
    g: 55, 
    b: 0
}

function setup() {

    w = 600; 
    h = 400; 
    createCanvas(w, h);
    background(0);

}


/**
 * Draw symetrical circles (reflected on y)
*/
function draw() {
    reflectiveCircles(); 

}


function reflectiveCircles() {
    push();
    col.r = map(mouseX, 0, w/3, 0, 255); // maps mouseX within range (0, w) to (0,255) 
    col.g = map(mouseX, w/3, 400, 255, 0); // maps mouseX within range (0, w) to (0,255)
   // col.b = map(mouseX, 2(w/3), w, 0, 255); // maps mouseX within range (0, w) to (0,255)
    stroke(col.r, col.g, col.b);
    fill(0);
    ellipse(mouseX, mouseY, 64, 64); // mouse circles
    ellipse(w-mouseX, mouseY, 64, 64); // reflective circles 
    pop();
}