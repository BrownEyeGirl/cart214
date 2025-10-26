
/**
 * Codeface 
 * By Skyla Trousdale 
 * 
 * 
 * Takes image and gives you a "look behind the scenes"
 * secondary image on top that will be altered somehow 
 * code fragments pulsing? 
 * "survival of the fittest"
 * 
 * 
 * 
 */

"use strict";


let instaFaceImg; 
let senselessImg;
let sensesImg;  


function setup() {
    createCanvas(400, 400);
    background('#0000FF');

    instaFaceImg = loadImage("/assets/images/instafacecut.png");
    senselessImg = loadImage("/assets/images/senseless.png"); 
    sensesImg = loadImage("/assets/images/senses.png"); 
   // instaFaceImg.resize(60, 0);

  //  instaFaceImg.width = 40;
    image(instaFaceImg, 0, 0); 

}



function draw() {

    senselessImg.resize(0, 400);
    image(senselessImg, 0, 0); 

    instaFaceImg.resize(400, 0);
    image(instaFaceImg, 0, 0);
    
    sensesImg.resize(400, 0); 
  //  image(sensesImg, 0, 0); 
    image(sensesImg, mouseX, mouseY);




  //image(img, dx, dy, dWidth, dHeight, sx, sy, sWidth, sHeight) 
  /** 
   * img: The variable holding the loaded image.
     dx: The x-coordinate of the destination rectangle on the canvas.
     dy: The y-coordinate of the destination rectangle on the canvas.
     dWidth: The width of the destination rectangle on the canvas.
     dHeight: The height of the destination rectangle on the canvas.
     sx: The x-coordinate of the subsection on the source image.
     sy: The y-coordinate of the subsection on the source image.
     sWidth: The width of the subsection on the source image.
     sHeight: The height of the subsection on the source image.
   */
    //image(instaFaceImg, 50, 50, 300, 300, 0, 0, 100, 100);
}




function mouseMoved() { 
}
