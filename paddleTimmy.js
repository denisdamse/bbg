let pdTimmy={
    x: tablewidth/2,
    y:500,
    color:"black",
    width: 80,
    height: 10
}

function createPaddleTimmy() {
    fill(pdTimmy.color)
    pdTimmy.x = mouseX - pdTimmy.width/2;
    rect(pdTimmy.x, pdTimmy.y, pdTimmy.width, pdTimmy.height)
}