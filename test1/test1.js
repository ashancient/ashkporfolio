function setup() {
createCanvas(600, 600);
 background('chartreuse');
}

function draw() {
   strokeWeight(5);
 //face
 fill (252, 227, 187);
ellipse (250, 300, 220, 310);

//right eye
fill('white');
ellipse (300, 275, 45, 20);//scalra
fill('green');
ellipse (300, 275, 25, 20);//iris
fill('black');
circle (300, 275, 5);//pupil
line (265,285,330,310); // right eye bag
strokeWeight(10);
 line (280,250,330,250); //right eye brow

//left eye
strokeWeight(5);
fill('white');
ellipse (200, 275, 45, 25);//sclara
fill('green');
ellipse (200, 275,25, 20);//pupil
fill('black');
circle (200, 275, 5);//iris
line (220,280,180,310); // left eye bag
strokeWeight(10);
line (180,250,230,250);//left eye brow
 
 //mouth
 strokeWeight(10);
 line (300,370,250,390);
}
