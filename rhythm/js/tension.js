/**
 * Tension
 * Skyla Trousdale 
 * 
 * Graphic element: scaling, asymetric balance 
 */

"use strict";

/**
 * Sets up canvas
*/
let w;
let h;  

let soul = {

}

let deg; 

function setup() {
    w = 600; 
    h = 600;
    deg = 0;  
    createCanvas(w, h);
    background(240);
    angleMode(DEGREES);

}


/**
 * Draw symetrical circles (reflected on y)
*/
function draw() {
    background(240);
    //tensionShapes(); 
    rotateShapes();
}

function rotateShapes() {
    push();
    translate(width/2, height/2);
    rotate(frameCount/(random(5, 5.02)));
    fill(0);

    //Rectangles 
    rect(100,50,map(mouseX, 0, w, 0, 50),70);
    ellipse(-100, 100, map(mouseX, 0, h, 170, 0) ,map(mouseX, 0, h, 170, 0)); 
    rect(100,-100,map(mouseX, 0, w, 0, 50),70);
    
    pop();

    push()
    fill(0);
    translate(width/2, height/2);
    rotate(-frameCount/(random(5, 5.25)));
    //Ellipses 
    ellipse(100, 200, map(mouseX, 0, h, 100, 0) ,map(mouseX, 0, h, 100, 0)); 
    rect(-100,-100, map(mouseX, 0, h, 0, 190),map(mouseX, 0, h, 0, 170));
    ellipse(75, -200, map(mouseX, 0, h, 50, 0) ,map(mouseX, 0, h, 50, 0)); 


    pop(); 
}




function tensionShapes() {

    push();
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 50, 50);
    pop();

    push(); 
    fill(0);
    rect(r1.x, random(0,w), 20, 60); // falling things! 
    if(r1.x <= h) {
        r1.x = frameCount * 0.00000005; 
    }
    else {
        r1.x = 0;
    }
    pop(); 
}
