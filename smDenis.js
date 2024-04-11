function checkLimitsSMDenis() {
    if (smDenis.x >= tablewidth - smDenis.ray || smDenis.x <= smDenis.ray) { smDenis.directionDenisX *= -1; }
    smDenis.x += smDenis.directionDenisX * smDenis.speedX;

    if(smDenis.y <= 0 + smDenis.ray)
    {
        smDenis.directionDenisY*=-1
    }
    if (
        smDenis.y >= paddleDenis.y - smDenis.ray &&
        smDenis.y <=paddleDenis.y+paddleDenis.height &&
        smDenis.x >= paddleDenis.x + smDenis.ray &&
        smDenis.x <= paddleDenis.x + paddleDenis.width - smDenis.ray
    ) {
        smDenis.directionDenisY *= -1;
    }
    smDenis.y += smDenis.directionDenisY * smDenis.speedY;
}
let smDenis = {
    x: 400,
    y: 300,
    ray: 30,
    directionDenisX: 1,
    directionDenisY: 1,
    speedX: 2,
    speedY: 2,
};

function smileyFaceDenis(x, y) {

    //BODY
    fill("white");
    stroke("black");
    circle(x, y, smDenis.ray * 2);


    //EYES
    stroke("black");
    ellipse(x + 10, y - 10, 10, 30);
    ellipse(x - 10, y - 10, 10, 30);

    //EYES] PUPILS
    stroke("black");
    fill("black");
    ellipse(x - 10, y - 10, 2);
    ellipse(x + 10, y - 10, 2);

    //MOUTH
    stroke("red");
    fill("gray");
    arc(x, y + 10, 20, 10, 0, 2 * PI);

    //cheeks
    fill("yellow");
    circle(x + 20, y + 10, 2);
    fill("yellow");
    circle(x + 17, y, 2);
    fill("yellow");
    circle(x + 20, y - 10, 2);

}