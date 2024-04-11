let pdTimmy={
    x: tablewidth/2,
    y:550,
    color:"black",
    width: 120,
    height: 15
}

function createPaddleTimmy() {
    fill(pdTimmy.color)
    pdTimmy.x = mouseX - pdTimmy.width/2;
    rect(pdTimmy.x, pdTimmy.y, pdTimmy.width, pdTimmy.height)
}