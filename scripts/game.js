var boardCanvas = document.querySelector("#game-board canvas");
var context = boardCanvas.getContext("2d");

context.strokeStyle = "black";
let x = 0;
let y = 0;
tuiles = [];
for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
        context.strokeRect(x, y, boardCanvas.width / 3, boardCanvas.height / 3);
        x += boardCanvas.width / 3;
        tuiles.push({ x: x + 200, y: y + 100, width: boardCanvas.width / 3, height: boardCanvas.height / 3 });
    }
    x = 0;
    y += boardCanvas.height / 3;
}



boardCanvas.addEventListener('click', (event) => {
    tuiles.forEach((tuile) => {
        if (event.clientX >= tuile.x && event.clientX <= tuile.x + tuile.width &&
            event.clientY >= tuile.y && event.clientY <= tuile.y + tuile.height) {

context.font = "30px Arial";
context.fillText("X", tuile.x + 50, tuile.y + 50);
            console.log(`Clicked on tile at (${tuile.x}, ${tuile.y})`);
        }
    });
});
