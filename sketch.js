var img;
var x = 0;
var y = 0;

function preload() {
  img = loadImage("illustration.png");
}

function setup() {
    createCanvas(windowWidth,windowHeight);
}

function draw() {
    
    background(58,50,45);
    //background(37,109,120); i like this color
    
    translate(0, -70);
    
// TEXT    
    
    fill(255);
    textSize(80);
    textFont("BW Slab");
    text("do you like dirt as", 50, 200);
    text("much as i do?", 50, 300);
    
// YES NO TOGGLE ELEMENT - BUTTONS
    
    noStroke()
    fill(255)
    ellipse(110,400,120,100)
    ellipse(280,400,120,100)
    
    fill(58,50,45);
    textSize(40);
    textFont("BW Sans Bold");
    text("yes", 77, 412);
    text("no", 255, 412);
    
// BUTTON FUNCTIONALITY FOR YES
    
    if (mouseX<170 && mouseX>50 && mouseY<380 && mouseY>280) {
        fill(255);
        textSize(20);
        textFont("BW Sans Regular");
        text("this is paragraph text", 50, 500);
        text("blah blah blah blah blah", 50, 550);
    } else {
        
    }
   
// BUTTON FUNCTIONALITY FOR NO
    
    if (mouseX<340 && mouseX>220 && mouseY<380 && mouseY>280) {
        fill(255);
        textSize(20);
        textFont("BW Sans Regular");
        text("this is paragraph text", 50, 500);
        text("blah blah blah blah blah", 50, 550);
    } else {
        
    }
    
// IMAGE    

    /*var easing = 0.9;
    var diffX = mouseX - x;
    x += diffX * easing;
    var diffY = mouseY - y;
    y += diffY * easing;*/
    
    image(img, (700 - (mouseX/20)), (100 - (mouseY/20)), 510, 600);



// create a new function
// the mousePressed function creates an event response


    
/*    function mousePressed() {
        if (yes == 0) {
            yes = 255;
    } else {
        value = 0;
    }
  */ 
}

