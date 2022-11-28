const Board = document.getElementById("Board");

const CreateWhiteBox = () => {
  const Box = document.createElement("div");

  Box.setAttribute("class", "white");

  return Box;
};

const CreateBlackBox = () => {
  const Box = document.createElement("div");

  Box.setAttribute("class", "black");

  return Box;
};

for (let i = 1; i <= 8; i++) {
  for (let j = 1; j <= 8; j++) {
    if (i % 2 !== 0) {
      if (j % 2 !== 0) {
        Board.append(CreateWhiteBox());
      } else {
        Board.append(CreateBlackBox());
      }
    } else {
      if (j % 2 === 0) {
        Board.append(CreateWhiteBox());
      } else {
        Board.append(CreateBlackBox());
      }
    }
  }
}
