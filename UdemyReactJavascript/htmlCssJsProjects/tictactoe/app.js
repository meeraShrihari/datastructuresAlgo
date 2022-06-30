const tiles = Array.from(document.querySelectorAll('.grid-item'));
const winningArray = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const board = ['','','','','','','','','']
let currentPlayer = 'X';

const changePlayer = function() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

}
const userAction = function(tile, index) {
    tile.innerText = currentPlayer;
    //updateBoard(index);
    //handleResult();
    changePlayer();
}

tiles.forEach((tile, index) => {
    console.log(currentPlayer);
    tile.addEventListener('click', () => userAction(tile, index));
})

