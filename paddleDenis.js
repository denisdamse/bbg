let paddleDenis={
    x:tablewidth/2,
    y:500,
    color:"#00ff00",
    width:80,
    height:10
}
function createPaddleDenis()
{
    fill(paddleDenis.color)
    paddleDenis.x=mouseX-paddleDenis.width/2;
    rect(paddleDenis.x,paddleDenis.y,paddleDenis.width,paddleDenis.height)
}