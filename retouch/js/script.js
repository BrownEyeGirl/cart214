/**
 *  
 * SKYLA TROUSDALE 
 * 
 * 
 */

"use strict";

// Popping 
let popFactor; 
let pixWidth; 
let pixelColour; 
let popped; 

// Images 
let pokeImg; 
let bubbleImg;

let change = 1; 

/**
 * 
*/
function setup() {

    // Canvas 
    createCanvas(400, 500); 
    //background(0); 

    // Images 
    pokeImg = loadImage('/assets/images/poke.png');
    pokeImg.resize(10, 0);
    bubbleImg = loadImage('/assets/images/bubble.png'); 
    bubbleImg.resize(0, 400);


    // Popping 
    popFactor = 1; 
    pixWidth = 10; 
    popped = false; 


}


/**
*/
function draw() {
   background(0);

   bubbleImg.resize(width, 0);
   image(bubbleImg, 0, 0);


   let circ1 = ellipse(220, 340, 180);
   let circ2 = ellipse()


    // draw hand 
    pokeImg.resize(180, 0);
    image(pokeImg, mouseX, mouseY);


    // check if contact, if yes, set popping to true 
    checkOverlap(circ1, mouseButton); 

   //if(mouseX > 100 & mouseX < 300)

    if(popped) {
       pixelate(); 
    }

    // if no, pixelate
    //pixelate();
}

/* Pixelates */
function pixelate() {


    for(let c = 0; c < 1000; c++) { // iterates col
        for(let r = 0; r < 1000; r++) { // iterates row
            pixelColour = bubbleImg.get(r, c); 
            //console.log(pixelColour); 
            push(); 
            fill(pixelColour);
            noStroke();
            ellipse(r, c, random(pixWidth-10, pixWidth+10)); // draw pixel 
            pop(); 

        }
    }

}


function checkOverlap(circle1, circle2) {
    let distance = dist(circle1.x, circle1.y, circle2.x, circle2.y);
    console.log(distance);
    return distance < (circle1.radius + circle2.radius);
  }

