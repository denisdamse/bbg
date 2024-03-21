function setup()
{
    createCanvas(800,600);
}
function draw()
{
    background("green");

    smileyFaceTimmy();
}

function smileyFaceTimmy() {
//BODY
fill("yellow");
stroke("black");
circle(400, 300, 50);

//EYES
fill("white");
stroke("brown");
ellipse(390, 290, 10, 5);
ellipse(410, 290, 10, 5);

//EYES PUPILS
stroke("black");
fill("black");
ellipse(390, 290, 2);
ellipse(410, 290, 2);

//MOUTH
stroke("red");
fill("gray");
arc(400, 310, 20, 10, 0, PI);
}