/**
 * COLOUR 
 * SKYLA TROUSDALE 
 * 
 * 
 */

"use strict";

// canvas vars
let w; 
let l;

// line vars
let lineAmount;
let lastX; 
let newX; 


/**
*/
function setup() {
    background(200); 
    w = 400; 
    l = 400; 

    lineAmount = 10; 
    lastX = 1; 
    newX = 1; 

    randomLine(); 
}


/**
*/
function draw() {
    createCanvas(w, l); 
    randomLine(); 
}

function randomLine() {
    for(let i = 0; i < lineAmount; i++) {
        //push(); 
        //strokeWeight(3);
        newX = random(0, l);
        line(lastX, newX, 10, 10)
        lastX = newX; 
        //pop(); 
    }
}