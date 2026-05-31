const canvas = document.getElementById("canvas");
const newBoardButton = document.getElementById("new-sketch");
const row = document.querySelectorAll(".row");
const col = document.querySelectorAll(".col");
let boardSize = 16;

createBoard(boardSize);

newBoardButton.addEventListener("click", () => {
    boardSize = prompt("Input the size of the board", "e.g 16")
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild)
    }
    if (boardSize >= 0 && boardSize <= 100) {
        createBoard(boardSize);
    }
    else alert("ERROR, please input a number more than 0 and less than 100")
})


canvas.addEventListener("mouseover", function (e) {
    if (e.target.className === "col") {
        let opacity = 0;
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);

        if (e.target.style.backgroundColor == "") e.target.style.backgroundColor = `rgb(${r},${g},${b})`;

        if (e.target.style.opacity <= 1) {
            while (opacity.toFixed(1) !== e.target.style.opacity) {
                opacity += 0.2
                if (opacity.toFixed(1) == e.target.style.opacity) opacity += 0.2
                if (opacity > e.target.style.opacity) e.target.style.opacity = `${opacity}`;
            }
        }
    }
})


function createBoard(boardSize) {
    for (let i = 0; i < boardSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        canvas.appendChild(row);
        for (let j = 0; j < boardSize; j++) {
            const col = document.createElement("div");
            col.classList.add("col")
            row.appendChild(col);
        }
    }
}