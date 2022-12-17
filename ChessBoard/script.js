const Board = document.getElementById("Board");

const column = ["a", "b", "c", "d", "e", "f", "g", "h"];

console.log(column[0]);

const CreateWhiteBox = (letter, number) => {
  const Box = document.createElement("div");

  Box.setAttribute("class", "white box");

  Box.setAttribute("id", `${letter}${number}`);

  return Box;
};

const CreateBlackBox = (letter, number) => {
  const Box = document.createElement("div");

  Box.setAttribute("class", "black box");
  Box.setAttribute("id", `${letter}${number}`);

  return Box;
};

let IndexNumber = 8;

for (let i = 1; i <= 8; i++) {
  for (let j = 1; j <= 8; j++) {
    if (i % 2 !== 0) {
      if (j % 2 !== 0) {
        let a = column[j - 1];
        let box = CreateWhiteBox(a, IndexNumber);

        Board.append(box);
      } else {
        Board.append(CreateBlackBox(column[j - 1], IndexNumber));
      }
    } else {
      if (j % 2 === 0) {
        Board.append(CreateWhiteBox(column[j - 1], IndexNumber));
      } else {
        let box = CreateBlackBox(column[j - 1], IndexNumber);

        Board.append(box);
      }
    }
  }
  IndexNumber--;
}

const Boxes = document.querySelectorAll(".box");

Boxes.forEach((item, index) => {
  // from line 58 -77 is for adding pieces to black player

  if (index === 0 || index == 7) {
    item.style.color = `#000`;
    item.innerHTML = `<i class="fa-solid fa-chess-rook B piece" id=${index}></i>`;
  } else if (index === 1 || index === 6) {
    item.style.color = `#000`;
    item.innerHTML = `<i class="fa-solid fa-chess-knight B piece" id=${index}></i>`;
  } else if (index === 2 || index === 5) {
    item.style.color = `#000`;
    item.innerHTML = `<i class="fa-solid fa-chess-bishop B piece" id=${index}></i>`;
  } else if (index === 3) {
    item.style.color = `#000`;
    item.innerHTML = `<i class="fa-solid fa-chess-queen B piece" id=${index}></i>`;
  } else if (index === 4) {
    item.style.color = `#000`;
    item.innerHTML = `<i class="fa-solid fa-chess-king B piece" id=${index}></i>`;
  }

  let num = 8;

  while (num < 16) {
    if (index === num) {
      item.style.color = `#000`;
      item.innerHTML = `<i class="fa-solid fa-chess-pawn B piece" id=${num}></i>`;
    }
    num++;
  }

  // from line 85 - 110 is for adding pieces to white player

  if (index === 56 || index == 63) {
    item.style.color = `#fff`;
    item.innerHTML = `<i class="fa-solid fa-chess-rook W piece" id=${index}></i>`;
  } else if (index === 57 || index === 62) {
    item.style.color = `#fff`;
    item.innerHTML = `<i class="fa-solid fa-chess-knight W piece" id=${index}></i>`;
  } else if (index === 58 || index === 61) {
    item.style.color = `#fff`;
    item.innerHTML = `<i class="fa-solid fa-chess-bishop W piece" id=${index}></i>`;
  } else if (index === 59) {
    item.style.color = `#fff`;
    item.innerHTML = `<i class="fa-solid fa-chess-queen W piece" id=${index}></i>`;
  } else if (index === 60) {
    item.style.color = `#fff`;
    item.innerHTML = `<i class="fa-solid fa-chess-king W piece" id=${index}></i>`;
  }

  let start = 48;

  while (start < 56) {
    if (index === start) {
      item.style.color = `#fff`;

      item.innerHTML = `<i class="fa-solid fa-chess-pawn W piece" id=${start}></i>`;
    }
    start++;
  }
});

// Following logic is for Drag and drop Pieces

const Pieces = document.querySelectorAll("i");

Pieces.forEach((piece) => {
  piece.setAttribute("draggable", true);
});

Pieces.forEach((piece) => {
  piece.addEventListener("dragstart", (e) => {
    const PieceName = e.target.getAttribute("id");

    e.dataTransfer.setData("text/plain", PieceName);

    console.log(PieceName);
  });
});

Boxes.forEach((box) => {
  box.addEventListener("dragenter", (e) => {
    e.preventDefault();
  });
});

Boxes.forEach((box) => {
  box.addEventListener("dragleave", (e) => {
    e.preventDefault();
  });
});

Boxes.forEach((box) => {
  box.addEventListener("drop", (e) => {
    e.preventDefault();

    const PieceName = e.dataTransfer.getData("text/plain");

    e.currentTarget.append(document.querySelector(`i[id='${PieceName}']`));
  });
});
Boxes.forEach((box) => {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
});
