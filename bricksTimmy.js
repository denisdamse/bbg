let bricksTimmy = []

const bricksRowsTimmy = 1 
const bricksColsTimmy = 1
const rowBricksNumberTimmy = 4

function initBriksTimmy() {
    for (let i = 0; i < bricksRowsTimmy * rowBricksNumberTimmy; i++) {
        bricksTimmy.push({
            hit: false,
            x: i*70,
            y: 15,
            color: "brown",
            width: 50,
            height: 20,
        })
    }
}

function createBicksTimmy() {

    bricksTimmy.forEach(brick => {
        fill(brick.color);
        rect(brick.x, brick.y, brick.width, brick.height)
    })
 
}