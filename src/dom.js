const boardElementOne = document.querySelector("#board-1");
const boardElementTwo = document.querySelector("#board-2");

const createGameBoardGrid = (boardOne, boardTwo, currentBoard) => {
  boardElementOne.classList.toggle("active", currentBoard === boardOne);
  boardElementTwo.classList.toggle("active", currentBoard === boardTwo);

  boardElementOne.innerHTML = "";
  boardElementTwo.innerHTML = "";

  const boards = [
    { board: boardOne, element: boardElementOne },
    { board: boardTwo, element: boardElementTwo },
  ];

  boards.forEach(({ board, element }) => {
    const columns = [];

    for (let j = 0; j < board[0].length; j++) {
      const column = [];
      for (let i = 0; i < board.length; i++) {
        column.push(board[i][j]);
      }
      columns.push(column);
    }

    columns.forEach((column, x) => {
      const boardColumn = document.createElement("div");
      boardColumn.classList.add("board-column");
      element.appendChild(boardColumn);
      column.forEach((cell, y) => {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.dataset.y = `${x}`;
        grid.dataset.x = `${y}`;
        boardColumn.appendChild(grid);
        if (!Number.isInteger(cell) && board == boardOne) {
          grid.classList.add("ship");
        }

        if (cell == 1) {
          grid.classList.add("missed");
        }
        if (cell[1] && cell[1].hitMarker === "x") {
          grid.classList.add("hit");
          if (cell[0].status === true) {
            grid.classList.add("sunk");
          }
        }
      });
    });
  });
  console.log(boardOne, boardTwo);
};

export default createGameBoardGrid;
