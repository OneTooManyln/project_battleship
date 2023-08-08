import createGameBoardGrid from "./dom";
import GameBoard from "./factories/gameBoard";
import Player from "./factories/player";

const game = () => {
  const playerOne = new Player("Player 1");
  const playerTwo = new Player("Computer");

  const playerOneBoard = new GameBoard();
  const playerTwoBoard = new GameBoard();

  playerOneBoard.placeShipRandomly();
  playerTwoBoard.placeShipRandomly();

  createGameBoardGrid(playerOneBoard.board, playerTwoBoard.board);

  // listen for cell click
  document.addEventListener("click", (e) => {
    if (e.target.closest(".grid")) {
      getCoordinates(e.target.dataset);
    }
  });

  const getCoordinates = (coordinates) => {
    let iter = 0;

    for (const attr in coordinates) {
      if (iter === 0) {
        const yCoord = coordinates[attr];
        iter++;
        console.log(coordinates[attr[0]]);
      } else if (iter === 1) {
        const xCoord = coordinates[attr];
        iter++;
      }
    }
  };
};

export default game;
