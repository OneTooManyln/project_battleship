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

  let currentPlayer = playerOne;
  let currentGameBoard = playerTwoBoard;
  let isGameOver = false;

  createGameBoardGrid(
    playerOneBoard.board,
    playerTwoBoard.board,
    currentGameBoard.board,
  );

  document.addEventListener("click", async (e) => {
    if (e.target.closest(".grid")) {
      const clickedBoard = e.target.closest(".board").id;
      console.log(clickedBoard);

      if (currentPlayer === playerOne && clickedBoard === "board-2") {
        getCoordinates(e.target.dataset);
      } else {
        console.log("error");
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 600));

      if (currentPlayer === playerTwo) {
        console.log("computers turn");
        currentPlayer.attackRandomly(currentGameBoard);
        updateGame();
      }
    }
  });

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
    handleCellClick(xCoord, yCoord);
  };

  const handleCellClick = (x, y) => {
    currentPlayer.attackShip(x, y, currentGameBoard);
    currentGameBoard.updateBoardsShips();
    updateGame();
  };

  const updateGame = () => {
    if (playerOneBoard.areAllSunk() || playerTwoBoard.areAllSunk()) {
      isGameOver = true;
      console.log(isGameOver);
    } else {
      currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
      currentGameBoard =
        currentGameBoard === playerOneBoard ? playerTwoBoard : playerOneBoard;
    }
    createGameBoardGrid(
      playerOneBoard.board,
      playerTwoBoard.board,
      currentGameBoard.board,
    );
  };
};

export default game;
