var canvas;
var music;
var surface1,surface2,suface3,surface4,box,edgeSprite
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(70,590,150,25);
    surface2 = createSprite(240,590,150,25);
    surface3 = createSprite(420,590,150,25);
    surface4 = createSprite(620,590,150,25);
    surface1.shapeColor = color(Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1)); 
    surface2.shapeColor = color(Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1)); 
    surface3.shapeColor = color(Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1)); 
    surface4.shapeColor = color(Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1)); 
    //create box sprite and give velocity
    box = createSprite(Math.round(random(40,750)),50,30,30);
    box.velocityX = 15;
    box.velocityY = 15;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprites
     edgeSprite = createSprite(5,290,10,600);
     edgeSprite.shapeColor = "red";
     edgeSprite.visible = false;
     edgeSprite2 = createSprite(790,290,10,600);
     edgeSprite2.shapeColor = "red";
     edgeSprite2.visible = false;
     bottomEdge = createSprite(400,599,780,10)
     bottomEdge.shapeColor = "red";
     bottomEdge.visible = false;
     topEdge = createSprite(400,5,780,10)
     topEdge.shapeColor = "red";
     topEdge.visible = false;

    //add condition to check if box touching surface and make it box
   if(surface1.isTouching(box) && box.bounceOff(surface1)) {
       box.shapeColor = surface1.shapeColor;
       if(!music.isPlaying()){
        music.play();
       }
   } else if(surface2.isTouching(box) && box.bounceOff(surface2)) {
    box.shapeColor = surface2.shapeColor;
    box.velocityX = 0;
    box.velocityY = 0;
    music.stop();
    console.log("should of stopped")
} else if(surface3.isTouching(box) && box.bounceOff(surface3)) {
    box.shapeColor = surface3.shapeColor;
    if(!music.isPlaying()){
        music.play();
       }
} else if(surface4.isTouching(box) && box.bounceOff(surface4)) {
    box.shapeColor = surface4.shapeColor;
    if(!music.isPlaying()){
        music.play();
       }
} 
    //edge collision
    box.bounceOff(edgeSprite);
    box.bounceOff(edgeSprite2);
    box.bounceOff(bottomEdge);
    box.bounceOff(topEdge);
    drawSprites();
}
