/**
 * Skyla Trousdale
 * Binary Art 
 * 2025
 * 
 */


"use strict";

// Canvas 
let backgroundImg;
let w;
let h;


// Faces + Names
let faces = []; 
let names = []; 

let faceIndex; 


// preload image 
function preload() { 

    // Canvas
    backgroundImg = loadImage('/assets/images/backgroundImg.png');

    // Faces + Names
    faces[0] = loadImage('assets/images/face1.png');
    names[0] = "";
    faces[1] = loadImage('assets/images/face2.png');
    names[1] = "";
    faces[2] = loadImage('assets/images/face3.png');
    names[2] = "";
    faces[3] = loadImage('assets/images/face4.png');
    names[3] = "";
    faces[4] = loadImage('assets/images/face5.png');
    names[4] = "";
    
    faceIndex = 0; // starting point 
   

}

// Setup 
function setup() {

    // Canvas 
    w = (500);
    h = (500);  
    createCanvas(w, h); 
    background(255);
    drawBackground(); 
    

    // Image Configuration 
    //imageMode(CENTER);
    //noStroke();
   // background(255);
   // img.loadPixels();
   // img.filter(GRAY); // options: GREY, INVERT, THRESHOLD

    // slider 
   /* slider1 = createSlider(0, 255, 50); // starts slider at 50 
    slider1.position(0, 200);
    slider1.size(80);*/
}


/* PROJECT LOOP */  
function draw() {
   
   drawBackground(); 
    displayFace(); 
}

/* VISUALIZER PLAYGROUND */ 

function displayFace() {
    faces[faceIndex].resize(0, w); 
    image(faces[faceIndex], 0,0); 
}

function mouseClicked() {
    faceIndex += 1; 
    if(faceIndex >= faces.length) {
        faceIndex = 0; 
    } 
}

function displayName() {
    text()
}

/* Draws Background Image */ 
function drawBackground() {
    background(255);
    tint((millis() % 200));
    backgroundImg.resize(h, 0);
    image(backgroundImg, 0, 0); 
}

