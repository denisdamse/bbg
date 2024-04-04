function checkLimitsSMDenis()
{
    if(smDenisx>=800 || smDenisx<=0)
    {
        directionDenisX*=-1;
    }
    if(smDenisy>=600 || smDenisy<=0)
    {
        directionDenisY*=-1;
    }
}
let smDenisx = 400;
let smDenisy = 300;
let directionDenisX=70;
let directionDenisY=20;
function smileyFaceDenis(x,y)
{

    //BODY
    fill("white");
    stroke("black");
    circle(x, y, 200);

    
    //EYES
    stroke("black");
    ellipse(x+10, y-10, 10, 30);
    ellipse(x-10, y-10, 10, 30);

    //EYES PUPILS
    stroke("black");
    fill("black");
    ellipse(x-10, y-10, 2);
    ellipse(x+10, y-10, 2);

    //MOUTH
    stroke("red");
    fill("gray");
    arc(x, y+10, 20, 10, 0, 2*PI);

    //cheeks
    fill("yellow");
    circle(x+20,y+10,2);
    fill("yellow");
    circle(x+17,y,2);
    fill("yellow");
    circle(x+20,y-10,2);
 
}