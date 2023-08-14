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

  let currentPlayer = playerOne;
  let currentGameBoard = playerTwoBoard;

  // listen for cell click
  document.addEventListener("click", (e) => {
    if (e.target.closest(".grid")) {
      getCoordinates(e.target.dataset);
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
    updateSunkShips();
    createGameBoardGrid(playerOneBoard.board, playerTwoBoard.board);
  };

  const updateSunkShips = () => {
    let sunkShip = currentGameBoard.ships.find((ship) => ship.status === true);
    if (!sunkShip) return false;
    currentGameBoard.board.forEach((row) => {
      row.forEach((cell) => {
        if (cell[0] && cell[0].id === sunkShip.id) {
          cell[0].status = true;
        }
      });
    });
  };
};

export default game;
