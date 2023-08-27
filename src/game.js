import createGameBoardGrid, { updateGrid } from "./dom";
import GameBoard from "./factories/gameBoard";
import Player from "./factories/player";

const game = () => {
  const player = new Player("Player");
  const computer = new Player("Computer");
  const playerGameBoard = new GameBoard();
  const computerGameBoard = new GameBoard();
  let hasGameStarted = false;
  let isGameOver = false;

  computerGameBoard.placeShipRandomly();
  playerGameBoard.placeShipRandomly();

  createGameBoardGrid(
    playerGameBoard.board,
    computerGameBoard.board,
    hasGameStarted,
  );

  const handleCellClick = async (coordinates) => {
    const getCoordinates = (coordinates) => {
      let iter = 0;
      let xCoord;
      let yCoord;

      for (const attr in coordinates) {
        if (iter === 0) {
          yCoord = coordinates[attr];
          iter++;
        } else if (iter === 1) {
          xCoord = coordinates[attr];
          iter++;
        }
      }
      return { xCoord, yCoord };
    };

    const { xCoord, yCoord } = getCoordinates(coordinates);

    player.attackShip(xCoord, yCoord, computerGameBoard);
    computerGameBoard.updateBoardsShips();
    updateGrid(1);
    if (computerGameBoard.areAllSunk()) {
      console.log("Player Wins!");
      isGameOver = true;
    }

    createGameBoardGrid(
      playerGameBoard.board,
      computerGameBoard.board,
      hasGameStarted,
    );

    await new Promise((resolve) => setTimeout(resolve, 800));

    computer.attackRandomly(playerGameBoard);
    playerGameBoard.updateBoardsShips();
    updateGrid(0);
    if (playerGameBoard.areAllSunk()) {
      console.log("Computer Wins!");
      isGameOver = true;
    }

    createGameBoardGrid(
      playerGameBoard.board,
      computerGameBoard.board,
      hasGameStarted,
    );
  };

  document.addEventListener("click", (e) => {
    if (e.target.closest(".start-btn")) {
      hasGameStarted = true;
      updateGrid(0);
      return;
    } else if (e.target.closest(".grid") && hasGameStarted) {
      const clickedBoard = e.target.closest(".board").id;

      if (clickedBoard !== "board-2") {
        return;
      } else {
        handleCellClick(e.target.dataset);
      }
    } else return;
  });
};

export default game;
