let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let msgContainer = document.querySelector(".msg");

let turnO = false;

let winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.innerText = turnO ? "0" : "X";
    turnO = !turnO;
    box.disabled = true;

    checkWinner();
  });
});

const disableBtns = () => {
  for (const box of boxes) {
    box.disabled = true;
  }
};

const enableBtns = () => {
  for (const box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const resetGame = () => {
  turnO = false;
  msgContainer.innerText = "";
  enableBtns();
};

const checkWinner = () => {
  for (let pattern of winningPatterns) {
    const [first, second, third] = pattern;

    const pos1Val = boxes[first].innerText;
    const pos2Val = boxes[second].innerText;
    const pos3Val = boxes[third].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        msgContainer.innerText = `Winner is ${pos1Val}`;
        disableBtns();
      }
    }
  }
};

resetBtn.addEventListener("click", resetGame);
