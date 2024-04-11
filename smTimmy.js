let smTimmy = {
    x: 400,
    y: 300,
    ray: 35,
    directionTimmyX: 7,
    directionTimmyY: 6,
    speedX: 1,
    speedY: 1,

};

function checkLimitsSMTimmy() {
    if (smTimmy.x >= tablewidth - smTimmy.ray || smTimmy.x <= smTimmy.ray)

        smTimmy.directionTimmyX *= -1;
    smTimmy.x += smTimmy.directionTimmyX * smTimmy.speedX;

    if (smTimmy.y >= tableheight - smTimmy.ray || smTimmy.y <= smTimmy.ray)

        smTimmy.directionTimmyY *= -1;
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