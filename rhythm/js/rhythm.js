


/**
 * Rhythm
 * Skyla Trousdale 
 * 
 * Graphic element: 
 */

"use strict";

/**
 * Sets up canvas
*/
let h; 
let w; 

let col = {
    r: 0, 
    g: 255, 
    b: 0
}

let bean = {
    x: 100,
    y: 100,
    h: 40,
    w: 40
}

function setup() {

    w = 600; 
    h = 600; 
    createCanvas(w, h);
    background(0);

}


/**
 * Draw symetrical circles (reflected on y)
*/
function draw() {
   generateCircles(); 
}


function generateCircles() {

    let x = 100; // sets initial circle pos 
    let y = 100;
    bean.y = y; 
    bean.x = x; 

    for (let i = 0; i < 5; i++) { // iterates through to generate a grid of circles 
        for (let j = 0; j < 5; j++) {
            push(); 
            fill(200);
            ellipse(bean.x, bean.y, random(bean.w-2,bean.w+2), random(bean.h-1, bean.h+1));
            pop(); 

            push();
            fill(0);
            ellipse(bean.x, bean.y, random(5,15), random(5, 15));
            pop(); 

            bean.x += x;

        }
        bean.x = x; // resets the column 
        bean.y += y; //moves down a row 
    }


    // Paint the background either
    // red, yellow, blue, or green.
    
}
