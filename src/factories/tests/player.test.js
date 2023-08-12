import GameBoard from "../gameBoard";
import Player from "../player";
import Ship from "../ship";

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
      [0, 0, "x", 0, 0, 0, 0, 0, 0, 0],
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

  test("attacks randomly", () => {
    enemyGameBoard.placeShip(2, 2, 5, "vertical");

    try {
      const enemyBoard = player.attackRandomly(enemyGameBoard);
      const randomAttack = new Set(
        enemyBoard.flat().filter((cell) => cell === 1),
      );
      expect(randomAttack.has(1)).toEqual(true);
    } catch (error) {
      const enemyBoard = player.attackRandomly(enemyGameBoard);
      const randomAttack = new Set(
        enemyBoard
          .flat()
          .filter((cell) => cell instanceof Ship && cell.hits === 1),
      );
      expect(randomAttack.size).toEqual(1);
    }
  });
});
