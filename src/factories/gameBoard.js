import ship from "./ship";

export default class gameBoard {
  constructor() {
    this.board = Array(10)
      .fill(0)
      .map(() => Array(10).fill(0));
    this.ships = [];
  }

  placeShip(x, y, length, direction) {
    const newShip = new ship(2, length);

    for (let i = 0; i < length; i++) {
      if (direction === "vertical") {
        this.board[x + i][y] = 1;
      } else {
        this.board[x][y + i] = 1;
      }
    }
    this.ships.push(newShip);
    return this.board;
  }

  recieveAttack(x, y) {
    if (this.board[x][y] === 1) {
      return true;
    }
    return false;
  }
}
