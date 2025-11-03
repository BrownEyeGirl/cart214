/**
 * Skyla Trousdale
 * Binary Art 
 * 2025
 * 
 */


"use strict";

// Canvas 
let backgroundGif;
let w;
let h;

// Webcam
let capture; 



// preload image 
function preload() { 

    // Canvas
    //backgroundGif = createImg('/assets/images/zoomin.gif'); // https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fideas%2Finfinite-zoom-art-gif%2F912001944974%2F&psig=AOvVaw1YZd_4WpeLmj4mDICpMApO&ust=1761868174076000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCND2hMfMypADFQAAAAAdAAAAABAV
   
    filter(THRESHOLD);

}

// Setup 
function setup() {

    // Canvas 
    w = (500);
    h = (500);  
    createCanvas(w, h); 
    background(0);
    //backgroundGif.position(0,0);
    

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
   filter(GRAY);
}

/* VISUALIZER PLAYGROUND */ 

