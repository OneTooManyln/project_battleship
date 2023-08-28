import GameBoard from "../gameBoard";
import Ship from "../ship";

describe("Gameboard", () => {
  let gameBoard;

  beforeEach(() => {
    gameBoard = new GameBoard();
  });

  test("creates new GameBoard", () => {
    expect(gameBoard).toEqual({
      board: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ],
      ships: [],
    });
  });

  test("places a ship", () => {
    gameBoard.placeShip(2, 2, 5, true);
    expect(gameBoard.placeShip()).toEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [
        0,
        0,
        {
          hits: 0,
          id: "ship_2_2",
          isVertical: true,
          length: 5,
          status: false,
        },
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ],
      [
        0,
        0,
        {
          hits: 0,
          id: "ship_2_2",
          isVertical: true,
          length: 5,
          status: false,
        },
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ],
      [
        0,
        0,
        {
          hits: 0,
          id: "ship_2_2",
          isVertical: true,
          length: 5,
          status: false,
        },
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ],
      [
        0,
        0,
        {
          hits: 0,
          id: "ship_2_2",
          isVertical: true,
          length: 5,
          status: false,
        },
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ],
      [
        0,
        0,
        {
          hits: 0,
          id: "ship_2_2",
          isVertical: true,
          length: 5,
          status: false,
        },
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });

  test("places ships randomly", () => {
    const boardArray = gameBoard.placeShipRandomly();
    const ships = new Set(
      boardArray.flat().filter((cell) => cell instanceof Ship),
    );
    expect(ships.size).toEqual(5);
  });

  test("doesn't place ship out of bounds", () => {
    expect(gameBoard.placeShip(6, 2, 5, true)).toEqual(false);
  });

  test("doesn't place ship in taken cell", () => {
    gameBoard.placeShip(2, 2, 5, true);
    expect(gameBoard.placeShip(2, 2, 5, true)).toEqual(false);
  });

  test("recieves attack", () => {
    gameBoard.placeShip(2, 2, 5, true);
    expect(gameBoard.recieveAttack(2, 2)).toEqual(true);
  });

  test("checks if all ships are sunk", () => {
    gameBoard.placeShip(2, 2, 5, true);
    gameBoard.recieveAttack(2, 2);
    expect(gameBoard.areAllSunk()).toEqual(false);
  });

  test("finds ship given coordinates", () => {
    gameBoard.placeShip(2, 2, 5, true);
    expect(gameBoard.findShip(2, 2)).toEqual({
      hits: 0,
      id: "ship_2_2",
      length: 5,
      isVertical: true,
      status: false,
    });
  });
  test("removes ship from board & ships", () => {
    gameBoard.placeShip(2, 2, 5, true);
    expect(gameBoard.removeShip(2, 2)).toEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });
});
