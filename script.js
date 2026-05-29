const canvas = document.getElementById("canvas");
const newBoardButton = document.getElementById("new-sketch");
let boardSize = 16;

createBoard(boardSize);

newBoardButton.addEventListener("click", () => {
    const row = document.querySelectorAll(".row");
    boardSize = prompt("Input the size of the board", "e.g 16")
    if (boardSize >= 0 && boardSize <= 100) {
        row.forEach(row => row.remove());
        createBoard(boardSize);
    }
    else alert("ERROR")
})

function createBoard(boardSize) {
    for (let i = 0; i < boardSize; i++) {
        const row = document.createElement("div");
        row.className = "row";
        canvas.appendChild(row);
        for (let j = 0; j < boardSize; j++) {
            const col = document.createElement("div");
            col.className = "col";
            row.appendChild(col);

            col.addEventListener("mouseenter", () => {
                col.style.backgroundColor = "black"
            });
        }
    }
}