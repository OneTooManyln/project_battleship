export default class player {
  constructor(name) {
    this.name = name;
  }

  attackShip(x, y, gameBoard) {
    gameBoard.recieveAttack(x, y);
  }
}
