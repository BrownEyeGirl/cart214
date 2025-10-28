/**
 * Skyla Trousdale
 * Binary Art 
 * 2025
 * 
 */


"use strict";

// canvas vars 
let img;
let w;
let h;

// binary 
let userText; 
let binaryText;
let reader; 
let alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'w', 'x', 'y', 'z'];
let ascii = ['0100 0001 ', '0100 0010 ', '0100 0011 ','0100 0100 ', '0100 0101	', '0100 0110 ', '0100 0111 ', '0100 1000 ', '0100 1001	', '0100 1010 ', '0100 1011 ', '0100 1100 ', '0100 1101	', '0100 1110 ', '0100 1111 ', '0101 0000 ', '0101 0001 ', '0101 0010 ', '0101 0011 ', '0101 0100 ', '0101 0101 ', '0101 0110 ', '0101 0111 ', '0101 1000 ', '0101 1001 ', '0101 1010 '];


// beating heart
let hearts = []; 
let heart1;
let heart2;
let heart3; 
let heart4; 
let heart5; 
let heart6; 
let heart7; 
let heart8; 

// preload image 
function preload() {
    img = loadImage('assets/images/heart.gif');

    hearts[0] = loadImage('assets/images/hearts/frame_000.jpg');
    hearts[1] = loadImage('assets/images/hearts/frame_001.jpg');
    hearts[2] = loadImage('assets/images/hearts/frame_002.jpg');
    hearts[3] = loadImage('assets/images/hearts/frame_003.jpg');
    hearts[4] = loadImage('assets/images/hearts/frame_004.jpg');
    hearts[5] = loadImage('assets/images/hearts/frame_005.jpg');
    hearts[6] = loadImage('assets/images/hearts/frame_006.jpg');
    hearts[7] = loadImage('assets/images/hearts/frame_007.jpg');

}

// Set Up Canvas, Binary Text, Image
function setup() {

    // Canvas 
    w = (img.width);
    h = (img.height);  
    let cnv = createCanvas(w, h); 
   //cnv.mouseMoved(drawPixBasic);


    // Binary Text 
    userText = 'hi'; //prompt('enter some text'); 
    binaryText = '';
    reader = 0; //starts at index 0 


    // Image Configuration 
    imageMode(CENTER);
    noStroke();
    background(0);
    img.loadPixels();
    img.filter(GRAY); // options: GREY, INVERT, THRESHOLD

    // slider 
   /* slider1 = createSlider(0, 255, 50); // starts slider at 50 
    slider1.position(0, 200);
    slider1.size(80);*/
}


// Start Project 
function draw() {
    // Play w Visuals 
    drawPixBasic();
}

/* VISUALIZER PLAYGROUND */ 

/* Draws Binary Text in Grid */
function drawPixBasic() { 
    convertToBinary(); 
   
    background(0); // resets 
    reader = 0; 

    // iterates through gif frames
    for(let i = 0; i < 8; i++) {
        background(0); 

        // Generates grid by column (x) and row (y) 
        for(let y = 10; y < h; y+=8) { // columns for pix  
            for(let x = 0; x < w; x+=8) { // rows for pix

                let sq = hearts[i].get(x, y); // gets colour at x,y. returns array [R, G, B, A] but since the image is black and white 
                let grayVal = (0.299 * sq[0]) + (0.587 * sq[1]) + (0.114 * sq[2]) // FORMULA WRITTEN BY CHATGPT, accounts for human perception of light to take RGB and turn it grayscale
                
                // sets style 
                fill(255, 0, 0); // text colour 
                textSize(map(grayVal, 0, 255, 1, 15));  // maps the grayscale value formula onto my text size range (5-15px)
                
                // loops to beginning of text string  
                if(reader >= binaryText.length) {
                    reader = 0; 
                }

                text(binaryText[reader], x, y);
                //console.log(reader);
                reader += 1;
                //pop();  //The origin is back to (0, 0) and rotation is back to 0.
            }
        }

        push(); 
        fill(0);
        rect(w, h, 100, 100);
        pop(); 

        

        //background(0); 
    }


             
}

/* Converts User Input to Binary */ 
function convertToBinary() { // Code from Javascript Docs 
    userText = userText.toLowerCase();

    for(let phrasePos = 0; phrasePos < userText.length; phrasePos++) { // cycles through each character in the phrase 
        for(let abc = 0; abc < 26; abc++) { // cycles through abcs for each character 
            if(userText[phrasePos] == alph[abc]) { // finds which character in the alphabet its equal to 
                binaryText += ascii[abc];
                //break; 
            }
        }
    }
    
    
    console.log("Binary: " + binaryText); 
} 
