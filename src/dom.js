const boards = document.querySelectorAll(".board");

export const createGameBoardGrid = () => {
  const columns = [];

  const populateColumns = (() => {
    for (let i = 0; i < 10; i++) {
      columns.push("");
    }
  })();

  boards.forEach((board) => {
    columns.forEach(() => {
      const boardColumn = document.createElement("div");
      boardColumn.classList.add("board-column");
      board.appendChild(boardColumn);
      for (let i = 0; i < 10; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        boardColumn.appendChild(grid);
      }
    });
  });
};
