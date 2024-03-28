function setup()
{
    createCanvas(800,600);
}

function draw(){
    background ("green");
    
   smileyFaceBeta()

   smileyFaceTimmy(500, 100);

   smileyFaceDenis();
}

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


function smileyFaceDenis()
{

    //BODY
    fill("white");
    stroke("black");
    circle(400, 300, 200);

    
    //EYES
    stroke("black");
    ellipse(390, 290, 10, 30);
    ellipse(410, 290, 10, 30);
    line(390,290,410,290);

    //EYES PUPILS
    stroke("black");
    fill("black");
    ellipse(390, 290, 2);
    ellipse(410, 290, 2);

    //MOUTH
    stroke("red");
    fill("gray");
    arc(400, 310, 20, 10, 0, 2*PI);

    //cheeks
    fill("yellow");
    circle(420,310,2);
    fill("yellow");
    circle(417,300,2);
    fill("yellow");
    circle(420,290,2);
 
}
