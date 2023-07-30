import GameBoard from "../gameBoard";
import Player from "../player";

describe("Player", () => {
  let enemyGameBoard;
  let player;

  beforeEach(() => {
    enemyGameBoard = new GameBoard();
    player = new Player("Player One");
  });

  test("creates new player", () => {
    expect(player).toEqual({ name: "Player One" });
  });

  test("attacks enemy", () => {
    enemyGameBoard.placeShip(2, 2, 5, "vertical");
    expect(player.attackShip(2, 2, enemyGameBoard)).toEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [
        0,
        0,
        {
          hits: 1,
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
          hits: 1,
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
          hits: 1,
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
          hits: 1,
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
          hits: 1,
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
});
