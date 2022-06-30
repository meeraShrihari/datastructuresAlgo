const boxes = Array.from(document.getElementsByClassName('box'));
const playText = document.getElementById('playText')

const spaces = [null, null, null, null, null, null, null, null, null];
const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = O_TEXT;

const drawBoard = () => {
    boxes.forEach((box, index) => {
        let styleString = '';
        if(index< 3) {
            styleString += `border-bottom: 3px solid var(--purple);`;
        }
        if(index % 3 === 0) {
            styleString += `border-right: 3px solid var(--purple);`;
        }
        if(index % 3 === 2) {
            styleString += `border-left: 3px solid var(--purple);`;
        }
        if(index > 5) {
            styleString += `border-top: 3px solid var(--purple);`;
        }
        box.style = styleString;
        box.addEventListener('click', boxClicked);
    })
}

const playerHasWon = () => {
    if(spaces[0] === currentPlayer) {
        if(spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
            console.log(`${currentPlayer} has wins top !!`);
            return true;
        }
        if(spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
            console.log(`${currentPlayer} has wins left !!`);
            return true;
        }
        if(spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
            console.log(`${currentPlayer} has wins left diagonal !!`);
            return true;
        }
    }

    if(spaces[1] === currentPlayer) {
        if(spaces[4] === currentPlayer && spaces[7] === currentPlayer) {
            console.log(`${currentPlayer} has wins middle vertical !!`);
            return true;
        }
    }

    if(spaces[2] === currentPlayer) {
        if(spaces[4] === currentPlayer && spaces[6] === currentPlayer) {
            console.log(`${currentPlayer} has wins right diagonal !!`);
            return true;
        }
        if(spaces[5] === currentPlayer && spaces[8] === currentPlayer) {
            console.log(`${currentPlayer} has wins right !!`);
            return true;
        }
    }

    if(spaces[3] === currentPlayer) {
        if(spaces[4] === currentPlayer && spaces[5] === currentPlayer) {
            console.log(`${currentPlayer} has wins middle horizontal !!`);
            return true;
        }
    }

    if(spaces[6] === currentPlayer) {
        if(spaces[7] === currentPlayer && spaces[8] === currentPlayer) {
            console.log(`${currentPlayer} has wins bottom !!`);
            return true;
        }
    }
}

const boxClicked = (e) => {
    const id = e.target.id;
    if(!spaces[id]) {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;
        if(playerHasWon()) {
            playText.innerText = `${currentPlayer} has won !!`;
            return;
        }
        currentPlayer = currentPlayer === O_TEXT ? X_TEXT : O_TEXT;
    }
}

drawBoard();
