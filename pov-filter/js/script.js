/**
 *  
 * SKYLA TROUSDALE 
 * 
 * 
 */

"use strict";

let pov;
let selfie; 
let selfieAI;

/**
*/
function setup() {
    createCanvas(400, 600); 
    background(0);

   pov = loadImage('/assets/images/pov.png'); 
   selfie = loadImage('/assets/images/selfie.jpeg'); 
   selfieAI = loadImage('/assets/images/selfieAI.png'); 


   
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

  // resize(selfie, 0, 400); 
}


/**
*/
function draw() {
    // default background
    background(0);

    // code for unfiltered selfie
    image(selfie, 0, 0);
    selfie.resize(400,0);

    // code for AI segment 
    image(selfieAI, mouseX, mouseY, 100, 100, mouseX, mouseY-50, 100, 100);
    selfieAI.resize(400,0);

    // code for camera 
    image(pov, mouseX-10, mouseY-10); 
    pov.resize(170, 0); 

}