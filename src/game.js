import createGameBoardGrid from "./dom";
import GameBoard from "./factories/gameBoard";
import Player from "./factories/player";

const game = (() => {
  const playerOne = new Player("Player 1");
  const playerTwo = new Player("Computer");

  const playerOneBoard = new GameBoard();
  const playerTwoBoard = new GameBoard();

  playerOneBoard.placeShipRandomly();
  playerTwoBoard.placeShipRandomly();

  createGameBoardGrid(playerOneBoard.board, playerTwoBoard.board);
})();

export default game;
