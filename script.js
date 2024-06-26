let tablewidth = 800;
let tableheight = 600;

function setup() {
    createCanvas(tablewidth, tableheight);
    initBriksTimmy()
}

function draw() {
    background("green");

    smileyFaceTimmy(smTimmy.x, smTimmy.y);

    checkLimitsSMTimmy();

    createPaddleTimmy();

    createBicksTimmy();

    smileyFaceBeta();

    smileyFaceDenis(smDenis.x, smDenis.y);

    checkLimitsSMDenis();
    
    createPaddleDenis();
}

function smileyFaceBeta() {
    //BODY
    fill("white");
    stroke("black");
    circle(400, 300, 50);


    //EYES
    // circle(390, 290, 5);
    // circle(410,290,5);
    stroke("brown");
    ellipse(390, 290, 10, 5);
    ellipse(410, 290, 10, 5);

    //PUPILS
    //stroke("black");
    fill("black");
    circle(390, 290, 2);
    circle(410, 290, 2);

    //MOUTH
    arc(400, 310, 20, 10, 0, Math.PI);


}