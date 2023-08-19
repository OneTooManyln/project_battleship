import ship from "./ship";

export default class gameBoard {
  constructor() {
    this.board = Array(10)
      .fill(0)
      .map(() => Array(10).fill(0));
    this.ships = [];
  }

  isCellEmpty(x, y) {
    return this.board[x][y] === 0;
  }

  placeShip(x, y, length, direction) {
    if (direction === "vertical") {
      if (x + length > this.board.length) {
        return false;
      }
    } else if (direction === "horizontal") {
      if (y + length > this.board[0].length) {
        return false;
      }
    }

    for (let i = 0; i < length; i++) {
      if (direction === "vertical") {
        if (!this.isCellEmpty(x + i, y)) {
          return false;
        }
      } else if (direction === "horizontal") {
        if (!this.isCellEmpty(x, y + i)) {
          return false;
        }
      }
    }

    const newShip = new ship(`ship_${x}_${y}`, length);

    for (let i = 0; i < length; i++) {
      if (direction === "vertical") {
        this.board[x + i][y] = newShip;
      } else {
        this.board[x][y + i] = newShip;
      }
    }
    this.ships.push(newShip);
    return this.board;
  }

  placeShipRandomly() {
    const shipLengths = [5, 4, 3, 3, 2];

    for (let i = 0; i < shipLengths.length; i++) {
      let isShipPlaced = false;

      while (!isShipPlaced) {
        let xPlacement = Math.floor(Math.random() * 10);
        let yPlacement = Math.floor(Math.random() * 10);
        let direction = Math.random() < 0.5 ? "vertical" : "horizontal";

        isShipPlaced = this.placeShip(
          xPlacement,
          yPlacement,
          shipLengths[i],
          direction,
        );
      }
    }
    return this.board;
  }

  recieveAttack(x, y) {
    const cell = this.board[x][y];
    if (cell instanceof ship) {
      cell.hit();
      this.board[x][y] = [{ ...this.board[x][y] }, { hitMarker: "x" }];
      cell.isSunk();
      return true;
    } else this.board[x][y] = 1;
    return false;
  }

  areAllSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }

  updateBoardsShips() {
    let sunkShips = this.ships.filter((ship) => ship.status === true);
    if (!sunkShips.length) return false;

    this.board.forEach((row) => {
      row.forEach((cell) => {
        if (sunkShips.some((ship) => cell[0] && cell[0].id === ship.id)) {
          cell[0].status = true;
        }
      });
    });
  }
}
