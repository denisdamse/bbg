function setup()
{
    createCanvas(800,600);
}

function draw(){
    background ("green");
    
   smileyFaceBeta()

   smileyFaceTimmy(500, 100);

   
   smileyFaceDenis(smDenis.x,smDenis.y);
   checkLimitsSMDenis();
}
let tablewidth=800;
let tableheight=600;
function smileyFaceBeta()
{
 //BODY
 fill("white");
 stroke("black");
 circle (400, 300, 50);
 

 //EYES
 // circle(390, 290, 5);
// circle(410,290,5);
stroke("brown");
ellipse(390,290,10,5);
ellipse(410, 290,10,5);

//PUPILS
//stroke("black");
fill("black");
circle(390,290,2);
circle(410,290,2);

//MOUTH
arc(400, 310, 20, 10, 0, Math.PI);


}

function smileyFaceTimmy(x, y) {
//BODY
fill("yellow");
stroke("black");
circle(x, y, 50);

//EYES
fill("white");
stroke("brown");
ellipse(x + 10, y - 10, 10, 5);
ellipse(x - 10, y - 10, 10, 5);

//EYES PUPILS
stroke("black");
fill("black");
ellipse(x - 10, y - 10, 2);
ellipse(x + 10, y - 10, 2);

//MOUTH
stroke("red");
fill("gray");
arc(x, y + 10, 20, 10, 0, PI);

}