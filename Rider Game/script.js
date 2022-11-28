const Up = document.getElementById("up");
const Down = document.getElementById("down");
const Left = document.getElementById("left");
const Right = document.getElementById("right");
const clockWise = document.getElementById("clock");
const AntiClockWise = document.getElementById("anticlock");

const rider = document.getElementById("rider");

let xPos = 30;

let yPos = 400;

let rotate = 0;

const SetransForm = () => {
  rider.style.top = `${yPos}px`;
  rider.style.left = `${xPos}px`;
};

const MoveUp = () => {
  yPos > 0 && (yPos -= 10);

  SetransForm();
};

const MoveDown = () => {
  yPos < 400 && (yPos += 10);

  SetransForm();
};

const MoveRight = () => {
  xPos < 400 && (xPos += 10);

  SetransForm();
};

const MoveLeft = () => {
  xPos > 0 && (xPos -= 10);

  SetransForm();
};

const TurnRight = () => {
  rotate += 90;

  rider.style.transform = `rotate(${rotate}deg)`;
};

const TurnLeft = () => {
  rotate -= 90;

  rider.style.transform = `rotate(${rotate}deg)`;
};

Up.addEventListener("click", MoveUp);
Down.addEventListener("click", MoveDown);
Right.addEventListener("click", MoveRight);
Left.addEventListener("click", MoveLeft);
clockWise.addEventListener("click", TurnRight);
AntiClockWise.addEventListener("click", TurnLeft);

// KeyBoard event

const Actions = {
  ArrowUp: MoveUp,
  ArrowDown: MoveDown,
  ArrowLeft: MoveLeft,
  ArrowRight: MoveRight,
  "[": TurnRight,
  "]": TurnLeft,
};

document.addEventListener("keydown", (e) => {
  console.log(e.key);

  let key = e.key;

  Actions[key]();
});
