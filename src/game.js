import createGameBoardGrid, { setDisplayTitle, updateGrid } from "./dom";
import GameBoard from "./factories/gameBoard";
import Player from "./factories/player";

const game = () => {
  const player = new Player("Player");
  const computer = new Player("Computer");
  const playerGameBoard = new GameBoard();
  const computerGameBoard = new GameBoard();
  let hasGameStarted = false;
  let isGameOver = false;
  let selectedShip = null;

  computerGameBoard.placeShipRandomly();
  playerGameBoard.placeShipRandomly();

  createGameBoardGrid(
    playerGameBoard.board,
    computerGameBoard.board,
    hasGameStarted,
  );

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

  const handleCellClick = async (coordinates) => {
    const handlePlayerTurn = async () => {
      const { xCoord, yCoord } = getCoordinates(coordinates);

      player.attackShip(xCoord, yCoord, computerGameBoard);
      computerGameBoard.updateBoardsShips();
      updateGrid(1);
      createGameBoardGrid(
        playerGameBoard.board,
        computerGameBoard.board,
        hasGameStarted,
      );
      if (computerGameBoard.areAllSunk()) {
        setDisplayTitle("Player Wins!");
        isGameOver = true;
        return;
      } else setDisplayTitle("Computer's Turn");
    };

    handlePlayerTurn();

    await new Promise((resolve) => setTimeout(resolve, 800));

    const handleComputerTurn = () => {
      computer.attackRandomly(playerGameBoard);
      playerGameBoard.updateBoardsShips();
      updateGrid(0);
      createGameBoardGrid(
        playerGameBoard.board,
        computerGameBoard.board,
        hasGameStarted,
      );
      if (playerGameBoard.areAllSunk()) {
        setDisplayTitle("Computer Wins!");
        isGameOver = true;
        return;
      } else setDisplayTitle("Player's Turn");
    };

    handleComputerTurn();
  };

  document.addEventListener("click", (e) => {
    if (e.target.closest(".start-btn")) {
      hasGameStarted = true;
      updateGrid(0);
      setDisplayTitle("Player's Turn");
      return;
    } else if (e.target.closest(".grid") && hasGameStarted) {
      const clickedBoard = e.target.closest(".board").id;

      if (clickedBoard !== "board-2") {
        return;
      } else {
        handleCellClick(e.target.dataset);
      }
    } else if (e.target.closest("#board-1")) {
      const clickedShip = e.target.closest(".ship");

      if (clickedShip) {
        const { xCoord, yCoord } = getCoordinates(clickedShip.dataset);
        selectedShip = {
          x: xCoord,
          y: yCoord,
        };
      } else if (selectedShip) {
        const { xCoord, yCoord } = getCoordinates(e.target.dataset);

        playerGameBoard.moveShip(
          selectedShip.x,
          selectedShip.y,
          parseInt(xCoord),
          parseInt(yCoord),
        );
        selectedShip = null;

        createGameBoardGrid(
          playerGameBoard.board,
          computerGameBoard.board,
          hasGameStarted,
        );
      }
    } else return;
  });
};

export default game;
