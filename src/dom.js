const boardElementOne = document.querySelector("#board-1");
const boardElementTwo = document.querySelector("#board-2");

const createGameBoardGrid = (boardOne, boardTwo) => {
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

    columns.forEach((column) => {
      const boardColumn = document.createElement("div");
      boardColumn.classList.add("board-column");
      element.appendChild(boardColumn);
      column.forEach((cell) => {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        boardColumn.appendChild(grid);
        if (!Number.isInteger(cell) && board == boardOne) {
          grid.classList.add("ship");
        }
      });
    });
  });
};

export default createGameBoardGrid;
