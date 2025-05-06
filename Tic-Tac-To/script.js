const gameContainer = document.getElementById('gameContainer');
const gameStatus = document.getElementById('gameStatus');
let cells = [];
let currentPlayer = 'X';
let gameActive = true;
function createBoard() {
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click', () => makeMove(cell, i));
    gameContainer.appendChild(cell);
    cells.push('');
  }
}
function makeMove(cell, index) {
  if (cells[index] !== '' || !gameActive) return;
  
  cells[index] = currentPlayer;
  cell.textContent = currentPlayer;
  
  if (checkWin()) {
    gameStatus.textContent = `${currentPlayer} wins! 🎉`;
    gameActive = false;
  } else if (cells.every(cell => cell !== '')) {
    gameStatus.textContent = "It's a Draw! 🤝";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    gameStatus.textContent = `It's ${currentPlayer}'s turn`;
  }
}
function checkWin() {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], 
    [0,3,6], [1,4,7], [2,5,8], 
    [0,4,8], [2,4,6]           
  ];

  return winPatterns.some(pattern => 
    pattern.every(index => cells[index] === currentPlayer)
  );
}
function restartGame() {
  gameContainer.innerHTML = '';
  cells = [];
  currentPlayer = 'X';
  gameActive = true;
  gameStatus.textContent = "It's X's turn";
  createBoard();
}
createBoard();
gameStatus.textContent = "It's X's turn";
