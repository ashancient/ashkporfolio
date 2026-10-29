function setup() {
createCanvas(600, 600);
 background('olivedrab');
}

function draw() {
   strokeWeight(5);
     stroke('black');
 
 // hair (back)
  strokeWeight(5);
  fill (77, 59, 42);
  beginShape();
  vertex(192, 156);
  vertex(148,173);
  vertex(110, 254);
  vertex(109, 335);
  vertex(80, 379);
  vertex(124, 375);
  vertex(128, 458);
  vertex(152, 445);
  vertex(208, 515);
  vertex(336, 423);
  vertex(376, 433);
  vertex(377, 358);
  vertex(404, 373);
  vertex(382, 206);
  vertex(272, 122);
   endShape(CLOSE);
  
   //neck
 fill (252, 227, 187)
 rect (211,446,80,70)
 fill (135, 87, 41)
 triangle (212,446,289,446,212,490)
 
  //shirt
  strokeWeight(5);
  fill ('black');
  beginShape();
  vertex(208, 493);
  vertex(113, 496);
  vertex(68, 536);
  vertex(40, 599);
  vertex(431, 599);
  vertex(416, 533);
  vertex(372, 485);
  vertex(290, 485);
  vertex(270, 507);
  vertex(252, 510);
  vertex(232, 509);
  endShape(CLOSE)
  
  //braid
  fill (77, 59, 42);
  stroke('black');
  strokeWeight(5);
  quad (324,374,341,513,352,513,344,360)
 beginShape();
  vertex(347,515);
  vertex(339,556);
  vertex(347, 547);
  vertex(376, 566);
  endShape(CLOSE);
  strokeWeight(10);
  stroke('firebrick');
  line (342,515,352,515)
 
 //face
 strokeWeight(5);
   stroke('black');
 fill (252, 227, 187);
ellipse (250, 300, 220, 310);

//right eye
fill('white');
ellipse (300, 285, 45, 20);//scalra
fill('darkolivegreen');
ellipse (300, 285, 25, 20);//iris
fill('black');
circle (300, 285, 5);//pupil

stroke(135, 87, 41);
line (280,300,330,320); // right eye bag
line (295,300,315,300); // right eye agysal
stroke('black');
strokeWeight(10);
 line (280,255,330,250); //right eye brow

//left eye
strokeWeight(5);
fill('white');
ellipse (200, 285, 45, 20);//sclara
fill('darkolivegreen');
ellipse (200, 285,25, 20);//pupil
fill('black');
circle (200, 285, 5);//iris

stroke(135, 87, 41);
line (225,300,180,320); // left eye bag
line (210,300,190,300); // left eye agysal


strokeWeight(10);
stroke('black');
line (180,255,230,260);//left eye brow
 
 //nose
 strokeWeight(0);
 fill(168, 114, 62);
 triangle(250, 360, 250, 320, 270, 340);
 
  //mouth
 strokeWeight(10);
 line (300,380,250,400);
 line (200,380,250,400);
 
 //hair front
 strokeWeight(5);
 fill(237, 234, 192);
 beginShape();
 vertex(215, 150);
  vertex(174, 266);
  vertex(128, 318);
  vertex(136, 263);
  vertex(113, 266);
  vertex(135, 223);
 endShape(CLOSE);
  
  strokeWeight(5);
 fill(77, 59, 42);
 beginShape();
 vertex(193,164 );
  vertex(265, 242);
  vertex(277, 221);
  vertex(379, 294);
  vertex(368, 251);
  vertex(347, 181);
  vertex(293, 139);
  vertex(229, 140);
 endShape(CLOSE);
 //necklas
 stroke('white')
 strokeWeight(5);
 line(205,495,240,555)
 line(240,555,292,480)
 strokeWeight(5);
 fill('deepskyblue')
 triangle(236, 572, 240, 562, 244, 572);
 
 
 
 //hand
 stroke ('black')
 strokeWeight(5);
 fill (252, 227, 187);
// quad (437,543,449,502,381,473,359,534)
//beginShape();
  vertex(381, 575);
  vertex(381, 473);
  vertex(417, 460);
  vertex(419, 409);
  vertex(427, 399);
  vertex(436, 389);
  vertex(449, 468);
  vertex(473, 468);
  vertex(482, 530);
  vertex(504, 488);
  vertex(518, 500);
  vertex(490, 570);
  vertex(480, 580);
  vertex(480, 600);
  vertex(411, 600);
  vertex(411, 585);
// endShape(CLOSE);

}
