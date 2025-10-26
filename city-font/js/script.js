/**
 * City Font
 * Skyla Trousdale 
 */

"use strict";


let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

 
let pos = {
    x: 0, 
    y: 0, 
    recentX: 0,
    recentY: 0,

}

let h;
let w; 

//let imgA, imgB, imgC, imgD, imgE, imgF, imgG, imgH, imgI, imgJ, imgK, imgL, imgM, imgN, imgO, imgP, imgQ, imgR, imgS, imgT, imgU, imgV, imgW, imgX, imgY, imgZ;

let photo = []; 

function preload() {
    photo[0] = loadImage('assets/images/a.jpeg'); 
    photo[1] = loadImage('assets/images/b.jpeg');
    photo[2] = loadImage('assets/images/c.jpeg');
    photo[3] = loadImage('assets/images/d.jpeg');
    photo[4] = loadImage('assets/images/e.jpeg');
    photo[5] = loadImage('assets/images/f.jpeg');
    photo[6] = loadImage('assets/images/g.jpeg');
    photo[7] = loadImage('assets/images/h.jpeg');
    photo[8] = loadImage('assets/images/i.jpeg');
    photo[9] = loadImage('assets/images/j.jpeg');
    photo[10] = loadImage('assets/images/k.jpeg');
    photo[11] = loadImage('assets/images/l.jpeg');
    photo[12] = loadImage('assets/images/m.jpeg');
    photo[13] = loadImage('assets/images/n.jpeg');
    photo[14] = loadImage('assets/images/o.jpeg');
    photo[15] = loadImage('assets/images/p.jpeg');
    photo[16] = loadImage('assets/images/q.jpeg');
    photo[17] = loadImage('assets/images/r.jpeg');
    photo[18] = loadImage('assets/images/s.jpeg');
    photo[19] = loadImage('assets/images/t.jpeg');
    photo[20] = loadImage('assets/images/u.jpeg');
    photo[21] = loadImage('assets/images/v.jpeg');
    photo[22] = loadImage('assets/images/w.jpeg');
    photo[23] = loadImage('assets/images/x.jpeg');
    photo[24] = loadImage('assets/images/y.jpeg');
    photo[25] = loadImage('assets/images/z.jpeg');
}

/**
 * 
*/
function setup() {
    // Load Canvas
    h = 400; 
    w = 600; 
    createCanvas(w, h); 
   //a background(0);


   /* // Load Font 
    imgA = loadImage('assets/images/a.jpeg'); 
    imgB = loadImage('assets/images/b.jpeg');
    imgC = loadImage('assets/images/c.jpeg');
    imgD = loadImage('assets/images/d.jpeg');
    imgE = loadImage('assets/images/e.jpeg');
    imgF = loadImage('assets/images/f.jpeg');
    imgG = loadImage('assets/images/g.jpeg');
    imgH = loadImage('assets/images/h.jpeg');
    imgI = loadImage('assets/images/i.jpeg');
    imgJ = loadImage('assets/images/j.jpeg');
    imgK = loadImage('assets/images/k.jpeg');
    imgL = loadImage('assets/images/l.jpeg');
    imgM = loadImage('assets/images/m.jpeg');
    imgN = loadImage('assets/images/n.jpeg');
    imgO = loadImage('assets/images/o.jpeg');
    imgP = loadImage('assets/images/p.jpeg');
    imgQ = loadImage('assets/images/q.jpeg');
    imgR = loadImage('assets/images/r.jpeg');
    imgS = loadImage('assets/images/s.jpeg');
    imgT = loadImage('assets/images/t.jpeg');
    imgU = loadImage('assets/images/u.jpeg');
    imgV = loadImage('assets/images/v.jpeg');
    imgW = loadImage('assets/images/w.jpeg');
    imgX = loadImage('assets/images/x.jpeg');
    imgY = loadImage('assets/images/y.jpeg');
    imgZ = loadImage('assets/images/z.jpeg');*/

}


/**
 * a
*/
function draw() {
   // background(0);
}


function keyPressed() {

    for(let letterIndex = 0; letterIndex <= 25; letterIndex++) {
        if(key === alpha[letterIndex]) {
            image(photo[letterIndex], 200, 200); 
        }
    }

    if (key === 'a') {
       //a image((photo[0]), 100, 100); 
        //console.log(photo[1]);
    }
/*
    else if (key === 'b') {

    }
    else if (key === 'c') {

    }
    else if (key === 'd') {

    }
    else if (key === 'e') {

    }
    else if (key === 'f') {

    }
    else if (key === 'g') {

    }
    else if (key === 'h') {

    }
    else if (key === 'i') {

    }
    else if (key === 'j') {

    }
    else if (key === 'k') {

    }
    else if (key === 'l') {

    }
    else if (key === 'm') {

    }
    else if (key === 'n') {

    }
    else if (key === 'o') {

    }
    else if (key === 'p') {

    }
    else if (key === 'q') {

    }
    else if (key === 'r') {

    }
    else if (key === 's') {

    }
    else if (key === 't') {

    }
    else if (key === 'u') {

    }
    else if (key === 'v') {

    }
    else if (key === 'w') {

    }
    else if (key === 'x') {

    }
    else if (key === 'y') {

    }
    else if (key === 'z') {

    }*/
}

function displayLetter() {

}