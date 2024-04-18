let bricksTimmy = []

const marginTimmy = 10
const distanceBetweenBricksTimmy = 10

const bricksRowsTimmy = 3
const rowBricksNumberTimmy = 7

const brickWidthTimmy = Math.floor((tablewidth - marginTimmy * 2 - (rowBricksNumberTimmy - 1) * distanceBetweenBricksTimmy) / rowBricksNumberTimmy);

function initBriksTimmy() {
    let x = marginTimmy;
    for (let i = 0; i < bricksRowsTimmy * rowBricksNumberTimmy; i++) {
        const row = Math.floor(i / rowBricksNumberTimmy) + 1;

        x = x + brickWidthTimmy + distanceBetweenBricksTimmy;   
        if (i % rowBricksNumberTimmy == 0) x = marginTimmy;

        bricksTimmy.push({
            hit: false,
            x,
            y: row * 35,
            color: "yellow",
            width: brickWidthTimmy,
            height: 20,
            row,
        });
    }
}

function createBicksTimmy() {

    bricksTimmy.forEach(brick => {
        fill(brick.color);
        rect(brick.x, brick.y, brick.width, brick.height)
    })

}