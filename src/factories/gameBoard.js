export default class gameBoard {
  constructor() {
    this.board = Array(10)
      .fill(0)
      .map(() => Array(10).fill(0));
  }

  placeShip(x, y, length, direction) {
    for (let i = 0; i < length; i++) {
      if (direction === "vertical") {
        this.board[x + i][y] = 1;
      } else {
        this.board[x][y + i] = 1;
      }
    }
    return this.board;
  }

  recieveAttack(x, y) {
    let hitStatus = false;

    if (this.board[x][y] === 1) {
      hitStatus = true;
    }
    return hitStatus;
  }
}
