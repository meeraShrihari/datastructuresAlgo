// Create array to hold board data
let boardData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

// Pull in cells from DOM
const cellElements = document.querySelectorAll('.cell');
const winnerId = document.getElementById('winner-id');
const board = document.querySelector('.board');
const restart = document.getElementById('restart');
console.log(cellElements);

let player = "x";
let winStatus = false;
// Add EventListener

cellElements.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        placeMarker(cell, index);
        checkWin();
    });
});

restart.addEventListener('click', () => {
    boardData = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    player = "x";
    winStatus = false;
    cellElements.forEach(cell => {
        cell.classList.remove("circle", "cross");
    });
    board.style.pointerEvents = 'auto';
    winnerId.innerText = '';
});
//Create function for placing markers

const placeMarker = (cell, index) => {
    let col = index % 3;
    let row = (index - col ) / 3;
    if(boardData[row][col] === 0) {
        boardData[row][col] = player;
        changePlayer(cell);
    }
}

const changePlayer = (cell) => {
    if(player === "x") cell.classList.add('cross');
    else if(player === "o") cell.classList.add('circle');
    player = player === "x" ? "o" : "x";
}

const checkWin = () => {
    if(
        (boardData[0][0] !== 0 && boardData[0][0] === boardData[0][1] && boardData[0][1] === boardData[0][2]) ||
        (boardData[1][0] !== 0 && boardData[1][0] === boardData[1][1] && boardData[1][1] === boardData[1][2]) ||
        (boardData[2][0] !== 0 && boardData[2][0] === boardData[2][1] && boardData[2][1] === boardData[2][2]) ||
        (boardData[0][0] !== 0 && boardData[0][0] === boardData[1][0] && boardData[1][0] === boardData[2][0]) ||
        (boardData[0][1] !== 0 && boardData[0][1] === boardData[1][1] && boardData[1][1] === boardData[2][1]) ||
        (boardData[0][2] !== 0 && boardData[0][2] === boardData[1][2] && boardData[1][2] === boardData[2][2]) ||
        (boardData[0][0] !== 0 && boardData[0][0] === boardData[1][1] && boardData[1][1] === boardData[2][2]) ||
        (boardData[0][2] !== 0 && boardData[0][2] === boardData[1][1] && boardData[1][1] === boardData[2][0]) 
    ) {
        console.log('Found a winner');
        if(winnerId.classList.contains('no-winner')) {
            winnerId.classList.remove('no-winner');
            winnerId.classList.add('winner');
            winnerId.innerText = 'Winner is ' + (player === 'x' ? 'O' : 'X');
            board.style.pointerEvents = 'none';
        }
    } else {
        if(
            boardData[0].indexOf(0) === -1 &&
            boardData[1].indexOf(0) === -1 &&
            boardData[2].indexOf(0) === -1
        ) {
            console.log('Game is a draw');
            winnerId.classList.add('winner');
            winnerId.innerText = 'It is a Draw !';
        }
    }
}