import game from "./game";

const startGameBtn = document.querySelector(".start-btn");

startGameBtn.addEventListener("click", () => {
  game();
  startGameBtn.disabled = true;
});
