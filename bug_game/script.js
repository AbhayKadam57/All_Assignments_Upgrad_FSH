const Upbtn = document.getElementById("up");
const Downbtn = document.getElementById("down");
const Leftbtn = document.getElementById("left");
const Rightbtn = document.getElementById("right");
const ClockWisebtn = document.getElementById("clockwise");
const AntiClockWisebtn = document.getElementById("anticlockwise");

const bug = document.querySelector(".bug");

let xPos = 0;

let yPos = 0;

let rotate = 0;

const SetTransform = () => {
  bug.style.top = `${yPos}px`;
  bug.style.left = `${xPos}px`;
};

const moveUp = () => {
  yPos > 0 && (yPos -= 10);

  SetTransform();
};

const moveDown = () => {
  yPos < 400 && (yPos += 10);

  console.log(yPos);

  SetTransform();
};

const moveLeft = () => {
  xPos > 0 && (xPos -= 10);

  console.log(xPos);

  SetTransform();
};

const moveRight = () => {
  xPos < 400 && (xPos += 10);

  console.log(xPos);

  SetTransform();
};

const RotateClockwise = () => {
  rotate += 90;

  bug.style.transform = `rotate(${rotate}deg)`;
};

const RotateAntiClockwise = () => {
  rotate -= 90;

  bug.style.transform = `rotate(${rotate}deg)`;
};

Upbtn.addEventListener("click", moveUp);

Downbtn.addEventListener("click", moveDown);

Leftbtn.addEventListener("click", moveLeft);

Rightbtn.addEventListener("click", moveRight);

ClockWisebtn.addEventListener("click", RotateClockwise);

AntiClockWisebtn.addEventListener("click", RotateAntiClockwise);

// keyborad Events

document.addEventListener("keydown", (e) => {
  const { key } = e;

  switch (key) {
    case "ArrowUp": {
      moveUp();
      break;
    }

    case "ArrowDown":
      moveDown();
      break;
    case "ArrowLeft":
      moveLeft();
      break;
    case "ArrowRight":
      moveRight();
      break;
    case "[":
      RotateClockwise();
      break;
    case "]":
      RotateAntiClockwise();
      break;
  }
});
