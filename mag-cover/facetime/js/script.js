/**
 * Skyla Trousdale
 * FACETIME!
 * 2025
 * 
 */


"use strict";

// canvas vars 
let img;
let w;
let h;


// beating heart
let faces = []; 
let face1;
let face2;
let face3; 
let face4; 
let face5; 


// preload image 
function preload() {

    faces[0] = loadImage('assets/images/face1.png');
    faces[1] = loadImage('assets/images/face2.png');
    faces[2] = loadImage('assets/images/face3.png');
    faces[3] = loadImage('assets/images/face4.png');
    faces[4] = loadImage('assets/images/face5.png');

}

// Set Up Canvas, Binary Text, Image
function setup() {

    // Canvas 
    w = (faces[0].width);
    h = (faces[0].height);  
    createCanvas(w, h); 
    background(0);
   //cnv.mouseMoved(drawPixBasic);




    // Image Configuration 
   imageMode(CENTER);
    noStroke();
    background(0);
    faces[0].loadPixels();
    faces[0].filter(GRAY); // options: GREY, INVERT, THRESHOLD

    // slider 
   /* slider1 = createSlider(0, 255, 50); // starts slider at 50 
    slider1.position(0, 200);
    slider1.size(80);*/
}


// Start Project 
function draw() {
   // background(0); 

    // Play w Visuals 
   drawPixBasic();
   image(faces[0], 0, 0);
}

/* VISUALIZER PLAYGROUND */ 

/* Draws Binary Text in Grid */
function drawPixBasic() { 
   
   
    //background(0); // resets 

    // iterates through gif frames
    //for(let i = 0; i < 8; i++) {
        // Generates grid by column (x) and row (y) 
        for(let y = 10; y < h; y+=8) { // columns for pix  
            for(let x = 0; x < w; x+=8) { // rows for pix

                let sq = faces[0].get(x, y); // gets colour at x,y. returns array [R, G, B, A] but since the image is black and white 
                let grayVal = (0.299 * sq[0]) + (0.587 * sq[1]) + (0.114 * sq[2]) // FORMULA WRITTEN BY CHATGPT, accounts for human perception of light to take RGB and turn it grayscale
                
                push();
                fill(grayVal);
                rect(map(grayVal, 0, 255, 1, 15)); 
                //textSize(map(grayVal, 0, 255, 1, 15));  // maps the grayscale value formula onto my text size range (5-15px)
                pop(); 

            }
        }

        push(); 
        fill(0);
        rect(w, h, 100, 100);
        pop(); 

        

        //background(0); 
   // }


             
}
