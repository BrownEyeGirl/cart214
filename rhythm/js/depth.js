/**
 * Tension
 * Skyla Trousdale 
 * 
 * Graphic element: Circles
 */

"use strict";

/**
 * Sets up canvas
*/
let h; 
let w; 

let r1 = 150;
let r2 = 300;
let n = 150;

let col = {
    r: 0, 
    g: 255, 
    b: 0
}

function setup() {
    w = 600; 
    h = 600; 
    createCanvas(w, h);
    background(255);

}


/**
 * Draw symetrical circles (reflected on y)
*/
function draw() {
    radialLines();
}


function radialLines() {
	background(0, 0, 0);
	translate(width/2, height/2);
	
	for (let i = 0; i < n; i += 1) {

		let x2 = (r2)*cos(i*2*3.14/n); // GOOGLE HELPED ME WITH THIS MATH !!! 
		let y2 = (r2)*sin(i*2*3.14/n);
		
		noFill();
        strokeWeight(random(1, 4));
        stroke(random(230,255), random(230,255), random(230,255));
        line(mouseX-w/2, mouseY-h/2, x2, y2);
	}
	
	
	
	noStroke();
	fill(255);
	circle(0, 0, 5);
}





