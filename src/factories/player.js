export default class player {
  constructor(name) {
    this.name = name;
  }

  isAttackValid(x, y, gameBoard) {
    const cell = gameBoard.board[x][y];
    if (cell === 1 || (cell[1] && cell[1].hitMarker === "x")) {
      return false;
    }

    return true;
  }

  attackShip(x, y, gameBoard) {
    if (!this.isAttackValid(x, y, gameBoard)) {
      return false;
    }

    gameBoard.recieveAttack(x, y);
    return gameBoard.board;
  }

  attackRandomly(gameboard) {
    let xCoordinate = Math.floor(Math.random() * 10);
    let yCoordinate = Math.floor(Math.random() * 10);

    gameboard.recieveAttack(xCoordinate, yCoordinate);

    return gameboard.board;
  }
}
