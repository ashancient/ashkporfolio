var img;
var initials ='jm'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://dma-git.github.io/images/74.png');
}

function setup() {
createCanvas(1800,800);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '2' ) {  // first tool
    
    push();
    stroke(0);
    strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY);
    pop();
  } else if (toolChoice == '1') { //this alters brush 2 (med black)

    push();
    stroke(0);
    strokeWeight(20);
    line(mouseX, mouseY, pmouseX, pmouseY); // this alters brush 1 (large black)
    pop();
  } else if (toolChoice == '2') {
 
    push();
    stroke(225);
    strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY);
    pop();
   } else if (toolChoice == '3') { //im not sure what this alters 
  
    push();
    stroke(0);
    strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY);
    pop();
  } else if (toolChoice == '4') { //this alters brush 3 (smallest black)
  
    push();
    stroke(169,169,169);
    strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY);
    pop();
  } else if (toolChoice == '5') { //this alters brush 4 (med gray)

     push();
    noStroke();
    fill(250, 250, 250);
    rect(mouseX, mouseY, 20, 20);
    pop();
   } else if (toolChoice == '6') { //this alters brush 5 (eraser)

    push();
    noStroke();
    fill(100, 200, 100);
    rect(mouseX, mouseY, 20, 20);
    pop();
    } else if (toolChoice == '7') { //tool six green 

    push();
    noStroke();
    fill(255, 100, 0, 80);
    rect(mouseX, mouseY, 20, 20);
    pop();
  } else if (toolChoice == '8') { // tool 7 small organge 

    push();
    noStroke();
    fill(255, 100, 0, 80);
    rect(mouseX, mouseY, 40, 40);
    pop();
  } else if (toolChoice == '9') {// tool 8 big orange 
  
    push();
    noStroke();
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 200, 150);
    pop();
   } else if (toolChoice == '0') {// tool 9 colors 
  
    image(img, mouseX, mouseY, 50, 50);
    } else if (toolChoice == 'g' || toolChoice == 'G') {// tool 0 um image??
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
