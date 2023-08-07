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
    gameBoard.placeShip(2, 2, 5, "vertical");
    expect(gameBoard.placeShip()).toEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [
        0,
        0,
        {
          hits: 0,
          id: "ship_2_2",
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
    expect(gameBoard.placeShip(6, 2, 5, "vertical")).toEqual(false);
  });

  test("doesn't place ship in taken cell", () => {
    gameBoard.placeShip(2, 2, 5, "vertical");
    expect(gameBoard.placeShip(2, 2, 5, "vertical")).toEqual(false);
  });

  test("recieves attack", () => {
    gameBoard.placeShip(2, 2, 5, "vertical");
    expect(gameBoard.recieveAttack(2, 2)).toEqual(true);
  });

  test("checks if all ships are sunk", () => {
    gameBoard.placeShip(2, 2, 5, "vertical");
    gameBoard.recieveAttack(2, 2);
    expect(gameBoard.areAllSunk()).toEqual(false);
  });
});
