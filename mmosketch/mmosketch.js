var img;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;
var initials ='ak'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://ashancient.github.io/ashkporfolio/images/wb.png');
  img2 = loadImage('https://ashancient.github.io/ashkporfolio/images/wr.png');
  img3 = loadImage('https://ashancient.github.io/ashkporfolio/images/wy.png');
  img4 = loadImage('https://ashancient.github.io/ashkporfolio/images/fb.png');
  img5 = loadImage('https://ashancient.github.io/ashkporfolio/images/fr.png');
  img6 = loadImage('https://ashancient.github.io/ashkporfolio/images/fy.png');
  img7 = loadImage('https://ashancient.github.io/ashkporfolio/images/doom.png');
  img8 = loadImage('https://ashancient.github.io/ashkporfolio/images/ds.png');
  img9 = loadImage('https://ashancient.github.io/ashkporfolio/images/mario.png');
  img10 = loadImage('https://ashancient.github.io/ashkporfolio/images/cult.png');
}

function setup() {
createCanvas(600, 600);  
background(screenbg);   

}

function draw() {
  if (keyIsPressed) {
    choice = key; 
    clear_print(); 
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  
  }
}

function newkeyChoice(toolChoice) { 

 if (toolChoice == '1' ) {  // first tool pen just in case 
    strokeWeight(01);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // second tool blue wiz
    image(img, mouseX, mouseY, 100, 100);
  
} else if (toolChoice == '3') { // third tool red wiz 
   image(img2, mouseX, mouseY, 100, 100);
  
} else if (toolChoice == '4') { // fourth yellow wiz
    image(img3, mouseX, mouseY, 100, 100);
 
} else if (key == '5') { // fith blue fighter 
    image(img4, mouseX, mouseY, 100, 100);

  
} else if (toolChoice == '6') { // sixth red fighter 
   image(img5, mouseX, mouseY, 100, 100);
  
} else if (toolChoice == '7') { // yellow fighter 
  image(img6, mouseX, mouseY, 100, 100);
  
} else if (toolChoice == '8') { // doom
   background(img7);
  
} else if (toolChoice == '9') {// death stranding 
    background(img8);
  
} else if (toolChoice == '0') { //mario 
    background(img9);
 
} else if (toolChoice == 'q' || toolChoice == 'Q') { // cult of the lamb 
    background(img10);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
