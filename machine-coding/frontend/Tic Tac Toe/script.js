let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
];

const gameStatusDisplay = document.getElementById('game-status');

function cellClicked(cellIndex) {
    if (!gameActive || gameBoard[cellIndex] !== '') return;

    gameBoard[cellIndex] = currentPlayer;
    document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;

    if (checkWin()) {
        gameStatusDisplay.innerText = `${currentPlayer} wins!`;
        gameActive = false;
    } else if (!gameBoard.includes('')) {
        gameStatusDisplay.innerText = 'It\'s a tie!';
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        gameStatusDisplay.innerText = `${currentPlayer}'s turn`;
    }
}

function checkWin() {
    return winningCombos.some(combo => {
        return combo.every(index => {
            return gameBoard[index] === currentPlayer;
        });
    });
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    gameStatusDisplay.innerText = `${currentPlayer}'s turn`;

    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
}
