let smTimmy = {
    x: 400,
    y: 350,
    ray: 30,
    directionTimmyX: 2,
    directionTimmyY: 2,
    speedX: 1,
    speedY: 1,

};

function checkLimitsSMTimmy() {
    if (smTimmy.x >= tablewidth - smTimmy.ray || smTimmy.x <= 0 + smTimmy.ray) {
        smTimmy.directionTimmyX *= -1;
    }
    smTimmy.x += smTimmy.directionTimmyX * smTimmy.speedX;

    if (smTimmy.y <= 0 + smTimmy.ray) {
        smTimmy.directionTimmyY *= -1;
    }
    
    if (
        smTimmy.y >= pdTimmy.y - smTimmy.ray &&
        smTimmy.y <= pdTimmy.y + pdTimmy.height &&
        smTimmy.x >= pdTimmy.x - smTimmy.ray &&
        smTimmy.x <= pdTimmy.x + pdTimmy.width + smTimmy.ray
    ) {
        smTimmy.directionTimmyY *= -1;
    }
    smTimmy.y += smTimmy.directionTimmyY * smTimmy.speedY;
}

function smileyFaceTimmy(x, y) {
    //BODY
    fill("yellow");
    stroke("black");
    circle(x, y, smTimmy.ray * 2);

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