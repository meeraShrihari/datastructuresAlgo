const cells = document.querySelectorAll('.cell');
const winner = document.querySelector('.winner');
const restartBtn = document.querySelector('.restart_btn');

let player = 'X';
let draw = false;
let count = 0;

let board = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];
cells.forEach((cell, idx) => {
    cell.addEventListener('click', () => {
        markPlayer(cell, idx);
        checkWinner();
        if(count === 9 && draw) {
            winner.innerHTML = '<h2>Game is a Draw!</h2>';
        }
    })
})

function markPlayer(cell, idx) {
    let col = idx % 3;
    let row = Math.floor(idx / 3);
    console.log(row, col);
    board[row][col] = player === 'X' ? 1 : 2;
    if(player === 'X') {
        cell.innerText = 'X';
        player = 'O';
    } else if(player === 'O') {
        cell.innerText = 'O';
        player = 'X';
    }
    console.log(board);
}

function checkWinner() {
    // if(board[0][0] && board[0][0] === board[0][1] && board[0][1] === board[0][2]) {
    //     return board[0][0];
    // } else if(board[1][0] && board[1][0] === board[1][1] && board[1][1] === board[1][2]) {
    //     return board[1][0];
    // } else if(board[2][0] && board[2][0] === board[2][1] && board[2][1] === board[2][2]) {
    //     return board[2][0];
    // } else if(board[0][0] && board[0][0] === board[1][0] && board[1][0] === board[2][0]) {
    //     return board[0][0];
    // } else if(board[0][1] && board[0][1] === board[1][1] && board[1][1] === board[2][1]) {
    //     return board[0][1];
    // } else if(board[0][2] && board[0][2] === board[1][2] && board[1][2] === board[2][2]) {
    //     return board[0][2];
    // } else if(board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    //     return board[0][0];
    // } else if(board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    //     return board[0][2];
    // } else {
    //     return '';
    // }
    if(
        board[0][0] && board[0][0] === board[0][1] && board[0][1] === board[0][2] ||
        board[1][0] && board[1][0] === board[1][1] && board[1][1] === board[1][2] ||
        board[2][0] && board[2][0] === board[2][1] && board[2][1] === board[2][2] ||
        board[0][0] && board[0][0] === board[1][0] && board[1][0] === board[2][0] ||
        board[0][1] && board[0][1] === board[1][1] && board[1][1] === board[2][1] ||
        board[0][2] && board[0][2] === board[1][2] && board[1][2] === board[2][2] ||
        board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2] ||
        board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]
    ) {
        winner.innerHTML = `<h2>The Winner is Player ${player === 'X' ? 'O' : 'X'}!!</h2>`;
        reset();
        draw = false;
    } else {
        draw = true;
    }
    count++;
}

function reset() {
    cells.forEach(cell => {
        cell.classList.add('not_active');
    })
}

restartBtn.addEventListener('click', () => {
    board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    cells.forEach(cell => {
        cell.innerText = '';
    });
    winner.innerHTML = '';
})