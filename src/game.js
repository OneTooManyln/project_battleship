import GameBoard from "./factories/gameBoard";
import Player from "./factories/player";

export const game = (() => {
  const player = new Player("Player 1");
  const computer = new Player("Computer");

  const playerBoard = new GameBoard();
  const computerBoard = new GameBoard();

  playerBoard.placeShipRandomly();
  computerBoard.placeShipRandomly();
})();
