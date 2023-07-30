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
});
