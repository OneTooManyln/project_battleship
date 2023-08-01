export default class player {
  constructor(name) {
    this.name = name;
  }

  attackShip(x, y, gameBoard) {
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
