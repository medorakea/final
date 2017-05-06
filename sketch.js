var img;
var x = 0;
var y = 0;

function preload() {
  img = loadImage("illustration.png");
}

function setup() {
    createCanvas((windowWidth-50),(windowHeight-150));
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
        textSize(18);
        textFont("BW Sans Regular");
        text("Ughhh, don’t you just love dirt?? Like the way it smells", 50, 500);
      text("(especially after it rains), and how digging in it just", 50, 530);
      text("makes you feel so much more connected to the earth,", 50, 560);
      text("and the different colors it can be…. Dirt is just so great.", 50, 590);
      text("Trees can grow in it, and birds can live in those trees,", 50, 620);
      text("and humans can see the birds out their windows in the", 50, 650);
      text("morning and just be elated that they exist. Life is just so", 50, 680);
      text("great. Except when it isn’t. But a lot of it is pretty okay.", 50, 710);
        
    } else {
        
    }
   
// BUTTON FUNCTIONALITY FOR NO
    
    if (mouseX<340 && mouseX>220 && mouseY<380 && mouseY>280) {
        fill(255);
        textSize(18);
        textFont("BW Sans Regular");
        text("My name is Medora Kea. I go to Lake Forest College, and", 50, 500);
      text("I am majoring in Studio Art and minoring in Digital", 50, 530);
      text("Media Design. I am from St. Paul, Minnesota. I have", 50, 560);
      text("participated in many extracurricular activities at Lake", 50, 590);
      text("Forest College, such as the choir program, the LGBTQ", 50, 620);
      text("organization, the mental health advocacy organization,", 50, 650);
      text("and the photography club. I have also held on-campus", 50, 680);
      text("jobs with the Office of Communications and Marketing,", 50, 710);
      text("as well as the Office of Intercultural Relations.", 50, 740);
    } else {
        
    }
    
// IMAGE    

    /*var easing = 0.9;
    var diffX = mouseX - x;
    x += diffX * easing;
    var diffY = mouseY - y;
    y += diffY * easing;*/
    
    image(img, (800 - (mouseX/20)), (150 - (mouseY/20)), 510, 600);



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

